"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const promises = [
  {
    n: "01",
    title: "Sie sprechen immer mit mir.",
    body:
      "Keine Rufnummer im Callcenter, keine wechselnden Zuständigkeiten. Sie schreiben, ich antworte. Sie rufen an, ich hebe ab.",
  },
  {
    n: "02",
    title: "Jede Position wird angesehen.",
    body:
      "Bevor eine Rechnung rausgeht, hat sie meinen Blick bekommen. Analogleistungen, Materialkosten, Begründungen. Nichts wird pauschal verbucht.",
  },
  {
    n: "03",
    title: "Sie wissen jederzeit, wo Sie stehen.",
    body:
      "Feste Abrechnungstage, klare Ansprechzeiten und ein kurzes Monatsbild. Es gibt keinen Vorgang, den ich nicht offen mit Ihnen bespreche.",
  },
];

export default function HowIWork() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[320vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-lines" />

        <div className="relative mx-auto flex h-full max-w-[1500px] flex-col justify-center px-6 sm:px-10">
          <div className="mb-16">
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-petrol/60" />
              So arbeite ich
            </div>
            <h2 className="font-display mt-4 text-[clamp(28px,3.6vw,52px)] leading-[1.02] text-navy max-w-2xl">
              Drei Zusagen.
              <span className="italic text-petrol"> Ohne Kleingedrucktes.</span>
            </h2>
          </div>

          <div className="relative min-h-[62vh]">
            {promises.map((p, i) => (
              <PromiseLayer
                key={p.n}
                promise={p}
                index={i}
                total={promises.length}
                progress={scrollYProgress}
                shouldReduce={!!shouldReduce}
              />
            ))}
          </div>

          <div className="mt-16 flex items-center gap-6">
            {promises.map((p, i) => (
              <ProgressDot
                key={p.n}
                progress={scrollYProgress}
                index={i}
                total={promises.length}
                label={p.n}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PromiseLayer({
  promise,
  index,
  total,
  progress,
  shouldReduce,
}: {
  promise: (typeof promises)[number];
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
    shouldReduce
      ? ["blur(0px)", "blur(0px)", "blur(0px)", "blur(0px)"]
      : ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
  );

  return (
    <motion.article
      style={{ opacity, y, filter: blur }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-2">
          <div className="font-display text-[100px] leading-[0.85] text-petrol/95 italic">
            {promise.n}
          </div>
          <div className="mt-4 divider-num">Zusage</div>
        </div>
        <div className="lg:col-span-9">
          <p className="font-display text-[clamp(30px,4vw,60px)] leading-[1.08] text-navy tracking-[-0.005em]">
            {promise.title}
          </p>
          <div className="hairline my-10 max-w-[80px]" />
          <p className="text-[15px] leading-[1.85] text-navy/75 max-w-2xl">
            {promise.body}
          </p>
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
