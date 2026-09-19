"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplitText from "./SplitText";

const pillars = [
  {
    k: "Persönlich",
    lead: "Feste Ansprechpartnerin",
    body:
      "Sie schreiben oder rufen an, ich hebe ab. Kein Team dazwischen, keine Nummer im Callcenter. Ich lerne Ihre Praxis kennen und bleibe an Ihrer Seite.",
  },
  {
    k: "Präzise",
    lead: "Blick fürs Detail",
    body:
      "Jede Position wird angesehen. Analogleistungen, §2-Begründungen, Materialkosten. Nichts wird pauschal verbucht, nichts geht unter.",
  },
  {
    k: "Zuverlässig",
    lead: "Feste Turnusse und klare Zusagen",
    body:
      "Verbindliche Abrechnungstage, klare Ansprechzeiten und ein kurzes Monatsbild. Sie wissen jederzeit, wo Ihre Abrechnung steht.",
  },
];

export default function Pillars() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bigWordX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduce ? ["0%", "0%"] : ["6%", "-16%"]
  );

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-deep" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_15%_20%,rgba(47,95,150,0.35),transparent_45%)]" />

      <motion.div
        style={{ x: bigWordX }}
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-4 select-none font-display italic text-[24vw] leading-[0.85] tracking-tight text-white/[0.05] whitespace-nowrap"
      >
        Handschrift
      </motion.div>

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 py-32 sm:py-44">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="eyebrow !text-white/70 flex items-center gap-3">
              <span className="h-px w-8 bg-white/40" />
              Meine Handschrift
            </div>
            <h2 className="font-display mt-6 text-[clamp(40px,5.4vw,96px)] leading-[0.98] tracking-[-0.01em] max-w-4xl">
              <SplitText text="Drei Worte." italic className="italic text-white/90 block" />
              <SplitText text="Der ganze Anspruch." delay={0.3} className="block" />
            </h2>
          </div>
          <div className="max-w-xs">
            <div className="hairline mb-4 !bg-white/30" />
            <p className="text-[14px] leading-[1.7] text-white/75">
              Wenn ich meine Arbeit auf drei Worte reduzieren müsste, wären
              es diese. Alles andere ergibt sich daraus.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.1 * i }}
              className="relative"
            >
              <div className="hairline mb-6 !bg-white/25 max-w-[70px]" />
              <div className="font-display italic text-[clamp(56px,7vw,112px)] leading-[0.9] tracking-[-0.02em] text-white">
                {p.k}
              </div>
              <div className="mt-6 eyebrow !text-white/70">{p.lead}</div>
              <p className="mt-4 text-[15px] text-white/85 max-w-[320px] leading-[1.75]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
