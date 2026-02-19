"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Hem", href: "/" },
  { label: "Tjänster", href: "/services" },
  { label: "Branscher", href: "/industries" },
  { label: "Kundcase", href: "/case-studies" },
  { label: "Om oss", href: "/about" },
  { label: "Kontakt", href: "/contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-4 z-50 w-full px-4 sm:px-6">
      <div
        className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-2xl"
        style={{
          background: scrolled
            ? "var(--glass-bg-scrolled)"
            : "var(--glass-bg)",
          border: "1px solid var(--glass-border)",
          boxShadow: scrolled
            ? "var(--glass-shadow-scrolled)"
            : "var(--glass-shadow)",
          backdropFilter: "blur(24px) saturate(1.8)",
          WebkitBackdropFilter: "blur(24px) saturate(1.8)",
          transition: "background 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      >
        <div className="flex h-14 min-h-14 items-center justify-between px-4 lg:px-6">
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-700 transition-transform duration-200 group-hover:scale-105">
              <span className="text-sm font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-lg font-semibold text-foreground">Agency</span>
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild size="sm" className="rounded-xl shadow-sm shadow-primary/10 transition-all duration-200 hover:shadow-md hover:shadow-primary/20">
              <Link href="/request-a-quote">
                Begär offert
                <ArrowRight className="ml-1 size-3.5" />
              </Link>
            </Button>
          </div>

          <button
            className="flex size-10 items-center justify-center rounded-xl transition-colors duration-200 md:hidden hover:bg-black/[0.06]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          className={cn(
            "grid transition-all duration-300 md:hidden",
            mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)" }}
        >
          <div className="overflow-hidden">
            <div
              className="px-4 py-4"
              style={{ borderTop: "1px solid var(--glass-border)" }}
            >
              <nav className="flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-black/[0.04] dark:hover:bg-white/10",
                      pathname === link.href
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 px-1">
                  <Button asChild className="w-full rounded-xl" size="sm">
                    <Link
                      href="/request-a-quote"
                      onClick={() => setMobileOpen(false)}
                    >
                      Begär offert
                      <ArrowRight className="ml-1 size-3.5" />
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
