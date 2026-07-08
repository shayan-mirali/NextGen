import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/destinations";
import { services } from "@/lib/services";
import Newsletter from "@/components/Newsletter";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nextgenstudyconsultant/",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.63 3.63 0 0 0-.88-1.35 3.63 3.63 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36Zm5.5-2.9a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/nextgenstudyconsultant/",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
      </svg>
    ),
  },
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
                  {s.icon}
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
