"use client"

import { SectionReveal } from "@/components/section-reveal"
import { AlertCircle, Lightbulb, TrendingUp } from "lucide-react"

const accentColors = [
  { gradient: "from-blue-500 to-indigo-600", barColor: "bg-gradient-to-r from-blue-500 to-indigo-500" },
  { gradient: "from-emerald-500 to-green-600", barColor: "bg-gradient-to-r from-emerald-500 to-green-500" },
  { gradient: "from-violet-500 to-purple-600", barColor: "bg-gradient-to-r from-violet-500 to-purple-500" },
  { gradient: "from-amber-500 to-orange-600", barColor: "bg-gradient-to-r from-amber-500 to-orange-500" },
]

export function CaseStudyCard({
  title,
  problem,
  solution,
  result,
  index,
}: {
  title: string
  problem: string
  solution: string
  result: string
  index: number
}) {
  const accent = accentColors[index % accentColors.length]

  return (
    <SectionReveal delay={index * 120}>
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5"
        style={{ transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)" }}
      >
        {/* Top accent gradient bar */}
        <div className={`h-1.5 w-full ${accent.barColor}`} />

        <div className="flex flex-1 flex-col p-8">
          <h3 className="text-lg font-bold text-foreground">{title}</h3>

          <div className="mt-6 flex flex-col gap-5">
            <div className="flex gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-red-50">
                <AlertCircle className="size-4 text-destructive" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-destructive">
                  Problem
                </span>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {problem}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                <Lightbulb className="size-4 text-primary" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Lösning
                </span>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {solution}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-green-50">
                <TrendingUp className="size-4 text-secondary" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  Resultat
                </span>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {result}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
