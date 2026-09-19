"use client";

import Reveal from "./Reveal";
import SplitText from "./SplitText";
import MagneticButton from "./MagneticButton";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bigRingScale = useTransform(scrollYProgress, [0, 1], [0.9, shouldReduce ? 0.9 : 1.15]);
  const bigRingRotate = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : 40]);
  const bgWordX = useTransform(scrollYProgress, [0, 1], shouldReduce ? ["0%", "0%"] : ["-6%", "6%"]);

  return (
    <section
      id="kontakt"
      ref={ref}
      className="relative overflow-hidden bg-navy text-white py-32 sm:py-40"
    >
      <motion.div
        style={{ scale: bigRingScale, rotate: bigRingRotate }}
        className="pointer-events-none absolute -left-[24vw] -bottom-[24vh] h-[110vh] w-[110vh]"
      >
        <svg viewBox="0 0 800 800" className="h-full w-full opacity-25">
          <circle cx="400" cy="400" r="380" fill="none" stroke="#FFFFFF" strokeWidth="0.8" />
          <circle cx="400" cy="400" r="300" fill="none" stroke="#FFFFFF" strokeDasharray="2 6" strokeWidth="0.6" />
          <circle cx="400" cy="400" r="220" fill="none" stroke="#FFFFFF" strokeWidth="0.6" />
        </svg>
      </motion.div>

      <motion.div
        style={{ x: bgWordX }}
        aria-hidden
        className="pointer-events-none absolute -top-6 -right-4 select-none font-display italic text-[22vw] leading-[0.85] tracking-tight text-white/[0.04] whitespace-nowrap"
      >
        Kennenlernen
      </motion.div>

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <div className="eyebrow !text-white/70 flex items-center gap-3">
                <span className="h-px w-8 bg-white/40" />
                Kontakt
              </div>
              <h2 className="font-display mt-6 text-[clamp(44px,7vw,130px)] leading-[0.94] tracking-[-0.015em]">
                <SplitText text="Reden wir" className="block" />
                <SplitText text="über Ihre Praxis." italic delay={0.35} className="italic block text-white/85" />
              </h2>
            </div>
            <div className="max-w-xs text-white/80">
              <p className="text-[14px] leading-[1.75]">
                Ein kurzes, unverbindliches Telefonat. Wir schauen gemeinsam,
                ob und wie ich Sie sinnvoll unterstützen kann. Kein
                Verkaufsgespräch, versprochen.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="space-y-10">
              <ContactRow label="Telefon" value="+49 174 212 25 26" href="tel:+491742122526" />
              <ContactRow label="Standort" value="Saarlouis" />
              <ContactRow label="Anfragen" value="Am liebsten kurz anrufen. Ich melde mich zurück, wenn ich gerade nicht drangehen kann." />
            </div>

            <div className="mt-14 flex items-center gap-4 rounded-md glass-deep px-5 py-4 w-fit">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-white/30 grid place-items-center bg-white/10">
                <span className="font-display italic text-[18px] leading-none text-white">MK</span>
              </div>
              <div>
                <div className="font-display text-xl leading-tight">Milana Kollmann</div>
                <div className="eyebrow !text-[10px] !text-white/70 mt-1">
                  Zahnärztliche Abrechnung
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={0.1}>
            <div className="glass-deep rounded-md p-8 sm:p-12 h-full flex flex-col justify-between">
              <div>
                <div className="eyebrow !text-white/70">Kurz gesagt</div>
                <p className="font-display italic mt-6 text-[clamp(24px,2.6vw,34px)] leading-[1.2] text-white">
                  „Rufen Sie an, wir schauen gemeinsam,
                  <br />
                  ob wir zusammenpassen."
                </p>
                <div className="hairline my-8 !bg-white/25 max-w-[80px]" />
                <p className="text-[14px] leading-[1.75] text-white/80 max-w-md">
                  Ich freue mich, wenn Sie sich melden. Am unkompliziertesten
                  ist ein Anruf. So bekomme ich einen ersten Eindruck von
                  Ihrer Praxis und Sie einen von mir.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-4">
                <MagneticButton href="tel:+491742122526" variant="primary">
                  Jetzt anrufen <span className="arrow">→</span>
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="grid grid-cols-[140px_1fr] items-baseline gap-6 border-b border-white/15 pb-6">
      <div className="eyebrow !text-white/70">{label}</div>
      <div className="font-display text-[22px] leading-tight text-white">
        {value}
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block group hover:text-white/90 transition-colors">
      {inner}
    </a>
  ) : (
    inner
  );
}
