"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  strength?: number;
  type?: "button" | "submit" | "reset";
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  strength = 24,
  type = "button",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (shouldReduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const classes = {
    primary:
      "inline-flex items-center gap-3 px-8 py-4 bg-navy text-ivory rounded-sm uppercase tracking-[0.14em] text-[12px] font-medium hover:bg-ink transition-colors",
    ghost:
      "inline-flex items-center gap-2 uppercase tracking-[0.14em] text-[12px] font-medium text-navy hover:text-petrol transition-colors",
    outline:
      "inline-flex items-center gap-3 px-8 py-4 border border-navy/40 text-navy rounded-sm uppercase tracking-[0.14em] text-[12px] font-medium hover:bg-navy hover:text-ivory transition-colors",
  }[variant];

  const content = (
    <motion.div
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <span className={`${classes} ${className ?? ""}`}>{children}</span>
    </motion.div>
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      {href ? (
        <a href={href}>{content}</a>
      ) : (
        <button type={type} onClick={onClick}>
          {content}
        </button>
      )}
    </div>
  );
}
