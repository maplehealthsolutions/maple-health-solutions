"use server";

import { z } from "zod";
import { sendApplicationEmail } from "@/lib/mailer";

const applySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[\d\s\+\-\(\)]+$/, "Please enter a valid phone number"),
  message: z
    .string()
    .min(10, "Cover note must be at least 10 characters")
    .max(3000, "Cover note must be under 3000 characters"),
  jobTitle: z.string().min(1),
  company: z.string().optional(), // honeypot
});

export type ApplyFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitApplication(
  _prevState: ApplyFormState,
  formData: FormData
): Promise<ApplyFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    jobTitle: formData.get("jobTitle"),
    company: formData.get("company"),
  };

  if (raw.company) {
    return { status: "success", message: "Application submitted successfully." };
  }

  const result = applySchema.safeParse(raw);
  if (!result.success) {
    return {
      status: "error",
      message: "Please correct the errors below and try again.",
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    await sendApplicationEmail(result.data);
    return {
      status: "success",
      message:
        "Thank you for applying! We review every application and will be in touch if there's a good fit.",
    };
  } catch (err) {
    console.error("[apply] Failed to send application email:", err);
    return {
      status: "error",
      message:
        "We were unable to submit your application at this time. Please try again later.",
    };
  }
}
