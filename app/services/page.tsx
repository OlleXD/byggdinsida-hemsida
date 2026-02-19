import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServiceBlock } from "@/components/services/service-block"
import { ServicesCta } from "@/components/services/services-cta"
import { canonical } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Tjänster – Webbdesign, webbutveckling och SEO",
  description:
    "Webbdesign som bygger förtroende, webbutveckling som laddar blixtsnabbt och SEO som gör att rätt kunder hittar dig. Allt för att växa online.",
  keywords: ["webbdesign", "webbutveckling", "SEO", "konverteringsoptimering", "webbbyrå"],
  alternates: { canonical: canonical("/services") },
  openGraph: {
    title: "Tjänster – Webbdesign, webbutveckling och SEO",
    description:
      "Webbdesign som bygger förtroende, webbutveckling som laddar blixtsnabbt och SEO som gör att rätt kunder hittar dig.",
    url: canonical("/services"),
  },
}

const services = [
  {
    icon: "paintbrush",
    slug: "webbdesign",
    title: "Webbdesign – Förtroende från första sekunden",
    body: "Dina besökare bestämmer sig inom tre sekunder. Vi designar sidor med tydlig hierarki, rent uttryck och strategiska budskap som gör att potentiella kunder stannar, läser och tar kontakt.",
    deliverables: [
      "Wireframes och konverteringsoptimerad sidstruktur",
      "Komplett designsystem (färger, typografi, komponenter)",
      "Mobilanpassade layouter som fungerar på alla skärmar",
      "Strategiskt placerade uppmaningar som driver förfrågningar",
    ],
  },
  {
    icon: "code2",
    slug: "webbutveckling",
    title: "Webbutveckling – Snabb, stabil och framtidssäker",
    body: "En snygg design spelar ingen roll om sajten laddar långsamt. Vi bygger med modern teknik som ger toppbetyg i Google PageSpeed och fungerar felfritt oavsett enhet.",
    deliverables: [
      "Prestandaoptimering med fokus på Core Web Vitals",
      "Responsiv implementation för mobil, surfplatta och desktop",
      "Tillgänglighet enligt WCAG-standard",
      "Skalbar kodstruktur som är enkel att vidareutveckla",
    ],
  },
  {
    icon: "trendingUp",
    slug: "seo-och-konvertering",
    title: "SEO och konvertering – Syns, hittas, väljs",
    body: "SEO är inte något vi lägger till efteråt – det finns i varje rad kod och varje rubrik. Vi bygger sajter som Google förstår och som gör trafik till faktiska affärsmöjligheter.",
    deliverables: [
      "SEO-optimerad sidarkitektur som rankar",
      "Sökoptimerade titlar och metabeskrivningar",
      "Innehållsstrategi som attraherar rätt besökare",
      "Smart intern länkning som stärker auktoriteten",
      "Offertflöde optimerat för maximal konvertering",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-12">
            {services.map((service, i) => (
              <ServiceBlock key={service.title} {...service} slug={service.slug} index={i} />
            ))}
          </div>
        </div>
      </section>
      <ServicesCta />
    </>
  )
}
