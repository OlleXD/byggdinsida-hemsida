"use client"

import { HeroReveal } from "@/components/section-reveal"
import { Paintbrush, Code2, TrendingUp } from "lucide-react"

const highlights = [
  { icon: Paintbrush, label: "Design" },
  { icon: Code2, label: "Utveckling" },
  { icon: TrendingUp, label: "SEO" },
]

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#F0FDF4] pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/15 to-indigo-400/10 blur-3xl" />
        <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-gradient-to-br from-green-400/10 to-emerald-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <HeroReveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Våra tjänster
            </p>
          </HeroReveal>
          <HeroReveal delay={80}>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Från osynlig på nätet till fullbokad i kalendern
            </h1>
          </HeroReveal>
          <HeroReveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Design som bygger förtroende, kod som laddar blixtsnabbt och SEO
              som gör att rätt kunder hittar dig. Varje projekt utgår från en fråga:
              hur får vi fler att kontakta just dig?
            </p>
          </HeroReveal>
          <HeroReveal delay={260}>
            <div className="mt-10 flex items-center justify-center gap-6">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                    <h.icon className="size-4 text-primary" />
                  </div>
                  {h.label}
                </div>
              ))}
            </div>
          </HeroReveal>
        </div>
      </div>
    </section>
  )
}
