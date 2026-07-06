import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Stamp from "@/components/Stamp";
import Ticket from "@/components/Ticket";
import { destinations, getDestination } from "@/lib/destinations";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return { title: "Destination" };
  return {
    title: `Study in ${d.name}`,
    description: `${d.tagline} ${d.blurb} Explore visas, courses, work rights and scholarships for studying in ${d.name} with NextGen Study Abroad.`,
  };
}

export default async function DestinationDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  const others = destinations.filter((x) => x.slug !== d.slug).slice(0, 3);

  const numeric = (v: string) => parseInt(v.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = (v: string) => v.replace(/[0-9]/g, "");

  return (
    <main>
      <header className="pagehead">
        <div className="pagehead__glow" />
        <div className="pagehead__glow2" />
        <div className="container pagehead__inner dd-head">
          <div>
            <div className="crumbs">
              <Link href="/">Home</Link> / <Link href="/destinations">Destinations</Link> / <span>{d.name}</span>
            </div>
            <span className="eyebrow eyebrow--light">
              Flight to {d.code} · {d.city}
            </span>
            <h1 className="display" style={{ marginTop: 16 }}>
              {d.flag} {d.name}
            </h1>
            <p className="lead">{d.tagline}</p>
            <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn--primary">Start my application →</Link>
              <Link href="/destinations" className="btn btn--ghost-light">All destinations</Link>
            </div>
          </div>
          <div className="dd-head__code" aria-hidden="true">{d.code}</div>
        </div>
      </header>

      {/* Stats */}
      <section className="section paper grain" style={{ paddingBlock: "clamp(48px,6vw,72px)" }}>
        <div className="container">
          <div className="statrow">
            {d.stats.map((s) => (
              <Reveal key={s.label}>
                {numeric(s.value) > 0 ? (
                  <Counter to={numeric(s.value)} suffix={suffix(s.value)} className="stat__num grad-blue" />
                ) : (
                  <span className="stat__num grad-blue">{s.value}</span>
                )}
                <span className="stat__label">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + highlights */}
      <section className="section paper-2">
        <div className="container dd-grid">
          <Reveal>
            <span className="eyebrow">Why {d.name}</span>
            <h2 className="h2" style={{ marginTop: 14 }}>{d.intro}</h2>
          </Reveal>
          <div className="dd-highlights">
            {d.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 90}>
                <div className="dd-highlight card">
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section paper grain">
        <div className="container dd-details">
          <Reveal className="dd-detail">
            <span className="dd-detail__k">Intakes</span>
            <p>{d.intakes}</p>
          </Reveal>
          <Reveal className="dd-detail" delay={70}>
            <span className="dd-detail__k">Work rights</span>
            <p>{d.workRights}</p>
          </Reveal>
          <Reveal className="dd-detail" delay={140}>
            <span className="dd-detail__k">Visa</span>
            <p>{d.visa}</p>
          </Reveal>
          <Reveal className="dd-detail dd-detail--wide" delay={210}>
            <span className="dd-detail__k">Popular courses</span>
            <div className="dd-chips">
              {d.popularCourses.map((c) => (
                <span key={c} className="dd-chip">{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA with stamp */}
      <section className="section night dd-cta">
        <div className="container dd-cta__inner">
          <Reveal>
            <span className="eyebrow eyebrow--light">Cleared for {d.code}</span>
            <h2 className="h2" style={{ color: "#fff", marginTop: 14 }}>
              Ready to study in {d.name}?
            </h2>
            <p className="lead" style={{ color: "rgba(255,255,255,0.72)", marginTop: 14, maxWidth: 460 }}>
              Book a free consultation and we&apos;ll build your personalised roadmap to {d.city}.
            </p>
            <div style={{ marginTop: 28 }}>
              <Link href="/contact" className="btn btn--primary">Check in for {d.code} →</Link>
            </div>
          </Reveal>
          <div className="dd-cta__stamp">
            <Stamp top={`Entry · ${d.code}`} big="APPROVED" bottom={d.city} variant="gold" rotate={-10} />
          </div>
        </div>
      </section>

      {/* Other destinations */}
      <section className="section paper-2 grain">
        <div className="container">
          <div className="section__head" style={{ marginBottom: 40 }}>
            <span className="eyebrow eyebrow--center">Connecting Flights</span>
            <h2 className="h2">Explore other destinations</h2>
          </div>
          <div className="grid-3">
            {others.map((o) => (
              <Ticket key={o.slug} d={o} notch="var(--paper-2)" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
