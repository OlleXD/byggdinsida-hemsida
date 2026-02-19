import Link from "next/link"
import { SectionReveal } from "@/components/section-reveal"
import { ArrowRight } from "lucide-react"

const footerLinks = [
  { label: "Hem", href: "/" },
  { label: "Tjänster", href: "/services" },
  { label: "Branscher", href: "/industries" },
  { label: "Kundcase", href: "/case-studies" },
  { label: "Om oss", href: "/about" },
  { label: "Begär offert", href: "/request-a-quote" },
  { label: "Kontakt", href: "/contact" },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <SectionReveal>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <Link href="/" className="group flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-700 transition-transform duration-200 group-hover:scale-105">
                  <span className="text-sm font-bold text-primary-foreground">
                    A
                  </span>
                </div>
                <span className="text-lg font-semibold text-foreground">
                  Agency
                </span>
              </Link>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Vi bygger webbplatser som gör tjänsteföretag synliga,
                trovärdiga och fullbokade. Din nästa kund börjar här.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Navigering
              </h3>
              <nav className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Redo att få fler kunder via din sajt?
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Berätta om ditt projekt – vi svarar med en konkret plan och fast pris inom 48h.
              </p>
              <Link
                href="/request-a-quote"
                className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary/10 hover:gap-2.5"
              >
                Begär offert
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="mt-12 border-t border-border/50 pt-8">
            <p className="text-center text-sm text-muted-foreground">
              {"© 2026 Agency. Alla rättigheter förbehållna."}
            </p>
          </div>
        </SectionReveal>
      </div>
    </footer>
  )
}
