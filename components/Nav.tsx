"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const items = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber", label: "Über mich" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  return (
    <>
      {/* Scroll progress line */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-petrol"
      />

      <motion.header
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 sm:pt-5"
      >
        <div
          className={`glass w-full max-w-6xl rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            scrolled ? "py-2 px-3 sm:px-4" : "py-3 px-4 sm:px-5"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="#top" className="flex items-center gap-3 group">
              <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-line/70">
                <Image
                  src="/logo.jpeg"
                  alt="MB Zahnärztliche Abrechnung"
                  fill
                  sizes="36px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-display text-lg text-navy tracking-tight">
                  MB Abrechnung
                </span>
                <span className="eyebrow mt-0.5 !text-[9px]">
                  Zahnärztliche Abrechnungsexpertin
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className="text-[12px] uppercase tracking-[0.16em] text-navy/80 hover:text-navy transition-colors relative group"
                >
                  {it.label}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-petrol transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#kontakt"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-ivory hover:bg-ink transition-colors"
              >
                Erstgespräch
                <span className="arrow">→</span>
              </a>
              <button
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/60 text-navy"
                aria-label="Menü"
              >
                <span className="relative block h-3 w-4">
                  <span
                    className={`absolute left-0 h-px w-4 bg-navy transition-all duration-300 ${
                      open ? "top-1.5 rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 h-px w-4 bg-navy transition-all duration-300 ${
                      open ? "top-1.5 -rotate-45" : "top-3"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-4 pb-2">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="text-navy/85 text-sm uppercase tracking-[0.14em]"
                >
                  {it.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="self-start mt-2 rounded-full bg-navy px-5 py-2.5 text-[11px] uppercase tracking-[0.16em] text-ivory"
              >
                Erstgespräch →
              </a>
            </div>
          </motion.div>
        </div>
      </motion.header>
    </>
  );
}
