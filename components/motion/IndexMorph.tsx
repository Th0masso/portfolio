"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type IndexMorphProps = {
  year: number;
};

export function IndexMorph({ year }: IndexMorphProps) {
  const reduce = useReducedMotion();
  const label = String(year);
  const prevYear = useRef(year);
  // +1 = année plus récente (vers le haut de liste), -1 = plus ancienne
  const direction = year >= prevYear.current ? 1 : -1;

  useEffect(() => {
    prevYear.current = year;
  }, [year]);

  if (reduce) {
    return (
      <span className="font-serif text-5xl leading-none tracking-tight text-ink md:text-6xl lg:text-7xl">
        {label}
      </span>
    );
  }

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.span
        key={label}
        custom={direction}
        variants={{
          enter: (d: number) => ({
            opacity: 0,
            y: d > 0 ? -16 : 16,
            letterSpacing: "0.12em",
          }),
          center: {
            opacity: 1,
            y: 0,
            letterSpacing: "-0.04em",
          },
          exit: (d: number) => ({
            opacity: 0,
            y: d > 0 ? 12 : -12,
            letterSpacing: "-0.08em",
          }),
        }}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="block font-serif text-5xl leading-none text-ink md:text-6xl lg:text-7xl"
        aria-hidden
      >
        {label}
      </motion.span>
    </AnimatePresence>
  );
}
