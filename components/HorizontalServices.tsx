"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    n: "01",
    title: "Privatabrechnung",
    lead: "GOZ · GOÄ · BEB · BEL II",
    body:
      "Vollständige Privatabrechnung mit sauberer Begründung, Analogpositionen und Materialkosten. Sie geben ab, ich schaue jede Position an. Keine Sammelpauschalen.",
    points: ["GOZ inkl. §2-Begründungen", "Analog- und Verlangensleistungen", "Fremd- und Eigenlabor"],
    accent: "Kernstück",
  },
  {
    n: "02",
    title: "KZV-Abrechnung",
    lead: "BEMA · Quartalsabschluss · Gutachten",
    body:
      "Quartalsweise BEMA-Abrechnung inklusive PAR, ZE und KBR. Gutachtenverfahren werden strukturiert vorbereitet, begleitet und bei Bedarf mit Widerspruch weitergeführt.",
    points: ["PAR- und ZE-Abrechnung", "Gutachten-Dossiers", "Widerspruchsverfahren"],
    accent: "Vertragszahnärztlich",
  },
  {
    n: "03",
    title: "HKP-Erstellung",
    lead: "Heil- und Kostenpläne",
    body:
      "Prüfung, Erstellung und Nachbearbeitung von Heil- und Kostenplänen. Für ZE, PAR, KFO und KBR. Inkl. Alternativpläne und verständliche Patientenerklärungen.",
    points: ["Alternativpläne", "Vor- und Gegenrechnung", "Patientenkommunikation"],
    accent: "Planungssicher",
  },
  {
    n: "04",
    title: "Reklamations­management",
    lead: "Erstattungsstellen · Beihilfe · PKV",
    body:
      "Widersprüche gegen unbegründete Rechnungskürzungen. Fachlich fundiert, mit Rechtsprechung belegt, im Namen der Praxis. Aus Erfahrung eher stille als laute Klärung.",
    points: ["Prüfberichte lesen", "Nachbegründungen", "Widerspruch bis Klage"],
    accent: "Streitfrei",
  },
  {
    n: "05",
    title: "Praxisberatung",
    lead: "Prozesse · Software · Team",
    body:
      "Analyse Ihrer Abrechnungsprozesse, Software-Setup, Dokumentationsstandards und Übergaben zwischen Behandler, Assistenz und Abrechnung. Ohne Beraterdeck.",
    points: ["Prozess-Audit", "Software-Auswahl", "Schnittstellen"],
    accent: "Strategisch",
  },
  {
    n: "06",
    title: "Team-Schulung",
    lead: "Fortbildung für Praxisteams",
    body:
      "Kompaktkurse und Sprechstunden für Verwaltung und ZFAs. GOZ, BEMA, HKP, Fallbesprechungen. Auf Wunsch vor Ort mit Zertifikat oder als monatliche Praxisstunde.",
    points: ["GOZ-Kompaktkurs", "BEMA für Einsteiger", "Monats-Sprechstunde"],
    accent: "Weiterbildend",
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
    <section id="leistungen" ref={outerRef} className="relative h-[520vh] bg-ivory">
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden">
        {/* Header */}
        <div className="relative z-10 shrink-0 border-b border-line/40 bg-ivory/70 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1500px] flex-wrap items-end justify-between gap-4 px-6 sm:px-10 pt-24 pb-6">
            <div>
              <div className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-line" />
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

        {/* Rail */}
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

        {/* Footer counter */}
        <div className="relative z-10 shrink-0 border-t border-line/40 bg-ivory/70 backdrop-blur-md">
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
            <div className="hidden md:flex items-center gap-6 divider-num !text-navy/50">
              <span>Präzise</span>
              <span>Effizient</span>
              <span>Prüfsicher</span>
              <span>Persönlich</span>
            </div>
          </div>
        </div>
      </div>
    </section>
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
}: (typeof services)[number] & { index: number }) {
  const isDark = index % 2 === 1;
  return (
    <article
      className={`relative flex h-full max-h-[640px] w-[85vw] max-w-[680px] shrink-0 flex-col justify-between overflow-hidden rounded-lg p-8 sm:p-12 ${
        isDark ? "bg-navy text-ivory" : "glass text-navy"
      }`}
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-petrol/20 blur-3xl" />

      <div className="flex items-start justify-between">
        <div className={`divider-num ${isDark ? "!text-ivory/60" : ""}`}>{n}</div>
        <div className={`eyebrow ${isDark ? "!text-ivory/70" : ""}`}>{accent}</div>
      </div>

      <div className="mt-4">
        <h3
          className={`font-display text-[clamp(34px,4.4vw,68px)] leading-[0.98] tracking-tight ${
            isDark ? "text-ivory" : "text-navy"
          }`}
        >
          {title}
        </h3>
        <div
          className={`eyebrow mt-5 !text-[10px] ${
            isDark ? "!text-ivory/70" : "!text-steel"
          }`}
        >
          {lead}
        </div>
      </div>

      <div>
        <p
          className={`max-w-md text-[14px] leading-[1.75] ${
            isDark ? "text-ivory/80" : "text-navy/75"
          }`}
        >
          {body}
        </p>
        <ul className="mt-6 grid gap-2">
          {points.map((p) => (
            <li
              key={p}
              className={`flex items-center gap-3 text-[12px] tracking-[0.04em] ${
                isDark ? "text-ivory/85" : "text-navy/75"
              }`}
            >
              <span className={`h-1 w-3 shrink-0 ${isDark ? "bg-mist" : "bg-petrol"}`} />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
