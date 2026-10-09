"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const promises = [
  {
    n: "01",
    tag: "Erreichbarkeit",
    title: "Sie sprechen immer mit mir.",
    body:
      "Keine Rufnummer im Callcenter, keine wechselnden Zuständigkeiten. Sie schreiben, ich antworte. Sie rufen an, ich hebe ab.",
    image: "/images/milana-hero.webp",
    alt: "Milana Kollmann im Telefongespräch",
  },
  {
    n: "02",
    tag: "Sorgfalt",
    title: "Jede Position wird angesehen.",
    body:
      "Bevor eine Rechnung rausgeht, hat sie meinen Blick bekommen. Analogleistungen, Materialkosten, Begründungen. Nichts wird pauschal verbucht.",
    image: "/images/milana-focus.webp",
    alt: "Konzentrierter Blick auf den Bildschirm",
  },
  {
    n: "03",
    tag: "Übersicht",
    title: "Sie wissen jederzeit, wo Sie stehen.",
    body:
      "Feste Abrechnungstage, klare Ansprechzeiten und ein kurzes Monatsbild. Es gibt keinen Vorgang, den ich nicht offen mit Ihnen bespreche.",
    image: "/images/milana-overview.webp",
    alt: "Milana Kollmann am Schreibtisch im Überblick",
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
          <div className="mb-12">
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-petrol/60" />
              So arbeite ich
            </div>
            <h2 className="font-display mt-4 text-[clamp(28px,3.6vw,52px)] leading-[1.02] text-navy max-w-3xl">
              Wofür ich
              <span className="italic text-petrol"> stehe.</span>
            </h2>
          </div>

          <div className="relative grid min-h-[58vh] grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="relative lg:col-span-6 h-[42vh] lg:h-auto lg:min-h-[58vh]">
              {promises.map((p, i) => (
                <ImageLayer
                  key={p.n}
                  src={p.image}
                  alt={p.alt}
                  index={i}
                  total={promises.length}
                  progress={scrollYProgress}
                  shouldReduce={!!shouldReduce}
                />
              ))}
            </div>

            <div className="relative lg:col-span-6 min-h-[46vh] lg:min-h-[58vh]">
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
          </div>

          <div className="mt-10 flex items-center gap-6">
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

function ImageLayer({
  src,
  alt,
  index,
  total,
  progress,
  shouldReduce,
}: {
  src: string;
  alt: string;
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
  const scale = useTransform(
    progress,
    [start, mid, end],
    shouldReduce ? [1, 1, 1] : [1.04, 1, 1.08]
  );

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 overflow-hidden rounded-md shadow-card"
    >
      <motion.img
        style={{ scale }}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-center"
      />
    </motion.div>
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
    shouldReduce ? [0, 0, 0] : [60, 0, -40]
  );

  return (
    <motion.article
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="flex items-baseline gap-5">
        <div className="font-display text-[72px] leading-[0.85] italic text-petrol/95 tabular-nums">
          {promise.n}
        </div>
        <div className="divider-num">{promise.tag}</div>
      </div>
      <p className="font-display mt-6 text-[clamp(28px,3.4vw,48px)] leading-[1.08] text-navy tracking-[-0.005em]">
        {promise.title}
      </p>
      <div className="hairline my-8 max-w-[80px]" />
      <p className="text-[15px] leading-[1.85] text-navy/75 max-w-xl">
        {promise.body}
      </p>
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
