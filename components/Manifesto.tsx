"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = [
  { t: "Sie" },
  { t: "behandeln", italic: true },
  { t: "Ihre" },
  { t: "Patienten.", italic: true },
  { t: "Ich" },
  { t: "kümmere", italic: true },
  { t: "mich" },
  { t: "um" },
  { t: "die" },
  { t: "Zahlen.", italic: true, accent: true },
];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="relative h-[260vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="mx-auto grid h-full max-w-[1500px] grid-cols-12 px-6 sm:px-10">
            {Array.from({ length: 13 }).map((_, i) => (
              <span
                key={i}
                className="col-span-1 h-full border-l border-line/60 last:border-r"
              />
            ))}
          </div>
        </div>

        <ManifestoOrnament scrollYProgress={scrollYProgress} />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10 w-full">
          <div className="max-w-[1200px]">
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-petrol/60" />
              Grundhaltung
            </div>
            <p className="font-display mt-8 text-[clamp(40px,7vw,120px)] leading-[0.98] text-navy/25 tracking-[-0.015em]">
              {words.map((w, i) => (
                <Word
                  key={i}
                  text={w.t}
                  italic={w.italic}
                  accent={w.accent}
                  progress={scrollYProgress}
                  index={i}
                  total={words.length}
                  shouldReduce={!!shouldReduce}
                />
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoOrnament({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1.4]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="pointer-events-none absolute right-[-10vw] bottom-[-14vh] h-[90vh] w-[90vh] opacity-25"
    >
      <svg viewBox="0 0 800 800" className="h-full w-full">
        <circle cx="400" cy="400" r="380" fill="none" stroke="#2F5F96" strokeWidth="0.6" />
        <circle cx="400" cy="400" r="300" fill="none" stroke="#6B7A88" strokeDasharray="2 6" strokeWidth="0.6" />
        <circle cx="400" cy="400" r="220" fill="none" stroke="#2F5F96" strokeOpacity="0.4" strokeWidth="0.6" />
      </svg>
    </motion.div>
  );
}

function Word({
  text,
  italic,
  accent,
  progress,
  index,
  total,
  shouldReduce,
}: {
  text: string;
  italic?: boolean;
  accent?: boolean;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
  shouldReduce: boolean;
}) {
  const start = 0.05 + (index / total) * 0.5;
  const end = start + 0.07;
  const opacity = useTransform(progress, [start, end], shouldReduce ? [1, 1] : [0.2, 1]);
  const y = useTransform(progress, [start, end], shouldReduce ? [0, 0] : [24, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block mr-[0.28em] ${italic ? "italic" : ""} ${
        accent ? "text-petrol" : "text-navy"
      }`}
    >
      {text}
    </motion.span>
  );
}
