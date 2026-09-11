"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function CountUp({ to, suffix = "", duration = 1.8, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();
  const [val, setVal] = useState(shouldReduce ? to : 0);

  useEffect(() => {
    if (!inView || shouldReduce) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, shouldReduce]);

  const formatted = Number.isInteger(to)
    ? Math.round(val).toString()
    : val.toFixed(1);

  return (
    <span ref={ref} className={className}>
      {formatted}
      {suffix}
    </span>
  );
}
