import Link from "next/link";
import type { Destination } from "@/lib/destinations";

/** Derive an ISO 3166 code (e.g. "gb") from a flag emoji's regional-indicator pair. */
const flagIso = (emoji: string) =>
  Array.from(emoji)
    .map((c) => String.fromCharCode((c.codePointAt(0) ?? 0) - 0x1f1e6 + 0x61))
    .join("");

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="ticket__flag"
          src={`/flags/${flagIso(d.flag)}.svg`}
          alt={`${d.name} flag`}
          width={96}
          height={64}
          loading="lazy"
        />
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
