import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CheckInForm from "@/components/CheckInForm";

export const metadata: Metadata = {
  title: "Check In · Free Consultation",
  description:
    "Book your free study-abroad consultation with NextGen. Tell us your goals and we'll build your personalised roadmap — university, visa, scholarships and beyond.",
};

const steps = [
  { n: "01", t: "You check in", d: "Fill the form — takes 60 seconds." },
  { n: "02", t: "We call you", d: "A free strategy session, within 24 hours." },
  { n: "03", t: "You board", d: "A clear, personalised roadmap to your future." },
];

export default function ContactPage() {
  return (
    <main>
      <header className="pagehead">
        <div className="pagehead__glow" />
        <div className="pagehead__glow2" />
        <div className="container pagehead__inner">
          <div className="crumbs"><Link href="/">Home</Link> / <span>Check In</span></div>
          <span className="eyebrow eyebrow--light">Check-In Desk · Now Open</span>
          <h1 className="display" style={{ marginTop: 18 }}>Your journey<br />begins here.</h1>
          <p className="lead">
            Book a free, no-pressure consultation. Tell us where you want to go — we&apos;ll
            show you exactly how to get there.
          </p>
        </div>
      </header>

      <section className="section paper grain" style={{ paddingTop: "clamp(48px,6vw,80px)" }}>
        <div className="container checkin-grid">
          <Reveal className="checkin-info">
            <span className="eyebrow">How Check-In Works</span>
            <div className="checkin-steps">
              {steps.map((s) => (
                <div className="checkin-step" key={s.n}>
                  <span className="checkin-step__n">{s.n}</span>
                  <div>
                    <strong>{s.t}</strong>
                    <p>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <ul className="checkin-contacts">
              <li><span>✉</span> hello@nextgenstudyabroad.com</li>
              <li><span>☎</span> +1 (800) 555-0199</li>
              <li>
                <span>◎</span>
                <a href="https://www.instagram.com/nextgenstudyconsultant/" target="_blank" rel="noreferrer">
                  @nextgenstudyconsultant
                </a>
              </li>
              <li><span>📍</span> Global · Online &amp; in-person</li>
            </ul>

            <div className="checkin-trust">
              <div className="checkin-trust__avatars">
                <span>A</span><span>D</span><span>M</span><span>J</span><span>+</span>
              </div>
              <p>Join <strong>12,000+</strong> students who checked in with NextGen.</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="checkin-card">
              <div className="checkin-card__head">
                <span>Boarding Pass Request</span>
                <span className="checkin-card__flight">NG · 2026</span>
              </div>
              <CheckInForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
