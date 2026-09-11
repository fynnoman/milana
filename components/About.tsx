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
  const smallImgY = useTransform(scrollYProgress, [0, 1], shouldReduce ? ["0%", "0%"] : ["18%", "-16%"]);
  const quoteX = useTransform(scrollYProgress, [0, 1], shouldReduce ? ["0%", "0%"] : ["4%", "-6%"]);

  return (
    <section id="ueber" ref={ref} className="relative overflow-hidden bg-mist/40 py-32 sm:py-40">
      {/* Riesiger Hintergrund-Serifensatz */}
      <motion.div
        style={{ x: quoteX }}
        className="pointer-events-none absolute -bottom-10 -left-4 select-none font-display italic text-[24vw] leading-none tracking-tight text-navy/[0.04] whitespace-nowrap"
      >
        seit 2010
      </motion.div>

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10">
        {/* Header row */}
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-line" />
                Über mich
              </div>
              <h2 className="font-display mt-4 text-[clamp(44px,6.6vw,118px)] leading-[0.94] tracking-[-0.015em] text-navy">
                <SplitText text="Melanie" italic className="text-petrol italic block" />
                <SplitText text="Bauer." delay={0.35} className="block" />
              </h2>
            </div>
            <div className="max-w-xs">
              <div className="eyebrow">Rolle</div>
              <div className="font-display mt-2 text-2xl text-navy leading-tight">
                Zahnärztliche Abrechnungsexpertin
              </div>
              <div className="mt-3 text-[12px] tracking-[0.06em] text-navy/60">
                ZMV · Fachwirtin für zahnärztliches Praxismanagement · Mitglied BVDPR
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Großes Portraitbild */}
          <div className="lg:col-span-7 relative">
            <Reveal>
              <div className="relative overflow-hidden rounded-md aspect-[5/6] shadow-card">
                <motion.div style={{ y: bigImgY, scale: bigImgScale }} className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1800&q=82"
                    alt="Melanie Bauer bei der Arbeit"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
                <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full bg-ivory/85 backdrop-blur px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-petrol animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.18em] text-navy">
                    Aktive Praxen · 40+
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-ivory">
                  <div>
                    <div className="eyebrow !text-ivory/70">Portrait</div>
                    <div className="font-display text-2xl mt-1">Konzentration, sichtbar gemacht.</div>
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-ivory/70">
                    01
                  </div>
                </div>
              </div>
            </Reveal>

            {/* schwebende Zertifikatskarte */}
            <Reveal delay={0.2}>
              <motion.div
                style={{ y: smallImgY }}
                className="glass absolute -bottom-14 -right-4 hidden sm:block max-w-[300px] rounded-md p-6"
              >
                <div className="eyebrow">Zertifizierung</div>
                <div className="mt-3 font-display text-xl text-navy leading-tight">
                  Zertifizierte Abrechnungsfachkraft (ZMV)
                </div>
                <div className="hairline mt-4" />
                <div className="mt-4 text-[12px] tracking-[0.06em] text-navy/70">
                  Mitglied · Bundesverband der zahnmedizinischen Verwaltungsassistentinnen
                </div>
              </motion.div>
            </Reveal>
          </div>

          {/* Right column: Blockquote + Copy + Meta */}
          <div className="lg:col-span-5">
            <Reveal>
              <blockquote className="font-display italic text-[clamp(30px,3.4vw,44px)] leading-[1.1] text-navy tracking-[-0.005em]">
                „Präzise Abrechnung ist kein Talent. Sie ist eine Frage der
                Aufmerksamkeit, die man einer Praxis bereit ist zu schenken."
              </blockquote>
              <div className="eyebrow mt-6">Persönlich · Melanie Bauer</div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="hairline my-12" />
              <p className="text-[16px] leading-[1.85] text-navy/80">
                Angefangen als Zahnmedizinische Fachangestellte, weitergebildet
                zur zertifizierten Abrechnungsfachkraft und Fachwirtin für
                zahnärztliches Praxismanagement. Heute selbstständig für Praxen
                im gesamten DACH-Raum.
              </p>
              <p className="mt-6 text-[15px] leading-[1.85] text-navy/70">
                Ich habe keine Standardpakete. Sie bekommen eine feste
                Ansprechpartnerin, die Ihre Praxis kennt, Ihre Handschrift
                lernt und diskret im Hintergrund arbeitet.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8">
                {[
                  { k: "2010", label: "Start Selbstständigkeit" },
                  { k: "40+", label: "Aktive Praxen" },
                  { k: "3 Tage", label: "Ø Bearbeitungszeit" },
                  { k: "100%", label: "Diskretion" },
                ].map((it) => (
                  <div key={it.label} className="border-t border-line/70 pt-4">
                    <div className="font-display text-[34px] leading-none text-navy">
                      {it.k}
                    </div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-navy/60">
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
