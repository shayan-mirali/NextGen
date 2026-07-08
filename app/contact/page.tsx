import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CheckInForm from "@/components/CheckInForm";
import AppointmentForm from "@/components/AppointmentForm";

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

            {/* ⚠️ Address and hours are still placeholders — replace once confirmed. */}
            <ul className="checkin-contacts">
              <li><span>☎</span> <a href="tel:+923394020357">0339-4020357</a></li>
              <li><span>💬</span> <a href="https://wa.me/923394020357" target="_blank" rel="noreferrer">WhatsApp us</a></li>
              <li><span>✉</span> <a href="mailto:info@nextgenstudyabroad.com">info@nextgenstudyabroad.com</a></li>
              <li><span>📍</span> Your Office Address, near [Landmark]</li>
              <li><span>🕒</span> Mon–Sat · 9:00 AM – 6:00 PM</li>
              <li>
                <span>◎</span>
                <a href="https://www.instagram.com/nextgenstudyconsultant/" target="_blank" rel="noreferrer">
                  @nextgenstudyconsultant
                </a>
              </li>
              <li>
                <span>ⓕ</span>
                <a href="https://www.facebook.com/nextgenstudyconsultant/" target="_blank" rel="noreferrer">
                  nextgenstudyconsultant
                </a>
              </li>
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

      {/* Book an appointment */}
      <section className="section paper-2 grain" id="appointment">
        <div className="container" style={{ maxWidth: 720, position: "relative", zIndex: 1 }}>
          <div className="section__head">
            <span className="eyebrow eyebrow--center">Prefer a set time?</span>
            <h2 className="h2">Book an appointment</h2>
            <p className="lead">
              Pick a day and slot that suits you — we&apos;ll confirm by email and meet
              online or at our office.
            </p>
          </div>
          <Reveal>
            <div className="checkin-card">
              <div className="checkin-card__head">
                <span>Appointment Booking</span>
                <span className="checkin-card__flight">Mon–Sat</span>
              </div>
              <AppointmentForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
