import Link from "next/link";
import type { Destination } from "@/lib/destinations";

/** A destination presented as a tear-off flight ticket. */
export default function Ticket({
  d,
  notch = "var(--paper-2)",
}: {
  d: Destination;
  notch?: string;
}) {
  return (
    <Link
      href={`/destinations/${d.slug}`}
      className="ticket"
      style={{ ["--notch" as string]: notch }}
    >
      <div className="ticket__top">
        <span className="ticket__code">{d.code}</span>
        <span className="ticket__flag">{d.flag}</span>
      </div>
      <div className="ticket__tear">
        <span className="ticket__notch-r" style={{ background: notch }} />
      </div>
      <div className="ticket__body">
        <span className="ticket__city">Destination · {d.city}</span>
        <h3 className="ticket__name">{d.name}</h3>
        <p className="ticket__blurb">{d.blurb}</p>
        <div className="ticket__foot">
          <span className="ticket__meta">{d.stats[0].value} unis</span>
          <span className="ticket__go">View route →</span>
        </div>
      </div>
    </Link>
  );
}
