"use server";

import { z } from "zod";
import { sendContactEmail } from "@/lib/mailer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[\d\s\+\-\(\)]+$/, "Please enter a valid phone number"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
  company: z.string().optional(), // honeypot
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    company: formData.get("company"),
  };

  // Honeypot: silently succeed without sending if bot filled the hidden field
  if (raw.company) {
    return { status: "success", message: "Thank you! We will be in touch shortly." };
  }

  console.log("[contact] Received form submission:", JSON.stringify(raw));
  const result = contactSchema.safeParse(raw);
  if (!result.success) {
    return {
      status: "error",
      message: "Please correct the errors below and try again.",
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    const emailresult = await sendContactEmail(result.data);
    console.log("[contact] Email sent successfully:", JSON.stringify(emailresult));
    return {
      status: "success",
      message:
        "Thank you for reaching out! A member of our team will be in touch within one business day.",
    };
  } catch (err) {
    console.error("[contact] Failed to send email:", JSON.stringify(err));
    return {
      status: "error",
      message:
        "We were unable to send your message at this time. Please call us directly or try again later.",
    };
  }
}
