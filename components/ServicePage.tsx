import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SERVICES, SITE, type Service } from "@/lib/site";

type Props = { service: Service };

export default function ServicePage({ service }: Props) {
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <main className="relative">
      <Nav />

      <section className="relative bg-white pt-32 pb-20 overflow-hidden">
        <div className="pointer-events-none absolute -top-20 right-[-10vw] h-[520px] w-[520px] rounded-full bg-petrol/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-10">
          <nav aria-label="Breadcrumb" className="divider-num flex items-center gap-2">
            <Link href="/" className="hover:text-petrol transition-colors">
              Start
            </Link>
            <span>·</span>
            <Link href="/#leistungen" className="hover:text-petrol transition-colors">
              Leistungen
            </Link>
            <span>·</span>
            <span className="text-navy/80">{service.title}</span>
          </nav>

          <div className="mt-10 eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-petrol/60" />
            Leistung {service.n} · {service.accent}
          </div>

          <h1 className="font-display mt-6 text-[clamp(44px,8vw,120px)] leading-[0.96] tracking-[-0.02em] text-navy max-w-4xl">
            {service.title.replace(/-/g, "‑")}
            <span className="block italic text-petrol text-[clamp(22px,3vw,42px)] leading-tight mt-5">
              {service.lead}
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-[18px] leading-[1.75] text-navy/85">
            {service.intro}
          </p>

          <ul className="mt-10 grid gap-3 max-w-xl">
            {service.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-4 text-[15px] leading-[1.7] text-navy/80"
              >
                <span className="mt-[0.6em] h-1 w-4 shrink-0 bg-petrol" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-wrap gap-4">
            <span className="text-navy/60 text-[13px]">
              Kontaktdaten folgen in Kürze.
            </span>
          </div>
        </div>
      </section>

      <section className="relative bg-mist py-24 sm:py-32">
        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-10 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-petrol/60" />
              So arbeite ich
            </div>
            <h2 className="font-display mt-5 text-[clamp(32px,4.4vw,56px)] leading-[1.02] text-navy max-w-md">
              Ruhig im Hintergrund.
              <span className="italic text-petrol block"> Mit Ihrer Praxis als Taktgeber.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[15px] leading-[1.85] text-navy/80">
            <p>
              Nach einem kurzen Kennenlernen bekommen Sie ein Angebot mit
              klarem Umfang und festem Startdatum. Danach richte ich einen
              abrechnungsseitigen Zugang zu Ihrer Praxissoftware ein. Sie
              behalten die Hoheit über Ihre Praxis, ich arbeite im Hintergrund
              mit festen Abrechnungstagen pro Woche und einem kurzen Monatsbild.
            </p>
            <p>
              Für diese Leistung nutze ich die gängigen Praxissoftwares,
              darunter {SITE.softwares.slice(0, -1).join(", ")} und{" "}
              {SITE.softwares.slice(-1)}. Neue Systeme lerne ich zügig ein.
            </p>
            <p>
              Zugänge werden ausschließlich verschlüsselt übergeben. Vor dem
              ersten Vorgang unterzeichnen wir eine Vereinbarung zur
              Auftragsverarbeitung nach Art. 28 DSGVO. Praxis- und
              Patientendaten behandle ich vertraulich.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 sm:py-32">
        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-10">
          <div className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-petrol/60" />
            Weitere Leistungen
          </div>
          <h2 className="font-display mt-4 text-[clamp(28px,3.4vw,48px)] leading-[1.02] text-navy">
            Was ich sonst noch
            <span className="italic text-petrol"> für Ihre Praxis</span> übernehme.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/leistungen/${o.slug}`}
                className="group block border-t border-line pt-5 hover:border-petrol transition-colors"
              >
                <div className="divider-num">{o.n}</div>
                <div className="font-display mt-3 text-[26px] leading-[1.05] text-navy group-hover:text-petrol transition-colors">
                  {o.title}
                </div>
                <div className="mt-2 text-[12px] text-navy/60 tracking-[0.04em]">
                  {o.lead}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-navy py-24 sm:py-32 text-white">
        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-10 flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="eyebrow !text-white/70 flex items-center gap-3">
              <span className="h-px w-8 bg-white/40" />
              Nächster Schritt
            </div>
            <h2 className="font-display mt-5 text-[clamp(32px,5vw,72px)] leading-[1] max-w-2xl tracking-[-0.01em]">
              Rufen Sie an.
              <span className="italic text-white/80 block"> Oder schreiben Sie kurz.</span>
            </h2>
            <p className="mt-6 max-w-md text-white/80 text-[15px] leading-[1.75]">
              Ein ruhiges Erstgespräch, kein Verkaufsgespräch. Wir schauen
              gemeinsam, ob und wie ich Sie bei {service.title} sinnvoll
              unterstützen kann.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <span className="text-white/70 text-[13px]">
              Kontaktdaten folgen in Kürze.
            </span>
          </div>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": `${SITE.url}/leistungen/${service.slug}#service`,
                name: service.title,
                serviceType: service.title,
                description: service.intro,
                provider: { "@id": `${SITE.url}#organization` },
                areaServed: [
                  { "@type": "Country", name: SITE.areaServed.primary },
                  { "@type": "AdministrativeArea", name: SITE.areaServed.local },
                ],
                url: `${SITE.url}/leistungen/${service.slug}`,
                offers: {
                  "@type": "Offer",
                  priceCurrency: "EUR",
                  availability: "https://schema.org/InStock",
                  url: `${SITE.url}/leistungen/${service.slug}`,
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Start",
                    item: SITE.url,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Leistungen",
                    item: `${SITE.url}/#leistungen`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: service.title,
                    item: `${SITE.url}/leistungen/${service.slug}`,
                  },
                ],
              },
            ],
          }),
        }}
      />
    </main>
  );
}
