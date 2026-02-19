"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SectionReveal } from "@/components/section-reveal"
import { Check, Send } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

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

  return (
    <SectionReveal delay={100}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
        }}
        className="flex flex-col gap-6 rounded-2xl border border-border/50 bg-card p-8 shadow-sm md:p-10"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-name">Namn</Label>
            <Input
              id="contact-name"
              placeholder="Ditt fullständiga namn"
              required
              className="h-11 transition-shadow duration-200 focus:shadow-md focus:shadow-primary/5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-email">E-post</Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="you@example.com"
              required
              className="h-11 transition-shadow duration-200 focus:shadow-md focus:shadow-primary/5"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-message">Meddelande</Label>
          <Textarea
            id="contact-message"
            placeholder="Hur kan vi hjälpa dig?"
            className="min-h-32 transition-shadow duration-200 focus:shadow-md focus:shadow-primary/5"
            required
          />
        </div>

        <Button type="submit" size="lg" className="h-12 text-base shadow-lg shadow-primary/20 btn-hover">
          <Send className="mr-2 size-4" />
          Skicka meddelande
        </Button>
      </form>
    </SectionReveal>
  )
}
