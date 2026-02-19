import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { HeroReveal, SectionReveal } from "@/components/section-reveal"
import { canonical } from "@/lib/seo"
import {
  getServiceBySlug,
  getAllServiceSlugs,
  type ServiceIconName,
} from "@/lib/services-data"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Paintbrush,
  Code,
  Search,
  Shield,
  MousePointerClick,
  Layers,
  Smartphone,
  Zap,
  Accessibility,
  Blocks,
  Target,
  FileText,
  TrendingUp,
  ChevronDown,
  type LucideIcon,
} from "lucide-react"

const heroIcons: Record<ServiceIconName, LucideIcon> = {
  paintbrush: Paintbrush,
  code: Code,
  search: Search,
}

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  mousePointerClick: MousePointerClick,
  layers: Layers,
  smartphone: Smartphone,
  zap: Zap,
  accessibility: Accessibility,
  blocks: Blocks,
  target: Target,
  fileText: FileText,
  trendingUp: TrendingUp,
  search: Search,
}

function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Target
}

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: canonical(`/services/${slug}`) },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonical(`/services/${slug}`),
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const ServiceIcon = heroIcons[service.iconName]

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#F0FDF4] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/15 to-indigo-400/10 blur-3xl" />
          <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-gradient-to-br from-green-400/10 to-emerald-400/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <HeroReveal>
            <Link
              href="/services"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Tillbaka till tjänster
            </Link>
          </HeroReveal>

          <div className="mx-auto max-w-3xl text-center">
            <HeroReveal delay={40}>
              <div className="mb-6 flex justify-center">
                <div
                  className={`flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg shadow-primary/10`}
                >
                  <ServiceIcon className="size-8 text-white" />
                </div>
              </div>
            </HeroReveal>

            <HeroReveal delay={80}>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                {service.heroLabel}
              </p>
            </HeroReveal>

            <HeroReveal delay={120}>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                {service.title}
              </h1>
            </HeroReveal>

            <HeroReveal delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {service.subtitle}
              </p>
            </HeroReveal>

            <HeroReveal delay={280}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-13 px-10 text-base shadow-lg shadow-primary/20 btn-hover"
                >
                  <Link href="/request-a-quote">
                    Begär offert
                    <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Link
                  href="/services"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Alla tjänster
                </Link>
              </div>
            </HeroReveal>
          </div>
        </div>
      </section>

      {/* ───────── Vad vi gör ───────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionReveal className="mx-auto mb-16 max-w-2xl text-center">
            <p
              className={`mb-3 text-sm font-semibold uppercase tracking-wider ${service.accentText}`}
            >
              Vad vi gör
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Så hjälper vi dig
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Varje aspekt av vår tjänst är designad för att ge dig konkreta
              resultat och mätbar affärsnytta.
            </p>
          </SectionReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {service.aspects.map((aspect, i) => {
              const Icon = getIcon(aspect.icon)
              return (
                <SectionReveal key={aspect.title} delay={i * 100}>
                  <div className="group relative flex h-full flex-col rounded-2xl border border-border/50 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                    <div
                      className={`flex size-12 items-center justify-center rounded-xl ${service.accentBg}`}
                    >
                      <Icon className={`size-6 ${service.accentText}`} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                      {aspect.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {aspect.description}
                    </p>
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────── Vår process ───────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 h-56 w-56 rounded-full bg-blue-400/8 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-44 w-44 rounded-full bg-green-400/6 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <SectionReveal className="mx-auto mb-16 max-w-2xl text-center">
            <p
              className={`mb-3 text-sm font-semibold uppercase tracking-wider ${service.accentText}`}
            >
              Vår process
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Steg för steg
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              En beprövad process som tar dig från idé till resultat – med full
              transparens i varje steg.
            </p>
          </SectionReveal>

          <div className="mx-auto max-w-3xl">
            <div className="relative">
              <div
                className={`absolute top-8 bottom-8 left-6 w-0.5 bg-gradient-to-b ${service.gradient} opacity-20 md:left-8`}
              />
              <div className="flex flex-col gap-10">
                {service.process.map((step, i) => (
                  <SectionReveal key={step.title} delay={i * 120}>
                    <div className="relative flex gap-5 md:gap-7">
                      <div
                        className={`relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-lg font-bold text-white shadow-lg shadow-primary/10 md:size-16 md:text-xl`}
                      >
                        {`0${i + 1}`}
                      </div>
                      <div className="pt-1 md:pt-3">
                        <h3 className="text-lg font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Vad ingår ───────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionReveal className="mx-auto mb-16 max-w-2xl text-center">
            <p
              className={`mb-3 text-sm font-semibold uppercase tracking-wider ${service.accentText}`}
            >
              Vad ingår
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Allt du behöver – inget du inte behöver
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Varje leverans är skräddarsydd för dina mål och din verksamhet.
            </p>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border/50 bg-white p-5 transition-all duration-200 hover:shadow-md hover:shadow-primary/5"
                  >
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                      <Check className="size-3.5 text-secondary" />
                    </div>
                    <span className="text-sm leading-relaxed text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ───────── Resultat / Stats ───────── */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${service.darkGradient} py-20 lg:py-24`}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-16 right-1/4 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <SectionReveal className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">
              Resultat som räknas
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Siffrorna talar för sig själva
            </h2>
          </SectionReveal>

          <div className="grid gap-8 sm:grid-cols-3">
            {service.stats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 120}>
                <div className="text-center">
                  <p className="text-5xl font-extrabold tracking-tight text-white lg:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-white/80">
                    {stat.label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionReveal className="mx-auto mb-16 max-w-2xl text-center">
            <p
              className={`mb-3 text-sm font-semibold uppercase tracking-wider ${service.accentText}`}
            >
              Vanliga frågor
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frågor och svar
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Här svarar vi på de vanligaste frågorna vi får om denna tjänst.
            </p>
          </SectionReveal>

          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col gap-4">
              {service.faqs.map((faq, i) => (
                <SectionReveal key={faq.question} delay={i * 80}>
                  <details className="group rounded-2xl border border-border/50 bg-white transition-all duration-200 hover:shadow-md hover:shadow-primary/5 open:shadow-md open:shadow-primary/5">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-left font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#F0F9FF] to-[#F0FDF4] py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/3 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute right-1/3 bottom-0 h-48 w-48 rounded-full bg-green-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Redo att ta nästa steg?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Berätta om ditt projekt och dina mål – vi svarar med en
                skräddarsydd plan, fast pris och tydlig tidsram.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {[
                  "Skräddarsytt för ditt företag",
                  "Fast pris utan dolda kostnader",
                  "Svar inom 48 timmar",
                ].map((perk) => (
                  <div
                    key={perk}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="flex size-5 items-center justify-center rounded-full bg-secondary/10">
                      <Check className="size-3 text-secondary" />
                    </div>
                    {perk}
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="h-13 px-10 text-base shadow-lg shadow-primary/20 btn-hover"
                >
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
    </>
  )
}
