"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/section-reveal"
import { ArrowRight, Check } from "lucide-react"

const perks = [
  "Fast pris utan dolda kostnader",
  "Tydlig tidsplan redan från dag ett",
  "Personligt svar inom 48 timmar",
]

export function ServicesCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#F0F9FF] to-[#F0FDF4] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-48 w-48 rounded-full bg-green-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Sluta tappa kunder till konkurrenter med bättre sajter
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Berätta vad du behöver – vi svarar med en skräddarsydd plan, fast pris och tydlig tidsram.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex size-5 items-center justify-center rounded-full bg-secondary/10">
                    <Check className="size-3 text-secondary" />
                  </div>
                  {perk}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild size="lg" className="h-13 px-10 text-base shadow-lg shadow-primary/20 btn-hover">
                <Link href="/request-a-quote">
                  Begär offert
                  <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
