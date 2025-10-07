import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { user_name, user_email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${user_name}" <${user_email}>`,
      to: process.env.EMAIL_USER,
      subject: subject || "New Contact Message",
      text: message,
      html: `<p><b>Name:</b> ${user_name}</p>
             <p><b>Email:</b> ${user_email}</p>
             <p><b>Subject:</b> ${subject}</p>
             <p><b>Message:</b><br/>${message}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Failed to send email." }, { status: 500 });
  }
}