"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    n: "01",
    slug: "privatabrechnung",
    title: "Privatabrechnung",
    lead: "GOZ · GOÄ · BEB · BEL II",
    body:
      "Ich prüfe jede Position, formuliere Begründungen sauber aus und nehme Analogpositionen, Materialkosten und das Eigenlabor nach BEL und BEB mit auf. Nichts wird pauschal abgehakt.",
    points: ["GOZ inklusive §2-Begründungen", "Eigenlabor nach BEB und BEL II", "Monats- oder Quartalsabrechnung"],
    accent: "Kernstück",
  },
  {
    n: "02",
    slug: "kzv-abrechnung",
    title: "KZV-Abrechnung",
    lead: "BEMA · Quartalsabschluss · Gutachten",
    body:
      "BEMA-Abrechnung inklusive PAR, ZE und KBR. Gutachten-Dossiers bereite ich sorgfältig auf, bei Wirtschaftlichkeitsprüfungen stehe ich an Ihrer Seite.",
    points: ["PAR- und ZE-Abrechnung", "Gutachten-Dossiers", "Wirtschaftlichkeitsprüfung"],
    accent: "Vertragszahnärztlich",
  },
  {
    n: "03",
    slug: "hkp",
    title: "HKP-Erstellung",
    lead: "Heil- und Kostenpläne · Kostenvoranschläge",
    body:
      "Ich prüfe, erstelle und überarbeite Heil- und Kostenpläne sowie Kostenvoranschläge für ZE, PAR, KFO und KBR. Auf Wunsch inklusive Alternativplänen und leicht verständlicher Patientenerklärung.",
    points: ["Heil- und Kostenpläne", "Kostenvoranschläge", "Klare Patientenkommunikation"],
    accent: "Planungssicher",
  },
  {
    n: "04",
    slug: "reklamationsmanagement",
    title: "Reklamations­management",
    lead: "Erstattungsstellen · Beihilfe · PKV",
    body:
      "Bei Rechnungskürzungen schreibe ich die Nachbegründung im Namen der Praxis. Fachlich fundiert, ruhig im Ton, immer mit Blick auf eine gute Lösung.",
    points: ["Prüfberichte lesen", "Nachbegründungen", "Widerspruch bis zur Klärung"],
    accent: "In Ruhe geklärt",
  },
  {
    n: "05",
    slug: "praxisberatung",
    title: "Praxisberatung",
    lead: "Leistungserfassung · Dokumentation · Prozesse",
    body:
      "Ich kontrolliere Leistungserfassung und Dokumentation, schaue auf Ihre Abrechnungsabläufe und die Übergaben zwischen Behandlung, Assistenz und Verwaltung.",
    points: ["Kontrolle der Leistungserfassung", "Prüfung der Dokumentation", "Klare Schnittstellen"],
    accent: "Nah an der Praxis",
  },
];

