import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about studying abroad with NextGen — consultations, fees, visas, scholarships, IELTS/PTE, timelines and more.",
};

const groups = [
  {
    title: "Getting started",
    faqs: [
      { q: "Is the first consultation really free?", a: "Yes — your discovery call and profile assessment are completely free and no-obligation. We only take on students we're confident we can genuinely help." },
      { q: "How do I begin?", a: "Book a free consultation from the Contact page or tap the WhatsApp button. We'll ask a few questions about your goals, grades and budget, then map your options." },
      { q: "Do you charge for your services?", a: "Consultation and profile assessment are free. Service fees depend on the package you choose — we're always transparent about costs upfront, with no hidden charges." },
    ],
  },
  {
    title: "Universities & admissions",
    faqs: [
      { q: "Which countries and universities do you work with?", a: "We cover 16 destinations and partner with 800+ universities. Our advice is impartial — if a non-partner institution is your best fit, we'll say so." },
      { q: "How many universities should I apply to?", a: "We usually build a balanced list of ambitious, target and safe choices, so you have real options. Most students receive three or more offers." },
      { q: "Will you write my SOP and essays?", a: "We craft them with you — your story, your voice, professionally shaped. Authenticity is what admissions officers reward, so it's always genuinely yours." },
    ],
  },
  {
    title: "Visas & finances",
    faqs: [
      { q: "What is your visa success rate?", a: "98%. It comes from meticulous documentation, honest financial planning and thorough interview preparation — never shortcuts." },
      { q: "Can you help me find scholarships?", a: "Yes. We match you to the merit awards, grants and funding you qualify for and position your application to win them. Our students have unlocked $45M+ in funding." },
      { q: "What happens if my visa is refused?", a: "We analyse the refusal, strengthen the weak points and guide your re-application. Because of our upfront rigour, refusals are rare." },
    ],
  },
  {
    title: "Tests & timelines",
    faqs: [
      { q: "Which English tests do you prepare students for?", a: "IELTS, PTE Academic and TOEFL iBT — plus guidance on which test best suits your target country and university." },
      { q: "How long does the whole process take?", a: "It varies by destination and intake, but most students plan 6–12 months ahead. Some intakes can move faster — we'll give you a dated roadmap." },
      { q: "Can I apply while still completing my current studies?", a: "Absolutely. Many students apply with predicted grades and finalise their place once results are out. We plan around your timeline." },
    ],
  },
];

export default function FaqPage() {
  return (
    <main>
      <header className="pagehead">
        <div className="pagehead__glow" />
        <div className="pagehead__glow2" />
        <div className="container pagehead__inner">
          <div className="crumbs"><Link href="/">Home</Link> / <span>FAQ</span></div>
          <span className="eyebrow eyebrow--light">Help Desk</span>
          <h1 className="display" style={{ marginTop: 18 }}>Frequently<br />asked questions.</h1>
          <p className="lead">
            Everything students ask us most — answered. Still unsure? Book a free
            consultation and we&apos;ll talk it through.
          </p>
        </div>
      </header>

      <section className="section paper grain">
        <div className="container" style={{ maxWidth: 860 }}>
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 60}>
              <div style={{ marginBottom: 40 }}>
                <span className="eyebrow" style={{ marginBottom: 18, display: "inline-flex" }}>{g.title}</span>
                <div className="faq">
                  {g.faqs.map((f) => (
                    <details className="faq__item" key={f.q}>
                      <summary className="faq__q">{f.q}</summary>
                      <p className="faq__a">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section night">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow eyebrow--light eyebrow--center">Still have a question?</span>
            <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>We&apos;re one message away.</h2>
            <p className="lead" style={{ color: "rgba(255,255,255,0.7)", marginTop: 16, maxWidth: 480, marginInline: "auto" }}>
              Ask us anything — on WhatsApp or in a free consultation. No pressure, ever.
            </p>
            <div style={{ marginTop: 30 }}>
              <Link href="/contact" className="btn btn--primary">Ask the team →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
