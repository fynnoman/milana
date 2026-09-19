"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import MagneticButton from "./MagneticButton";

const faqs = [
  {
    q: "Wie läuft die Zusammenarbeit ab?",
    a: "Nach dem Kennenlernen bekommen Sie ein Angebot mit klarem Umfang und festem Startdatum. Sobald wir uns einig sind, richte ich einen abrechnungsseitigen Zugang zu Ihrer Praxissoftware ein. Sie behalten die Hoheit über Ihre Praxis. Ich arbeite im Hintergrund, mit festen Abrechnungstagen pro Woche und einem kurzen Monatsbild.",
  },
  {
    q: "Mit welchen Praxissoftwares arbeiten Sie?",
    a: "Ich arbeite mit den gängigen Systemen, unter anderem CHARLY, DAMPSOFT DS-Win-Plus, evident, ivoris, Z1 und LinuDent. Neue Systeme lerne ich zügig ein. Wenn Sie mit Ihrer aktuellen Software unzufrieden sind, schaue ich unabhängig mit Ihnen auf Alternativen.",
  },
  {
    q: "Wie halten Sie es mit Datenschutz und Diskretion?",
    a: "Ich arbeite ausschließlich über verschlüsselte Zugänge, unterzeichne eine Vereinbarung zur Auftragsverarbeitung nach Art. 28 DSGVO und behandle Praxis- und Patientendaten vertraulich. Auf Wunsch besprechen wir das Sicherheitskonzept vorab in Ruhe.",
  },
  {
    q: "Was kostet Ihre Unterstützung?",
    a: "Das hängt vom Umfang ab. Punktuelle Fälle rechne ich im Stundensatz ab. Für die laufende Betreuung gibt es Pauschalen, die sich am monatlichen Abrechnungsvolumen orientieren. Ich lege alles offen und Sie entscheiden, was für Sie passt.",
  },
  {
    q: "Übernehmen Sie auch einzelne Fälle oder nur ganze Praxen?",
    a: "Beides. Sie können mich als externe Unterstützung für Ihre komplette Privatabrechnung buchen oder gezielt für einzelne HKP-Fälle, komplexe Reklamationen und Gutachtenverfahren. Manche Praxen holen mich einmal im Quartal für einen ruhigen Abrechnungs-Check.",
  },
  {
    q: "Wo sitzen Sie und arbeiten Sie auch mit weiter entfernten Praxen?",
    a: "Ich sitze in Saarlouis und arbeite mit Praxen deutschlandweit digital zusammen. Für ein persönliches Kennenlernen oder eine Team-Schulung komme ich gerne zu Ihnen in die Praxis.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-mist py-32 sm:py-40">
      <div className="pointer-events-none absolute inset-0 grid-lines" />

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:h-fit">
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-petrol/60" />
              Häufige Fragen
            </div>
            <h2 className="font-display mt-6 text-[clamp(48px,6vw,110px)] leading-[0.94] tracking-[-0.015em] text-navy">
              <SplitText text="Alles" italic className="italic text-petrol block" />
              <SplitText text="klar." delay={0.35} className="block" />
            </h2>
            <p className="mt-8 max-w-sm text-navy/70 text-[15px] leading-[1.75]">
              Antworten zu Zusammenarbeit, Software, Datenschutz und
              Investition. Ihre Frage ist nicht dabei? Rufen Sie mich gerne
              an, wir gehen sie gemeinsam durch.
            </p>
            <div className="mt-10">
              <MagneticButton href="#kontakt" variant="outline">
                Frage stellen <span className="arrow">→</span>
              </MagneticButton>
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            <ul className="border-t border-line">
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
    <li className="border-b border-line group">
      <button
        onClick={() => setOpen((v) => !v)}
        className="grid w-full grid-cols-[40px_1fr_44px] items-center gap-6 py-7 text-left"
        aria-expanded={open}
      >
        <span className="divider-num !text-muted">
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
          animate={{ rotate: open ? 45 : 0, backgroundColor: open ? "#2F5F96" : "rgba(255,255,255,0)" }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className={`ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border text-lg ${
            open ? "text-white border-petrol" : "text-navy/80 border-line"
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
