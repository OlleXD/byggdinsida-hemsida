"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SectionReveal } from "@/components/section-reveal"
import { Check, Send } from "lucide-react"
import { sendContactEmail } from "@/app/actions/send-contact"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (submitted) {
    return (
      <SectionReveal direction="none">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card p-14 text-center shadow-sm">
          <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-green-500/20">
            <Check className="size-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            Meddelande skickat!
          </h3>
          <p className="text-sm text-muted-foreground">
            Vi återkommer så snart som möjligt.
          </p>
        </div>
      </SectionReveal>
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const result = await sendContactEmail({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    })

    setSending(false)

    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.error ?? "Något gick fel. Försök igen.")
    }
  }

  return (
    <SectionReveal delay={100}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 rounded-2xl border border-border/50 bg-card p-8 shadow-sm md:p-10"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-name">Namn</Label>
            <Input
              id="contact-name"
              name="name"
              placeholder="Ditt fullständiga namn"
              required
              className="h-11 transition-shadow duration-200 focus:shadow-md focus:shadow-primary/5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-email">E-post</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              placeholder="du@exempel.se"
              required
              className="h-11 transition-shadow duration-200 focus:shadow-md focus:shadow-primary/5"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-message">Meddelande</Label>
          <Textarea
            id="contact-message"
            name="message"
            placeholder="Hur kan vi hjälpa dig?"
            className="min-h-32 transition-shadow duration-200 focus:shadow-md focus:shadow-primary/5"
            required
          />
        </div>

        <Button type="submit" size="lg" className="h-12 text-base shadow-lg shadow-primary/20 btn-hover" disabled={sending}>
          {!sending && <Send className="mr-2 size-4" />}
          {sending ? "Skickar..." : "Skicka meddelande"}
        </Button>

        {error && (
          <p className="text-center text-sm text-destructive">{error}</p>
        )}
      </form>
    </SectionReveal>
  )
}
