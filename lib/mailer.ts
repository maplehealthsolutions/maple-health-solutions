import Mailgun from "mailgun.js";
import FormData from "form-data";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function getClient() {
  const mg = new Mailgun(FormData);
  return mg.client({ username: "api", key: requireEnv("MAILGUN_API_KEY") });
}

export interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  const client = getClient();
  const from = requireEnv("MAILGUN_FROM");
  const to = requireEnv("CONTACT_TO");

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; color: #3D4B42;">
      <h2 style="color: #1E3A5C;">New Contact Form Submission</h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; font-weight: bold; color: #1E3A5C; width: 100px;">Name</td><td style="padding: 8px 0;">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold; color: #1E3A5C;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #3A6B45;">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold; color: #1E3A5C;">Phone</td><td style="padding: 8px 0;">${escapeHtml(data.phone)}</td></tr>
      </table>
      <hr style="border: none; border-top: 1px solid #D9DDD8; margin: 16px 0;" />
      <h3 style="color: #1E3A5C;">Message</h3>
      <p style="white-space: pre-wrap;">${escapeHtml(data.message)}</p>
    </div>
  `;

  const text = [
    "New Contact Form Submission — Maple Health Solutions",
    "",
    `Name:    ${data.name}`,
    `Email:   ${data.email}`,
    `Phone:   ${data.phone}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  const emailresult = await client.messages.create(requireEnv("MAILGUN_DOMAIN"), {
    from,
    to: [to],
    "h:Reply-To": data.email,
    subject: `New contact form submission — ${data.name}`,
    html,
    text,
  });
  console.log("[mailer] Email sent successfully:", JSON.stringify(emailresult));
}

export interface ApplicationEmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  jobTitle: string;
}

export async function sendApplicationEmail(
  data: ApplicationEmailData
): Promise<void> {
  const client = getClient();
  const from = requireEnv("MAILGUN_FROM");
  const to = requireEnv("CONTACT_TO");

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; color: #3D4B42;">
      <h2 style="color: #1E3A5C;">New Job Application</h2>
      <p style="color: #3A6B45; font-weight: bold;">Position: ${escapeHtml(data.jobTitle)}</p>
      <table style="width:100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; font-weight: bold; color: #1E3A5C; width: 100px;">Name</td><td style="padding: 8px 0;">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold; color: #1E3A5C;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #3A6B45;">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold; color: #1E3A5C;">Phone</td><td style="padding: 8px 0;">${escapeHtml(data.phone)}</td></tr>
      </table>
      <hr style="border: none; border-top: 1px solid #D9DDD8; margin: 16px 0;" />
      <h3 style="color: #1E3A5C;">Cover Note</h3>
      <p style="white-space: pre-wrap;">${escapeHtml(data.message)}</p>
    </div>
  `;

  const text = [
    `New Job Application — ${data.jobTitle}`,
    "",
    `Name:    ${data.name}`,
    `Email:   ${data.email}`,
    `Phone:   ${data.phone}`,
    "",
    "Cover Note:",
    data.message,
  ].join("\n");

  await client.messages.create(requireEnv("MAILGUN_DOMAIN"), {
    from,
    to: [to],
    "h:Reply-To": data.email,
    subject: `New application — ${data.jobTitle} — ${data.name}`,
    html,
    text,
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
