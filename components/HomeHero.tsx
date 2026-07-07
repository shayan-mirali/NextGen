"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import SplitFlap from "./SplitFlap";
import BoardingPass from "./BoardingPass";
import Counter from "./Counter";

const fade: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.12 },
  }),
};

const stamps = [
  { label: "APPROVED", sub: "VISA · 98%", cls: "hh__stamp--1", rot: -12, variant: "red" },
  { label: "ADMITTED", sub: "OFFER LETTER", cls: "hh__stamp--2", rot: 9, variant: "blue" },
  { label: "SCHOLAR", sub: "FUNDED", cls: "hh__stamp--3", rot: -6, variant: "gold" },
];

export default function HomeHero() {
  return (
    <section className="hh">
      <div className="hh__bg">
        <div className="hh__glow hh__glow--1" />
        <div className="hh__glow hh__glow--2" />
        <div className="hh__stars" />
      </div>

      <div className="container hh__inner">
        <motion.div className="hh__content" initial="hidden" animate="show">
          <motion.span className="eyebrow eyebrow--light" variants={fade} custom={0}>
            NextGen Airways · Departures
          </motion.span>

          <motion.div className="hh__board" variants={fade} custom={1}>
            <SplitFlap text="STUDY ABROAD" className="hh__flap" />
          </motion.div>

          <motion.h1 className="hh__title" variants={fade} custom={2}>
            Your Gateway to
            <span className="grad"> Global Education.</span>
          </motion.h1>

          <motion.p className="hh__lead" variants={fade} custom={3}>
            We turn global ambitions into acceptance letters. From university
            selection to visas and scholarships — NextGen guides every step of
            the journey, right up to the departure gate.
          </motion.p>

          <motion.div className="hh__cta" variants={fade} custom={4}>
            <Link href="/contact" className="btn btn--primary">
              Begin Your Journey
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/destinations" className="btn btn--ghost-light">
              Explore Destinations
            </Link>
          </motion.div>

          <motion.div className="hh__stats" variants={fade} custom={5}>
            <div>
              <Counter to={98} suffix="%" className="hh__stat-num" />
              <span className="hh__stat-label">Visa success</span>
            </div>
            <div>
              <Counter to={12000} suffix="+" className="hh__stat-num" />
              <span className="hh__stat-label">Students flown</span>
            </div>
            <div>
              <Counter to={16} suffix="" className="hh__stat-num" />
              <span className="hh__stat-label">Destinations</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="hh__visual">
          <motion.div
            className="hh__pass"
            initial={{ opacity: 0, y: 40, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <BoardingPass notch="var(--night-2)" />
            </motion.div>
          </motion.div>

          {stamps.map((s, i) => (
            <motion.div
              key={s.label}
              className={`hh__stamp ${s.cls}`}
              initial={{ opacity: 0, scale: 1.8, rotate: s.rot }}
              animate={{ opacity: 1, scale: 1, rotate: s.rot }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 1 + i * 0.25 }}
            >
              <span className={`hh__stamp-ink hh__stamp-ink--${s.variant}`}>
                <b>{s.label}</b>
                <em>{s.sub}</em>
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hh__scroll">
        <span>Scroll to board</span>
        <div className="hh__scroll-line"><span /></div>
      </div>
    </section>
  );
}
