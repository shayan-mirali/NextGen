import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Brochures & Resources",
  description:
    "Download free NextGen Study Abroad resources: company profile, university brochures, student visa checklist, IELTS guide and admission process PDF.",
};

const resources = [
  {
    icon: "📘",
    title: "Company Profile",
    text: "Our mission, vision and success ratio — 98% visa success, 12,000+ students placed and $45M+ in scholarships.",
    file: "/brochures/company-profile.pdf",
    tag: "PDF · Company",
  },
  {
    icon: "🎓",
    title: "University Brochures",
    text: "A snapshot of all 16 destinations and the courses students choose most, with 800+ partner universities.",
    file: "/brochures/university-brochures.pdf",
    tag: "PDF · Universities",
  },
  {
    icon: "🛂",
    title: "Visa Checklist",
    text: "The complete document checklist most student visa applications require — the backbone of our 98% success rate.",
    file: "/brochures/visa-checklist.pdf",
    tag: "PDF · Visa",
  },
  {
    icon: "📚",
    title: "IELTS Guide",
    text: "Section-by-section strategy for Listening, Reading, Writing and Speaking — plus our score-boost plan.",
    file: "/brochures/ielts-guide.pdf",
    tag: "PDF · Test Prep",
  },
  {
    icon: "🗺️",
    title: "Admission Process PDF",
    text: "From first call to final offer — the six clear steps of a NextGen application, explained end to end.",
    file: "/brochures/admission-process.pdf",
    tag: "PDF · Admissions",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <header className="pagehead">
        <div className="pagehead__glow" />
        <div className="pagehead__glow2" />
        <div className="container pagehead__inner">
          <div className="crumbs"><Link href="/">Home</Link> / <span>Resources</span></div>
          <span className="eyebrow eyebrow--light">In-flight Reading</span>
          <h1 className="display" style={{ marginTop: 18 }}>Brochures &amp;<br />free resources.</h1>
          <p className="lead">
            Everything you need to plan your journey — download our brochures, checklists
            and guides. No sign-up, no cost.
          </p>
        </div>
      </header>

      <section className="section paper grain">
        <div className="container">
          <div className="grid-3">
            {resources.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 80}>
                <article className="card dl-card">
                  <div className="card__ico">{r.icon}</div>
                  <span className="dl-card__tag">{r.tag}</span>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                  <a href={r.file} download className="btn btn--dark dl-card__btn">
                    Download PDF
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section night">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow eyebrow--light eyebrow--center">Want it personalised?</span>
            <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>Get a shortlist built just for you.</h2>
            <p className="lead" style={{ color: "rgba(255,255,255,0.7)", marginTop: 16, maxWidth: 500, marginInline: "auto" }}>
              Brochures are a great start — a free consultation is better. We&apos;ll match
              you to the right universities, courses and scholarships.
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
