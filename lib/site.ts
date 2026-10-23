export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mb-zahnabrechnung.de";

export const SITE = {
  url: SITE_URL,
  brand: "MB Zahnabrechnung",
  legalName: "Milana Kollmann · Zahnärztliche Abrechnung",
  owner: {
    name: "Milana Kollmann",
    jobTitle: "Zahnärztliche Abrechnung",
  },
  contact: {
    phone: "",
    phoneHref: "",
    email: "",
    emailHref: "",
  },
  address: {
    streetAddress: "",
    postalCode: "",
    addressLocality: "",
    addressRegion: "",
    addressCountry: "",
  },
  areaServed: {
    primary: "Deutschland",
    local: "Saarland",
    cityFocus: "Saarlouis",
  },
  softwares: [
    "CHARLY",
    "DAMPSOFT DS-Win-Plus",
    "evident",
    "ivoris",
    "Z1",
    "LinuDent",
  ],
} as const;

export const SERVICES = [
  {
    slug: "privatabrechnung",
    n: "01",
    title: "Privatabrechnung",
    short: "Privatabrechnung",
    lead: "GOZ · GOÄ · BEB · BEL II",
    intro:
      "Externe Privatabrechnung für Zahnarztpraxen. Jede Position wird gesichtet, §2-Begründungen werden sauber ausformuliert, Analogpositionen und Materialkosten mitgenommen. Nichts wird pauschal abgehakt und nichts geht unter.",
    points: [
      "GOZ inklusive §2-Begründungen",
      "Analog- und Verlangensleistungen",
      "Fremd- und Eigenlabor nach BEB und BEL II",
    ],
    accent: "Kernstück",
  },
  {
    slug: "kzv-abrechnung",
    n: "02",
    title: "KZV-Abrechnung",
    short: "KZV",
    lead: "BEMA · Quartalsabschluss · Gutachten",
    intro:
      "Quartalsweise BEMA-Abrechnung für Vertragszahnarztpraxen, inklusive PAR, ZE und KBR. Bei Gutachten bereite ich die Unterlagen sorgfältig auf und begleite den Vorgang bis zur Klärung.",
    points: [
      "PAR- und ZE-Abrechnung",
      "Gutachten-Dossiers vorbereiten",
      "Begleitung im Widerspruchsverfahren",
    ],
    accent: "Vertragszahnärztlich",
  },
  {
    slug: "hkp",
    n: "03",
    title: "HKP-Erstellung",
    short: "HKP",
    lead: "Heil- und Kostenpläne",
    intro:
      "Prüfung, Erstellung und Überarbeitung von Heil- und Kostenplänen für ZE, PAR, KFO und KBR. Auf Wunsch inklusive Alternativplänen und einer verständlichen Patientenerklärung.",
    points: [
      "Alternativpläne für Patient:innen",
      "Vor- und Gegenrechnung",
      "Klare Patientenkommunikation",
    ],
    accent: "Planungssicher",
  },
  {
    slug: "reklamationsmanagement",
    n: "04",
    title: "Reklamationsmanagement",
    short: "Reklamationen",
    lead: "Erstattungsstellen · Beihilfe · PKV",
    intro:
      "Bei Rechnungskürzungen durch Beihilfestellen oder private Krankenversicherungen schreibe ich die Nachbegründung im Namen der Praxis. Fachlich fundiert, ruhig im Ton, mit Blick auf eine gute Lösung.",
    points: [
      "Prüfberichte lesen und einordnen",
      "Nachbegründungen formulieren",
      "Widerspruch bis zur Klärung",
    ],
    accent: "In Ruhe geklärt",
  },
  {
    slug: "praxisberatung",
    n: "05",
    title: "Praxisberatung",
    short: "Praxisberatung",
    lead: "Prozesse · Abläufe · Übergaben",
    intro:
      "Gemeinsamer Blick auf Ihre Abrechnungsabläufe und die Übergaben zwischen Behandlung, Assistenz und Verwaltung. Ohne Beraterjargon, mit konkreten Vorschlägen.",
    points: [
      "Prozess-Sichtung im Abrechnungsablauf",
      "Klare Schnittstellen zwischen den Rollen",
      "Ruhige Umsetzung Schritt für Schritt",
    ],
    accent: "Nah an der Praxis",
  },
] as const;

export type Service = (typeof SERVICES)[number];
