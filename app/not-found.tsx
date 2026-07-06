import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="hh" style={{ minHeight: "100vh" }}>
        <div className="hh__bg">
          <div className="hh__glow hh__glow--1" />
          <div className="hh__glow hh__glow--2" />
          <div className="hh__stars" />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <span className="eyebrow eyebrow--light eyebrow--center">Flight Not Found</span>
          <h1 className="display" style={{ color: "#fff", marginTop: 18, fontSize: "clamp(3rem, 12vw, 7rem)" }}>
            404
          </h1>
          <p className="lead" style={{ color: "rgba(255,255,255,0.7)", maxWidth: 460, margin: "16px auto 0" }}>
            Looks like this route has been cancelled. Let&apos;s get you back to the
            departure lounge.
          </p>
          <div style={{ marginTop: 30, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="btn btn--primary">Back to Home</Link>
            <Link href="/destinations" className="btn btn--ghost-light">See Destinations</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
