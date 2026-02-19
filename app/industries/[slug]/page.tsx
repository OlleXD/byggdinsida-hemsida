import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { HeroReveal, SectionReveal } from "@/components/section-reveal"
import { canonical } from "@/lib/seo"
import {
  getIndustryBySlug,
  getAllIndustrySlugs,
  type IndustryIconName,
} from "@/lib/industries-data"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Users,
  Briefcase,
  Wrench,
  EyeOff,
  TrendingDown,
  ShieldAlert,
  MessageCircle,
  Target,
  Award,
  Search,
  MousePointerClick,
  Clock,
  UserMinus,
  LayoutList,
  Smartphone,
  Star,
  FileText,
  Globe,
  MapPin,
  Zap,
  Building2,
  type LucideIcon,
} from "lucide-react"

const heroIcons: Record<IndustryIconName, LucideIcon> = {
  users: Users,
  briefcase: Briefcase,
  wrench: Wrench,
}

const iconMap: Record<string, LucideIcon> = {
  eyeOff: EyeOff,
  trendingDown: TrendingDown,
  shieldAlert: ShieldAlert,
  messageCircle: MessageCircle,
  target: Target,
  award: Award,
  search: Search,
  mousePointerClick: MousePointerClick,
  clock: Clock,
  userMinus: UserMinus,
  layoutList: LayoutList,
  smartphone: Smartphone,
  star: Star,
  fileText: FileText,
  globe: Globe,
  users: Users,
  mapPin: MapPin,
  zap: Zap,
  building2: Building2,
}

const industryStyles: Record<
  IndustryIconName,
  {
    gradient: string
    lightBg: string
    darkGradient: string
    accentBg: string
    accentText: string
  }
> = {
  users: {
    gradient: "from-blue-500 to-indigo-600",
    lightBg: "from-blue-50 to-indigo-50/40",
    darkGradient: "from-blue-600 to-indigo-700",
    accentBg: "bg-blue-500/10",
    accentText: "text-blue-600",
  },
  briefcase: {
    gradient: "from-emerald-500 to-green-600",
    lightBg: "from-emerald-50 to-green-50/40",
    darkGradient: "from-emerald-600 to-green-700",
    accentBg: "bg-emerald-500/10",
    accentText: "text-emerald-600",
  },
  wrench: {
    gradient: "from-violet-500 to-purple-600",
    lightBg: "from-violet-50 to-purple-50/40",
    darkGradient: "from-violet-600 to-purple-700",
    accentBg: "bg-violet-500/10",
    accentText: "text-violet-600",
  },
}

function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Target
}

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) return {}

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: { canonical: canonical(`/industries/${slug}`) },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: canonical(`/industries/${slug}`),
    },
  }
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) notFound()

  const IndustryIcon = heroIcons[industry.iconName]
  const style = industryStyles[industry.iconName]

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
              href="/industries"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Tillbaka till branscher
            </Link>
          </HeroReveal>

          <div className="mx-auto max-w-3xl text-center">
            <HeroReveal delay={40}>
              <div className="mb-6 flex justify-center">
                <div
                  className={`flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${style.gradient} shadow-lg shadow-primary/10`}
                >
                  <IndustryIcon className="size-8 text-white" />
                </div>
              </div>
            </HeroReveal>

            <HeroReveal delay={80}>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                {industry.heroLabel}
              </p>
            </HeroReveal>

            <HeroReveal delay={120}>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                {industry.title}
              </h1>
            </HeroReveal>

            <HeroReveal delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {industry.subtitle}
              </p>
            </HeroReveal>

            <HeroReveal delay={280}>
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
            </HeroReveal>
          </div>
        </div>
      </section>

      {/* ───────── Utmaningarna ───────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionReveal className="mx-auto mb-16 max-w-2xl text-center">
            <p
              className={`mb-3 text-sm font-semibold uppercase tracking-wider ${style.accentText}`}
            >
              Utmaningarna
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Känner du igen dig?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              De här problemen är vanliga i din bransch – och de kostar dig
              kunder varje dag.
            </p>
          </SectionReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {industry.painPoints.map((point, i) => {
              const Icon = getIcon(point.icon)
              return (
                <SectionReveal key={point.title} delay={i * 100}>
                  <div className="group relative flex h-full flex-col rounded-2xl border border-border/50 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                    <div
                      className={`flex size-12 items-center justify-center rounded-xl ${style.accentBg}`}
                    >
                      <Icon className={`size-6 ${style.accentText}`} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────── Vår approach ───────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 h-56 w-56 rounded-full bg-blue-400/8 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-44 w-44 rounded-full bg-green-400/6 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <SectionReveal className="mx-auto mb-16 max-w-2xl text-center">
            <p
              className={`mb-3 text-sm font-semibold uppercase tracking-wider ${style.accentText}`}
            >
              Vår approach
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Så löser vi det
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              En beprövad metod som tar dig från osynlig till synlig – med
              konkreta resultat.
            </p>
          </SectionReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {industry.solutions.map((solution, i) => {
              const Icon = getIcon(solution.icon)
              return (
                <SectionReveal key={solution.title} delay={i * 100}>
                  <div
                    className={`group relative flex h-full gap-5 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br ${style.lightBg} p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5`}
                  >
                    <div
                      className={`pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-br ${style.gradient} opacity-[0.06] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.12]`}
                    />
                    <div className="relative">
                      <div
                        className={`flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${style.gradient} shadow-lg shadow-primary/10`}
                      >
                        <Icon className="size-6 text-white" />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {`0${i + 1}`}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {solution.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────── Vad ingår ───────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionReveal className="mx-auto mb-16 max-w-2xl text-center">
            <p
              className={`mb-3 text-sm font-semibold uppercase tracking-wider ${style.accentText}`}
            >
              Vad ingår
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Allt du behöver – inget du inte behöver
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Varje leverans är skräddarsydd för din bransch och dina mål.
            </p>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {industry.deliverables.map((item) => (
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
        className={`relative overflow-hidden bg-gradient-to-br ${style.darkGradient} py-20 lg:py-24`}
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
            {industry.stats.map((stat, i) => (
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

      {/* ───────── Testimonial ───────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div
                className={`mx-auto mb-8 flex size-14 items-center justify-center rounded-2xl ${style.accentBg}`}
              >
                <span
                  className={`text-2xl font-bold leading-none ${style.accentText}`}
                >
                  &ldquo;
                </span>
              </div>
              <blockquote className="text-xl leading-relaxed font-medium text-foreground sm:text-2xl">
                &ldquo;{industry.testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="font-semibold text-foreground">
                  {industry.testimonial.author}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {industry.testimonial.role}
                </p>
              </div>
            </div>
          </SectionReveal>
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
                Redo att synas?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Berätta om ditt företag och dina mål – vi svarar med en
                skräddarsydd plan, fast pris och tydlig tidsram.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {[
                  "Skräddarsytt för din bransch",
                  "Fast pris utan dolda kostnader",
                  "Personligt svar inom 48 timmar",
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
