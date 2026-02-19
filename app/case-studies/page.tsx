import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CaseStudyCard } from "@/components/case-studies/case-study-card"
import { HeroReveal, SectionReveal } from "@/components/section-reveal"
import { ArrowRight } from "lucide-react"
import { canonical } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Kundcase – Verkliga resultat från riktiga företag",
  description:
    "Kundcase: upp till 210% fler förfrågningar med rätt design, tydliga budskap och SEO. Företagsrådgivning, juridik, hantverk, finans.",
  keywords: ["kundcase", "webbprojekt", "SEO-resultat", "konverteringsoptimering"],
  alternates: { canonical: canonical("/case-studies") },
  openGraph: {
    title: "Kundcase – Verkliga resultat från riktiga företag",
    description:
      "Se hur våra kunder fått upp till 210% fler förfrågningar med rätt design, tydliga budskap och smart SEO-strategi.",
    url: canonical("/case-studies"),
  },
}

const caseStudies = [
  {
    title: "Greenfield Consulting \u2014 Företagsrådgivning",
    problem:
      "Gammal Wordpress-sajt som laddade i 6+ sekunder, otydligt erbjudande och bara 2–3 offertförfrågningar per månad trots bra rykte offline.",
    solution:
      "Ny sajt med tydlig positionering, snabb laddtid (under 1,5s), SEO-optimerade tjänstesidor och ett offertflöde som tar 30 sekunder att fylla i.",
    result:
      "+180% fler offertförfrågningar på 90 dagar. Genomsnittlig tid på sajten ökade från 45 sekunder till 2 minuter och 40 sekunder.",
  },
  {
    title: "Hartley Legal \u2014 Juridiska tjänster",
    problem:
      "Sajten hade 68% avvisningsfrekvens och kommunicerade inte byråns 15 års erfarenhet. Potentiella klienter hörde av sig till konkurrenter istället.",
    solution:
      "Modern, förtroendeskapande design med strukturerade specialistområden, klientomdömen och ett strömlinjeformat kontaktformulär.",
    result:
      "Avvisningsfrekvensen sjönk till 34%. Kontaktförfrågningar ökade med 210% och byrån fick sina två största klienter via sajten.",
  },
  {
    title: "Summit Home Services \u2014 Bostadsentreprenad",
    problem:
      "Noll synlighet online – alla jobb kom via mun-till-mun. Konkurrenter dominerade lokala sökresultat och tog alla digitala leads.",
    solution:
      "Mobilanpassad sajt med lokal SEO-strategi, tydliga tjänstesidor för varje område och ett offertformulär som fungerar smidigt på mobilen.",
    result:
      "Topp 3 på Google för 12 lokala sökord inom 60 dagar. Från 0 till 25+ offertförfrågningar per månad via sajten.",
  },
  {
    title: "Apex Financial \u2014 Finansiell rådgivning",
    problem:
      "Sajten såg ut som den byggdes 2015, saknade helt SEO-grund och förmedlade inte den premiumkänsla som deras tjänster förtjänade.",
    solution:
      "Premium-design med rådgivarprofiler, detaljerade tjänsteöversikter, FAQ-sektioner och SEO-optimerade innehållssidor.",
    result:
      "73% ökning av organisk trafik på 4 månader. Kvaliteten på inkommande leads förbättrades markant – snittdeal ökade med 40%.",
  },
]

export default function CaseStudiesPage() {
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
                Kundcase
              </p>
            </HeroReveal>
            <HeroReveal delay={80}>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Verkliga resultat, inte tomma löften
              </h1>
            </HeroReveal>
            <HeroReveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Siffror ljuger inte. Här visar vi hur rätt design, tydliga budskap
                och smart SEO-struktur har gett våra kunder fler och bättre leads.
              </p>
            </HeroReveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.title} {...cs} index={i} />
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
              Nästa framgångshistoria kan vara din
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Berätta om ditt företag så visar vi exakt hur vi kan hjälpa dig nå samma typ av resultat.
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
