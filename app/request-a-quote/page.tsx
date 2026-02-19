import type { Metadata } from "next"
import { QuoteForm } from "@/components/quote/quote-form"
import { HeroReveal } from "@/components/section-reveal"
import { canonical } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Begär offert – Kostnadsfri offert inom 48 timmar",
  description:
    "Fyll i vårt formulär i fyra steg. Du får ett skräddarsytt förslag med fast pris och tidsplan – utan förpliktelser.",
  keywords: ["begär offert", "kostnadsfri offert", "webbprojekt", "webbplats pris"],
  alternates: { canonical: canonical("/request-a-quote") },
  openGraph: {
    title: "Begär offert – Kostnadsfri offert inom 48 timmar",
    description:
      "Fyll i vårt formulär i fyra steg. Du får ett skräddarsytt förslag med fast pris och tidsplan – utan förpliktelser.",
    url: canonical("/request-a-quote"),
  },
}

export default function RequestAQuotePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#EEF2FF] to-[#F0FDF4] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <HeroReveal>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Få en kostnadsfri offert på 48 timmar
              </h1>
            </HeroReveal>
            <HeroReveal delay={120}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Berätta om ditt projekt i fyra enkla steg. Du får ett skräddarsytt
                förslag med fast pris, tydlig tidsplan och konkreta nästa steg –
                helt utan förpliktelser.
              </p>
            </HeroReveal>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <QuoteForm />
        </div>
      </section>
    </>
  )
}
