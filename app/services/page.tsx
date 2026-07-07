import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Four dedicated services for your journey abroad: Study Abroad Consultancy, Student Visa Assistance, Admission Guidance and IELTS/PTE Preparation.",
};

export default function ServicesPage() {
  return (
    <main>
      <header className="pagehead">
        <div className="pagehead__glow" />
        <div className="pagehead__glow2" />
        <div className="container pagehead__inner">
          <div className="crumbs"><Link href="/">Home</Link> / <span>Services</span></div>
          <span className="eyebrow eyebrow--light">Your Full Itinerary</span>
          <h1 className="display" style={{ marginTop: 18 }}>Everything, handled.<br />Gate to graduation.</h1>
          <p className="lead">
            Four dedicated services, one seamless journey. Pick the legs you need or hand
            us the whole trip — either way, nothing about your future is left to chance.
          </p>
        </div>
      </header>

      <section className="section paper grain">
        <div className="container">
          <div className="svc-list">
            {services.map((s, i) => (
              <Reveal key={s.code}>
                <Link href={`/services/${s.slug}`} className="svc-item">
                  <div className="svc-item__left">
                    <div className="svc-item__ico">{s.icon}</div>
                    <span className="svc-item__code">{s.code}</span>
                  </div>
                  <div className="svc-item__body">
                    <h2>{s.title}</h2>
                    <p>{s.blurb}</p>
                    <ul className="svc-item__points">
                      {s.points.slice(0, 4).map((p) => (
                        <li key={p}><span>✓</span>{p}</li>
                      ))}
                    </ul>
                    <span className="svc-item__go">
                      Explore {s.short}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <div className="svc-item__num">{String(i + 1).padStart(2, "0")}</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section night">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow eyebrow--light eyebrow--center">One Ticket, All Access</span>
            <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>Not sure which service you need?</h2>
            <p className="lead" style={{ color: "rgba(255,255,255,0.7)", marginTop: 16, maxWidth: 520, marginInline: "auto" }}>
              That&apos;s exactly what the free consultation is for. We&apos;ll assess your
              profile and tell you honestly what will move the needle.
            </p>
            <div style={{ marginTop: 30 }}>
              <Link href="/contact" className="btn btn--primary">Book free consultation →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