export default function HorizontalServices() {
  const outerRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const [maxShift, setMaxShift] = useState(0);

  useEffect(() => {
    function update() {
      const rail = railRef.current;
      if (!rail) return;
      const shift = Math.max(0, rail.scrollWidth - window.innerWidth);
      setMaxShift(shift);
    }
    update();
    const ro = new ResizeObserver(update);
    if (railRef.current) ro.observe(railRef.current);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduce ? 0 : -maxShift]
  );
  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* MOBILE: Cards vertikal gestapelt */}
      <section id="leistungen" className="relative bg-white py-24 md:hidden">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-petrol/60" />
            Leistungen
          </div>
          <h2 className="font-display mt-4 text-[clamp(28px,7vw,44px)] leading-[1.02] text-navy max-w-2xl">
            Fünf Bausteine.
            <span className="italic text-petrol"> Ein Ergebnis.</span>
          </h2>

          <div className="mt-12 flex flex-col gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.n} {...s} index={i} mobile />
            ))}
          </div>

          <div className="mt-10 flex items-baseline justify-between gap-4 border-t border-line pt-4">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-[36px] leading-none text-navy">
                {services.length.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-navy/55">
                Leistungen
              </span>
            </div>
            <div className="flex items-center gap-3 divider-num text-[10px]">
              <span>Persönlich</span>
              <span>·</span>
              <span>Präzise</span>
              <span>·</span>
              <span>Zuverlässig</span>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP: Horizontales Scroll-Rail */}
      <section ref={outerRef} className="relative hidden h-[440vh] bg-white md:block">
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden">
        <div className="relative z-10 shrink-0 border-b border-line bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1500px] flex-wrap items-end justify-between gap-4 px-6 sm:px-10 pt-24 pb-6">
            <div>
              <div className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-petrol/60" />
                Leistungen
              </div>
              <h2 className="font-display mt-4 text-[clamp(28px,4.2vw,56px)] leading-[1.02] text-navy max-w-2xl">
                Fünf Bausteine.
                <span className="italic text-petrol"> Ein Ergebnis.</span>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-4 divider-num">
              <span>Scrollen um zu bewegen</span>
              <span className="relative inline-block h-px w-24 bg-line overflow-hidden">
                <m.span
                  style={{ width: progressBar }}
                  className="absolute inset-y-0 left-0 bg-petrol"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <m.div
            ref={railRef}
            style={{ x }}
            className="flex h-full items-center gap-8 pl-6 pr-[10vw] sm:pl-10 will-change-transform"
          >
            {services.map((s, i) => (
              <ServiceCard key={s.n} {...s} index={i} />
            ))}
          </m.div>
        </div>

        <div className="relative z-10 shrink-0 border-t border-line bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1500px] items-baseline justify-between gap-4 px-6 sm:px-10 py-4">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-[40px] leading-none text-navy">
                {services.length.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-navy/55">
                Leistungen
              </span>
            </div>
            <div className="md:hidden flex items-center gap-2 divider-num">
              <span>Scrollen</span>
              <span className="relative inline-block h-px w-16 bg-line overflow-hidden">
                <m.span
                  style={{ width: progressBar }}
                  className="absolute inset-y-0 left-0 bg-petrol"
                />
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6 divider-num">
              <span>Persönlich</span>
              <span>Präzise</span>
              <span>Zuverlässig</span>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

function ServiceCard({
  n,
  slug,
  title,
  lead,
  body,
  points,
  accent,
  index,
  mobile = false,
}: (typeof services)[number] & { index: number; mobile?: boolean }) {
  const isDeep = index % 2 === 1;
  return (
    <article
      className={`relative flex overflow-hidden rounded-lg p-7 sm:p-12 ${
        mobile
          ? "w-full flex-col gap-6"
          : "h-full max-h-[640px] w-[85vw] max-w-[680px] shrink-0 flex-col justify-between"
      } ${isDeep ? "bg-navy text-white" : "glass text-navy"}`}
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-petrol/25 blur-3xl" />

      <div className="flex items-start justify-between">
        <div className={`divider-num ${isDeep ? "!text-white/60" : ""}`}>{n}</div>
        <div className={`eyebrow ${isDeep ? "!text-white/70" : ""}`}>{accent}</div>
      </div>

      <div className="mt-4">
        <h3
          className={`font-display text-[clamp(34px,4.4vw,68px)] leading-[0.98] tracking-tight ${
            isDeep ? "text-white" : "text-navy"
          }`}
        >
          {title.split(/(-)/).map((part, i) =>
            part === "-" ? (
              <span key={i} className="font-sans font-light">
                -
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h3>
        <div
          className={`eyebrow mt-5 !text-[10px] ${
            isDeep ? "!text-white/70" : "!text-muted"
          }`}
        >
          {lead}
        </div>
      </div>

      <div>
        <p
          className={`max-w-md text-[14px] leading-[1.75] ${
            isDeep ? "text-white/85" : "text-navy/75"
          }`}
        >
          {body}
        </p>
        <ul className="mt-6 grid gap-2">
          {points.map((p) => (
            <li
              key={p}
              className={`flex items-center gap-3 text-[12px] tracking-[0.04em] ${
                isDeep ? "text-white/85" : "text-navy/75"
              }`}
            >
              <span className={`h-1 w-3 shrink-0 ${isDeep ? "bg-white/70" : "bg-petrol"}`} />
              {p}
            </li>
          ))}
        </ul>
        <a
          href={`/leistungen/${slug}`}
          className={`mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] transition-colors ${
            isDeep
              ? "text-white/80 hover:text-white"
              : "text-petrol hover:text-navy"
          }`}
        >
          Mehr zur Leistung <span className="arrow">→</span>
        </a>
      </div>
    </article>
  );
}
