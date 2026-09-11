"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScaleReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.75, 1],
    shouldReduce ? [1, 1, 1, 1] : [0.6, 1, 1.55, 1.8]
  );
  const radius = useTransform(scrollYProgress, [0, 0.35, 0.7], ["40px", "20px", "0px"]);
  const overlay = useTransform(scrollYProgress, [0.35, 0.75, 1], [0, 0.5, 0.8]);
  const preTitleOpacity = useTransform(scrollYProgress, [0.05, 0.3], [1, 0]);
  const preTitleScale = useTransform(scrollYProgress, [0.05, 0.3], [1, 0.9]);
  const overlayCopyOpacity = useTransform(scrollYProgress, [0.55, 0.78], [0, 1]);
  const overlayCopyY = useTransform(scrollYProgress, [0.5, 0.9], ["40px", "-30px"]);
  const captionOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[260vh] bg-ivory">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Pre-title */}
        <motion.div
          style={{ opacity: preTitleOpacity, scale: preTitleScale }}
          className="pointer-events-none absolute left-6 top-24 z-20 sm:left-10"
        >
          <div className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            Warum extern
          </div>
          <p className="font-display mt-4 text-[clamp(28px,5.5vw,88px)] leading-[1.02] text-navy max-w-[820px]">
            Was <span className="italic text-gold">unsichtbar</span> ist,
            <br />bleibt <span className="italic">unabgerechnet.</span>
          </p>
        </motion.div>

        {/* Scaling image */}
        <motion.div
          style={{ scale, borderRadius: radius }}
          className="absolute left-1/2 top-1/2 h-[58vh] w-[80vw] max-w-[1240px] -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-mist"
        >
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2200&q=82"
            alt="Ruhige, hell gestaltete Zahnarztpraxis"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <motion.div style={{ opacity: overlay }} className="absolute inset-0 bg-navy" />
        </motion.div>

        {/* Caption bottom */}
        <motion.div
          style={{ opacity: captionOpacity }}
          className="pointer-events-none absolute bottom-8 left-6 sm:left-10 z-20 flex items-center gap-4"
        >
          <span className="divider-num">01 · Praxisrealität</span>
          <span className="h-px w-14 bg-gold/60" />
          <span className="text-[11px] uppercase tracking-[0.14em] text-navy/55">
            Behandlungsraum · Zahnarztpraxis München
          </span>
        </motion.div>

        {/* Overlay text when image fullscreen */}
        <motion.div
          style={{ y: overlayCopyY, opacity: overlayCopyOpacity }}
          className="relative z-30 mx-auto flex h-full max-w-[1200px] flex-col items-center justify-center px-6 text-center"
        >
          <span className="eyebrow !text-ivory/80">Externe Abrechnung</span>
          <h2 className="font-display mt-6 text-[clamp(36px,6vw,88px)] leading-[1.04] text-ivory max-w-4xl tracking-[-0.01em]">
            Ihre Zeit gehört an den Behandlungsstuhl.
            <span className="italic block text-gold-soft"> Nicht in die Abrechnung.</span>
          </h2>
          <p className="mt-8 max-w-xl text-ivory/80 text-[15px] leading-[1.75]">
            Wenige Praxen verlieren mehr Umsatz an nicht dokumentierte
            Leistungen als an fehlende Patienten. Ich übernehme jede Position,
            jede Begründung, jede Reklamation. Sauber, nachvollziehbar,
            prüfsicher.
          </p>
          <div className="mt-10 flex items-center gap-4 text-ivory/60 text-[11px] uppercase tracking-[0.22em]">
            <span className="h-px w-10 bg-gold/60" />
            Rundum-Service
            <span className="h-px w-10 bg-gold/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
