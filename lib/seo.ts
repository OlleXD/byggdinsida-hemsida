/**
 * Central SEO config. Sätt NEXT_PUBLIC_SITE_URL i .env till din riktiga domän (t.ex. https://example.com).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"

export const SITE_NAME = "Agency"
export const DEFAULT_DESCRIPTION =
  "Webbyrå för tjänsteföretag. Vi bygger webbplatser som genererar leads – SEO, modern design och konverteringsoptimering."

export function canonical(path: string) {
  const base = SITE_URL.replace(/\/$/, "")
  const p = path.startsWith("/") ? path : `/${path}`
  return `${base}${p}`
}

export function absoluteUrl(path: string) {
  return canonical(path)
}
