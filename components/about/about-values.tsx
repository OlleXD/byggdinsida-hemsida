"use client"

import { SectionReveal } from "@/components/section-reveal"
import { Eye, Gem, Zap } from "lucide-react"

const values = [
  {
    icon: Eye,
    title: "Tydlighet framför allt",
    description: "Vi tror att enkelhet säljer. Varje sida vi bygger har ett enda jobb: att besökaren på tre sekunder förstår vad du erbjuder och varför de ska välja dig.",
    gradient: "from-blue-500 to-indigo-600",
    step: "01",
  },
  {
    icon: Gem,
    title: "Kvalitet i varje detalj",
    description: "Från typografi till mikro-animationer – vi har en närmast besatt omsorg om detaljer. Din sajt ska inte bara fungera, den ska imponera.",
    gradient: "from-emerald-500 to-green-600",
    step: "02",
  },
  {
    icon: Zap,
    title: "Hastighet som rankar",
    description: "En sajt som laddar på under 2 sekunder ger inte bara en bättre upplevelse – den rankar högre på Google och konverterar fler besökare till kunder.",
    gradient: "from-violet-500 to-purple-600",
    step: "03",
  },
]

export function AboutValues() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.04),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Våra principer
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Det här driver oss
            </h2>
          </div>
        </SectionReveal>

        {/* Timeline-style layout */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary/20 via-secondary/20 to-violet-500/20 md:block" />

            <div className="flex flex-col gap-12">
              {values.map((value, i) => (
                <SectionReveal key={value.title} delay={i * 120} direction="left">
                  <div className="group flex gap-6">
                    {/* Timeline node */}
                    <div className="hidden shrink-0 md:flex">
                      <div className={`relative z-10 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg shadow-primary/10 transition-transform duration-300 group-hover:scale-110`}>
                        <value.icon className="size-6 text-white" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 rounded-2xl border border-border/50 bg-card p-7 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-primary/5"
                      style={{ transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)" }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex size-10 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} md:hidden`}>
                          <value.icon className="size-5 text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            Steg {value.step}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground">
                            {value.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
