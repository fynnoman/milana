"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplitText from "./SplitText";
import MagneticButton from "./MagneticButton";

const serviceTags = [
  "Privatabrechnung",
  "KZV",
  "HKP",
  "Reklamationen",
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

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-white"
    >
      {/* Vollflächiges Bild rechts */}
      <motion.div
        style={{ y: photoY }}
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 1.6, ease: [0.77, 0, 0.175, 1], delay: 0.15 }}
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[58%] overflow-hidden"
      >
        <motion.div style={{ scale: photoScale }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2200&q=85"
            alt="Ruhiger Arbeitsplatz einer Zahnarztpraxis"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-white/10 lg:via-white/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
      </motion.div>

      {/* Weiches Ambient-Licht */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-mist blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[520px] rounded-full bg-petrol/10 blur-3xl" />

      {/* RUNDES LOGO oben rechts in der Ecke */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="hidden sm:block absolute top-24 right-6 sm:top-28 sm:right-10 z-20 w-[130px] sm:w-[160px] aspect-square overflow-hidden rounded-full ring-1 ring-line bg-white shadow-card"
      >
        <img
          src="/logo.png"
          alt="Milana Kollmann · Zahnärztliche Abrechnung"
          className="h-full w-full object-cover select-none"
        />
      </motion.div>

      {/* CONTENT-BLOCK: Chip + Eyebrow + Heading + Copy + Buttons + Pillars (alles links) */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col px-6 sm:px-10 pt-28 pb-16"
      >
        <div className="flex flex-col max-w-[92%] lg:max-w-[78%]">
          <h1 className="font-display leading-[1.25] tracking-[-0.025em] text-navy">
            <span className="block overflow-hidden pb-[0.05em]">
              <SplitText text="Ihre" className="block text-[clamp(52px,10vw,170px)]" delay={0.15} eager />
            </span>
            <span className="block overflow-hidden pb-[0.28em]">
              <SplitText text="Abrechnung." className="block text-[clamp(52px,10vw,170px)]" delay={0.35} eager />
            </span>
          </h1>

          <div className="font-display leading-[0.86] tracking-[-0.025em] mt-6">
            <span className="block overflow-hidden pb-[0.15em]">
              <SplitText
                text="Persönlich betreut."
                italic
                className="block text-[clamp(40px,8vw,130px)] italic text-petrol pl-[0.5em]"
                delay={0.7}
                eager
              />
            </span>
          </div>

          {/* Signatur */}
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
              className="block h-px w-20 bg-petrol origin-left"
            />
            <span className="font-display italic text-[22px] text-navy/85">
              Milana Kollmann
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.75, ease: [0.23, 1, 0.32, 1] }}
            className="mt-10 max-w-xl text-[16px] leading-[1.75] text-navy/80"
          >
            Schön, dass Sie da sind. Ich unterstütze Zahnarztpraxen bei allem
            rund um die Abrechnung. GOZ, BEMA, HKP, Reklamationen. In Ruhe,
            mit Blick fürs Detail und immer als feste Ansprechpartnerin.
            Sie behandeln Ihre Patienten. Ich kümmere mich um die Zahlen.
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
                className="rounded-full border border-petrol/30 bg-white/70 backdrop-blur px-3.5 py-1.5 text-[11px] tracking-[0.14em] uppercase text-navy/80"
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
              Kennenlernen <span className="arrow">→</span>
            </MagneticButton>
            <MagneticButton href="#leistungen" variant="ghost">
              Leistungen ansehen <span className="arrow">→</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Fußzeile: drei Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.3, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
        >
          <div className="soft-line max-w-full" />
          <div className="mt-6 grid grid-cols-3 gap-x-8">
            {[
              { k: "Persönlich", label: "Feste Ansprechpartnerin" },
              { k: "Präzise", label: "Blick fürs Detail" },
              { k: "Zuverlässig", label: "Feste Turnusse, klare Zusagen" },
            ].map((it) => (
              <div key={it.k} className="flex flex-col">
                <span className="font-display italic text-[clamp(24px,2.6vw,34px)] leading-none text-petrol">
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
    </section>
  );
}
