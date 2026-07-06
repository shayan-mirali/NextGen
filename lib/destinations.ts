export type Destination = {
  slug: string;
  name: string;
  code: string; // IATA-style code
  city: string;
  flag: string;
  tagline: string;
  blurb: string;
  intro: string;
  stats: { label: string; value: string }[];
  highlights: { title: string; text: string }[];
  intakes: string;
  popularCourses: string[];
  visa: string;
  workRights: string;
};

export const destinations: Destination[] = [
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    code: "LHR",
    city: "London",
    flag: "🇬🇧",
    tagline: "Centuries of prestige, one year to a master's.",
    blurb: "World-heritage universities, 1-year master's, post-study work visas.",
    intro:
      "Home to some of the oldest and most respected universities on earth, the UK pairs academic tradition with fast, focused degrees. A one-year master's gets you qualified — and into the workforce — sooner.",
    stats: [
      { label: "Universities", value: "130+" },
      { label: "Master's length", value: "1 yr" },
      { label: "Post-study visa", value: "2 yrs" },
      { label: "Intl. students", value: "600k+" },
    ],
    highlights: [
      { title: "Graduate Route Visa", text: "Stay and work for 2 years after graduating (3 for PhDs)." },
      { title: "Fast degrees", text: "Most master's take just 12 months — less tuition, sooner earning." },
      { title: "Global reputation", text: "Oxford, Cambridge, Imperial, UCL and more sit in the world top 20." },
    ],
    intakes: "September & January",
    popularCourses: ["Business & Management", "Data Science", "Law", "Engineering", "Public Health"],
    visa: "Student visa (Tier 4) — we prepare your CAS, finances and interview.",
    workRights: "20 hrs/week during term, full-time in holidays.",
  },
  {
    slug: "united-states",
    name: "United States",
    code: "JFK",
    city: "New York",
    flag: "🇺🇸",
    tagline: "The world's deepest bench of research and opportunity.",
    blurb: "Unmatched research, flexible curricula, generous scholarships.",
    intro:
      "The USA offers unrivalled breadth: thousands of universities, flexible majors you can shape as you go, and research funding that dwarfs the rest of the world. Ambition has a home here.",
    stats: [
      { label: "Universities", value: "200+" },
      { label: "OPT work", value: "3 yrs" },
      { label: "Scholarships", value: "Huge" },
      { label: "Intl. students", value: "1M+" },
    ],
    highlights: [
      { title: "STEM OPT", text: "STEM grads can work up to 3 years after study on OPT." },
      { title: "Flexible majors", text: "Explore before you commit — switch or combine fields freely." },
      { title: "Funding", text: "Assistantships and merit aid can cover much of your tuition." },
    ],
    intakes: "Fall (Aug) & Spring (Jan)",
    popularCourses: ["Computer Science", "Business (MBA)", "Engineering", "Finance", "Design"],
    visa: "F-1 student visa — we coach you through the DS-160 and consular interview.",
    workRights: "On-campus during study; CPT/OPT for off-campus work.",
  },
  {
    slug: "canada",
    name: "Canada",
    code: "YYZ",
    city: "Toronto",
    flag: "🇨🇦",
    tagline: "A clear runway from study to permanent residency.",
    blurb: "Affordable tuition, welcoming immigration, clear PR pathways.",
    intro:
      "Canada is the pragmatic dream: high-quality education at a fair price, a genuinely welcoming immigration system, and one of the world's clearest pathways from student to permanent resident.",
    stats: [
      { label: "Universities", value: "90+" },
      { label: "PGWP", value: "3 yrs" },
      { label: "PR pathway", value: "Clear" },
      { label: "Intl. students", value: "800k+" },
    ],
    highlights: [
      { title: "Post-Graduation Work Permit", text: "Work up to 3 years after graduating — a direct route to PR." },
      { title: "Affordable", text: "Lower tuition and living costs than the US, UK or Australia." },
      { title: "Quality of life", text: "Safe, multicultural cities that consistently top livability rankings." },
    ],
    intakes: "Fall, Winter & Summer",
    popularCourses: ["Business", "Health Sciences", "IT & Software", "Engineering", "Hospitality"],
    visa: "Study permit — we build your SOP, proof of funds and GIC.",
    workRights: "Up to 24 hrs/week off-campus during term.",
  },
  {
    slug: "australia",
    name: "Australia",
    code: "SYD",
    city: "Sydney",
    flag: "🇦🇺",
    tagline: "World-class study under the sun.",
    blurb: "Global rankings, sunshine campuses, strong work rights.",
    intro:
      "Australia blends top-100 universities with an outdoor, high-quality lifestyle and some of the strongest post-study work rights anywhere — all on the world's most livable continent.",
    stats: [
      { label: "Universities", value: "40+" },
      { label: "Work visa", value: "2–4 yrs" },
      { label: "Top 100 unis", value: "7" },
      { label: "Intl. students", value: "700k+" },
    ],
    highlights: [
      { title: "Temporary Graduate Visa", text: "Stay and work 2–4 years depending on your qualification." },
      { title: "Group of Eight", text: "Australia's elite research universities rank among the world's best." },
      { title: "Lifestyle", text: "Beaches, safety and vibrant student cities like Melbourne & Sydney." },
    ],
    intakes: "February & July",
    popularCourses: ["Nursing & Health", "Engineering", "IT", "Accounting", "Environmental Science"],
    visa: "Subclass 500 student visa — we handle GTE, OSHC and finances.",
    workRights: "48 hrs/fortnight during term, unlimited in breaks.",
  },
  {
    slug: "germany",
    name: "Germany",
    code: "FRA",
    city: "Frankfurt",
    flag: "🇩🇪",
    tagline: "Engineering excellence — often tuition-free.",
    blurb: "Low-to-no tuition, engineering powerhouse, EU opportunities.",
    intro:
      "Germany is Europe's engineering and innovation engine — and public universities often charge little to no tuition. Study in English, graduate debt-light, and step into the EU job market.",
    stats: [
      { label: "Universities", value: "60+" },
      { label: "Public tuition", value: "€0" },
      { label: "Job-seeker visa", value: "18 mo" },
      { label: "Intl. students", value: "450k+" },
    ],
    highlights: [
      { title: "Little to no tuition", text: "Most public universities charge only a small semester fee." },
      { title: "Job-seeker visa", text: "Stay 18 months after graduating to find work in Germany." },
      { title: "Engineering & tech", text: "Home to global leaders in automotive, robotics and research." },
    ],
    intakes: "Winter (Oct) & Summer (Apr)",
    popularCourses: ["Mechanical Engineering", "Computer Science", "Automotive", "Data Science", "Physics"],
    visa: "German student visa — we prepare your blocked account and APS.",
    workRights: "120 full or 240 half days per year.",
  },
  {
    slug: "ireland",
    name: "Ireland",
    code: "DUB",
    city: "Dublin",
    flag: "🇮🇪",
    tagline: "Europe's English-speaking tech gateway.",
    blurb: "Tech & pharma hub, English-speaking, 2-year stay-back visa.",
    intro:
      "Ireland is the European HQ for the world's biggest tech and pharma companies — and it's English-speaking. A warm culture, strong graduate visa, and a direct line into global employers.",
    stats: [
      { label: "Universities", value: "30+" },
      { label: "Stay-back", value: "2 yrs" },
      { label: "Tech HQs", value: "1000+" },
      { label: "Intl. students", value: "35k+" },
    ],
    highlights: [
      { title: "Third Level Graduate Visa", text: "Stay up to 2 years after a master's to work in Ireland." },
      { title: "Global employers", text: "Google, Apple, Meta, Pfizer and more base their EU HQ here." },
      { title: "English-speaking EU", text: "Access the EU while studying and living in English." },
    ],
    intakes: "September & January",
    popularCourses: ["Computer Science", "Pharmaceuticals", "Business Analytics", "Finance", "Biotech"],
    visa: "Irish student visa (Stamp 2) — we manage finances and enrolment proof.",
    workRights: "20 hrs/week during term, 40 hrs in holidays.",
  },
];

export const getDestination = (slug: string) =>
  destinations.find((d) => d.slug === slug);
