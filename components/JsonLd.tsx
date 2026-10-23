import { SITE, SERVICES } from "@/lib/site";

const FAQS = [
  {
    q: "Wie läuft die Zusammenarbeit ab?",
    a: "Nach dem Kennenlernen bekommen Sie ein Angebot mit klarem Umfang und festem Startdatum. Sobald wir uns einig sind, richte ich einen abrechnungsseitigen Zugang zu Ihrer Praxissoftware ein. Sie behalten die Hoheit über Ihre Praxis. Ich arbeite im Hintergrund und rechne je nach Wunsch monatlich oder quartalsweise ab, mit einem kurzen Statusbild dazu.",
  },
  {
    q: "Arbeiten Sie remote als externe ZMV?",
    a: "Ja, ich übernehme die Abrechnung komplett remote in Ihrer Praxissoftware. Sie geben Arbeit ab und behalten die Kontrolle. Zielgruppe sind Zahnarztpraxis-Inhaber und ZMV-Teams, die Entlastung ohne zusätzlichen Arbeitsplatz vor Ort brauchen.",
  },
  {
    q: "Welche Reports bekomme ich?",
    a: "Wöchentlich einen kompakten, leicht verständlichen Report zu Honorar, Rückläufern, offenen Heil- und Kostenplänen und kritischen GOZ-Ziffern.",
  },
  {
    q: "Was ändert sich in den ersten vier Wochen?",
    a: "In den ersten vier Wochen sehen Sie typischerweise weniger Rückläufer, klarere Zahlen durch den wöchentlichen Report, eine stabilere Liquidität durch regelmäßige Abrechnung und eine nachvollziehbare Dokumentation jeder erbrachten Leistung.",
  },
  {
    q: "Mit welchen Praxissoftwares arbeiten Sie?",
    a: "Ich arbeite mit den gängigen Systemen, unter anderem CHARLY, DAMPSOFT DS-Win-Plus, evident, ivoris, Z1 und LinuDent. Neue Systeme lerne ich zügig ein.",
  },
  {
    q: "Wie halten Sie es mit Datenschutz und Diskretion?",
    a: "Ich arbeite ausschließlich über verschlüsselte Zugänge, unterzeichne eine Vereinbarung zur Auftragsverarbeitung nach Art. 28 DSGVO und behandle Praxis- und Patientendaten vertraulich.",
  },
  {
    q: "In welchem Rhythmus rechnen Sie ab?",
    a: "Je nach Wunsch monatlich oder quartalsweise. Den Turnus legen wir im Erstgespräch gemeinsam fest und passen ihn an, wenn sich der Praxisalltag ändert.",
  },
  {
    q: "Was kostet Ihre Unterstützung?",
    a: "Das hängt vom Umfang ab. Punktuelle Fälle rechne ich im Stundensatz ab. Für die laufende Betreuung gibt es Pauschalen, die sich am monatlichen Abrechnungsvolumen orientieren.",
  },
  {
    q: "Übernehmen Sie auch einzelne Fälle oder nur ganze Praxen?",
    a: "Beides. Sie können mich als externe Unterstützung für Ihre komplette Privatabrechnung buchen oder gezielt für einzelne HKP-Fälle, komplexe Reklamationen und Gutachtenverfahren.",
  },
  {
    q: "Wo sitzen Sie und arbeiten Sie auch mit weiter entfernten Praxen?",
    a: "Ich arbeite mit Praxen deutschlandweit digital zusammen. Für ein persönliches Kennenlernen komme ich gerne zu Ihnen in die Praxis.",
  },
];

export default function JsonLd() {
  const orgId = `${SITE.url}#organization`;
  const personId = `${SITE.url}#milana-kollmann`;
  const websiteId = `${SITE.url}#website`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "ProfessionalService",
      "@id": orgId,
      name: SITE.brand,
      alternateName: SITE.legalName,
      legalName: SITE.legalName,
      url: SITE.url,
      logo: `${SITE.url}/logo.webp`,
      image: `${SITE.url}/logo.webp`,
      telephone: SITE.contact.phone,
      priceRange: "€€",
      founder: { "@id": personId },
      employee: { "@id": personId },
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.streetAddress,
        postalCode: SITE.address.postalCode,
        addressLocality: SITE.address.addressLocality,
        addressRegion: SITE.address.addressRegion,
        addressCountry: SITE.address.addressCountry,
      },
      areaServed: [
        { "@type": "Country", name: SITE.areaServed.primary },
        { "@type": "AdministrativeArea", name: SITE.areaServed.local },
      ],
      knowsAbout: [
        "Zahnärztliche Abrechnung",
        "GOZ",
        "GOÄ",
        "BEB",
        "BEL II",
        "BEMA",
        "KZV-Abrechnung",
        "Heil- und Kostenplan",
        "Reklamationsmanagement",
        "Praxisberatung",
        ...SITE.softwares,
      ],
      makesOffer: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE.url}/leistungen/${s.slug}#service`,
          name: s.title,
          serviceType: s.title,
          description: s.intro,
          provider: { "@id": orgId },
          areaServed: SITE.areaServed.primary,
          url: `${SITE.url}/leistungen/${s.slug}`,
        },
      })),
    },
    {
      "@type": "Person",
      "@id": personId,
      name: SITE.owner.name,
      jobTitle: SITE.owner.jobTitle,
      telephone: SITE.contact.phone,
      worksFor: { "@id": orgId },
      image: `${SITE.url}/images/milana-portrait.webp`,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.address.addressLocality,
        addressRegion: SITE.address.addressRegion,
        addressCountry: SITE.address.addressCountry,
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE.url,
      name: SITE.brand,
      inLanguage: "de-DE",
      publisher: { "@id": orgId },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
