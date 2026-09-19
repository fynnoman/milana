"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Kennenlernen",
    subtitle: "Verstehen",
    body:
      "Ein ruhiges Erstgespräch am Telefon oder per Video. Sie erzählen mir von Ihrer Praxis, Ihrer Software und Ihren offenen Punkten. Danach spüren wir beide, ob die Chemie stimmt.",
    time: "Etwa 30 Minuten",
    detail: ["Vorbesprechung", "Ist-Analyse", "Chemie-Check"],
  },
  {
    n: "02",
    title: "Umfang und Angebot",
    subtitle: "Beziffern",
    body:
      "Ich sichte anonymisierte Beispielrechnungen und Ihren aktuellen Ablauf. Sie bekommen ein Angebot mit klarem Umfang, transparentem Preis und einem festen Startdatum.",
    time: "3 bis 5 Werktage",
    detail: ["Prozess-Sichtung", "Umfangsdefinition", "Preistransparenz"],
  },
  {
    n: "03",
    title: "Übergabe und Einrichtung",
    subtitle: "Einrichten",
    body:
      "Zugänge, DSGVO-Vereinbarung, Softwareanbindung. Ich richte alles in Ruhe ein, teste an Musterdaten und stimme mich mit Ihrem Team ab. Ihr Praxisalltag läuft parallel weiter.",
    time: "1 bis 2 Wochen",
    detail: ["AVV nach Art. 28", "Software-Setup", "Team-Onboarding"],
  },
  {
    n: "04",
    title: "Laufende Betreuung",
    subtitle: "Führen",
    body:
      "Feste Abrechnungstage pro Woche, klare Ansprechzeiten, ein kurzes Monatsbild. Sie wissen jederzeit, wo wir stehen und was in Arbeit ist. Ruhig, verlässlich, planbar.",
    time: "Ab sofort",
    detail: ["Feste Turnusse", "Monatsbild", "Direkte Leitung"],
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);
  const numberX = useTransform(scrollYProgress, [0, 1], shouldReduce ? ["0%", "0%"] : ["4%", "-4%"]);

  return (
    <section id="ablauf" ref={ref} className="relative overflow-hidden py-32 sm:py-40 bg-white">
      <motion.div
        style={{ x: numberX }}
        aria-hidden
        className="pointer-events-none absolute -top-4 -right-8 select-none font-display italic text-[26vw] leading-[0.85] tracking-tight text-navy/[0.035] whitespace-nowrap"
      >
        Ablauf
      </motion.div>

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-petrol/60" />
                Ablauf
              </div>
              <h2 className="font-display mt-4 text-[clamp(40px,5.5vw,88px)] leading-[0.98] text-navy max-w-3xl">
                Vier Schritte.
                <span className="italic text-petrol"> Keine Überraschung.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-[14px] leading-[1.7] text-navy/70">
                Vom ersten Kennenlernen bis zur laufenden Betreuung. Sie
                wissen jederzeit, wo wir stehen und was als Nächstes kommt.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-24 grid grid-cols-1 gap-24">
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-line sm:left-[calc(30%-1px)]" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="pointer-events-none absolute left-4 top-0 h-full w-px origin-top bg-petrol sm:left-[calc(30%-1px)]"
          />

          {steps.map((s, i) => (
            <ProcessStep key={s.n} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  return (
    <Reveal>
      <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-[30%_1fr]">
        <div className="relative pl-12 sm:pl-0">
          <div className="absolute top-4 -left-2 sm:left-auto sm:right-0 sm:translate-x-1/2 h-4 w-4 rounded-full border border-petrol bg-white z-[1]">
            <div className="absolute inset-1 rounded-full bg-petrol" />
          </div>
          <div className="sm:pr-16">
            <div className="divider-num">{step.n} · {step.time}</div>
            <div className="font-display mt-3 text-[clamp(58px,7vw,120px)] leading-[0.85] italic text-petrol/95 tracking-tight">
              {index + 1}
            </div>
            <div className="mt-3 eyebrow !text-navy">
              {step.subtitle}
            </div>
          </div>
        </div>

        <div className="pl-12 sm:pl-16">
          <h3 className="font-display text-[clamp(32px,3.6vw,52px)] leading-[1.05] text-navy tracking-[-0.005em]">
            {step.title}
          </h3>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.85] text-navy/75">
            {step.body}
          </p>
          <div className="hairline my-8 max-w-[100px]" />
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {step.detail.map((d) => (
              <li key={d} className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-navy/60">
                <span className="h-1 w-1 rounded-full bg-petrol" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
