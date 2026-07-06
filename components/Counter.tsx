"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
};

/** Counts up from 0 to `to` once it scrolls into view. */
export default function Counter({
  to,
  suffix = "",
  duration = 1800,
  className = "",
  decimals,
}: CounterProps) {
  const places = decimals ?? (Number.isInteger(to) ? 0 : 1);
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              // easeOutExpo
              const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
              const raw = eased * to;
              const factor = Math.pow(10, places);
              setValue(Math.round(raw * factor) / factor);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  const formatted =
    to >= 1000
      ? value.toLocaleString("en-US")
      : value.toFixed(places);

  return (
    <span ref={ref} className={className}>
      {formatted}
      {suffix}
    </span>
  );
}
