import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Study-abroad tips, destination guides and test-prep strategy from the NextGen team — visas, admissions, IELTS/PTE and more.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <main>
      <header className="pagehead">
        <div className="pagehead__glow" />
        <div className="pagehead__glow2" />
        <div className="container pagehead__inner">
          <div className="crumbs"><Link href="/">Home</Link> / <span>Blog</span></div>
          <span className="eyebrow eyebrow--light">The Departure Lounge</span>
          <h1 className="display" style={{ marginTop: 18 }}>Tips for your<br />journey abroad.</h1>
          <p className="lead">
            Guides, strategy and honest advice on visas, admissions, destinations and
            test prep — straight from the NextGen team.
          </p>
        </div>
      </header>

      <section className="section paper grain">
        <div className="container">
          {/* Featured */}
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="blog-feature">
              <div className="blog-feature__cover">
                <span>{featured.emoji}</span>
              </div>
              <div className="blog-feature__body">
                <span className="blog-card__cat">{featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div className="blog-card__meta">
                  <span>{featured.dateLabel}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="blog-card__go">
                  Read article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Rest */}
          <div className="grid-3" style={{ marginTop: 30 }}>
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <Link href={`/blog/${p.slug}`} className="blog-card">
                  <div className="blog-card__cover"><span>{p.emoji}</span></div>
                  <div className="blog-card__body">
                    <span className="blog-card__cat">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <div className="blog-card__meta">
                      <span>{p.dateLabel}</span>
                      <span>·</span>
                      <span>{p.readTime}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section night">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow eyebrow--light eyebrow--center">Put it into action</span>
            <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>Ready to start your own story?</h2>
            <p className="lead" style={{ color: "rgba(255,255,255,0.7)", marginTop: 16, maxWidth: 480, marginInline: "auto" }}>
              Reading is a great first step. A free consultation is the next one.
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
