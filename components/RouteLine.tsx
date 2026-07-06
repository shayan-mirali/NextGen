"use client";

import { useEffect, useRef } from "react";

type RouteLineProps = {
  className?: string;
  height?: number;
};

/**
 * A vertical dashed flight route that draws itself as the user scrolls past,
 * with a plane marker riding the leading edge and nodes lighting up.
 */
export default function RouteLine({ className = "", height = 1200 }: RouteLineProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<SVGGElement>(null);

  // A gentle S-curve down the page
  const W = 200;
  const d = `M100,0 C ${W},${height * 0.18} 0,${height * 0.34} 100,${height * 0.5} C ${W},${height * 0.66} 0,${height * 0.82} 100,${height}`;

  useEffect(() => {
    const path = pathRef.current;
    const wrap = wrapRef.current;
    const plane = planeRef.current;
    if (!path || !wrap) return;

    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when top of wrap hits middle, 1 when bottom hits middle
      const total = rect.height + vh * 0.5;
      const seen = Math.min(Math.max(vh * 0.75 - rect.top, 0), total);
      const p = Math.min(seen / rect.height, 1);
      path.style.strokeDashoffset = `${len * (1 - p)}`;
      if (plane) {
        const pt = path.getPointAtLength(len * p);
        const ahead = path.getPointAtLength(Math.min(len * p + 1, len));
        const angle = (Math.atan2(ahead.y - pt.y, ahead.x - pt.x) * 180) / Math.PI;
        plane.setAttribute("transform", `translate(${pt.x}, ${pt.y}) rotate(${angle + 90})`);
        plane.style.opacity = p > 0.01 && p < 0.995 ? "1" : "0";
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className={`route-wrap ${className}`} aria-hidden="true">
      <svg
        className="route-svg"
        viewBox={`0 0 ${W} ${height}`}
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path d={d} className="route-path" ref={pathRef} />
        <g ref={planeRef} style={{ opacity: 0, transition: "opacity 0.3s" }}>
          <circle r="13" fill="var(--night)" />
          <path
            d="M0,-8 L2.4,-1 L8,2 L2.4,2.6 L0,8 L-2.4,2.6 L-8,2 L-2.4,-1 Z"
            className="route-plane"
            transform="scale(0.9)"
          />
        </g>
      </svg>
    </div>
  );
}
