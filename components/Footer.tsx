import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/destinations";
import { services } from "@/lib/services";
import Newsletter from "@/components/Newsletter";

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

        <Newsletter />

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
            <h4>Services</h4>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.short}
              </Link>
            ))}
          </div>

          <div className="footer__col">
            <h4>Destinations</h4>
            {destinations.slice(0, 5).map((d) => (
              <Link key={d.slug} href={`/destinations/${d.slug}`}>
                {d.name}
              </Link>
            ))}
            <Link href="/destinations">All 16 →</Link>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/success-stories">Success Stories</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/resources">Brochures &amp; Resources</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact#appointment">Book Appointment</Link>
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
