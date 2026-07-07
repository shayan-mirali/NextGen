import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import RouteLine from "@/components/RouteLine";
import Ticket from "@/components/Ticket";
import BoardingPass from "@/components/BoardingPass";
import Reviews from "@/components/Reviews";
import { destinations } from "@/lib/destinations";
import { services } from "@/lib/services";

const legs = [
  { code: "LEG 01", title: "Discovery Call", text: "A free consultation to understand your goals, academics and budget — then map the realistic routes forward.", stamp: "CLEARED" },
  { code: "LEG 02", title: "Flight Plan", text: "A tailored shortlist of universities and programmes, with timelines, costs and scholarship targets.", stamp: "PLOTTED" },
  { code: "LEG 03", title: "Apply & Prepare", text: "We polish essays, references and tests, submit flawless applications, and prep you for every interview.", stamp: "SUBMITTED" },
  { code: "LEG 04", title: "Visa & Departure", text: "Documents perfected, visa secured, bags packed. We handle logistics so you land ready to thrive.", stamp: "APPROVED" },
];

export default function Home() {
  return (
    <main>
      <HomeHero />

      {/* Trust strip */}
      <section className="paper" style={{ borderBottom: "1px solid var(--paper-line)" }}>
        <div className="container" style={{ padding: "26px 26px" }}>
          <div className="trust-strip">
            <span className="eyebrow">Boarding students to</span>
            {["Harvard", "Oxford", "Toronto", "MIT", "Melbourne", "ETH Zürich", "NUS"].map((u) => (
              <span className="trust-strip__uni" key={u}>{u}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / itinerary */}
      <section className="section paper grain" id="journey">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow eyebrow--center">Your Itinerary</span>
            <h2 className="h2">Four legs to your <span className="grad-blue">acceptance letter</span></h2>
            <p className="lead">Every NextGen journey follows the same proven flight plan — with a real human beside you at every gate.</p>
          </div>

          <div className="journey">
            <RouteLine className="journey__route" height={1300} />
            {legs.map((leg, i) => (
              <Reveal key={leg.code} className={`journey__leg ${i % 2 ? "journey__leg--right" : ""}`}>
                <div className="journey__card card">
                  <div className="journey__legcode">{leg.code}</div>
                  <h3>{leg.title}</h3>
                  <p>{leg.text}</p>
                  <span className="journey__stamp">✓ {leg.stamp}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section paper-2">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow eyebrow--center">On Board Service</span>
            <h2 className="h2">Full-service, <span className="grad">first class</span></h2>
            <p className="lead">Everything you need under one roof — so nothing about your future is left to chance.</p>
          </div>
          <div className="grid-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 80}>
                <Link href={`/services/${s.slug}`} className="card svc-mini">
                  <div className="card__ico">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <span className="svc-mini__go">
                    Learn more
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link href="/services" className="btn btn--dark">See all services →</Link>
          </div>
        </div>
      </section>

      {/* Destinations preview */}
      <section className="section paper grain">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow eyebrow--center">Departure Board</span>
            <h2 className="h2">Where will you <span className="grad-blue">land?</span></h2>
            <p className="lead">Tap a ticket to explore each destination — visas, courses, work rights and more.</p>
          </div>
          <div className="grid-3">
            {destinations.slice(0, 6).map((d, i) => (
              <Reveal key={d.slug} delay={(i % 3) * 80}>
                <Ticket d={d} notch="var(--paper)" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="section night">
        <div className="container">
          <div className="statrow">
            {[
              { to: 12000, s: "+", l: "Students placed" },
              { to: 98, s: "%", l: "Visa approval" },
              { to: 45, s: "M+", l: "Scholarships won ($)" },
              { to: 15, s: "+", l: "Years flying" },
            ].map((x) => (
              <Reveal key={x.l}>
                <Counter to={x.to} suffix={x.s} className="stat__num" />
                <span className="stat__label">{x.l}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Google reviews */}
      <Reviews />

      {/* CTA */}
      <section className="section paper grain">
        <div className="container cta-final">
          <Reveal className="cta-final__text">
            <span className="eyebrow">Final Call</span>
            <h2 className="h2" style={{ marginTop: 16 }}>Your seat is <span className="grad">reserved.</span></h2>
            <p className="lead" style={{ marginTop: 16, maxWidth: 460 }}>
              Book a free, no-pressure consultation. Tell us your dream and we&apos;ll
              show you exactly how to get there.
            </p>
            <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn--primary">Check In Now</Link>
              <Link href="/about" className="btn btn--ghost">Meet the crew</Link>
            </div>
          </Reveal>
          <Reveal className="cta-final__pass" delay={120}>
            <BoardingPass
              notch="var(--paper)"
              to={{ code: "GO", place: "Anywhere" }}
              boards="TODAY"
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
