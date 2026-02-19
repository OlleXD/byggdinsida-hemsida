"use client"

import Link from "next/link"
import { SectionReveal } from "@/components/section-reveal"
import { Paintbrush, Code2, TrendingUp, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Paintbrush,
    slug: "webbdesign",
    title: "Webbdesign som säljer",
    description:
      "Inte bara snyggt – strategiskt. En design som bygger förtroende på sekunder och leder besökaren naturligt mot att ta kontakt.",
    gradient: "from-blue-600 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50/50",
  },
  {
    icon: Code2,
    slug: "webbutveckling",
    title: "Blixtsnabb utveckling",
    description:
      "Mobilanpassat, tillgängligt och optimerat för prestanda. Din sajt laddar snabbt och fungerar felfritt på alla enheter.",
    gradient: "from-emerald-600 to-green-600",
    bgGradient: "from-emerald-50 to-green-50/50",
  },
  {
    icon: TrendingUp,
    slug: "seo-och-konvertering",
    title: "SEO och konvertering",
    description:
      "Vi bygger in synlighet från grunden. Rätt struktur, rätt innehåll och smarta formulär som gör trafik till faktiska förfrågningar.",
    gradient: "from-violet-600 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50/50",
  },
]

export function ServicesOverview() {
  return (
    <section className="relative bg-gradient-to-b from-[#F8FAFC] to-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
              Tjänster
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tre tjänster. Ett mål: fler kunder till dig.
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <SectionReveal key={service.title} delay={i * 120}>
              <Link href={`/services/${service.slug}`} className="block h-full">
                <div className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br ${service.bgGradient} p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)" }}
                >
                  <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-[0.07] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.12]`} />

                  <div className={`relative flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg shadow-primary/10 transition-transform duration-300 group-hover:scale-110`}>
                    <service.icon className="size-7 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-200 group-hover:gap-2.5">
                    Läs mer <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={450}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-6 py-2.5 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary/10 hover:gap-2.5"
            >
              Utforska alla tjänster
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
