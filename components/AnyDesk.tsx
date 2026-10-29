"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import MagneticButton from "./MagneticButton";

const steps = [
  {
    n: "01",
    title: "Herunterladen",
    body:
      "Sie laden AnyDesk kostenlos über die offizielle Seite auf Ihren Praxisrechner und starten die Installation. Dauert wenige Minuten, keine Anmeldung nötig.",
  },
  {
    n: "02",
    title: "Verbindung herstellen",
    body:
      "Nach dem Start zeigt AnyDesk Ihnen Ihre persönliche Arbeitsplatznummer. Diese übermitteln Sie mir kurz telefonisch, bevor wir uns zum vereinbarten Termin verbinden.",
  },
  {
    n: "03",
    title: "Fernwartung starten",
    body:
      "Sie bestätigen meine Verbindungsanfrage mit einem Klick. Ab diesem Moment sehen Sie jede Aktion live auf Ihrem Bildschirm und können die Sitzung jederzeit beenden.",
  },
];

export default function AnyDesk() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const wordX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduce ? ["0%", "0%"] : ["-4%", "4%"]
  );

  return (
    <section
      id="anydesk"
      ref={ref}
      className="relative overflow-hidden bg-mist py-32 sm:py-40"
    >
      <m.div
        style={{ x: wordX }}
        aria-hidden
        className="pointer-events-none absolute -top-6 -left-8 select-none font-display italic text-[22vw] leading-[0.85] tracking-tight text-navy/[0.04] whitespace-nowrap"
      >
        Fernwartung
      </m.div>

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-petrol/60" />
                Fernwartung
              </div>
              <h2 className="font-display mt-4 text-[clamp(44px,6.2vw,110px)] leading-[0.94] tracking-[-0.015em] text-navy">
                <SplitText text="AnyDesk." className="block" />
                <SplitText
                  text="Sicher, direkt."
                  italic
                  delay={0.35}
                  className="italic text-petrol block"
                />
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[15px] leading-[1.85] text-navy/75 max-w-md">
                Die Abrechnung läuft remote direkt in Ihrer Praxissoftware.
                Dafür nutze ich AnyDesk, eine etablierte Fernwartungssoftware
                mit verschlüsselter Verbindung. Sie behalten die volle
                Kontrolle, sehen jede Aktion live und entscheiden selbst,
                wann die Sitzung endet.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton
                  href="https://anydesk.com/de/downloads"
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AnyDesk herunterladen <span className="arrow">↗</span>
                </MagneticButton>
                <MagneticButton href="#kontakt" variant="ghost">
                  Termin abstimmen <span className="arrow">→</span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="hairline my-20" />

        <div className="grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="h-full flex flex-col">
                <div className="divider-num">{s.n}</div>
                <div className="font-display mt-3 text-[clamp(54px,6vw,96px)] leading-[0.85] italic text-petrol/90 tracking-tight">
                  {i + 1}
                </div>
                <h3 className="font-display mt-6 text-[clamp(26px,2.4vw,36px)] leading-tight text-navy">
                  {s.title}
                </h3>
                <p className="mt-5 text-[14px] leading-[1.8] text-navy/75 max-w-sm">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-24 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="eyebrow !text-navy/60 flex items-center gap-3">
                <span className="h-px w-8 bg-petrol/60" />
                Sicherheit
              </div>
              <div className="font-display mt-5 text-[clamp(26px,2.6vw,38px)] italic text-petrol leading-tight">
                Verschlüsselt, nachvollziehbar.
              </div>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-y-5 sm:grid-cols-2 sm:gap-x-10">
                {[
                  {
                    k: "Verschlüsselte Verbindung",
                    label:
                      "Jede Sitzung läuft über eine verschlüsselte Verbindung nach aktuellem Standard.",
                  },
                  {
                    k: "Nur mit Ihrer Freigabe",
                    label:
                      "Ich verbinde mich erst, wenn Sie die Anfrage am Bildschirm bestätigen.",
                  },
                  {
                    k: "Sitzung jederzeit beenden",
                    label:
                      "Mit einem Klick ist der Fernzugriff beendet, auch während der Arbeit.",
                  },
                  {
                    k: "Keine Dauerzugriffe",
                    label:
                      "Keine dauerhaft offenen Verbindungen. Jede Sitzung wird neu angefragt.",
                  },
                ].map((it) => (
                  <li key={it.k} className="border-t border-line pt-4">
                    <div className="font-display italic text-[20px] leading-tight text-navy">
                      {it.k}
                    </div>
                    <div className="mt-2 text-[13px] tracking-[0.02em] text-navy/70 leading-[1.6]">
                      {it.label}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-[12px] tracking-[0.02em] text-navy/55 leading-[1.7] max-w-xl">
                Hinweis: Fernzugriff sollte grundsätzlich nur vertrauenswürdigen
                Personen gewährt werden. AnyDesk ist eine international
                etablierte Software; die Nutzung in Ihrer Praxis stimmen wir
                vor dem ersten Termin individuell ab.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
