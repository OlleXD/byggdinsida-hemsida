"use client"

import Link from "next/link"
import { SectionReveal } from "@/components/section-reveal"
import { Check, Paintbrush, Code2, TrendingUp, ArrowRight } from "lucide-react"

const serviceIcons = {
  paintbrush: Paintbrush,
  code2: Code2,
  trendingUp: TrendingUp,
} as const

const serviceGradients = {
  paintbrush: { gradient: "from-blue-500 to-indigo-600", bg: "from-blue-50 to-indigo-50/50", accent: "bg-blue-500" },
  code2: { gradient: "from-emerald-500 to-green-600", bg: "from-emerald-50 to-green-50/50", accent: "bg-emerald-500" },
  trendingUp: { gradient: "from-violet-500 to-purple-600", bg: "from-violet-50 to-purple-50/50", accent: "bg-violet-500" },
} as const

export type ServiceIconName = keyof typeof serviceIcons

export function ServiceBlock({
  icon: iconName,
  slug,
  title,
  body,
  deliverables,
  index,
}: {
  icon: ServiceIconName
  slug?: string
  title: string
  body: string
  deliverables: string[]
  index: number
}) {
  const Icon = serviceIcons[iconName]
  const colors = serviceGradients[iconName]
  const isReversed = index % 2 !== 0

  const content = (
    <div className={`group relative grid gap-8 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br ${colors.bg} p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/5 md:grid-cols-2 md:p-10`}
      style={{ transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)" }}
    >
      <div className={`pointer-events-none absolute -top-16 ${isReversed ? '-left-16' : '-right-16'} h-48 w-48 rounded-full bg-gradient-to-br ${colors.gradient} opacity-[0.06] blur-3xl`} />

      <div className={isReversed ? "md:order-2" : ""}>
        <div className="flex items-center gap-3">
          <div className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${colors.gradient} shadow-lg shadow-primary/10`}>
            <Icon className="size-6 text-white" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {`0${index + 1}`}
          </span>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-foreground">{title}</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {body}
        </p>
        {slug && (
          <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Läs mer <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        )}
      </div>
      <div className={isReversed ? "md:order-1" : ""}>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Leverabler
        </h3>
        <ul className="mt-4 flex flex-col gap-3">
          {deliverables.map((d) => (
            <li key={d} className="flex items-start gap-3">
              <div className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${colors.accent}/10`}>
                <Check className="size-3 text-secondary" />
              </div>
              <span className="text-sm leading-relaxed text-foreground">
                {d}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <SectionReveal delay={index * 100}>
      {slug ? (
        <Link href={`/services/${slug}`} className="block">
          {content}
        </Link>
      ) : (
        content
      )}
    </SectionReveal>
  )
}
