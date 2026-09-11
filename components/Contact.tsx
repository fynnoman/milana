"use client";

import Image from "next/image";
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
      className="relative overflow-hidden bg-navy text-ivory py-32 sm:py-40"
    >
      <motion.div
        style={{ scale: bigRingScale, rotate: bigRingRotate }}
        className="pointer-events-none absolute -left-[24vw] -bottom-[24vh] h-[110vh] w-[110vh]"
      >
        <svg viewBox="0 0 800 800" className="h-full w-full opacity-30">
          <circle cx="400" cy="400" r="380" fill="none" stroke="#91AAB5" strokeWidth="0.8" />
          <circle cx="400" cy="400" r="300" fill="none" stroke="#CBD6DA" strokeDasharray="2 6" strokeWidth="0.6" />
          <circle cx="400" cy="400" r="220" fill="none" stroke="#CBD6DA" strokeWidth="0.6" />
        </svg>
      </motion.div>

      <motion.div
        style={{ x: bgWordX }}
        aria-hidden
        className="pointer-events-none absolute -top-6 -right-4 select-none font-display italic text-[22vw] leading-[0.85] tracking-tight text-ivory/[0.04] whitespace-nowrap"
      >
        Kontakt
      </motion.div>

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <div className="eyebrow !text-ivory/70 flex items-center gap-3">
                <span className="h-px w-8 bg-ivory/40" />
                Kontakt
              </div>
              <h2 className="font-display mt-6 text-[clamp(44px,7vw,130px)] leading-[0.94] tracking-[-0.015em]">
                <SplitText text="Reden wir" className="block" />
                <SplitText text="über Ihre Praxis." italic delay={0.35} className="italic block text-mist/95" />
              </h2>
            </div>
            <div className="max-w-xs text-ivory/75">
              <p className="text-[14px] leading-[1.75]">
                30 Minuten Erstgespräch, unverbindlich. Wir klären, ob und wie
                ich sinnvoll unterstützen kann. Kein Verkaufsgespräch.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-16 lg:grid-cols-12">
          {/* Left column: Kontaktinfos */}
          <Reveal className="lg:col-span-5">
            <div className="space-y-10">
              <ContactRow label="Direkt schreiben" value="kontakt@mb-abrechnung.de" href="mailto:kontakt@mb-abrechnung.de" />
              <ContactRow label="Telefon" value="+49 (0) 89 4 12 87 10" href="tel:+498941287100" />
              <ContactRow label="Sprechzeiten" value="Mo bis Fr · 08:30 – 17:00 Uhr" />
              <ContactRow label="Standort" value="München · Betreuung DACH-weit" />
            </div>

            <div className="mt-14 flex items-center gap-4 rounded-md glass-dark px-5 py-4 w-fit">
              <div className="relative h-14 w-14 overflow-hidden rounded-full ring-1 ring-ivory/30">
                <Image src="/logo.jpeg" alt="MB Logo" fill sizes="56px" className="object-cover" />
              </div>
              <div>
                <div className="font-display text-xl leading-tight">Melanie Bauer</div>
                <div className="eyebrow !text-[10px] !text-ivory/60 mt-1">
                  Zahnärztliche Abrechnungsexpertin · ZMV
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="hairline mb-6 !bg-ivory/25 max-w-[80px]" />
              <div className="eyebrow !text-ivory/60 mb-4">
                Reaktion binnen 1 Werktag
              </div>
              <MagneticButton href="mailto:kontakt@mb-abrechnung.de" variant="outline" strength={30}>
                Direktes Erstgespräch <span className="arrow">→</span>
              </MagneticButton>
            </div>
          </Reveal>

          {/* Formular */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <form
              className="glass-dark rounded-md p-8 sm:p-12"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const params = new URLSearchParams({
                  subject: `Anfrage von ${data.get("name") || "Praxis"}`,
                  body: `Praxis: ${data.get("praxis") || ""}\nAnsprechpartner: ${data.get("name") || ""}\nTelefon: ${data.get("phone") || ""}\n\nNachricht:\n${data.get("message") || ""}`,
                });
                window.location.href = `mailto:kontakt@mb-abrechnung.de?${params.toString()}`;
              }}
            >
              <div className="flex items-center justify-between">
                <div className="eyebrow !text-ivory/70">
                  Erstgespräch anfragen
                </div>
                <div className="divider-num !text-ivory/40">Formular · 01</div>
              </div>
              <div className="hairline mt-6 !bg-ivory/20" />

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <Field label="Praxis" name="praxis" placeholder="Zahnarztpraxis Dr. …" />
                <Field label="Ansprechpartner*in" name="name" placeholder="Ihr Name" required />
                <Field label="E-Mail" name="email" type="email" placeholder="name@praxis.de" required />
                <Field label="Telefon" name="phone" type="tel" placeholder="+49 …" />
              </div>

              <div className="mt-8">
                <label className="eyebrow block !text-ivory/60">Ihre Nachricht</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Kurz zu Praxisgröße, Software und Anliegen. Ich melde mich innerhalb eines Werktages."
                  className="mt-3 w-full resize-none bg-white/5 border border-ivory/15 focus:border-ivory/60 outline-none rounded-sm px-4 py-4 text-[15px] leading-[1.7] text-ivory placeholder:text-ivory/40 transition-colors"
                />
              </div>

              <div className="mt-6 flex items-start gap-3">
                <input id="dsgvo" type="checkbox" required className="mt-1 accent-mist" />
                <label htmlFor="dsgvo" className="text-[12px] text-ivory/65 leading-relaxed">
                  Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung
                  meiner Anfrage zu. Details in der Datenschutzerklärung.
                </label>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 justify-between">
                <div className="text-[10px] uppercase tracking-[0.18em] text-ivory/50">
                  Verschlüsselte Übertragung
                </div>
                <MagneticButton type="submit" variant="primary">
                  Anfrage senden <span className="arrow">→</span>
                </MagneticButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="grid grid-cols-[140px_1fr] items-baseline gap-6 border-b border-ivory/15 pb-6">
      <div className="eyebrow !text-ivory/60">{label}</div>
      <div className="font-display text-[22px] leading-tight text-ivory">
        {value}
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block group hover:text-mist transition-colors">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow block !text-ivory/60">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full bg-white/5 border border-ivory/15 focus:border-ivory/60 outline-none rounded-sm px-4 py-3.5 text-[15px] text-ivory placeholder:text-ivory/40 transition-colors"
      />
    </div>
  );
}
