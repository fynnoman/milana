import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung nach § 5 TMG.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <main className="relative">
      <Nav />
      <section className="relative bg-white pt-40 pb-24 min-h-[60vh]">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <div className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-petrol/60" />
            Impressum
          </div>
          <h1 className="font-display mt-4 text-[clamp(36px,5vw,72px)] leading-[0.98] text-navy">
            Impressum
          </h1>

          <div className="mt-12 space-y-10 text-[15px] leading-[1.85] text-navy/80">
            <div>
              <div className="eyebrow !text-navy/60 mb-3">Angaben nach § 5 TMG</div>
              <p className="text-navy font-medium">{SITE.legalName}</p>
              <p>{SITE.address.streetAddress}</p>
              <p>
                {SITE.address.postalCode} {SITE.address.addressLocality}
              </p>
              <p>Deutschland</p>
            </div>

            <div>
              <div className="eyebrow !text-navy/60 mb-3">Kontakt</div>
              <p>
                Telefon:{" "}
                <a className="text-petrol hover:text-navy transition-colors" href={SITE.contact.phoneHref}>
                  {SITE.contact.phone}
                </a>
              </p>
            </div>

            <div>
              <div className="eyebrow !text-navy/60 mb-3">Verantwortlich für den Inhalt</div>
              <p>{SITE.owner.name}</p>
              <p>Anschrift wie oben.</p>
            </div>

            <div className="text-navy/60 text-[13px] space-y-3">
              <p>
                Weitere pflichtige Angaben (Umsatzsteuer-ID, Berufshaftpflicht,
                berufsrechtliche Regelungen) werden ergänzt, sobald sie
                vorliegen.
              </p>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle wird keine Haftung
                für die Inhalte externer Links übernommen. Für den Inhalt
                verlinkter Seiten sind ausschließlich deren Betreiber
                verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
