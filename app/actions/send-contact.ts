"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, message } = data

  try {
    await resend.emails.send({
      from: "ByggDinSida <onboarding@resend.dev>",
      to: "byggdinsida@gmail.com",
      replyTo: email,
      subject: `Nytt kontaktmeddelande från ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563EB; border-bottom: 2px solid #2563EB; padding-bottom: 8px;">
            Nytt kontaktmeddelande
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 6px 12px 6px 0; font-weight: bold; color: #555; vertical-align: top;">Namn</td>
              <td style="padding: 6px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 12px 6px 0; font-weight: bold; color: #555; vertical-align: top;">E-post</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
          </table>

          <h3 style="margin-top: 24px; color: #333;">Meddelande</h3>
          <p style="margin: 4px 0; color: #555; white-space: pre-line;">${message}</p>

          <hr style="margin-top: 32px; border: none; border-top: 1px solid #e5e7eb;" />
          <p style="color: #999; font-size: 12px; margin-top: 12px;">
            Skickat via kontaktformuläret på ByggDinSida.se
          </p>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Failed to send contact email:", error)
    return { success: false, error: "Kunde inte skicka meddelandet. Försök igen." }
  }
}
