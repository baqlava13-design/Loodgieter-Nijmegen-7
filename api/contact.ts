import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Naam, e-mail en bericht zijn verplicht." });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Loodgieter Nijmegen Website" <${process.env.SMTP_USER}>`,
    to: "contact@loodgieternijmegen.net",
    replyTo: email,
    subject: `Contactformulier: ${subject || "Nieuw bericht"}`,
    text: [
      `Naam: ${name}`,
      `E-mail: ${email}`,
      `Telefoon: ${phone || "Niet opgegeven"}`,
      `Onderwerp: ${subject || "Niet opgegeven"}`,
      ``,
      `Bericht:`,
      message,
    ].join("\n"),
    html: `
      <h2>Nieuw bericht via contactformulier</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;font-weight:bold;">Naam:</td><td style="padding:8px;">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">E-mail:</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Telefoon:</td><td style="padding:8px;">${phone || "Niet opgegeven"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Onderwerp:</td><td style="padding:8px;">${subject || "Niet opgegeven"}</td></tr>
      </table>
      <h3>Bericht:</h3>
      <p style="white-space:pre-wrap;">${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "E-mail verzenden mislukt." });
  }
}
