"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactFormState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? "Sending…" : "Send Message"}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border-2 border-green bg-sage p-8 flex flex-col items-center text-center gap-4">
        <CheckCircle2 className="text-green" size={40} aria-hidden="true" />
        <h3 className="text-lg font-semibold text-navy">Message Sent!</h3>
        <p className="text-text-body text-sm leading-relaxed">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden"
      />

      {state.status === "error" && !state.errors && (
        <p className="text-sm text-terra rounded-md bg-blush px-4 py-3">
          {state.message}
        </p>
      )}

      {/* Name */}
      <div className="space-y-1.5">
        <Label htmlFor="name" error={!!state.errors?.name}>
          Full Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          required
          aria-invalid={!!state.errors?.name}
          aria-describedby={state.errors?.name ? "name-error" : undefined}
        />
        {state.errors?.name && (
          <p id="name-error" className="text-xs text-terra mt-1">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <Label htmlFor="email" error={!!state.errors?.email}>
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="jane@example.com"
          required
          aria-invalid={!!state.errors?.email}
          aria-describedby={state.errors?.email ? "email-error" : undefined}
        />
        {state.errors?.email && (
          <p id="email-error" className="text-xs text-terra mt-1">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <Label htmlFor="phone" error={!!state.errors?.phone}>
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (613) 555-0100"
          required
          aria-invalid={!!state.errors?.phone}
          aria-describedby={state.errors?.phone ? "phone-error" : undefined}
        />
        {state.errors?.phone && (
          <p id="phone-error" className="text-xs text-terra mt-1">
            {state.errors.phone[0]}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label htmlFor="message" error={!!state.errors?.message}>
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us how we can help…"
          required
          aria-invalid={!!state.errors?.message}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
        />
        {state.errors?.message && (
          <p id="message-error" className="text-xs text-terra mt-1">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <SubmitButton />

      <p className="text-xs text-text-muted text-center">
        We typically respond within one business day.
      </p>
    </form>
  );
}
