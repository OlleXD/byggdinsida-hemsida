"use client"

import { SectionReveal } from "@/components/section-reveal"
import { Star } from "lucide-react"

const testimonials = [
  {
    text: "Inom tre veckor efter lanseringen hade vi 40% fler offertförfrågningar via sajten. Kunder säger att de valde oss för att hemsidan kändes professionell och trovärdig. Bästa investeringen vi gjort i år.",
    author: "Marcus Lindgren",
    role: "VD, Lindgren Consulting",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    text: "Vi gick från noll synlighet på Google till topp 3 på våra viktigaste sökord. Kontaktförfrågningarna har tredubblats, och det bästa? Kvaliteten på leads är mycket högre än tidigare.",
    author: "Sara Ekström",
    role: "Delägare, Ekström Juridik",
    accent: "from-emerald-500 to-green-500",
  },
]

export function Testimonials() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(34,197,94,0.04),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Kundröster
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Resultaten talar för sig själva
            </h2>
          </div>
        </SectionReveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <SectionReveal key={i} delay={i * 150}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                style={{ transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)" }}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${t.accent} opacity-60`} />

                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-base leading-relaxed text-foreground">
                  {`"${t.text}"`}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className={`flex size-10 items-center justify-center rounded-full bg-gradient-to-br ${t.accent}`}>
                    <span className="text-sm font-bold text-white">{t.author[0]}</span>
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">
                      {t.author}
                    </span>
                    <span className="text-xs text-muted-foreground">{t.role}</span>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
