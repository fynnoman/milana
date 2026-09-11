"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplitText from "./SplitText";
import MagneticButton from "./MagneticButton";

const serviceTags = [
  "Privatabrechnung",
  "KZV",
  "HKP",
  "Reklamation",
  "Praxisberatung",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduce ? "0%" : "12%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.02, shouldReduce ? 1.02 : 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduce ? "0%" : "-14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const monogramX = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduce ? "0%" : "-14%"]);
  const runningStripX = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduce ? "0%" : "-30%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-ivory"
    >
      {/* Full-bleed Portrait rechts */}
      <motion.div
        style={{ y: photoY }}
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 1.6, ease: [0.77, 0, 0.175, 1], delay: 0.15 }}
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[62%] overflow-hidden"
      >
        <motion.div style={{ scale: photoScale }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2200&q=85"
            alt="Warme Praxis-Arbeitsplatzatmosphäre"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>
        {/* Text-Lesbarkeits-Verlauf von links */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/70 to-transparent lg:from-ivory lg:via-ivory/55 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory/50 via-transparent to-transparent" />
        {/* Warme Gold-Tönung */}
        <div className="absolute inset-0 bg-gradient-to-tr from-navy/25 via-transparent to-gold/15 mix-blend-multiply" />
        {/* Vignette rechts */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,transparent_0%,rgba(24,46,58,0.15)_75%)]" />
      </motion.div>

      {/* Warme Ambient-Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-mist/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[520px] rounded-full bg-gold-soft/25 blur-3xl" />

      {/* Massives MB-Wasserzeichen */}
      <motion.div
        aria-hidden
        style={{ x: monogramX }}
        className="pointer-events-none absolute -top-[4vh] -left-[3vw] select-none font-display italic text-[26vw] leading-[0.82] tracking-tight text-navy/[0.05] lg:text-[19vw]"
      >
        MB
      </motion.div>

      {/* Vertical Est.-Text ganz rechts */}
      <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.23, 1, 0.32, 1] }}
          className="text-[10px] uppercase tracking-[0.32em] text-ivory/90 [writing-mode:vertical-rl]"
        >
          Est. 2010 · Zahnärztliche Abrechnung · München
        </motion.span>
        <motion.span
          animate={{ scaleY: [1, 1.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block h-16 w-px bg-gold origin-center"
        />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col px-6 sm:px-10 pt-28 pb-20"
      >
        {/* Top row: Chip + Rating */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="glass flex items-center gap-3 rounded-full px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-navy/85">
              Herzlich willkommen · Verfügbar Q3 2026
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.48, ease: [0.23, 1, 0.32, 1] }}
            className="glass flex items-center gap-3 rounded-full px-4 py-2"
          >
            <div className="flex items-center gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden>
                  <path d="M12 2l3.09 6.26 6.91 1-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 6.91-1L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-[11px] uppercase tracking-[0.18em] text-navy/85">
              4,9 · 27 Praxen
            </span>
          </motion.div>
        </div>

        {/* Center: display type */}
        <div className="flex-1 flex flex-col justify-center pt-14 pb-10 max-w-[92%] lg:max-w-[78%]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="eyebrow flex items-center gap-4"
          >
            <span className="h-px w-10 bg-gold" />
            MB · Zahnärztliche Abrechnungsexpertin
          </motion.div>

          <h1 className="font-display mt-8 leading-[0.86] tracking-[-0.025em] text-navy">
            <span className="block overflow-hidden pb-[0.05em]">
              <SplitText text="Ihre" className="block text-[clamp(64px,13vw,220px)]" delay={0.15} />
            </span>
            <span className="block overflow-hidden pb-[0.05em] mt-[-0.02em]">
              <SplitText text="Abrechnung." className="block text-[clamp(64px,13vw,220px)]" delay={0.35} />
            </span>
            <span className="block overflow-hidden pb-[0.05em] mt-[-0.02em]">
              <SplitText
                text="In besten Händen."
                italic
                className="block text-[clamp(50px,10vw,170px)] italic text-gold pl-[0.5em]"
                delay={0.7}
              />
            </span>
          </h1>

          {/* Signature-Zeile mit Gold */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-10 flex items-center gap-5"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 1.6, ease: [0.77, 0, 0.175, 1] }}
              className="block h-px w-20 bg-gold origin-left"
            />
            <span className="font-display italic text-[22px] text-navy/85">
              Melanie Bauer
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-navy/50">
              ZMV · Fachwirtin
            </span>
          </motion.div>

          {/* Copy + Tags + CTA */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.75, ease: [0.23, 1, 0.32, 1] }}
            className="mt-10 max-w-xl text-[16px] leading-[1.75] text-navy/80"
          >
            Herzlich willkommen. Seit über 15 Jahren begleite ich Zahnarztpraxen
            im gesamten DACH-Raum bei GOZ, BEMA und Praxisverwaltung.
            Persönlich, präzise, mit Freude am Detail. Sie behandeln. Ich rechne
            ab.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.9 }}
            className="mt-7 flex flex-wrap gap-2 max-w-lg"
          >
            {serviceTags.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.95 + i * 0.05, ease: [0.23, 1, 0.32, 1] }}
                className="rounded-full border border-gold/40 bg-white/70 backdrop-blur px-3.5 py-1.5 text-[11px] tracking-[0.14em] uppercase text-navy/80"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.1, ease: [0.23, 1, 0.32, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#kontakt" variant="primary">
              Erstgespräch <span className="arrow">→</span>
            </MagneticButton>
            <MagneticButton href="#leistungen" variant="ghost">
              Leistungen ansehen <span className="arrow">→</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Bottom band: KPIs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.3, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
        >
          <div className="gold-line max-w-full" />
          <div className="mt-6 grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-x-8">
            {[
              { k: "15+", label: "Jahre Erfahrung" },
              { k: "40+", label: "Betreute Praxen" },
              { k: "98%", label: "Erstattungsquote" },
              { k: "< 2 T.", label: "Antwortzeit" },
            ].map((it) => (
              <div key={it.label} className="flex flex-col">
                <span className="font-display text-[clamp(30px,3.4vw,44px)] leading-none text-navy">
                  {it.k}
                </span>
                <span className="mt-2 text-[10px] uppercase tracking-[0.18em] text-navy/55">
                  {it.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Schwebendes Zitat auf Foto (rechts) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.23, 1, 0.32, 1] }}
        className="hidden lg:block absolute right-[7vw] top-[38vh] max-w-[300px] z-20"
      >
        <div className="glass rounded-lg p-5">
          <div className="flex items-start justify-between">
            <svg className="h-4 w-4 text-gold" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3v2c3 0 5-2 5-5V9a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3v2c3 0 5-2 5-5V9a2 2 0 0 0-2-2Z" />
            </svg>
            <span className="divider-num !text-navy/60">01</span>
          </div>
          <p className="font-display italic mt-3 text-[16px] leading-[1.4] text-navy">
            „Reklamationsvolumen halbiert, Feierabend ist wieder Feierabend."
          </p>
          <div className="hairline mt-4 max-w-[60px]" />
          <div className="mt-3 text-[10px] uppercase tracking-[0.14em] text-navy/60">
            Dr. med. dent. K. Reuter · München
          </div>
        </div>
      </motion.div>

      {/* Schwebende Info-Karte auf Foto (unten rechts) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.75, ease: [0.23, 1, 0.32, 1] }}
        className="hidden lg:flex absolute right-[7vw] bottom-[18vh] max-w-[300px] z-20 items-center gap-4 glass rounded-lg p-4"
      >
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/30">
          <img src="/logo.jpeg" alt="MB Logo" className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-navy/55">
            Externe Abrechnungsstelle
          </div>
          <div className="font-display italic mt-1 text-[18px] leading-tight text-navy">
            Persönlich betreut.
          </div>
        </div>
      </motion.div>

      {/* Running Marquee unten */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="pointer-events-none absolute bottom-3 left-0 right-0 z-30 overflow-hidden py-1"
      >
        <motion.div
          style={{ x: runningStripX }}
          className="flex whitespace-nowrap gap-10 text-[10px] uppercase tracking-[0.3em] text-navy/45"
        >
          {Array.from({ length: 3 }).flatMap(() => [
            "GOZ · Privatabrechnung",
            "BEMA · KZV",
            "HKP · Heil- und Kostenpläne",
            "Reklamationsverfahren",
            "Praxisberatung",
            "Team-Schulung",
            "DSGVO Art. 28",
            "ZMV zertifiziert",
          ]).map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t}
              <span className="inline-block h-1 w-1 rounded-full bg-gold/70" />
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
