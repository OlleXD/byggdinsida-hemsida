import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AboutValues } from "@/components/about/about-values"
import { HeroReveal, SectionReveal } from "@/components/section-reveal"
import { ArrowRight } from "lucide-react"
import { canonical } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Om oss – Webbyrån som hjälper tjänsteföretag växa",
  description:
    "Vi bygger webbplatser som genererar kunder åt tjänsteföretag. Ren design, strategiska budskap och SEO som ger resultat.",
  keywords: ["om oss", "webbyrå", "tjänsteföretag", "webbdesign"],
  alternates: { canonical: canonical("/about") },
  openGraph: {
    title: "Om oss – Webbyrån som hjälper tjänsteföretag växa",
    description:
      "Vi bygger webbplatser som genererar kunder åt tjänsteföretag. Ren design, strategiska budskap och SEO som ger resultat.",
    url: canonical("/about"),
  },
}

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#F0FDF4] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/15 to-indigo-400/10 blur-3xl" />
          <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-gradient-to-br from-green-400/10 to-emerald-400/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <HeroReveal>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                Om oss
              </p>
            </HeroReveal>
            <HeroReveal delay={80}>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Vi finns till för att ditt företag ska växa
              </h1>
            </HeroReveal>
            <HeroReveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Vi är inte en byrå som gör lite av allt åt alla. Vi har en enda
                specialitet: att bygga webbplatser som genererar kunder åt
                tjänsteföretag. Ren design, strategiska budskap och SEO som
                faktiskt ger resultat. Det är hela vår grej.
              </p>
            </HeroReveal>
          </div>
        </div>
      </section>

      <AboutValues />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/3 h-48 w-48 rounded-full bg-blue-400/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nyfiken på vad vi kan göra för dig?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Berätta om ditt företag och dina mål. Vi svarar med en konkret plan – helt utan förpliktelser.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="h-13 px-10 text-base shadow-lg shadow-primary/20 btn-hover">
                <Link href="/request-a-quote">
                  Begär offert
                  <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
