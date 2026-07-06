# NextGen Study Abroad — "The Journey"

A premium, multi-page study-consultation website built with **Next.js 15**, **React 19**,
**TypeScript** and **Framer Motion**. The design is an original **passport / boarding-pass
travel metaphor** — split-flap departure boards, boarding-pass cards, passport-stamp
reveals, and flight routes that draw as you scroll. Palette (navy ink · royal blue · gold
foil) is derived from the NextGen logo.

## Run it

```bash
npm install       # first time only
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
```

## Pages (routes)

| Route | Page |
|-------|------|
| `/` | Home — split-flap hero, journey timeline, previews, CTA |
| `/about` | About — mission, values (stamps), the crew |
| `/services` | Services — 6 services as flight "legs" |
| `/destinations` | Destinations hub + live departures board |
| `/destinations/[slug]` | Individual country pages (UK, USA, Canada, Australia, Germany, Ireland) |
| `/success-stories` | Arrivals board + testimonials |
| `/contact` | "Check In" — booking form |

## Structure

```
app/
  layout.tsx          # fonts + global Nav/Footer/Cursor/ScrollProgress
  template.tsx        # per-page fade transition
  globals.css         # the entire design system
  page.tsx, about/, services/, destinations/, destinations/[slug]/,
  success-stories/, contact/, not-found.tsx
components/
  SplitFlap  BoardingPass  Stamp  RouteLine  Ticket     # themed pieces
  Nav  Footer  Cursor  ScrollProgress  Reveal  Counter  # chrome + utilities
  HomeHero  CheckInForm                                 # page-specific
lib/
  destinations.ts     # all destination data (edit here to add/change countries)
```

## Customising

- **Colours / theme** — CSS variables at the top of `app/globals.css` (`:root`).
- **Destinations** — edit `lib/destinations.ts`; hub, cards and detail pages update automatically.
- **Copy / services / stories** — the arrays at the top of each page file.
- **Contact form** — front-end only for now. To receive bookings, POST the form data
  to your email/CRM inside `onSubmit` in `components/CheckInForm.tsx`.
- **Social links** — `components/Footer.tsx` (Instagram wired to
  instagram.com/nextgenstudyconsultant).

## Notes

- Fully responsive with a slide-in mobile menu; respects `prefers-reduced-motion`.
- All destination pages are statically pre-rendered at build time.
