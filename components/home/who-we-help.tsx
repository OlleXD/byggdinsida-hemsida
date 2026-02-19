"use client"

import Link from "next/link"
import { SectionReveal } from "@/components/section-reveal"
import { Users, Briefcase, Wrench, ArrowRight } from "lucide-react"

const audiences = [
  {
    icon: Users,
    slug: "konsulter-och-coacher",
    label: "Konsulter och coacher",
    description: "Visa varför just du är rätt val. Vi bygger en sajt som positionerar din expertis, visar resultat och gör det naturligt för besökaren att boka ett samtal.",
    gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
  },
  {
    icon: Briefcase,
    slug: "professionella-tjanster",
    label: "Juridik, ekonomi, HR och vård",
    description: "Dina kunder googlar innan de ringer. Vi skapar en trovärdig digital närvaro som besvarar deras frågor och får dem att välja dig framför konkurrenten.",
    gradient: "from-emerald-500 to-green-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Wrench,
    slug: "hantverkare-och-lokala-foretag",
    label: "Hantverkare, hemtjänst och lokala företag",
    description: "Dyk upp först i lokala sökningar och gör det friktionsfritt att begära offert. Ingen klumpig sajt – bara en snabb väg från Google till din inkorg.",
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
  },
]

export function WhoWeHelp() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.05),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Vilka vi hjälper
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Säljer du expertis? Då behöver du en sajt som gör detsamma.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Dina kunder fattar beslut innan de kontaktar dig. De jämför,
              googlar och bildar sig en uppfattning på sekunder. Vi bygger
              webbplatser som visar att du är proffset – och gör steget
              att höra av sig självklart.
            </p>
          </div>
        </SectionReveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {audiences.map((item, i) => (
            <SectionReveal key={item.label} delay={100 + i * 100}>
              <Link href={`/industries/${item.slug}`} className="block h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                  style={{ transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)" }}
                >
                  <div className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} transition-transform duration-300 group-hover:scale-110`}>
                    <item.icon className="size-6 text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Läs mer <ArrowRight className="size-3.5" />
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
