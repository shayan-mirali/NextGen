import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Stamp from "@/components/Stamp";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet NextGen Study Abroad — a crew of mentors, ex-admissions insiders and visa specialists devoted to guiding the next generation of global students.",
};

const values = [
  { top: "Value 01", big: "HONEST", bottom: "No false promises", variant: "blue" as const, rot: -9 },
  { top: "Value 02", big: "EXPERT", bottom: "15+ years flying", variant: "gold" as const, rot: 7 },
  { top: "Value 03", big: "PERSONAL", bottom: "You, not a number", variant: "red" as const, rot: -5 },
  { top: "Value 04", big: "END-TO-END", bottom: "Gate to campus", variant: "blue" as const, rot: 8 },
];

const crew = [
  { initials: "SA", name: "Sara Ahmed", role: "Founder & Lead Counsellor", bio: "Ex-university admissions officer. Has personally guided 2,000+ students to top-50 universities." },
  { initials: "DK", name: "David Kim", role: "Head of Visas", bio: "Former immigration caseworker. Turns the scariest part of the process into a formality." },
  { initials: "MP", name: "Maria Popescu", role: "Scholarships Lead", bio: "Has helped students unlock over $45M in funding across 30 countries." },
  { initials: "JR", name: "James Reid", role: "Test Prep Mentor", bio: "IELTS 9.0 & GRE 335. Makes exam prep feel almost unfair to the competition." },
];

export default function AboutPage() {
  return (
    <main>
      <header className="pagehead">
        <div className="pagehead__glow" />
        <div className="pagehead__glow2" />
        <div className="container pagehead__inner">
          <div className="crumbs"><Link href="/">Home</Link> / <span>About</span></div>
          <span className="eyebrow eyebrow--light">The Crew</span>
          <h1 className="display" style={{ marginTop: 18 }}>
            We&apos;re the people who<br />get you there.
          </h1>
          <p className="lead">
            NextGen Study Abroad began with a simple frustration: brilliant students
            being let down by confusing advice and one-size-fits-all agencies. So we
            built the consultancy we wished existed — honest, expert, and genuinely
            in your corner.
          </p>
        </div>
      </header>

      {/* Mission */}
      <section className="section paper grain">
        <div className="container about-mission">
          <Reveal>
            <span className="eyebrow">Our Mission</span>
            <h2 className="h2" style={{ marginTop: 16 }}>
              To make a world-class education <span className="grad-blue">reachable</span> for the next generation.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead" style={{ marginBottom: 18 }}>
              Studying abroad shouldn&apos;t depend on knowing the right people or
              decoding opaque systems. We translate ambition into a concrete flight
              plan — and stay beside you until you&apos;ve landed.
            </p>
            <p className="lead">
              Thousands of journeys later, our compass hasn&apos;t changed: put the
              student first, tell the truth, and sweat every detail so you don&apos;t
              have to.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values as stamps */}
      <section className="section paper-2">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow eyebrow--center">Stamped Into Everything We Do</span>
            <h2 className="h2">Our values</h2>
          </div>
          <div className="stamp-row">
            {values.map((v) => (
              <Stamp key={v.big} top={v.top} big={v.big} bottom={v.bottom} variant={v.variant} rotate={v.rot} />
            ))}
          </div>
        </div>
      </section>

      {/* Crew */}
      <section className="section paper grain">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow eyebrow--center">Flight Crew</span>
            <h2 className="h2">The people in your corner</h2>
            <p className="lead">Real specialists — not a call-centre. You&apos;ll know them by name.</p>
          </div>
          <div className="grid-4">
            {crew.map((c, i) => (
              <Reveal key={c.name} delay={(i % 4) * 80}>
                <div className="card crew-card">
                  <div className="crew-card__avatar">{c.initials}</div>
                  <h3>{c.name}</h3>
                  <span className="crew-card__role">{c.role}</span>
                  <p>{c.bio}</p>
                </div>
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
              { to: 500, s: "+", l: "Partner universities" },
              { to: 98, s: "%", l: "Visa approval" },
              { to: 15, s: "+", l: "Years of expertise" },
            ].map((x) => (
              <Reveal key={x.l}>
                <Counter to={x.to} suffix={x.s} className="stat__num" />
                <span className="stat__label">{x.l}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section paper-2 grain">
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal>
            <span className="eyebrow eyebrow--center">Ready When You Are</span>
            <h2 className="h2" style={{ marginTop: 16 }}>Let&apos;s plan your journey together.</h2>
            <div style={{ marginTop: 28 }}>
              <Link href="/contact" className="btn btn--primary">Book a free consultation →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
