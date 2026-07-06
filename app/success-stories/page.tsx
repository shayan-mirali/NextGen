import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real students, real acceptance letters. See how NextGen Study Abroad helped ambitious students land at Oxford, Toronto, Melbourne and beyond.",
};

const arrivals = [
  { name: "Aisha Rahman", code: "OXF", from: "Dhaka", uni: "University of Oxford", course: "MSc Data Science", status: "SCHOLARSHIP" },
  { name: "Daniel Osei", code: "YYZ", from: "Accra", uni: "University of Toronto", course: "MEng", status: "VISA APPROVED" },
  { name: "Meera Patel", code: "SYD", from: "Ahmedabad", uni: "University of Melbourne", course: "MBA", status: "FUNDED" },
  { name: "Jibran Khan", code: "FRA", from: "Karachi", uni: "TU Munich", course: "MSc Robotics", status: "ADMITTED" },
  { name: "Lucia Fernández", code: "DUB", from: "Bogotá", uni: "Trinity College Dublin", course: "MSc Analytics", status: "ADMITTED" },
  { name: "Omar Haddad", code: "JFK", from: "Amman", uni: "Columbia University", course: "MS CS", status: "SCHOLARSHIP" },
];

const featured = [
  {
    quote:
      "I applied to five universities I never thought I'd get into. NextGen rewrote my whole strategy — I'm now at Oxford on a partial scholarship. They genuinely changed the trajectory of my life.",
    name: "Aisha Rahman",
    detail: "MSc Data Science · University of Oxford",
    initial: "A",
  },
  {
    quote:
      "The visa process terrified me. My consultant prepared every document and ran three mock interviews. Approved in one go, first attempt.",
    name: "Daniel Osei",
    detail: "MEng · University of Toronto",
    initial: "D",
  },
];

export default function SuccessPage() {
  return (
    <main>
      <header className="pagehead">
        <div className="pagehead__glow" />
        <div className="pagehead__glow2" />
        <div className="container pagehead__inner">
          <div className="crumbs"><Link href="/">Home</Link> / <span>Success Stories</span></div>
          <span className="eyebrow eyebrow--light">Arrivals</span>
          <h1 className="display" style={{ marginTop: 18 }}>They dreamed it.<br />Then they landed it.</h1>
          <p className="lead">
            Every stamp in our passport is a student who trusted us with their future —
            and boarded the flight of their life. Here are a few of them.
          </p>
        </div>
      </header>

      {/* Arrivals board */}
      <section className="section paper grain" style={{ paddingBottom: "clamp(40px,5vw,60px)" }}>
        <div className="container">
          <Reveal className="arrivals">
            <div className="arrivals__head">
              <span>Passenger</span><span>To</span><span>University</span><span>Status</span>
            </div>
            {arrivals.map((a) => (
              <div className="arrivals__row" key={a.name}>
                <span className="arrivals__pax">{a.name}<em>from {a.from}</em></span>
                <span className="arrivals__code">{a.code}</span>
                <span className="arrivals__uni">{a.uni}<em>{a.course}</em></span>
                <span className="arrivals__status">✓ {a.status}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Featured testimonials */}
      <section className="section paper-2">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow eyebrow--center">In Their Words</span>
            <h2 className="h2">Journeys worth remembering</h2>
          </div>
          <div className="grid-2">
            {featured.map((f, i) => (
              <Reveal key={f.name} delay={i * 100}>
                <figure className="quote-card">
                  <div className="quote-card__mark">“</div>
                  <blockquote>{f.quote}</blockquote>
                  <figcaption>
                    <span className="quote-card__avatar">{f.initial}</span>
                    <span><strong>{f.name}</strong><em>{f.detail}</em></span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section night">
        <div className="container">
          <div className="statrow">
            {[
              { to: 12000, s: "+", l: "Students placed" },
              { to: 98, s: "%", l: "Visa approval" },
              { to: 4.9, s: "/5", l: "Average rating" },
              { to: 45, s: "M+", l: "Scholarships won ($)" },
            ].map((x) => (
              <Reveal key={x.l}>
                <Counter to={x.to} suffix={x.s} className="stat__num" />
                <span className="stat__label">{x.l}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section paper grain">
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal>
            <span className="eyebrow eyebrow--center">Your Name Next?</span>
            <h2 className="h2" style={{ marginTop: 16 }}>Let&apos;s write your success story.</h2>
            <div style={{ marginTop: 28 }}>
              <Link href="/contact" className="btn btn--primary">Start now →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
