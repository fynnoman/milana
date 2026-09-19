"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  italic?: boolean;
  wordDelay?: number;
  eager?: boolean;
};

export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.035,
  italic = false,
  wordDelay = 0.12,
  eager = false,
}: Props) {
  const shouldReduce = useReducedMotion();
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wIdx) => {
        const chars = Array.from(word);
        return (
          <span
            key={wIdx}
            className="inline-block whitespace-nowrap"
            style={{ paddingRight: wIdx < words.length - 1 ? "0.28em" : 0 }}
            aria-hidden
          >
            {chars.map((ch, i) => {
              const idx = charIndex++;
              const initial = {
                y: shouldReduce ? 0 : "110%",
                opacity: shouldReduce ? 1 : 0,
                rotate: shouldReduce ? 0 : 3,
              };
              const to = { y: 0, opacity: 1, rotate: 0 };
              const transition = {
                duration: 0.9,
                ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
                delay: delay + wIdx * wordDelay + i * stagger,
              };
              return eager ? (
                <motion.span
                  key={i}
                  className={`inline-block ${italic ? "italic" : ""}`}
                  style={{ transformOrigin: "50% 100%" }}
                  initial={initial}
                  animate={to}
                  transition={transition}
                >
                  {ch}
                </motion.span>
              ) : (
                <motion.span
                  key={i}
                  className={`inline-block ${italic ? "italic" : ""}`}
                  style={{ transformOrigin: "50% 100%" }}
                  initial={initial}
                  whileInView={to}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={transition}
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
