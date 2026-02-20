"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface QuoteFormData {
  name: string
  company: string
  email: string
  phone: string
  websiteUrl: string
  designPreferences: string
  desiredFeatures: string
}

export async function sendQuoteEmail(data: QuoteFormData) {
  const {
    name,
    company,
    email,
    phone,
    websiteUrl,
    designPreferences,
    desiredFeatures,
  } = data

  try {
    await resend.emails.send({
      from: "ByggDinSida <onboarding@resend.dev>",
      to: "byggdinsida@gmail.com",
      replyTo: email,
      subject: `Ny offertförfrågan från ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563EB; border-bottom: 2px solid #2563EB; padding-bottom: 8px;">
            Ny offertförfrågan
          </h2>

          <h3 style="margin-top: 24px; color: #333;">Personuppgifter</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 12px 6px 0; font-weight: bold; color: #555; vertical-align: top;">Namn</td>
              <td style="padding: 6px 0;">${name}</td>
            </tr>
            ${company ? `<tr><td style="padding: 6px 12px 6px 0; font-weight: bold; color: #555; vertical-align: top;">Företag</td><td style="padding: 6px 0;">${company}</td></tr>` : ""}
            <tr>
              <td style="padding: 6px 12px 6px 0; font-weight: bold; color: #555; vertical-align: top;">E-post</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${phone ? `<tr><td style="padding: 6px 12px 6px 0; font-weight: bold; color: #555; vertical-align: top;">Telefon</td><td style="padding: 6px 0;">${phone}</td></tr>` : ""}
          </table>

          <h3 style="margin-top: 24px; color: #333;">Nuvarande hemsida</h3>
          <p style="margin: 4px 0; color: #555;">
            ${websiteUrl ? `<a href="${websiteUrl}">${websiteUrl}</a>` : "Ingen angiven"}
          </p>

          <h3 style="margin-top: 24px; color: #333;">Designpreferenser</h3>
          <p style="margin: 4px 0; color: #555; white-space: pre-line;">
            ${designPreferences || "Inga angivna"}
          </p>

          <h3 style="margin-top: 24px; color: #333;">Önskade funktioner</h3>
          <p style="margin: 4px 0; color: #555; white-space: pre-line;">
            ${desiredFeatures || "Inga angivna"}
          </p>

          <hr style="margin-top: 32px; border: none; border-top: 1px solid #e5e7eb;" />
          <p style="color: #999; font-size: 12px; margin-top: 12px;">
            Skickat via offertformuläret på ByggDinSida.se
          </p>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, error: "Kunde inte skicka mailet. Försök igen." }
  }
}
