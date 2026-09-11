"use client";

import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ivory text-navy border-t border-line/70">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 pt-20 pb-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-line">
                <Image src="/logo.jpeg" alt="MB Logo" fill sizes="40px" className="object-cover" />
              </div>
              <div>
                <div className="font-display text-lg leading-none">MB Abrechnung</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-navy/60">
                  Zahnärztliche Abrechnung
                </div>
              </div>
            </div>
            <p className="mt-5 text-[13px] leading-[1.75] text-navy/70 max-w-[260px]">
              Externe Privatabrechnung für Zahnarztpraxen im DACH-Raum.
              Persönlich, präzise, mit Freude am Detail.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <div className="eyebrow">Leistungen</div>
            <ul className="mt-5 space-y-2.5 text-[14px] text-navy/80">
              <li><a href="#leistungen" className="hover:text-gold transition-colors">Privatabrechnung</a></li>
              <li><a href="#leistungen" className="hover:text-gold transition-colors">KZV-Abrechnung</a></li>
              <li><a href="#leistungen" className="hover:text-gold transition-colors">HKP-Erstellung</a></li>
              <li><a href="#leistungen" className="hover:text-gold transition-colors">Reklamationen</a></li>
              <li><a href="#leistungen" className="hover:text-gold transition-colors">Praxisberatung</a></li>
              <li><a href="#leistungen" className="hover:text-gold transition-colors">Team-Schulung</a></li>
            </ul>
          </div>

          {/* Praxis */}
          <div>
            <div className="eyebrow">Praxis</div>
            <ul className="mt-5 space-y-2.5 text-[14px] text-navy/80">
              <li><a href="#ueber" className="hover:text-gold transition-colors">Über mich</a></li>
              <li><a href="#ablauf" className="hover:text-gold transition-colors">Ablauf</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">Häufige Fragen</a></li>
              <li><a href="#kontakt" className="hover:text-gold transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <div className="eyebrow">Kontakt</div>
            <ul className="mt-5 space-y-2.5 text-[14px] text-navy/80">
              <li className="text-navy/90 font-medium">Melanie Bauer</li>
              <li>
                <a href="mailto:kontakt@mb-abrechnung.de" className="hover:text-gold transition-colors">
                  kontakt@mb-abrechnung.de
                </a>
              </li>
              <li>
                <a href="tel:+498941287100" className="hover:text-gold transition-colors">
                  +49 (0) 89 4 12 87 10
                </a>
              </li>
              <li className="text-navy/60 text-[13px] mt-3">
                Mo bis Fr · 08:30 bis 17:00 Uhr
              </li>
              <li className="text-navy/60 text-[13px]">
                München · Betreuung DACH-weit
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-6">
          <div className="text-[11px] tracking-[0.14em] uppercase text-navy/50">
            © {year} MB Zahnärztliche Abrechnung
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[12px] text-navy/60">
            <a href="#" className="hover:text-gold transition-colors">Impressum</a>
            <a href="#" className="hover:text-gold transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-gold transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
