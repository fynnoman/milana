"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    n: "01",
    title: "Privatabrechnung",
    lead: "GOZ · GOÄ · BEB · BEL II",
    body:
      "Ich sichte jede Position, formuliere Begründungen sauber aus und nehme Analogpositionen sowie Materialkosten mit auf. Nichts wird pauschal abgehakt und nichts geht unter.",
    points: ["GOZ inklusive §2-Begründungen", "Analog- und Verlangensleistungen", "Fremd- und Eigenlabor"],
    accent: "Kernstück",
  },
  {
    n: "02",
    title: "KZV-Abrechnung",
    lead: "BEMA · Quartalsabschluss · Gutachten",
    body:
      "Quartalsweise BEMA-Abrechnung inklusive PAR, ZE und KBR. Bei Gutachten bereite ich die Unterlagen sorgfältig auf und begleite den Vorgang bis zur Klärung.",
    points: ["PAR- und ZE-Abrechnung", "Gutachten-Dossiers", "Begleitung im Widerspruch"],
    accent: "Vertragszahnärztlich",
  },
  {
    n: "03",
    title: "HKP-Erstellung",
    lead: "Heil- und Kostenpläne",
    body:
      "Ich prüfe, erstelle und überarbeite Heil- und Kostenpläne für ZE, PAR, KFO und KBR. Auf Wunsch inklusive Alternativplänen und leicht verständlicher Patientenerklärung.",
    points: ["Alternativpläne", "Vor- und Gegenrechnung", "Klare Patientenkommunikation"],
    accent: "Planungssicher",
  },
  {
    n: "04",
    title: "Reklamations­management",
    lead: "Erstattungsstellen · Beihilfe · PKV",
    body:
      "Bei Rechnungskürzungen schreibe ich die Nachbegründung im Namen der Praxis. Fachlich fundiert, ruhig im Ton, immer mit Blick auf eine gute Lösung.",
    points: ["Prüfberichte lesen", "Nachbegründungen", "Widerspruch bis zur Klärung"],
    accent: "In Ruhe geklärt",
  },
  {
    n: "05",
    title: "Praxisberatung",
    lead: "Prozesse · Software · Team",
    body:
      "Wir schauen gemeinsam auf Ihre Abrechnungsabläufe, Software und Übergaben zwischen Behandlung, Assistenz und Verwaltung. Ohne Beraterjargon, mit konkreten Vorschlägen.",
    points: ["Prozess-Sichtung", "Software-Auswahl", "Klare Schnittstellen"],
    accent: "Nah an der Praxis",
  },
  {
    n: "06",
    title: "Team-Schulung",
    lead: "Fortbildung für Ihr Team",
    body:
      "Kompakte Einheiten und Sprechstunden für Verwaltung und ZFAs. GOZ, BEMA, HKP, gemeinsame Fallbesprechungen. Auf Wunsch bei Ihnen vor Ort oder als regelmäßige Praxisstunde.",
    points: ["GOZ-Kompaktkurs", "BEMA für Einsteiger", "Regelmäßige Sprechstunde"],
    accent: "Wissen weitergeben",
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
            Sechs Bausteine.
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
      <section ref={outerRef} className="relative hidden h-[520vh] bg-white md:block">
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden">
        <div className="relative z-10 shrink-0 border-b border-line bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1500px] flex-wrap items-end justify-between gap-4 px-6 sm:px-10 pt-24 pb-6">
            <div>
              <div className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-petrol/60" />
                Leistungen
              </div>
              <h2 className="font-display mt-4 text-[clamp(28px,4.2vw,56px)] leading-[1.02] text-navy max-w-2xl">
                Sechs Bausteine.
                <span className="italic text-petrol"> Ein Ergebnis.</span>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-4 divider-num">
              <span>Scrollen um zu bewegen</span>
              <span className="relative inline-block h-px w-24 bg-line overflow-hidden">
                <motion.span
                  style={{ width: progressBar }}
                  className="absolute inset-y-0 left-0 bg-petrol"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <motion.div
            ref={railRef}
            style={{ x }}
            className="flex h-full items-center gap-8 pl-6 pr-[10vw] sm:pl-10 will-change-transform"
          >
            {services.map((s, i) => (
              <ServiceCard key={s.n} {...s} index={i} />
            ))}
          </motion.div>
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
                <motion.span
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
      </div>
    </article>
  );
}
