"use client";

import { usePathname } from "next/navigation";
import { SITE, SERVICES } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const anchorHref = (a: string) => (isHome ? `#${a}` : `/#${a}`);

  return (
    <footer className="relative bg-white text-navy border-t border-line">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 pt-20 pb-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[13px] leading-[1.75] text-navy/70 max-w-[260px]">
              Persönliche Unterstützung für Zahnarztpraxen aus Saarlouis.
              Persönlich, präzise, zuverlässig.
            </p>
          </div>

          <div>
            <div className="eyebrow">Leistungen</div>
            <ul className="mt-5 space-y-2.5 text-[14px] text-navy/80">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/leistungen/${s.slug}`}
                    className="hover:text-petrol transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow">Kennenlernen</div>
            <ul className="mt-5 space-y-2.5 text-[14px] text-navy/80">
              <li><a href={anchorHref("ueber")} className="hover:text-petrol transition-colors">Über mich</a></li>
              <li><a href={anchorHref("ablauf")} className="hover:text-petrol transition-colors">Ablauf</a></li>
              <li><a href={anchorHref("faq")} className="hover:text-petrol transition-colors">Häufige Fragen</a></li>
              <li><a href={anchorHref("kontakt")} className="hover:text-petrol transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow">Kontakt</div>
            <ul className="mt-5 space-y-2.5 text-[14px] text-navy/80">
              <li className="text-navy/90 font-medium">{SITE.owner.name}</li>
              <li>
                <a href={SITE.contact.phoneHref} className="hover:text-petrol transition-colors">
                  {SITE.contact.phone}
                </a>
              </li>
              <li><a href={SITE.contact.emailHref} className="hover:text-petrol transition-colors break-all">{SITE.contact.email}</a></li>
              <li className="text-navy/60 text-[13px] mt-3">
                {SITE.address.addressLocality} · {SITE.areaServed.local} · Deutschlandweit digital
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <div className="text-[11px] tracking-[0.14em] uppercase text-navy/50">
            © {year} {SITE.legalName}
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[12px] text-navy/60">
            <a href="/impressum" className="hover:text-petrol transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-petrol transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
