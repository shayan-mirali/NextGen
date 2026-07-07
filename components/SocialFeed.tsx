import Reveal from "@/components/Reveal";

/* ⚠️ PLACEHOLDER social feed. To show your real Instagram/Facebook feed, replace
   this grid with an embed (e.g. Instagram oEmbed, Behold, EmbedSocial, or the
   official Meta feed widget). The tiles below are illustrative. */

const IG = "https://www.instagram.com/nextgenstudyconsultant/";

const tiles = [
  { emoji: "🎓", cap: "Another offer letter in! 🇬🇧" },
  { emoji: "🛫", cap: "Departures season is here" },
  { emoji: "🏛️", cap: "Campus tour: study in Canada" },
  { emoji: "📚", cap: "IELTS tip of the week" },
  { emoji: "🌍", cap: "16 destinations, one dream" },
  { emoji: "🎉", cap: "Visa approved — congrats!" },
];

export default function SocialFeed() {
  return (
    <section className="section paper grain">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow eyebrow--center">Follow the journey</span>
          <h2 className="h2">On <span className="grad">@nextgenstudyconsultant</span></h2>
          <p className="lead">Offer letters, visa wins, campus tours and study tips — every week.</p>
        </div>

        <div className="social-grid">
          {tiles.map((t, i) => (
            <Reveal key={t.cap} delay={(i % 6) * 60}>
              <a href={IG} target="_blank" rel="noreferrer" className="social-tile">
                <span className="social-tile__emoji">{t.emoji}</span>
                <span className="social-tile__cap">{t.cap}</span>
                <span className="social-tile__ig" aria-hidden="true">◎</span>
              </a>
            </Reveal>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href={IG} target="_blank" rel="noreferrer" className="btn btn--dark">
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
