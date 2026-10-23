import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung nach Art. 13 DSGVO.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <main className="relative">
      <Nav />
      <section className="relative bg-white pt-40 pb-24 min-h-[60vh]">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <div className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-petrol/60" />
            Datenschutz
          </div>
          <h1 className="font-display mt-4 text-[clamp(36px,5vw,72px)] leading-[0.98] text-navy">
            Datenschutzerklärung
          </h1>
          <div className="mt-12 space-y-8 text-[15px] leading-[1.85] text-navy/80">
            <div>
              <div className="eyebrow !text-navy/60 mb-3">Verantwortliche Stelle</div>
              <p>{SITE.legalName}</p>
              <p>{SITE.address.streetAddress}</p>
              <p>
                {SITE.address.postalCode} {SITE.address.addressLocality}
              </p>
              <p>
                <a className="text-petrol hover:text-navy transition-colors" href={SITE.contact.emailHref}>
                  {SITE.contact.email}
                </a>
              </p>
            </div>
            <p>
              Diese Website verarbeitet derzeit keine personenbezogenen Daten
              über Formulare. Für Terminanfragen nutzen Sie bitte den
              telefonischen Weg oder die oben genannte E-Mail-Adresse.
            </p>
            <p>
              Beim Aufruf der Website werden technisch notwendige Daten
              (Server-Logs: IP-Adresse, Zugriffszeitpunkt, abgerufene Ressource,
              User-Agent) kurzfristig verarbeitet. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p>
              Die vollständige Datenschutzerklärung nach Art. 13 DSGVO wird
              hier ergänzt, sobald weitere Verarbeitungsvorgänge dokumentiert
              sind.
            </p>
            <p className="text-navy/60 text-[13px]">
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und
              Widerspruch sowie auf Beschwerde bei einer
              Datenschutz-Aufsichtsbehörde.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
