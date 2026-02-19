import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact/contact-form"
import { HeroReveal, SectionReveal } from "@/components/section-reveal"
import { ArrowRight, Mail, Clock, MessageCircle } from "lucide-react"
import { canonical } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Kontakt – Låt oss prata om din tillväxt",
  description:
    "Frågor eller vill du diskutera ditt projekt? Vi svarar inom 24 timmar. Begär kostnadsfri offert för ett detaljerat förslag.",
  keywords: ["kontakt", "webbyrå", "offert", "webbprojekt"],
  alternates: { canonical: canonical("/contact") },
  openGraph: {
    title: "Kontakt – Låt oss prata om din tillväxt",
    description:
      "Frågor eller vill du diskutera ditt projekt? Vi svarar inom 24 timmar. Begär kostnadsfri offert.",
    url: canonical("/contact"),
  },
}

const contactInfo = [
  {
    icon: Mail,
    title: "Skriv till oss",
    description: "hello@yourdomain.com",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Clock,
    title: "Snabbt svar",
    description: "Alltid inom 24 timmar",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: MessageCircle,
    title: "Vill ha offert?",
    description: "Detaljerat förslag inom 48h",
    gradient: "from-violet-500 to-purple-600",
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#F0FDF4] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/15 to-indigo-400/10 blur-3xl" />
          <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-gradient-to-br from-green-400/10 to-emerald-400/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <HeroReveal>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                Kontakt
              </p>
            </HeroReveal>
            <HeroReveal delay={80}>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Låt oss prata om din tillväxt
              </h1>
            </HeroReveal>
            <HeroReveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Har du en fråga, en idé eller ett projekt du vill diskutera?
                Skriv till oss – vi svarar personligt inom 24 timmar. Vill du ha
                en detaljerad offert? Använd vårt offertformulär.
              </p>
            </HeroReveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <SectionReveal>
            <div className="mb-10 grid gap-4 sm:grid-cols-3">
              {contactInfo.map((item) => (
                <div key={item.title} className="group flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)" }}
                >
                  <div className={`flex size-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} transition-transform duration-300 group-hover:scale-110`}>
                    <item.icon className="size-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>

          <ContactForm />

          <SectionReveal delay={200}>
            <div className="mt-10 text-center">
              <p className="text-sm text-muted-foreground">
                Vill du ha ett detaljerat förslag med fast pris?
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-3 rounded-xl"
              >
                <Link href="/request-a-quote">
                  Begär offert
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
