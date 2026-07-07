"use client";

import { useMemo, useState } from "react";
import Ticket from "@/components/Ticket";
import type { Destination } from "@/lib/destinations";

const REGIONS: Record<string, string> = {
  "united-kingdom": "Europe",
  ireland: "Europe",
  germany: "Europe",
  france: "Europe",
  italy: "Europe",
  hungary: "Europe",
  turkey: "Europe",
  "united-states": "North America",
  canada: "North America",
  australia: "Oceania",
  "new-zealand": "Oceania",
  malaysia: "Asia",
  "south-korea": "Asia",
  thailand: "Asia",
  china: "Asia",
  uae: "Middle East",
};

const COURSE_AREAS: { label: string; keywords: string[] }[] = [
  { label: "Business & Finance", keywords: ["business", "finance", "accounting", "mba", "actuarial", "management", "hospitality", "tourism"] },
  { label: "Engineering", keywords: ["engineering", "automotive", "mechanical"] },
  { label: "IT & Computer Science", keywords: ["computer science", "it", "software", "data science", "analytics"] },
  { label: "Medicine & Health", keywords: ["medicine", "medical", "dentistry", "nursing", "health", "pharm", "biotech", "mbbs"] },
  { label: "Design & Arts", keywords: ["design", "fashion", "arts", "architecture", "film", "media", "culinary"] },
  { label: "Law & Relations", keywords: ["law", "international relations", "studies", "language", "public health"] },
];

const REGION_LIST = ["Europe", "North America", "Oceania", "Asia", "Middle East"];

export default function DestinationFinder({ destinations }: { destinations: Destination[] }) {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState("");
  const [area, setArea] = useState("");
  const notchColor = "var(--paper)";

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    const areaDef = COURSE_AREAS.find((a) => a.label === area);
    return destinations.filter((d) => {
      if (region && REGIONS[d.slug] !== region) return false;
      if (areaDef) {
        const courses = d.popularCourses.join(" ").toLowerCase();
        if (!areaDef.keywords.some((k) => courses.includes(k))) return false;
      }
      if (query) {
        const hay = `${d.name} ${d.city} ${d.code} ${d.popularCourses.join(" ")}`.toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });
  }, [q, region, area, destinations]);

  const reset = () => { setQ(""); setRegion(""); setArea(""); };
  const active = q || region || area;

  return (
    <div className="finder">
      <div className="finder__bar">
        <div className="finder__search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search a country, city or course…"
            aria-label="Search destinations and courses"
          />
        </div>
        <select value={region} onChange={(e) => setRegion(e.target.value)} aria-label="Region">
          <option value="">All regions</option>
          {REGION_LIST.map((r) => <option key={r}>{r}</option>)}
        </select>
        <select value={area} onChange={(e) => setArea(e.target.value)} aria-label="Course area">
          <option value="">All courses</option>
          {COURSE_AREAS.map((a) => <option key={a.label}>{a.label}</option>)}
        </select>
      </div>

      <div className="finder__meta">
        <span>{results.length} destination{results.length === 1 ? "" : "s"}{active ? " match your search" : " available"}</span>
        {active && (
          <button type="button" className="finder__clear" onClick={reset}>Clear filters ✕</button>
        )}
      </div>

      {results.length > 0 ? (
        <div className="grid-3">
          {results.map((d) => (
            <Ticket key={d.slug} d={d} notch={notchColor} />
          ))}
        </div>
      ) : (
        <div className="finder__empty">
          <p>No destinations match that search.</p>
          <button type="button" className="btn btn--ghost" onClick={reset}>Reset filters</button>
        </div>
      )}
    </div>
  );
}
