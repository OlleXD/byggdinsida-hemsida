import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IndustryCard } from "@/components/industries/industry-card"
import { HeroReveal, SectionReveal } from "@/components/section-reveal"
import { ArrowRight, Check } from "lucide-react"
import { canonical } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Branscher – Webbplatser för konsulter, byråer och tjänsteföretag",
  description:
    "Webbplatser anpassade för din bransch: konsulter, coacher, juridik, ekonomi, hantverkare. Mer synlighet på nätet och fler kunder.",
  keywords: ["webbplats konsult", "hemsida byrå", "webbplats hantverkare", "hemsida tjänsteföretag"],
  alternates: { canonical: canonical("/industries") },
  openGraph: {
    title: "Branscher – Webbplatser för konsulter, byråer och tjänsteföretag",
    description:
      "Webbplatser anpassade för din bransch: konsulter, coacher, juridik, ekonomi, hantverkare. Mer synlighet och fler kunder.",
    url: canonical("/industries"),
  },
}

const industries = [
  {
    icon: "users",
    slug: "konsulter-och-coacher",
    title: "Konsulter och coacher",
    body: "Dina potentiella kunder googlar dig innan de bokar. Vi bygger en sajt som visar din expertis, lyfter fram resultat och gör det självklart att ta nästa steg – oavsett om det är ett samtal eller en offert.",
  },
  {
    icon: "briefcase",
    slug: "professionella-tjanster",
    title: "Juridik, ekonomi och professionella tjänster",
    body: "I din bransch är förtroende allt. Vi skapar en digital närvaro som andas kompetens, med strukturerade tjänstesidor som besvarar kundens frågor redan innan de lyfter luren.",
  },
  {
    icon: "wrench",
    slug: "hantverkare-och-lokala-foretag",
    title: "Hantverkare och lokala tjänsteföretag",
    body: "Syns du inte lokalt på Google tappar du jobb varje dag. Vi bygger snabba, mobilanpassade sajter med lokal SEO som gör att kunder i ditt område hittar dig först.",
  },
] as const

export default function IndustriesPage() {
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
                Branscher
              </p>
            </HeroReveal>
            <HeroReveal delay={80}>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Vi kan din bransch – och vet vad som konverterar
              </h1>
            </HeroReveal>
            <HeroReveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Du behöver inte en generisk hemsida. Du behöver en sajt som
                förstår dina kunders frågor, visar att du är expert och gör det
                enkelt att ta kontakt. Det är precis vad vi levererar.
              </p>
            </HeroReveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {industries.map((industry, i) => (
              <IndustryCard key={industry.title} {...industry} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/3 h-48 w-48 rounded-full bg-blue-400/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Din bransch förtjänar en sajt som levererar resultat
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Berätta om ditt företag så tar vi fram en plan anpassad efter just din marknad och dina mål.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {["Skräddarsytt för din marknad", "SEO som ger synlighet direkt", "Byggt för att generera förfrågningar"].map((perk) => (
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
                  {"Begär offert"}
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
