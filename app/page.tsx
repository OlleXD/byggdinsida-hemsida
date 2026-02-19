import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { WhoWeHelp } from "@/components/home/who-we-help"
import { ServicesOverview } from "@/components/home/services-overview"
import { WhyUs } from "@/components/home/why-us"
import { Testimonials } from "@/components/home/testimonials"
import { FinalCta } from "@/components/home/final-cta"
import { canonical } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Webbyrå för tjänsteföretag – Webbplatser som genererar leads",
  description:
    "Vi bygger webbplatser som genererar affärer. SEO från dag ett, modern design och konverteringsoptimering för konsulter, byråer och tjänsteföretag.",
  alternates: { canonical: canonical("") },
  openGraph: {
    title: "Webbyrå för tjänsteföretag – Webbplatser som genererar leads",
    description:
      "Vi bygger webbplatser som genererar affärer. SEO från dag ett, modern design och konverteringsoptimering för konsulter, byråer och tjänsteföretag.",
    url: canonical(""),
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeHelp />
      <ServicesOverview />
      <WhyUs />
      <Testimonials />
      <FinalCta />
    </>
  )
}
