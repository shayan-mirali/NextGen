type BoardingPassProps = {
  from?: { code: string; place: string };
  to?: { code: string; place: string };
  passenger?: string;
  gate?: string;
  seat?: string;
  flight?: string;
  boards?: string;
  className?: string;
  /** background colour of the surface the pass sits on, for the punched notches */
  notch?: string;
};

/** A realistic boarding pass with a perforated tear-off stub and barcodes. */
export default function BoardingPass({
  from = { code: "YOU", place: "Departure" },
  to = { code: "OXF", place: "Your Future" },
  passenger = "NEXT GENERATION",
  gate = "A1",
  seat = "1A",
  flight = "NG 2026",
  boards = "ON TIME",
  className = "",
  notch = "var(--paper)",
}: BoardingPassProps) {
  return (
    <div className={`pass ${className}`} style={{ ["--notch" as string]: notch }}>
      <div className="pass__main">
        <div className="pass__brandrow">
          <span className="pass__airline">✦ NextGen Airways</span>
          <span className="pass__type">Boarding Pass</span>
        </div>

        <div className="pass__route">
          <div>
            <div className="pass__code">{from.code}</div>
            <span className="pass__place">{from.place}</span>
          </div>
          <div className="pass__mid">
            <div className="pass__dots">✈</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="pass__code">{to.code}</div>
            <span className="pass__place">{to.place}</span>
          </div>
        </div>

        <div className="pass__grid">
          <div className="pass__cell"><b>Passenger</b><span>{passenger}</span></div>
          <div className="pass__cell"><b>Flight</b><span>{flight}</span></div>
          <div className="pass__cell"><b>Gate</b><span>{gate}</span></div>
          <div className="pass__cell"><b>Boards</b><span>{boards}</span></div>
          <div className="pass__cell"><b>Class</b><span>SCHOLAR</span></div>
          <div className="pass__cell"><b>Status</b><span>CONFIRMED</span></div>
        </div>
      </div>

      <div className="pass__stub">
        <div className="pass__perf" />
        <div className="pass__seat"><b>Seat</b><span>{seat}</span></div>
        <div className="barcode--v" />
        <div className="pass__seat"><b>Gate</b><span>{gate}</span></div>
      </div>
    </div>
  );
}
