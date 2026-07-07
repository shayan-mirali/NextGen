import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { posts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return { title: "Article" };
  return { title: p.title, description: p.excerpt };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <main>
      <header className="pagehead">
        <div className="pagehead__glow" />
        <div className="pagehead__glow2" />
        <div className="container pagehead__inner" style={{ maxWidth: 820 }}>
          <div className="crumbs">
            <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>{p.category}</span>
          </div>
          <span className="eyebrow eyebrow--light">{p.category}</span>
          <h1 className="display" style={{ marginTop: 16, fontSize: "clamp(2rem,4.6vw,3.4rem)" }}>{p.title}</h1>
          <div className="blog-post__meta">
            <span className="blog-post__emoji">{p.emoji}</span>
            <span>{p.author}</span>
            <span>·</span>
            <span>{p.dateLabel}</span>
            <span>·</span>
            <span>{p.readTime}</span>
          </div>
        </div>
      </header>

      <section className="section paper grain">
        <div className="container blog-article">
          <Reveal>
            <article>
              <p className="blog-article__lead">{p.excerpt}</p>
              {p.body.map((b, i) => {
                if (b.kind === "h") return <h2 key={i}>{b.text}</h2>;
                if (b.kind === "ul")
                  return (
                    <ul key={i} className="blog-article__list">
                      {b.items.map((it) => <li key={it}>{it}</li>)}
                    </ul>
                  );
                return <p key={i}>{b.text}</p>;
              })}
            </article>
          </Reveal>

          <div className="blog-article__cta">
            <Link href="/contact" className="btn btn--primary">Book a free consultation →</Link>
            <Link href="/blog" className="btn btn--ghost">← All articles</Link>
          </div>
        </div>
      </section>

      <section className="section paper-2 grain">
        <div className="container">
          <div className="section__head" style={{ marginBottom: 40 }}>
            <span className="eyebrow eyebrow--center">Keep reading</span>
            <h2 className="h2">More from the blog</h2>
          </div>
          <div className="grid-3">
            {more.map((m) => (
              <Link key={m.slug} href={`/blog/${m.slug}`} className="blog-card">
                <div className="blog-card__cover"><span>{m.emoji}</span></div>
                <div className="blog-card__body">
                  <span className="blog-card__cat">{m.category}</span>
                  <h3>{m.title}</h3>
                  <p>{m.excerpt}</p>
                  <div className="blog-card__meta">
                    <span>{m.dateLabel}</span>
                    <span>·</span>
                    <span>{m.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
