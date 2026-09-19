"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const items = [
  { text: "Persönlich", italic: true },
  { text: "Präzise", italic: false },
  { text: "Zuverlässig", italic: true },
  { text: "Für Ihre Praxis", italic: false },
];

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduce ? ["0%", "0%"] : ["12%", "-32%"]
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-line bg-white py-16"
    >
      <motion.div
        style={{ x }}
        className="flex items-center gap-14 whitespace-nowrap font-display text-navy"
      >
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-14">
            <span
              className={`text-[clamp(56px,10vw,160px)] leading-none tracking-[-0.01em] ${
                it.italic ? "italic text-petrol/95" : "text-navy"
              }`}
            >
              {it.text}
            </span>
            <span className="inline-flex h-3 w-3 shrink-0 rounded-full bg-petrol/25" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
