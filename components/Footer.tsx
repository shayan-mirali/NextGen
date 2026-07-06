import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/destinations";

const socials = [
  { label: "Instagram", short: "IG", href: "https://www.instagram.com/nextgenstudyconsultant/" },
  { label: "LinkedIn", short: "IN", href: "#" },
  { label: "Facebook", short: "FB", href: "#" },
  { label: "YouTube", short: "YT", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__board">
          <i>●</i> NOW BOARDING
          <span style={{ color: "rgba(255,255,255,0.5)" }}>·</span>
          FLIGHTS TO {destinations.map((d) => d.code).join(" · ")}
          <span style={{ color: "rgba(255,255,255,0.5)" }}>·</span>
          <span style={{ color: "#29c26b" }}>ON TIME</span>
        </div>

        <div className="footer__inner">
          <div className="footer__brand">
            <Link href="/" className="term-brand">
              <Image src="/logo.png" alt="NextGen Study Abroad" width={46} height={46} />
              <div>
                <b>NextGen</b>
                <span>Study Abroad</span>
              </div>
            </Link>
            <p>
              Guiding the next generation to the world&apos;s best universities —
              with honesty, expertise and care. Your journey, our mission.
            </p>
            <div className="footer__socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/success-stories">Success Stories</Link>
          </div>

          <div className="footer__col">
            <h4>Destinations</h4>
            {destinations.slice(0, 4).map((d) => (
              <Link key={d.slug} href={`/destinations/${d.slug}`}>
                {d.name}
              </Link>
            ))}
          </div>

          <div className="footer__col">
            <h4>Check In</h4>
            <Link href="/contact">Free Consultation</Link>
            <Link href="/contact">Book a Call</Link>
            <a href="mailto:hello@nextgenstudyabroad.com">Email us</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} NextGen Study Abroad — All rights reserved.</p>
          <p>DESIGNED FOR THE NEXT GENERATION OF GLOBAL STUDENTS</p>
        </div>
      </div>
    </footer>
  );
}
