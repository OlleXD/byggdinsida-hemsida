export type ServiceIconName = "paintbrush" | "code" | "search"

export interface ServiceAspect {
  icon: string
  title: string
  description: string
}

export interface ServiceProcessStep {
  title: string
  description: string
}

export interface ServiceStat {
  value: string
  label: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceData {
  slug: string
  iconName: ServiceIconName
  title: string
  heroLabel: string
  subtitle: string
  gradient: string
  lightBg: string
  darkGradient: string
  accentBg: string
  accentText: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  aspects: ServiceAspect[]
  process: ServiceProcessStep[]
  deliverables: string[]
  stats: ServiceStat[]
  faqs: ServiceFAQ[]
}

export const services: ServiceData[] = [
  {
    slug: "webbdesign",
    iconName: "paintbrush",
    title: "Webbdesign som säljer",
    heroLabel: "Webbdesign",
    subtitle:
      "Dina besökare bestämmer sig inom tre sekunder. Vi designar konverteringsfokuserade webbplatser med tydlig visuell hierarki, strategiska budskap och en design som bygger förtroende – så att fler besökare blir kunder.",
    gradient: "from-blue-500 to-indigo-600",
    lightBg: "from-blue-50 to-indigo-50/40",
    darkGradient: "from-blue-600 to-indigo-700",
    accentBg: "bg-blue-500/10",
    accentText: "text-blue-600",
    metaTitle: "Webbdesign som säljer – Konverteringsfokuserad design",
    metaDescription:
      "Vi designar webbplatser som bygger förtroende på 3 sekunder. Konverteringsfokuserade layouter, tydlig visuell hierarki och design som förvandlar besökare till kunder.",
    keywords: [
      "webbdesign",
      "konverteringsoptimerad design",
      "UX design",
      "responsiv webbdesign",
      "webbdesign byrå",
    ],
    aspects: [
      {
        icon: "shield",
        title: "Förtroendebyggande design",
        description:
          "Vi designar med psykologin bakom köpbeslut. Varje element – från färgval till typografi – är valt för att bygga förtroende och ge besökaren trygghet att ta kontakt.",
      },
      {
        icon: "mousePointerClick",
        title: "Konverteringsfokuserade layouter",
        description:
          "Strategiskt placerade call-to-actions, tydliga värdeerbjudanden och kontaktformulär som gör det naturligt och enkelt för besökaren att ta nästa steg.",
      },
      {
        icon: "layers",
        title: "Tydlig visuell hierarki",
        description:
          "Vi strukturerar innehållet så att besökaren omedelbart förstår vad du erbjuder, för vem och varför de ska välja dig. Inga gissningar, bara klarhet.",
      },
      {
        icon: "smartphone",
        title: "Responsiv på alla enheter",
        description:
          "Över 60 % surfar från mobilen. Vi designar mobile-first och säkerställer en perfekt upplevelse oavsett om besökaren sitter vid datorn eller scrollar på telefonen.",
      },
    ],
    process: [
      {
        title: "Analys",
        description:
          "Vi kartlägger din målgrupp, konkurrenter och affärsmål. Resultatet blir en tydlig designbrief som styr hela projektet i rätt riktning.",
      },
      {
        title: "Wireframes",
        description:
          "Vi skapar skissartade layouter som visar sidans struktur, innehållsflöde och konverteringspunkter – innan en enda pixel designas.",
      },
      {
        title: "Design",
        description:
          "Wireframes förvandlas till pixelperfekta mockups med ditt varumärkes färger, typografi och bildspråk. Du ser exakt hur sajten kommer att se ut.",
      },
      {
        title: "Revidering",
        description:
          "Vi finslipas tillsammans. Du ger feedback, vi justerar – tills varje detalj sitter och designen känns helt rätt för ditt företag.",
      },
    ],
    deliverables: [
      "Komplett designsystem med färger, typografi och komponenter",
      "Wireframes och konverteringsoptimerad sidstruktur",
      "Pixelperfekta mockups för alla sidor",
      "Mobilanpassade layouter för alla skärmstorlekar",
      "Strategiskt placerade CTA:er och kontaktpunkter",
      "Bildoptimering och grafiska element",
      "Designguide för framtida vidareutveckling",
      "Två revideringsrundor ingår",
    ],
    stats: [
      { value: "3 sek", label: "att skapa förtroende hos besökaren" },
      { value: "+85%", label: "längre besökstid med rätt design" },
      { value: "2x", label: "fler kontaktförfrågningar" },
    ],
    faqs: [
      {
        question: "Hur lång tid tar en designprocess?",
        answer:
          "En typisk designprocess tar 2–4 veckor beroende på projektets omfattning. Det inkluderar analys, wireframes, design och revideringar. Vi sätter alltid en tydlig tidsplan redan vid projektstart.",
      },
      {
        question: "Vad ingår i webbdesign-tjänsten?",
        answer:
          "Allt från initial analys och wireframes till pixelperfekta mockups och ett komplett designsystem. Vi levererar mobilanpassade layouter, strategiska CTA:er och en designguide så att du enkelt kan vidareutveckla i framtiden.",
      },
      {
        question: "Gör ni redesign av befintliga sajter?",
        answer:
          "Absolut. Vi analyserar din nuvarande sajt, identifierar förbättringsområden och designar om med fokus på konvertering och modernt uttryck – utan att förlora det som redan fungerar.",
      },
      {
        question: "Vad händer om jag inte gillar designen?",
        answer:
          "Två revideringsrundor ingår alltid. Vi börjar dessutom med wireframes och moodboards så att vi är överens om riktningen innan vi går vidare till detaljdesign. Risken för stora förändringar i slutet minimeras rejält.",
      },
    ],
  },
  {
    slug: "webbutveckling",
    iconName: "code",
    title: "Blixtsnabb utveckling",
    heroLabel: "Webbutveckling",
    subtitle:
      "En snygg design spelar ingen roll om sajten laddar långsamt. Vi bygger med modern teknik som ger toppbetyg i Google PageSpeed, fungerar felfritt på alla enheter och är redo att växa med ditt företag.",
    gradient: "from-emerald-500 to-green-600",
    lightBg: "from-emerald-50 to-green-50/40",
    darkGradient: "from-emerald-600 to-green-700",
    accentBg: "bg-emerald-500/10",
    accentText: "text-emerald-600",
    metaTitle: "Webbutveckling – Blixtsnabb, skalbar och framtidssäker",
    metaDescription:
      "Modern webbutveckling med fokus på prestanda, tillgänglighet och framtidssäker teknik. Under 1.5s laddtid, 100/100 PageSpeed och 99.9% drifttid.",
    keywords: [
      "webbutveckling",
      "Next.js utveckling",
      "snabb hemsida",
      "webbutvecklare",
      "modern webbutveckling",
    ],
    aspects: [
      {
        icon: "zap",
        title: "Blixtsnabb prestanda",
        description:
          "Varje millisekund räknas. Vi optimerar bilder, kod och serverlösningar för att uppnå laddtider under 1,5 sekunder – vilket ger bättre SEO och nöjdare besökare.",
      },
      {
        icon: "smartphone",
        title: "Mobile-first utveckling",
        description:
          "Vi bygger från mobilen och uppåt. Sajten fungerar perfekt på alla enheter med touch-optimerade interaktioner och responsiva layouter som anpassar sig automatiskt.",
      },
      {
        icon: "accessibility",
        title: "Tillgänglighet som standard",
        description:
          "Vi följer WCAG-riktlinjer för att göra sajten tillgänglig för alla. Det handlar om att nå fler kunder och samtidigt uppfylla lagkrav.",
      },
      {
        icon: "blocks",
        title: "Framtidssäker teknik",
        description:
          "Vi använder beprövad, modern teknik som Next.js och React. Det ger en skalbar kodbas som är enkel att underhålla och vidareutveckla allt eftersom ditt företag växer.",
      },
    ],
    process: [
      {
        title: "Teknisk planering",
        description:
          "Vi väljer teknikstack, definierar arkitektur och sätter upp utvecklingsmiljö. Varje tekniskt beslut grundas i dina affärsmål och framtida behov.",
      },
      {
        title: "Utveckling",
        description:
          "Agil utveckling i korta sprintar med löpande demo-visningar. Du ser framsteg varje vecka och kan ge feedback löpande – inga överraskningar vid leverans.",
      },
      {
        title: "Testning",
        description:
          "Omfattande testning på alla enheter och webbläsare. Vi testar prestanda, tillgänglighet och funktionalitet för att säkerställa en felfri upplevelse.",
      },
      {
        title: "Lansering",
        description:
          "Kontrollerad lansering med prestandaövervakning och snabb felsökning. Vi finns kvar efter launch för att säkerställa att allt rullar smidigt.",
      },
    ],
    deliverables: [
      "Prestandaoptimerad sajt med under 1,5s laddtid",
      "Responsiv implementation för mobil, surfplatta och desktop",
      "Tillgänglig kod enligt WCAG-standard",
      "Skalbar och underhållsvänlig kodstruktur",
      "CMS-integration för enkel innehållshantering",
      "SSL-certifikat och säkerhetskonfiguration",
      "Automatiserade backups och driftövervakning",
      "Teknisk dokumentation och överlämning",
    ],
    stats: [
      { value: "<1.5s", label: "laddtid på alla sidor" },
      { value: "100/100", label: "Google PageSpeed-poäng" },
      { value: "99.9%", label: "garanterad drifttid" },
    ],
    faqs: [
      {
        question: "Vilken teknik bygger ni med?",
        answer:
          "Vi bygger primärt med Next.js och React – modern, beprövad teknik som ger enastående prestanda och skalbarhet. Beroende på dina behov kan vi integrera headless CMS, databaser och tredjeparts-API:er.",
      },
      {
        question: "Hur snabb blir sajten egentligen?",
        answer:
          "Vi siktar alltid på under 1,5 sekunders laddtid och 90+ i Google PageSpeed. Det uppnår vi genom bildoptimering, smart koddelning, caching och edge-leverans av innehåll.",
      },
      {
        question: "Kan jag uppdatera innehållet själv?",
        answer:
          "Absolut. Vi integrerar ett användarvänligt CMS där du enkelt kan ändra texter, bilder och lägga till nya sidor – utan att behöva kunna koda.",
      },
      {
        question: "Är sajten mobilanpassad?",
        answer:
          "Ja, vi bygger mobile-first. Det innebär att sajten designas och utvecklas med mobilen som utgångspunkt och sedan skalas upp för surfplatta och desktop. Resultatet blir en perfekt upplevelse på alla enheter.",
      },
    ],
  },
  {
    slug: "seo-och-konvertering",
    iconName: "search",
    title: "SEO och konvertering",
    heroLabel: "SEO & Konvertering",
    subtitle:
      "SEO är inte något vi lägger till efteråt – det finns i varje rad kod och varje rubrik. Vi bygger synlighet på Google och optimerar varje steg i besökarens resa så att trafik förvandlas till faktiska affärsmöjligheter.",
    gradient: "from-violet-500 to-purple-600",
    lightBg: "from-violet-50 to-purple-50/40",
    darkGradient: "from-violet-600 to-purple-700",
    accentBg: "bg-violet-500/10",
    accentText: "text-violet-600",
    metaTitle: "SEO och konvertering – Syns på Google, öka dina förfrågningar",
    metaDescription:
      "SEO-strategi och konverteringsoptimering som ger konkreta resultat. Topp 3 inom 90 dagar, +180% organisk trafik och 3x fler förfrågningar.",
    keywords: [
      "SEO",
      "sökmotoroptimering",
      "konverteringsoptimering",
      "SEO byrå",
      "Google ranking",
    ],
    aspects: [
      {
        icon: "search",
        title: "Sökmotorsynlighet",
        description:
          "Vi ser till att din sajt rankar för de sökord som dina potentiella kunder faktiskt använder. Teknisk SEO, on-page-optimering och innehållsstrategi – allt jobbar tillsammans.",
      },
      {
        icon: "target",
        title: "Nyckelordsstrategi",
        description:
          "Vi kartlägger söklandskapet i din bransch och identifierar de sökord med högst kommersiellt värde. Varje sida optimeras för att ranka på rätt termer.",
      },
      {
        icon: "fileText",
        title: "On-page SEO",
        description:
          "Optimerade rubriker, metabeskrivningar, intern länkning och strukturerad data. Varje teknisk detalj finjusteras för maximal synlighet i sökresultaten.",
      },
      {
        icon: "trendingUp",
        title: "Konverteringsoptimering",
        description:
          "Trafik utan konverteringar är meningslös. Vi analyserar besökarflödet och optimerar landningssidor, formulär och CTA:er för att maximera antalet förfrågningar.",
      },
    ],
    process: [
      {
        title: "SEO-audit",
        description:
          "Vi gör en djupgående analys av din nuvarande sajt, konkurrenter och söklandskap. Resultatet är en tydlig bild av var du står och var möjligheterna finns.",
      },
      {
        title: "Strategi",
        description:
          "Baserat på auditen bygger vi en skräddarsydd SEO-strategi med prioriterade sökord, innehållsplan och tekniska åtgärder – allt med tydliga mål och tidsramar.",
      },
      {
        title: "Implementation",
        description:
          "Vi genomför alla tekniska och innehållsmässiga optimeringar. On-page SEO, innehållsproduktion, intern länkning och konverteringsoptimering – systematiskt och datadrivet.",
      },
      {
        title: "Uppföljning",
        description:
          "Löpande rapportering med rankings, trafik och konverteringsdata. Vi justerar strategin kontinuerligt baserat på resultat och nya möjligheter.",
      },
    ],
    deliverables: [
      "Komplett SEO-audit med åtgärdsplan",
      "Nyckelordsstrategi med prioriterade termer",
      "On-page-optimering av alla sidor",
      "Teknisk SEO: hastighet, schema markup och crawlbarhet",
      "Innehållsstrategi och sökoptimerade texter",
      "Konverteringsoptimering av landningssidor",
      "Månatlig ranking- och trafikrapport",
      "Löpande optimering och strategijustering",
    ],
    stats: [
      { value: "Topp 3", label: "på Google inom 90 dagar" },
      { value: "+180%", label: "ökning i organisk trafik" },
      { value: "3x", label: "fler förfrågningar via sajten" },
    ],
    faqs: [
      {
        question: "Hur lång tid tar det innan vi ser resultat?",
        answer:
          "SEO är en långsiktig investering, men vi ser ofta tydliga förbättringar inom 60–90 dagar. Topp 3-placeringar för prioriterade sökord uppnås vanligtvis inom tre månader för lokala och nischade termer.",
      },
      {
        question: "Vilka sökord fokuserar ni på?",
        answer:
          "Vi identifierar sökord med högt kommersiellt värde – de termer som dina potentiella kunder faktiskt använder när de söker efter tjänster som dina. Fokus ligger på sökord som driver kvalificerad trafik, inte bara volym.",
      },
      {
        question: "Garanterar ni rankingar?",
        answer:
          "Vi garanterar inte specifika positioner – ingen seriös SEO-byrå gör det. Däremot garanterar vi ett metodiskt, datadrivet arbete och transparenta resultatrapporter. Våra kunders snittresultat talar för sig själva.",
      },
      {
        question: "Vad ingår i den månatliga uppföljningen?",
        answer:
          "Du får en detaljerad rapport med ranking-utveckling, trafikdata, konverteringsstatistik och genomförda åtgärder. Dessutom har vi ett uppföljningsmöte där vi går igenom resultaten och justerar strategin vid behov.",
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}
