"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const quotes = [
  {
    text: "Seit wir mit Frau Bauer arbeiten, hat sich unser Reklamationsvolumen mehr als halbiert. Und wir haben endlich Feierabend, wenn wir Feierabend haben.",
    author: "Dr. med. dent. K. Reuter",
    role: "Praxisinhaberin · München",
    n: "01",
  },
  {
    text: "Ihr Blick auf unsere GOZ-Positionen hat uns im ersten Quartal einen fünfstelligen Betrag gerettet, der jahrelang untergegangen wäre.",
    author: "Dr. med. dent. M. Weiler",
    role: "Ästhetische Zahnheilkunde · Hamburg",
    n: "02",
  },
  {
    text: "Wir haben Frau Bauer zunächst für ein Software-Rollout gebucht. Heute übernimmt sie unsere komplette Privatabrechnung. Nichts liegt mehr auf Halde.",
    author: "ZA F. Osterloh",
    role: "Zentrum für Zahnheilkunde · Köln",
    n: "03",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[320vh] bg-ivory">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-lines" />

        <div className="relative mx-auto flex h-full max-w-[1500px] flex-col justify-center px-6 sm:px-10">
          <div className="mb-16">
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-line" />
              Stimmen aus Praxen
            </div>
            <h2 className="font-display mt-4 text-[clamp(28px,3.6vw,52px)] leading-[1.02] text-navy max-w-2xl">
              Was zählt, ist der Alltag danach.
              <span className="italic text-petrol"> Nicht das Versprechen davor.</span>
            </h2>
          </div>

          <div className="relative min-h-[62vh]">
            {quotes.map((q, i) => (
              <TestimonialLayer
                key={q.n}
                quote={q}
                index={i}
                total={quotes.length}
                progress={scrollYProgress}
                shouldReduce={!!shouldReduce}
              />
            ))}
          </div>

          {/* Progress marker unten */}
          <div className="mt-16 flex items-center gap-6">
            {quotes.map((q, i) => (
              <ProgressDot
                key={q.n}
                progress={scrollYProgress}
                index={i}
                total={quotes.length}
                label={q.n}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialLayer({
  quote,
  index,
  total,
  progress,
  shouldReduce,
}: {
  quote: (typeof quotes)[number];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  shouldReduce: boolean;
}) {
  const seg = 1 / total;
  const start = index * seg;
  const mid = start + seg * 0.35;
  const end = start + seg;

  const opacity = useTransform(
    progress,
    [start, mid, end - seg * 0.15, end],
    shouldReduce ? [1, 1, 1, 1] : [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [start, mid, end],
    shouldReduce ? [0, 0, 0] : [80, 0, -60]
  );
  const blur = useTransform(
    progress,
    [start, mid, end - seg * 0.15, end],
    shouldReduce ? ["blur(0px)", "blur(0px)", "blur(0px)", "blur(0px)"] : ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
  );

  return (
    <motion.article
      style={{ opacity, y, filter: blur }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-2">
          <div className="font-display text-[100px] leading-[0.85] text-petrol/95 italic">
            {quote.n}
          </div>
          <div className="mt-4 divider-num">Referenz</div>
        </div>
        <div className="lg:col-span-9">
          <svg
            className="h-8 w-8 text-petrol/80"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3v2c3 0 5-2 5-5V9a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3v2c3 0 5-2 5-5V9a2 2 0 0 0-2-2Z" />
          </svg>
          <p className="font-display mt-6 text-[clamp(30px,4vw,60px)] leading-[1.08] text-navy tracking-[-0.005em]">
            „{quote.text}"
          </p>
          <div className="hairline my-10 max-w-[80px]" />
          <div>
            <div className="text-[16px] text-navy font-medium tracking-tight">
              {quote.author}
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-navy/55">
              {quote.role}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProgressDot({
  progress,
  index,
  total,
  label,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
  label: string;
}) {
  const seg = 1 / total;
  const w = useTransform(
    progress,
    [index * seg, (index + 1) * seg],
    ["0%", "100%"]
  );
  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] tabular-nums tracking-[0.14em] text-navy/60">{label}</span>
      <div className="relative h-px w-16 bg-line overflow-hidden">
        <motion.div style={{ width: w }} className="absolute inset-y-0 left-0 bg-petrol" />
      </div>
    </div>
  );
}
