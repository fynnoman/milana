"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import MagneticButton from "./MagneticButton";

const faqs = [
  {
    q: "Wie läuft die Zusammenarbeit konkret ab?",
    a: "Nach dem Erstgespräch bekommen Sie ein transparentes Angebot mit klarem Umfang und festem Startdatum. Nach Vertragsunterzeichnung erhalte ich einen abrechnungsseitigen Zugang zu Ihrer Praxissoftware. Sie behalten die Hoheit über Ihre Praxis. Ich arbeite im Hintergrund, mit festen Abrechnungstagen pro Woche und monatlichem Kurzreporting.",
  },
  {
    q: "Mit welchen Praxissoftwares arbeiten Sie?",
    a: "Ich arbeite mit den gängigen Systemen im DACH-Raum, unter anderem CHARLY, DAMPSOFT DS-Win-Plus, evident, ivoris, Z1 und LinuDent. Neue Systeme lerne ich zügig ein. Falls Sie mit Ihrer aktuellen Software unzufrieden sind, berate ich Sie unabhängig zur Auswahl.",
  },
  {
    q: "Wie stellen Sie Datenschutz und Diskretion sicher?",
    a: "Ich arbeite ausschließlich über verschlüsselte Zugänge, unterzeichne eine Vereinbarung zur Auftragsverarbeitung nach Art. 28 DSGVO und behandle sämtliche Praxis- und Patientendaten mit höchster Vertraulichkeit. Auf Wunsch erhalten Sie ein detailliertes Sicherheitskonzept vor Vertragsabschluss.",
  },
  {
    q: "Was kostet Ihre Unterstützung?",
    a: "Das hängt vom Umfang ab. Punktuelle Reklamationen und Fallberatungen rechne ich im Stundensatz ab. Für laufende Betreuung gibt es Pauschalen ab dem monatlichen Abrechnungsvolumen. In den meisten Fällen refinanziert sich die Zusammenarbeit bereits im ersten Quartal durch nicht mehr verlorene Positionen.",
  },
  {
    q: "Übernehmen Sie auch einzelne Fälle oder nur ganze Praxen?",
    a: "Beides. Sie können mich als externe Abrechnungsstelle für Ihre komplette Privatabrechnung buchen oder gezielt für einzelne HKP-Fälle, komplexe Reklamationen und Gutachtenverfahren. Manche Praxen holen mich nur einmal im Quartal für einen strukturierten Abrechnungs-Check.",
  },
  {
    q: "In welchem Umkreis arbeiten Sie?",
    a: "Ich betreue Praxen im gesamten DACH-Raum. Vor-Ort-Termine sind in Deutschland und der Schweiz möglich, laufende Betreuung erfolgt digital. Auf Wunsch komme ich für ein Kick-off oder einen Team-Schulungstag persönlich in Ihre Praxis.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-mist/40 py-32 sm:py-40">
      <div className="pointer-events-none absolute inset-0 grid-lines" />

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:h-fit">
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-line" />
              Häufige Fragen
            </div>
            <h2 className="font-display mt-6 text-[clamp(48px,6vw,110px)] leading-[0.94] tracking-[-0.015em] text-navy">
              <SplitText text="Alles" italic className="italic text-petrol block" />
              <SplitText text="klar." delay={0.35} className="block" />
            </h2>
            <p className="mt-8 max-w-sm text-navy/70 text-[15px] leading-[1.75]">
              Antworten zu Zusammenarbeit, Software, Datenschutz und
              Investition. Sonst gerne direkt fragen. Ich melde mich innerhalb
              eines Werktages.
            </p>
            <div className="mt-10">
              <MagneticButton href="#kontakt" variant="outline">
                Frage stellen <span className="arrow">→</span>
              </MagneticButton>
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            <ul className="border-t border-line/70">
              {faqs.map((f, i) => (
                <FaqItem key={f.q} index={i} {...f} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-line/70 group">
      <button
        onClick={() => setOpen((v) => !v)}
        className="grid w-full grid-cols-[40px_1fr_44px] items-center gap-6 py-7 text-left"
        aria-expanded={open}
      >
        <span className="divider-num !text-steel/80">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`font-display text-[22px] sm:text-[28px] leading-tight transition-colors ${
            open ? "text-petrol" : "text-navy group-hover:text-petrol/80"
          }`}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0, backgroundColor: open ? "#304A58" : "rgba(255,255,255,0)" }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className={`ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border text-lg ${
            open ? "text-ivory border-petrol" : "text-navy/80 border-line/80"
          }`}
          aria-hidden
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-16 pr-14 max-w-2xl text-[15px] leading-[1.85] text-navy/75">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
