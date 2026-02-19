"use client"

import Link from "next/link"
import { Users, Briefcase, Wrench, ArrowRight } from "lucide-react"
import { SectionReveal } from "@/components/section-reveal"

const industryIcons = {
  users: Users,
  briefcase: Briefcase,
  wrench: Wrench,
} as const

const industryStyles = {
  users: { gradient: "from-blue-500 to-indigo-600", bgGradient: "from-blue-50 to-indigo-50/40" },
  briefcase: { gradient: "from-emerald-500 to-green-600", bgGradient: "from-emerald-50 to-green-50/40" },
  wrench: { gradient: "from-violet-500 to-purple-600", bgGradient: "from-violet-50 to-purple-50/40" },
} as const

export type IndustryIconName = keyof typeof industryIcons

export function IndustryCard({
  icon: iconName,
  slug,
  title,
  body,
  index,
}: {
  icon: IndustryIconName
  slug: string
  title: string
  body: string
  index: number
}) {
  const Icon = industryIcons[iconName]
  const styles = industryStyles[iconName]

  return (
    <SectionReveal delay={index * 120}>
      <Link href={`/industries/${slug}`} className="block h-full">
        <div className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br ${styles.bgGradient} p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5`}
          style={{ transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)" }}
        >
          <div className={`pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${styles.gradient} opacity-[0.06] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.12]`} />

          <div className={`relative flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${styles.gradient} shadow-lg shadow-primary/10 transition-transform duration-300 group-hover:scale-110`}>
            <Icon className="size-7 text-white" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {body}
          </p>
          <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-200 group-hover:gap-2.5">
            Läs mer <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </SectionReveal>
  )
}
