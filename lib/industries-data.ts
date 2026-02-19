export type IndustryIconName = "users" | "briefcase" | "wrench"

export interface IndustryPainPoint {
  icon: string
  title: string
  description: string
}

export interface IndustrySolution {
  icon: string
  title: string
  description: string
}

export interface IndustryStat {
  value: string
  label: string
}

export interface IndustryTestimonial {
  quote: string
  author: string
  role: string
}

export interface IndustryData {
  slug: string
  iconName: IndustryIconName
  title: string
  heroLabel: string
  subtitle: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  painPoints: IndustryPainPoint[]
  solutions: IndustrySolution[]
  deliverables: string[]
  stats: IndustryStat[]
  testimonial: IndustryTestimonial
}

export const industries: IndustryData[] = [
  {
    slug: "konsulter-och-coacher",
    iconName: "users",
    title: "Webbplats för konsulter och coacher",
    heroLabel: "Konsulter & Coacher",
    subtitle:
      "Du är expert inom ditt område – men syns du så? Vi bygger en sajt som positionerar dig som den självklara experten, attraherar rätt kunder via Google och förvandlar besökare till bokade samtal.",
    metaTitle: "Webbplats för konsulter och coacher – Fler kunder via nätet",
    metaDescription:
      "Vi bygger konverteringsoptimerade webbplatser för konsulter och coacher. Tydlig positionering, auktoritetsbyggande design och SEO som ger +160% fler förfrågningar.",
    keywords: [
      "webbplats konsult",
      "hemsida coach",
      "webbdesign konsultbolag",
      "SEO konsult",
      "webbplats coachingföretag",
    ],
    painPoints: [
      {
        icon: "eyeOff",
        title: "Osynlig på Google",
        description:
          "Dina idealkunder söker hjälp just nu – men hittar dina konkurrenter istället. Utan synlighet på Google förlorar du affärer utan att ens veta om det.",
      },
      {
        icon: "trendingDown",
        title: "Konkurrenterna syns – du gör det inte",
        description:
          "Andra konsulter och coacher med sämre erbjudande rankar över dig. Inte för att de är bättre, utan för att deras sajt är optimerad.",
      },
      {
        icon: "shieldAlert",
        title: "Ingen trovärdighet online",
        description:
          "Besökare som landar på din nuvarande sajt ser ingen social proof, inga tydliga resultat och ingen anledning att välja dig framför någon annan.",
      },
      {
        icon: "messageCircle",
        title: "Svårt att förklara erbjudandet",
        description:
          "Dina tjänster är komplexa och personliga. Din sajt lyckas inte kommunicera värdet du levererar, och potentiella kunder försvinner innan de förstår.",
      },
    ],
    solutions: [
      {
        icon: "target",
        title: "Tydlig positionering som expert",
        description:
          "Vi analyserar din marknad och bygger en sajt som tydligt kommunicerar vad du gör, för vem och vilket resultat de kan förvänta sig.",
      },
      {
        icon: "award",
        title: "Auktoritetsbyggande design",
        description:
          "En design som andas kompetens och professionalism. Kundcaser, resultat och din expertis presenteras på ett sätt som bygger omedelbart förtroende.",
      },
      {
        icon: "search",
        title: "SEO för din nisch",
        description:
          "Vi identifierar exakt vilka sökord dina potentiella kunder använder och optimerar varje sida för att ranka. Så att du syns när det räknas.",
      },
      {
        icon: "mousePointerClick",
        title: "Konverteringsoptimerat kontaktflöde",
        description:
          "Strategiskt placerade kontaktformulär, bokningsknappar och uppmaningar som gör det enkelt och naturligt att ta nästa steg.",
      },
    ],
    deliverables: [
      "Konverteringsoptimerad hemsida med tydlig positionering",
      "SEO-optimerade tjänstesidor med branschsökord",
      "Integrerat boknings- eller kontaktsystem",
      "Kundcase- och referenssektion",
      "Mobilanpassad design med under 2 sekunders laddtid",
      "Google Analytics och konverteringsspårning",
      "Optimerade metataggar och strukturerad data",
      "Löpande SEO-rapport första kvartalet",
    ],
    stats: [
      { value: "+160%", label: "ökning i kontaktförfrågningar" },
      { value: "1.8s", label: "genomsnittlig laddtid" },
      { value: "85%", label: "fler kontakter via Google" },
    ],
    testimonial: {
      quote:
        "Innan ByggDinSida hade vi knappt några förfrågningar via webben. Inom tre månader efter lanseringen var kalendern fullbokad. Den bästa investeringen vi gjort för vårt coachingföretag.",
      author: "Anna Lindström",
      role: "VD, Lindström Ledarskap & Coaching",
    },
  },
  {
    slug: "professionella-tjanster",
    iconName: "briefcase",
    title: "Webbplats för juridik, ekonomi och professionella tjänster",
    heroLabel: "Professionella tjänster",
    subtitle:
      "I din bransch avgör förstahandsintrycket allt. Vi skapar en digital närvaro som speglar din kompetens, visar trovärdighet och konverterar besökare till kvalificerade förfrågningar.",
    metaTitle:
      "Webbplats för juridik, ekonomi och professionella tjänster – Bygg förtroende online",
    metaDescription:
      "Premiumdesignade webbplatser för advokatbyråer, revisorer och konsultfirmor. Förtroendebyggande design, strukturerade tjänstesidor och +210% fler kontaktförfrågningar.",
    keywords: [
      "webbplats advokatbyrå",
      "hemsida revisionsbyrå",
      "webbdesign juridik",
      "webbplats ekonomibyrå",
      "hemsida professionella tjänster",
    ],
    painPoints: [
      {
        icon: "clock",
        title: "Föråldrad sajt matchar inte er expertis",
        description:
          "Er sajt ser ut som den byggdes för tio år sedan, men er kompetens är i framkant. Det skapar en disconnect som kostar er kunder och trovärdighet.",
      },
      {
        icon: "userMinus",
        title: "Potentiella kunder väljer konkurrenter",
        description:
          "Kunder jämför er med konkurrenter online innan de tar kontakt. Om deras sajt ser mer professionell ut har ni redan förlorat – oavsett er faktiska kompetens.",
      },
      {
        icon: "layoutList",
        title: "Otydliga tjänstesidor",
        description:
          "Besökare hittar inte svar på sina frågor. Utan tydligt strukturerade tjänstesidor som förklarar vad ni erbjuder och för vem, studsar de vidare.",
      },
      {
        icon: "smartphone",
        title: "Dålig mobilupplevelse",
        description:
          "Över 60 % av era besökare surfar från mobilen. En sajt som inte fungerar felfritt på mobilen tappar merparten av sina potentiella kunder.",
      },
    ],
    solutions: [
      {
        icon: "award",
        title: "Förtroendebyggande premiumdesign",
        description:
          "Vi designar en sajt som matchar er kunskapsnivå. Professionellt, stilrent och med den auktoritet som förväntas i er bransch.",
      },
      {
        icon: "fileText",
        title: "Strukturerade tjänstesidor",
        description:
          "Varje tjänst får en dedikerad sida med tydlig information, vanliga frågor och tydliga nästa steg. Besökare hittar exakt det de söker.",
      },
      {
        icon: "star",
        title: "Integration av kundomdömen och resultat",
        description:
          "Vi bygger in sektioner för kundrecensioner, case studies och resultat som gör det enkelt att visa er track record.",
      },
      {
        icon: "zap",
        title: "Mobile-first och blixtsnabb",
        description:
          "Sajten designas från grunden för mobila enheter och optimeras för maximal laddningshastighet – varje sekund räknas.",
      },
    ],
    deliverables: [
      "Premiumdesignad hemsida med förtroendeskapande layout",
      "Dedikerade och SEO-optimerade tjänstesidor",
      "Sektion för kundomdömen och case studies",
      "Kontaktformulär med intelligent routing",
      "Mobiloptimerad upplevelse med topprestanda",
      "Schema markup för lokal SEO och rich results",
      "Integrerad blogg för thought leadership",
      "GDPR-kompatibel cookie- och integritetslösning",
    ],
    stats: [
      { value: "+210%", label: "ökning i kontaktförfrågningar" },
      { value: "34%", label: "lägre avvisningsfrekvens" },
      { value: "3x", label: "fler offertförfrågningar" },
    ],
    testimonial: {
      quote:
        "Vi tvekade länge kring att investera i en ny sajt. Men sedan lanseringen har vi sett en dramatisk ökning av kvalificerade förfrågningar. Potentiella kunder nämner ofta att sajten var anledningen till att de tog kontakt.",
      author: "Erik Johansson",
      role: "Delägare, Johansson & Partners Advokatbyrå",
    },
  },
  {
    slug: "hantverkare-och-lokala-foretag",
    iconName: "wrench",
    title: "Webbplats för hantverkare och lokala tjänsteföretag",
    heroLabel: "Hantverkare & Lokala företag",
    subtitle:
      "Du gör ett fantastiskt jobb – men syns du i ditt närområde? Vi bygger snabba, mobilanpassade sajter med lokal SEO som gör att kunder hittar dig innan konkurrenterna.",
    metaTitle:
      "Webbplats för hantverkare och lokala företag – Syns lokalt, få fler jobb",
    metaDescription:
      "Mobilanpassade webbplatser med lokal SEO för hantverkare och lokala tjänsteföretag. Topp 3 på Google lokalt inom 60 dagar och 25+ förfrågningar per månad.",
    keywords: [
      "webbplats hantverkare",
      "hemsida lokalt företag",
      "lokal SEO hantverkare",
      "webbdesign byggfirma",
      "hemsida rörmokare",
    ],
    painPoints: [
      {
        icon: "globe",
        title: "Noll synlighet online",
        description:
          "Du har nöjda kunder men ingen webbplats som visar det. Potentiella kunder som söker efter dina tjänster lokalt hittar helt enkelt inte dig.",
      },
      {
        icon: "users",
        title: "Alla jobb kommer via mun-till-mun",
        description:
          "Mun-till-mun fungerar – men det skapar ingen förutsägbar pipeline. Under lugna perioder har du inget inflöde och ingen kontroll.",
      },
      {
        icon: "mapPin",
        title: "Konkurrenter dominerar lokal sökning",
        description:
          "Dina konkurrenter dyker upp på Google Maps och i lokala sökresultat medan du är helt osynlig. Varje dag tappar du jobb till dem.",
      },
      {
        icon: "smartphone",
        title: "Ingen mobilanpassad sajt",
        description:
          "De flesta av dina potentiella kunder söker från mobilen. Utan en sajt som ser bra ut och fungerar felfritt på telefonen förlorar du dem direkt.",
      },
    ],
    solutions: [
      {
        icon: "mapPin",
        title: "Lokal SEO-strategi",
        description:
          "Vi optimerar din sajt för lokala sökningar så att du dyker upp när kunder i ditt område söker efter dina tjänster. Rätt synlighet, rätt tidpunkt.",
      },
      {
        icon: "zap",
        title: "Snabb mobile-first sajt",
        description:
          "En sajt byggd från grunden för mobila enheter med blixtsnabb laddtid. Dina kunder får en perfekt upplevelse oavsett enhet.",
      },
      {
        icon: "building2",
        title: "Google Business-integration",
        description:
          "Vi kopplar ihop din sajt med Google Business Profile för maximal synlighet på kartan och i lokala sökresultat.",
      },
      {
        icon: "fileText",
        title: "Enkla offertförfrågningar",
        description:
          "Ett tydligt och snabbt formulär som gör det enkelt för kunder att begära offert. Inga krångliga steg – bara snabb kontakt.",
      },
    ],
    deliverables: [
      "Mobilanpassad hemsida optimerad för lokala sökningar",
      "Google Business Profile-optimering",
      "Offertformulär med automatiska notifieringar",
      "Bildgalleri för genomförda projekt",
      "Kundrecensioner och betygssystem",
      "Lokal SEO med områdesinriktade sidor",
      "Snabb laddtid under 2 sekunder på mobil",
      "Google Analytics med leadspårning",
    ],
    stats: [
      { value: "Topp 3", label: "på Google lokalt inom 60 dagar" },
      { value: "25+", label: "förfrågningar per månad" },
      { value: "73%", label: "ökad organisk trafik" },
    ],
    testimonial: {
      quote:
        "Vi hade inga leads alls från internet. Tre månader efter att vi fick vår nya sajt får vi över 25 förfrågningar i månaden – och den sköter sig själv. Helt otroligt.",
      author: "Marcus Berggren",
      role: "Ägare, Berggrens Bygg & Renovering",
    },
  },
]

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industries.find((i) => i.slug === slug)
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug)
}
