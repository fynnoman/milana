"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import MagneticButton from "./MagneticButton";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bigImgY = useTransform(scrollYProgress, [0, 1], shouldReduce ? ["0%", "0%"] : ["-12%", "12%"]);
  const bigImgScale = useTransform(scrollYProgress, [0, 1], [1, shouldReduce ? 1 : 1.12]);
  const quoteX = useTransform(scrollYProgress, [0, 1], shouldReduce ? ["0%", "0%"] : ["4%", "-6%"]);

  return (
    <section id="ueber" ref={ref} className="relative overflow-hidden bg-mist py-32 sm:py-40">
      <motion.div
        style={{ x: quoteX }}
        className="pointer-events-none absolute -bottom-10 -left-4 select-none font-display italic text-[24vw] leading-none tracking-tight text-navy/[0.04] whitespace-nowrap"
      >
        Milana
      </motion.div>

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-petrol/60" />
                Über mich
              </div>
              <h2 className="font-display mt-4 text-[clamp(44px,6.6vw,118px)] leading-[0.94] tracking-[-0.015em] text-navy">
                <SplitText text="Milana" italic className="text-petrol italic block" />
                <SplitText text="Kollmann." delay={0.35} className="block" />
              </h2>
            </div>
            <div className="max-w-xs">
              <div className="eyebrow">Rolle</div>
              <div className="font-display mt-2 text-2xl text-navy leading-tight">
                Zahnärztliche Abrechnung
              </div>
              <div className="mt-3 text-[12px] tracking-[0.06em] text-navy/60">
                Feste Ansprechpartnerin für Ihre Praxis
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 relative">
            <Reveal>
              <div className="relative overflow-hidden rounded-md aspect-[5/6] shadow-card">
                <motion.div style={{ y: bigImgY, scale: bigImgScale }} className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1800&q=82"
                    alt="Ruhiger Arbeitsplatz"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <div className="eyebrow !text-white/75">Arbeitshaltung</div>
                    <div className="font-display text-2xl mt-1">Ruhe und Sorgfalt.</div>
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/70">
                    01
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <blockquote className="font-display italic text-[clamp(30px,3.4vw,44px)] leading-[1.1] text-navy tracking-[-0.005em]">
                „Präzise Abrechnung ist eine Frage der Aufmerksamkeit.
                Und der Zeit, die man Ihrer Praxis bereit ist zu schenken."
              </blockquote>
              <div className="eyebrow mt-6">Milana Kollmann</div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="hairline my-12" />
              <p className="text-[16px] leading-[1.85] text-navy/80">
                Mein Weg führte über die zahnmedizinische Praxis in die
                Abrechnung. Heute unterstütze ich Praxen von Saarlouis aus.
                Digital, ruhig, und immer als feste Ansprechpartnerin, die
                Ihre Praxis kennt.
              </p>
              <p className="mt-6 text-[15px] leading-[1.85] text-navy/70">
                Ich arbeite nicht mit Standardpaketen. Wir schauen gemeinsam,
                was Ihre Praxis braucht. Sie behalten die Hoheit über alles,
                ich übernehme das, was ich für Sie am besten kann.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-14 grid gap-x-6 gap-y-6">
                {[
                  {
                    k: "Persönlich",
                    label: "Sie sprechen immer mit mir. Keine Weiterleitung.",
                  },
                  {
                    k: "Präzise",
                    label: "Jede Position wird geprüft. Nichts pauschal.",
                  },
                  {
                    k: "Zuverlässig",
                    label: "Feste Turnusse, verbindliche Zusagen.",
                  },
                ].map((it) => (
                  <div key={it.k} className="border-t border-line pt-4">
                    <div className="font-display italic text-[26px] leading-none text-petrol">
                      {it.k}
                    </div>
                    <div className="mt-2 text-[13px] tracking-[0.02em] text-navy/70">
                      {it.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-14 flex flex-wrap gap-4">
                <MagneticButton href="#kontakt" variant="primary">
                  Persönlich sprechen <span className="arrow">→</span>
                </MagneticButton>
                <MagneticButton href="#ablauf" variant="ghost">
                  Ablauf verstehen <span className="arrow">→</span>
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
