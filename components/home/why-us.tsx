"use client"

import { SectionReveal } from "@/components/section-reveal"
import { MessageSquare, Search, Target, Sparkles } from "lucide-react"

const points = [
  {
    icon: MessageSquare,
    title: "Budskap som fastnar",
    description: "Besökaren förstår vad du gör, vem du hjälper och varför du är rätt val – inom tre sekunder.",
    step: "01",
  },
  {
    icon: Search,
    title: "SEO i varje pixel",
    description: "Rätt sidstruktur, snabba laddtider och innehåll som Google älskar. Du syns där dina kunder söker.",
    step: "02",
  },
  {
    icon: Target,
    title: "Byggd för att konvertera",
    description: "Strategiskt placerade uppmaningar, smarta formulär och en besöksresa som slutar med en förfrågan i din inkorg.",
    step: "03",
  },
  {
    icon: Sparkles,
    title: "Design som inger tillit",
    description: "Rent, modernt och professionellt. Ingen röra – bara en upplevelse som får besökaren att tänka: de här kan sin sak.",
    step: "04",
  },
]

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1220] to-[#1E293B] py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Varför oss
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {"Din konkurrent har redan en bra sajt – nu är det din tur"}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Vi bygger inte bara hemsidor. Vi bygger kundmaskiner. Här är de fyra principerna bakom varje projekt.
            </p>
          </div>
        </SectionReveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <SectionReveal key={point.title} delay={i * 100}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
                style={{ transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)" }}
              >
                <span className="text-4xl font-extrabold text-white">
                  {point.step}
                </span>
                <div className="mt-4 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 transition-transform duration-300 group-hover:scale-110">
                  <point.icon className="size-5 text-blue-400" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {point.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
