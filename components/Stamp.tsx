"use client";

import { useEffect, useRef, useState } from "react";

type StampProps = {
  top: string;
  big: string;
  bottom?: string;
  variant?: "blue" | "red" | "gold";
  shape?: "round" | "rect";
  rotate?: number;
  className?: string;
};

/** A passport ink stamp that "stamps" in (scale-down + fade) when scrolled into view. */
export default function Stamp({
  top,
  big,
  bottom,
  variant = "blue",
  shape = "round",
  rotate = -8,
  className = "",
}: StampProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cls = [
    "stamp",
    "stamp-in",
    variant !== "blue" ? `stamp--${variant}` : "",
    shape === "rect" ? "stamp--rect" : "",
    visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={cls} style={{ ["--rot" as string]: `${rotate}deg` }}>
      <b>{top}</b>
      <em>{big}</em>
      {bottom && <span>{bottom}</span>}
    </div>
  );
}
