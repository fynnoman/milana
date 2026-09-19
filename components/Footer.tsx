"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-white text-navy border-t border-line">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 pt-20 pb-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-line grid place-items-center bg-navy text-white">
                <span className="font-display text-[16px] leading-none">MK</span>
              </div>
              <div>
                <div className="font-display text-lg leading-none">Milana Kollmann</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-navy/60">
                  Zahnärztliche Abrechnung
                </div>
              </div>
            </div>
            <p className="mt-5 text-[13px] leading-[1.75] text-navy/70 max-w-[260px]">
              Persönliche Unterstützung für Zahnarztpraxen aus Saarlouis.
              Persönlich, präzise, zuverlässig.
            </p>
          </div>

          <div>
            <div className="eyebrow">Leistungen</div>
            <ul className="mt-5 space-y-2.5 text-[14px] text-navy/80">
              <li><a href="#leistungen" className="hover:text-petrol transition-colors">Privatabrechnung</a></li>
              <li><a href="#leistungen" className="hover:text-petrol transition-colors">KZV-Abrechnung</a></li>
              <li><a href="#leistungen" className="hover:text-petrol transition-colors">HKP-Erstellung</a></li>
              <li><a href="#leistungen" className="hover:text-petrol transition-colors">Reklamationen</a></li>
              <li><a href="#leistungen" className="hover:text-petrol transition-colors">Praxisberatung</a></li>
              <li><a href="#leistungen" className="hover:text-petrol transition-colors">Team-Schulung</a></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow">Kennenlernen</div>
            <ul className="mt-5 space-y-2.5 text-[14px] text-navy/80">
              <li><a href="#ueber" className="hover:text-petrol transition-colors">Über mich</a></li>
              <li><a href="#ablauf" className="hover:text-petrol transition-colors">Ablauf</a></li>
              <li><a href="#faq" className="hover:text-petrol transition-colors">Häufige Fragen</a></li>
              <li><a href="#kontakt" className="hover:text-petrol transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow">Kontakt</div>
            <ul className="mt-5 space-y-2.5 text-[14px] text-navy/80">
              <li className="text-navy/90 font-medium">Milana Kollmann</li>
              <li>
                <a href="tel:+491742122526" className="hover:text-petrol transition-colors">
                  +49 174 212 25 26
                </a>
              </li>
              <li className="text-navy/60 text-[13px] mt-3">
                Saarlouis
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <div className="text-[11px] tracking-[0.14em] uppercase text-navy/50">
            © {year} Milana Kollmann · Zahnärztliche Abrechnung
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[12px] text-navy/60">
            <a href="#" className="hover:text-petrol transition-colors">Impressum</a>
            <a href="#" className="hover:text-petrol transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
