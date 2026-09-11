"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CountUp from "./CountUp";
import SplitText from "./SplitText";

export default function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduce ? ["0%", "0%"] : ["-18%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], shouldReduce ? [1, 1] : [1.05, 1.22]);
  const bigWordX = useTransform(scrollYProgress, [0, 1], shouldReduce ? ["0%", "0%"] : ["6%", "-16%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy text-ivory">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 opacity-30"
      >
        <img
          src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=2400&q=82"
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/95" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_15%_20%,rgba(145,170,181,0.35),transparent_45%)]" />

      <motion.div
        style={{ x: bigWordX }}
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-4 select-none font-display italic text-[24vw] leading-[0.85] tracking-tight text-ivory/[0.05] whitespace-nowrap"
      >
        precisely
      </motion.div>

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 py-32 sm:py-44">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="eyebrow !text-ivory/70 flex items-center gap-3">
              <span className="h-px w-8 bg-ivory/40" />
              Zahlen, die zählen
            </div>
            <h2 className="font-display mt-6 text-[clamp(40px,5.4vw,96px)] leading-[0.98] tracking-[-0.01em] max-w-4xl">
              <SplitText text="Präzise" italic className="italic text-mist/90 block" />
              <SplitText text="geht schneller." delay={0.3} className="block" />
            </h2>
          </div>
          <div className="max-w-xs">
            <div className="hairline mb-4 !bg-ivory/40" />
            <p className="text-[14px] leading-[1.7] text-ivory/70">
              Kein Marketing, keine Rundungen. Zahlen aus zwölf laufenden
              Monaten, aggregiert aus 40+ Praxen.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-4">
          {[
            { k: 15, suffix: "+", label: "Jahre GOZ- und BEMA-Praxis", sub: "Aus der Praxis heraus" },
            { k: 40, suffix: "+", label: "Aktiv betreute Praxen", sub: "DACH-weit" },
            { k: 3, suffix: " Tage", label: "Ø Bearbeitungszeit", sub: "Ab Übergabe" },
            { k: 98, suffix: "%", label: "Erstattungsquote im Schnitt", sub: "12-Monats-Reporting" },
          ].map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.08 * i }}
              className="relative"
            >
              <div className="hairline mb-6 !bg-ivory/25 max-w-[70px]" />
              <div className="font-display text-[clamp(72px,9vw,150px)] leading-[0.9] tracking-[-0.02em]">
                <CountUp to={n.k} suffix={n.suffix} />
              </div>
              <div className="mt-6 text-[13px] text-ivory/85 max-w-[240px] leading-snug">
                {n.label}
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.18em] text-ivory/50">
                {n.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
