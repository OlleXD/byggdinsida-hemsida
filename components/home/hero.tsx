"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroReveal } from "@/components/section-reveal"
import { ArrowRight, Search, Paintbrush, MousePointerClick } from "lucide-react"
import "@/styles/uiverse-btn.css"

const features = [
  { icon: Search, text: "Syns på Google från dag ett – rätt struktur, snabb sajt, optimerat innehåll", accent: "from-blue-500/10 to-indigo-500/10" },
  { icon: Paintbrush, text: "Professionell design som skapar förtroende redan innan första samtalet", accent: "from-emerald-500/10 to-green-500/10" },
  { icon: MousePointerClick, text: "Varje sida byggd för att göra besökare till betalande kunder", accent: "from-violet-500/10 to-purple-500/10" },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#F0FDF4]">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/10 blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-green-400/15 to-emerald-400/10 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-violet-400/10 to-blue-400/10 blur-3xl animate-pulse-soft" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-4 pb-32 pt-8 lg:px-8 lg:pb-48 lg:pt-12">
        <div className="mx-auto max-w-5xl text-center">
          <HeroReveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="inline-block size-1.5 rounded-full bg-primary animate-pulse" />
              Webbyrån som fyller din kalender
            </p>
          </HeroReveal>
          <HeroReveal delay={80}>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Redo att ta nästa steg?
            </h1>
          </HeroReveal>
          <HeroReveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Din hemsida ska inte bara se bra ut – den ska generera affärer.
              Vi bygger webbplatser som rankar på Google, inger förtroende
              och gör det enkelt för rätt kunder att kontakta dig.
            </p>
          </HeroReveal>

          <HeroReveal delay={260}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-8 text-base btn-hover">
                <Link href="/request-a-quote">
                  Begär offert
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Link href="/case-studies" className="uiverse-btn h-12 px-8 text-base">
                Se kundcase
              </Link>
            </div>
          </HeroReveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-3">
          {features.map((item, i) => (
            <HeroReveal key={item.text} delay={420 + i * 100}>
              <div className="group flex h-full items-start gap-3 rounded-2xl border border-border/60 bg-white/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20"
                style={{ transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)" }}
              >
                <div className={`flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} transition-transform duration-300 group-hover:scale-110`}>
                  <item.icon className="size-5 text-primary" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </HeroReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
