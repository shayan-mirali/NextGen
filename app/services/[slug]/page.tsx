import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { services, getService } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "Service" };
  return {
    title: s.title,
    description: `${s.tagline} ${s.blurb} — NextGen Study Abroad.`,
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug);

  const numeric = (v: string) => parseInt(v.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = (v: string) => v.replace(/[0-9.]/g, "");
  const isNumeric = (v: string) => /^\d/.test(v.trim());

  return (
    <main>
      <header className="pagehead">
        <div className="pagehead__glow" />
        <div className="pagehead__glow2" />
        <div className="container pagehead__inner">
          <div className="crumbs">
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span>{s.short}</span>
          </div>
          <span className="eyebrow eyebrow--light">{s.code} · Service</span>
          <h1 className="display" style={{ marginTop: 16 }}>
            {s.icon} {s.title}
          </h1>
          <p className="lead">{s.tagline}</p>
          <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn--primary">Book free consultation →</Link>
            <Link href="/services" className="btn btn--ghost-light">All services</Link>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="section paper grain" style={{ paddingBlock: "clamp(48px,6vw,72px)" }}>
        <div className="container">
          <div className="statrow">
            {s.stats.map((x) => (
              <Reveal key={x.label}>
                {isNumeric(x.value) ? (
                  <Counter to={numeric(x.value)} suffix={suffix(x.value)} className="stat__num grad-blue" />
                ) : (
                  <span className="stat__num grad-blue">{x.value}</span>
                )}
                <span className="stat__label">{x.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + what's included */}
      <section className="section paper-2">
        <div className="container dd-grid">
          <Reveal>
            <span className="eyebrow">What this covers</span>
            <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(1.5rem,2.6vw,2.1rem)", lineHeight: 1.2 }}>
              {s.intro}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="card svc-detail__card">
              <h3 className="svc-detail__cardhead">What&apos;s included</h3>
              <ul className="svc-detail__points">
                {s.points.map((p) => (
                  <li key={p}><span>✓</span>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process / legs */}
      <section className="section paper grain">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow eyebrow--center">How it works</span>
            <h2 className="h2">Four steps to <span className="grad-blue">liftoff</span></h2>
          </div>
          <div className="grid-4">
            {s.process.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 80}>
                <div className="card svc-step">
                  <span className="svc-step__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section paper-2">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section__head">
            <span className="eyebrow eyebrow--center">Good to know</span>
            <h2 className="h2">Frequently asked</h2>
          </div>
          <div className="faq">
            {s.faqs.map((f) => (
              <details className="faq__item" key={f.q}>
                <summary className="faq__q">{f.q}</summary>
                <p className="faq__a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section night">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow eyebrow--light eyebrow--center">Ready when you are</span>
            <h2 className="h2" style={{ color: "#fff", marginTop: 14 }}>
              Let&apos;s get {s.short.toLowerCase()} moving.
            </h2>
            <p className="lead" style={{ color: "rgba(255,255,255,0.72)", marginTop: 14, maxWidth: 480, marginInline: "auto" }}>
              Book a free consultation and we&apos;ll build your personalised plan — no pressure, no obligation.
            </p>
            <div style={{ marginTop: 28 }}>
              <Link href="/contact" className="btn btn--primary">Check in now →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other services */}
      <section className="section paper grain">
        <div className="container">
          <div className="section__head" style={{ marginBottom: 40 }}>
            <span className="eyebrow eyebrow--center">Connecting Services</span>
            <h2 className="h2">Explore the rest</h2>
          </div>
          <div className="grid-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="card svc-mini">
                <div className="card__ico">{o.icon}</div>
                <h3>{o.title}</h3>
                <p>{o.blurb}</p>
                <span className="svc-mini__go">
                  Learn more
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
