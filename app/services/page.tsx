import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service study-abroad consultation: university selection, applications & SOP, visa assistance, scholarships, test prep and pre-departure support.",
};

const services = [
  {
    code: "SVC-01",
    icon: "🎯",
    title: "University Selection",
    text: "We start with you — your goals, grades, budget and dreams — then build a data-driven shortlist of best-fit universities and programmes. No guesswork, no upselling.",
    points: ["Profile evaluation & goal mapping", "Ambitious / target / safe shortlist", "Course & campus fit analysis", "Intake & deadline planning"],
  },
  {
    code: "SVC-02",
    icon: "📝",
    title: "Applications & SOP",
    text: "Your story, told powerfully. We craft statements of purpose, essays, references and applications that make admissions officers stop and remember you.",
    points: ["Statement of Purpose crafting", "Personal essays & LORs", "CV / résumé polishing", "Application submission & tracking"],
  },
  {
    code: "SVC-03",
    icon: "🛂",
    title: "Visa Assistance",
    text: "The part that scares everyone — handled. Meticulous documentation, financial planning and mock interviews behind our industry-leading 98% success rate.",
    points: ["Document checklist & review", "Financial & sponsorship guidance", "Mock visa interviews", "Application lodging support"],
  },
  {
    code: "SVC-04",
    icon: "💰",
    title: "Scholarships & Funding",
    text: "We surface every grant, bursary and merit award you qualify for — then position your application to actually win them. Students have unlocked $45M+ with us.",
    points: ["Scholarship matching", "Merit-award positioning", "Funding & loan guidance", "Application & essay support"],
  },
  {
    code: "SVC-05",
    icon: "📚",
    title: "Test Preparation",
    text: "IELTS, TOEFL, PTE, GRE, GMAT and SAT coaching from mentors who have topped these exams themselves. Strategy, not just practice.",
    points: ["Diagnostic & target scoring", "1:1 and small-group coaching", "Full-length mock exams", "Score-boost strategies"],
  },
  {
    code: "SVC-06",
    icon: "🏠",
    title: "Pre-Departure & Beyond",
    text: "Accommodation, travel, forex, packing, and settling-in — plus an alumni network waiting on the other side. We don't wave goodbye at the gate.",
    points: ["Accommodation & travel", "Pre-departure briefing", "Airport pickup coordination", "Alumni & community access"],
  },
];

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
            Six services, one seamless journey. Pick the legs you need or hand us the
            whole trip — either way, nothing about your future is left to chance.
          </p>
        </div>
      </header>

      <section className="section paper grain">
        <div className="container">
          <div className="svc-list">
            {services.map((s, i) => (
              <Reveal key={s.code}>
                <article className="svc-item">
                  <div className="svc-item__left">
                    <div className="svc-item__ico">{s.icon}</div>
                    <span className="svc-item__code">{s.code}</span>
                  </div>
                  <div className="svc-item__body">
                    <h2>{s.title}</h2>
                    <p>{s.text}</p>
                    <ul className="svc-item__points">
                      {s.points.map((p) => (
                        <li key={p}><span>✓</span>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="svc-item__num">{String(i + 1).padStart(2, "0")}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section night">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow eyebrow--light eyebrow--center">One Ticket, All Access</span>
            <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>Not sure which services you need?</h2>
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
