import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import DestinationFinder from "@/components/DestinationFinder";
import { destinations } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Study in 16 of the world's top destinations — the UK, USA, Canada, Australia, Ireland, Germany, France and more. Explore visas, courses, work rights and costs for each.",
};

export default function DestinationsPage() {
  return (
    <main>
      <header className="pagehead">
        <div className="pagehead__glow" />
        <div className="pagehead__glow2" />
        <div className="container pagehead__inner">
          <div className="crumbs"><Link href="/">Home</Link> / <span>Destinations</span></div>
          <span className="eyebrow eyebrow--light">Departure Board</span>
          <h1 className="display" style={{ marginTop: 18 }}>Choose your<br />destination.</h1>
          <p className="lead">
            Sixteen of the world&apos;s leading education hubs — each a different door to
            your future. Pick a ticket to see visas, courses, work rights and costs.
          </p>

          {/* mini departures board */}
          <div className="depboard">
            <div className="depboard__head">
              <span>Destination</span><span>Code</span><span>Intake</span><span>Status</span>
            </div>
            {destinations.map((d) => (
              <Link key={d.slug} href={`/destinations/${d.slug}`} className="depboard__row">
                <span className="depboard__dest">{d.flag} {d.name}</span>
                <span className="depboard__code">{d.code}</span>
                <span className="depboard__intake">{d.intakes.split(" ")[0]}</span>
                <span className="depboard__status">● BOARDING</span>
              </Link>
            ))}
          </div>
        </div>
      </header>

      <section className="section paper grain">
        <div className="container">
          <div className="section__head" style={{ marginBottom: 34 }}>
            <span className="eyebrow eyebrow--center">Find your fit</span>
            <h2 className="h2">Search destinations &amp; courses</h2>
            <p className="lead">Filter by region or course area, or search for a country, city or subject.</p>
          </div>
          <DestinationFinder destinations={destinations} />
        </div>
      </section>

      <section className="section paper-2 grain">
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal>
            <span className="eyebrow eyebrow--center">Can&apos;t Decide?</span>
            <h2 className="h2" style={{ marginTop: 16 }}>We&apos;ll help you pick the perfect fit.</h2>
            <p className="lead" style={{ marginTop: 16, maxWidth: 500, marginInline: "auto" }}>
              Different countries suit different goals and budgets. In your free
              consultation we&apos;ll match you to the right one.
            </p>
            <div style={{ marginTop: 28 }}>
              <Link href="/contact" className="btn btn--primary">Get matched →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
