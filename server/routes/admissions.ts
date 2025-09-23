import type { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  dob: z.string(),
  gender: z.enum(["Male", "Female", "Other"]),
  address: z.string().min(5),
  city: z.string().min(2),
  state: z.string().min(2),
  zip: z.string().min(3),
  country: z.string().min(2),
  level: z.enum(["UG", "PG"]),
  program: z.string().min(2),
  previousEducation: z.string().min(2),
  yearOfPassing: z.string().min(2),
  guardianName: z.string().min(2),
  guardianPhone: z.string().min(7),
  statement: z.string().min(10),
});

export const handleAdmissionsApply: RequestHandler = async (req, res) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid form data", issues: parsed.error.flatten() });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    ADMISSIONS_INBOX,
    SMTP_SECURE,
  } = process.env as Record<string, string | undefined>;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !ADMISSIONS_INBOX) {
    return res.status(500).json({
      error:
        "Email is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and ADMISSIONS_INBOX environment variables.",
    });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true" || Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const data = parsed.data;
  const subject = `New Admission Application - ${data.fullName} (${data.level})`;
  const text = `New admission application received.\n\n` +
    `Name: ${data.fullName}\n` +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone}\n` +
    `DOB: ${data.dob}\n` +
    `Gender: ${data.gender}\n` +
    `Address: ${data.address}, ${data.city}, ${data.state} - ${data.zip}, ${data.country}\n` +
    `Level: ${data.level}\n` +
    `Program: ${data.program}\n` +
    `Previous Education: ${data.previousEducation}\n` +
    `Year of Passing: ${data.yearOfPassing}\n` +
    `Guardian: ${data.guardianName} (${data.guardianPhone})\n` +
    `\nStatement of Purpose:\n${data.statement}\n`;

  try {
    await transporter.sendMail({
      from: `Admissions Bot <${SMTP_USER}>`,
      to: ADMISSIONS_INBOX,
      subject,
      text,
    });
    return res.json({ ok: true });
  } catch (err) {
    console.error("Error sending admission email", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
};
