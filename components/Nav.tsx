"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/success-stories", label: "Stories" },
];

function Clock() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    tick();
    const id = setInterval(tick, 1000 * 15);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="term-clock">
      <i />
      GATE OPEN · {time}
    </span>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`term-nav ${scrolled ? "term-nav--scrolled" : ""} ${open ? "term-nav--open" : ""}`}
    >
      <div className="container term-nav__inner">
        <Link href="/" className="term-brand">
          <Image src="/logo.png" alt="NextGen Study Abroad" width={44} height={44} priority />
          <div>
            <b>NextGen</b>
            <span>Study Abroad</span>
          </div>
        </Link>

        <Clock />

        <nav className="term-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`term-link ${isActive(l.href) ? "term-link--active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn--primary">
            Check In
          </Link>
        </nav>

        <button
          className="term-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
