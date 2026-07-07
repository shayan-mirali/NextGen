import Reveal from "@/components/Reveal";

const IG = "https://www.instagram.com/nextgenstudyconsultant/";

/* ⚠️ PLACEHOLDER reviews. To show real Google reviews, replace the `reviews`
   array and summary below with data from the Google Places API (your Place ID
   + API key) or drop in an embed widget (e.g. Elfsight / Trustindex) in place
   of the cards grid. Ratings/text here are illustrative samples. */

const SUMMARY = { rating: "4.9", count: "480+" };

const reviews = [
  { name: "Aarav S.", initial: "A", dest: "🇬🇧 United Kingdom", stars: 5, text: "From shortlisting to visa, NextGen made the whole UK process feel easy. I got into my top-choice university.", when: "May 2026" },
  { name: "Fatima R.", initial: "F", dest: "🇨🇦 Canada", stars: 5, text: "The visa interview prep was gold. Approved first try for Canada — I honestly couldn't have done it alone.", when: "Apr 2026" },
  { name: "Diego M.", initial: "D", dest: "🇩🇪 Germany", stars: 5, text: "Their scholarship guidance saved me thousands in Germany. Endlessly patient and genuinely honest team.", when: "Apr 2026" },
  { name: "Mei L.", initial: "M", dest: "🇦🇺 Australia", stars: 5, text: "IELTS coaching took me from 6.0 to 7.5 in a few weeks. Clear strategy instead of endless practice.", when: "Mar 2026" },
  { name: "Priya K.", initial: "P", dest: "🇮🇪 Ireland", stars: 5, text: "What I valued most was the honesty — they told me which universities actually fit me, not just the famous ones.", when: "Mar 2026" },
  { name: "Omar A.", initial: "O", dest: "🇦🇪 UAE", stars: 5, text: "They handled everything for my move. I just showed up and boarded. Highly recommend NextGen.", when: "Feb 2026" },
];

function Stars({ n }: { n: number }) {
  return (
    <span className="rv-stars" aria-label={`${n} out of 5 stars`}>
      {"★★★★★".slice(0, n)}
    </span>
  );
}

export default function Reviews() {
  return (
    <section className="section paper-2 grain">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow eyebrow--center">Loved by students</span>
          <h2 className="h2">What our students <span className="grad-blue">say</span></h2>
          <div className="rv-summary">
            <span className="rv-summary__num">{SUMMARY.rating}</span>
            <div>
              <Stars n={5} />
              <span className="rv-summary__meta">{SUMMARY.count} reviews · Google</span>
            </div>
          </div>
        </div>

        <div className="grid-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 70}>
              <figure className="rv-card">
                <div className="rv-card__top">
                  <span className="rv-card__avatar">{r.initial}</span>
                  <div>
                    <strong>{r.name}</strong>
                    <em>{r.dest}</em>
                  </div>
                  <svg className="rv-card__g" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 01-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9z" />
                    <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-3l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0012 24z" />
                    <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 010-4.6V6.6H1.3a12 12 0 000 10.8l4-3.1z" />
                    <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0012 0 12 12 0 001.3 6.6l4 3.1C6.2 6.9 8.9 4.8 12 4.8z" />
                  </svg>
                </div>
                <Stars n={r.stars} />
                <blockquote>{r.text}</blockquote>
                <figcaption>{r.when}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 44 }}>
          <a href={IG} target="_blank" rel="noreferrer" className="btn btn--ig">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" />
            </svg>
            Join us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
