"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ·/".split("");

type SplitFlapProps = {
  text: string;
  className?: string;
  /** ms between each flap resolving from left to right */
  stagger?: number;
  /** flips each cell cycles through before landing */
  spins?: number;
  start?: boolean;
};

/** An airport-style split-flap board that shuffles then resolves to `text`. */
export default function SplitFlap({
  text,
  className = "",
  stagger = 60,
  spins = 8,
  start = true,
}: SplitFlapProps) {
  const chars = text.toUpperCase().split("");
  const [display, setDisplay] = useState<string[]>(() => chars.map(() => " "));
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (!start) return;
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (done.current) return;
      done.current = true;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        setDisplay(chars);
        return;
      }

      chars.forEach((target, i) => {
        let count = 0;
        const total = spins + i; // later cells spin a touch longer
        const cell = () => {
          count++;
          setDisplay((prev) => {
            const next = [...prev];
            next[i] =
              count >= total
                ? target
                : GLYPHS[Math.floor((count * 7 + i * 13) % GLYPHS.length)];
            return next;
          });
          if (count < total) setTimeout(cell, 45);
        };
        setTimeout(cell, i * stagger);
      });
    };

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, start]);

  return (
    <span ref={ref} className={`flap-board ${className}`} aria-label={text}>
      {display.map((ch, i) => (
        <span
          key={i}
          className={`flap ${ch === " " ? "flap--space" : ""}`}
          aria-hidden="true"
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}
