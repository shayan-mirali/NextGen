export type Service = {
  slug: string;
  code: string; // SVC-style code
  icon: string;
  title: string;
  short: string; // nav / card label
  tagline: string;
  blurb: string; // one-line for cards
  intro: string; // longer opener on detail page
  points: string[]; // what's included
  process: { title: string; text: string }[]; // the "legs"
  stats: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "study-abroad-consultancy",
    code: "SVC-01",
    icon: "🧭",
    title: "Study Abroad Consultancy",
    short: "Study Abroad Consultancy",
    tagline: "Your personalised flight plan to the right country and course.",
    blurb: "One-on-one guidance to choose the right country, university and course for you.",
    intro:
      "Every great journey starts with a plan. Our consultants sit down with you — your goals, grades, budget and dreams — and map the realistic routes forward. No guesswork, no upselling: just an honest, data-driven strategy for where in the world you should study and what you should study there.",
    points: [
      "Free profile evaluation & goal mapping",
      "Best-fit country & university shortlisting",
      "Course and career-outcome matching",
      "Budget, scholarship & ROI planning",
      "Intake, timeline & deadline roadmap",
      "One dedicated counsellor from start to departure",
    ],
    process: [
      { title: "Discovery call", text: "A free consultation to understand your academics, goals and budget." },
      { title: "Profile assessment", text: "We benchmark your profile against real admission and visa data." },
      { title: "Country & course strategy", text: "A tailored plan of destinations, universities and programmes." },
      { title: "Roadmap handover", text: "A clear, dated action plan — and a counsellor beside you for every step." },
    ],
    stats: [
      { label: "Students guided", value: "12000+" },
      { label: "Destinations", value: "16" },
      { label: "First consultation", value: "Free" },
      { label: "Partner universities", value: "800+" },
    ],
    faqs: [
      { q: "Is the first consultation really free?", a: "Yes. Your discovery call and profile assessment are completely free and no-obligation — we only want to work with students we can genuinely help." },
      { q: "I don't know which country is right for me. Can you help?", a: "That's exactly what this service is for. We match you to destinations based on your budget, career goals, grades and work-rights priorities — not the other way around." },
      { q: "Do you only work with certain universities?", a: "We hold partnerships with 800+ universities but our advice is impartial. If a non-partner institution is the best fit for you, we'll tell you." },
    ],
  },
  {
    slug: "student-visa-assistance",
    code: "SVC-02",
    icon: "🛂",
    title: "Student Visa Assistance",
    short: "Student Visa Assistance",
    tagline: "The part that scares everyone — handled, end to end.",
    blurb: "Documentation, financials and mock interviews behind our 98% visa success rate.",
    intro:
      "The visa is the final gate between you and the departure lounge — and it's where most applications go wrong. We prepare every document, stress-test your finances, and rehearse your interview until you can walk in with total confidence. It's the discipline behind our industry-leading 98% approval rate.",
    points: [
      "Complete document checklist & review",
      "Financial proof & sponsorship guidance",
      "SOP / statement of purpose for the visa",
      "Application form lodging & tracking",
      "One-on-one mock visa interviews",
      "Post-decision & pre-departure support",
    ],
    process: [
      { title: "Eligibility & document audit", text: "We map exactly what your destination's visa requires and check every paper." },
      { title: "Financials & funds", text: "We structure proof of funds, blocked accounts or GICs the right way." },
      { title: "Application lodging", text: "We complete and submit your visa application accurately and on time." },
      { title: "Interview & clearance", text: "Mock interviews and coaching until you're ready — then departure." },
    ],
    stats: [
      { label: "Visa success rate", value: "98%" },
      { label: "Countries covered", value: "16" },
      { label: "Docs reviewed", value: "100%" },
      { label: "Mock interviews", value: "Unlimited" },
    ],
    faqs: [
      { q: "What is your visa success rate?", a: "98%. It comes from meticulous documentation, honest financial planning and thorough interview preparation — not shortcuts." },
      { q: "Which countries do you handle visas for?", a: "All 16 of our destinations, including the UK, USA, Canada, Australia and the Schengen countries — each with its own specialist process." },
      { q: "What if my visa is refused?", a: "We analyse the refusal, strengthen the weak points and guide your re-application. Because of our upfront rigour, refusals are rare." },
    ],
  },
  {
    slug: "admission-guidance",
    code: "SVC-03",
    icon: "🎓",
    title: "Admission Guidance",
    short: "Admission Guidance",
    tagline: "Applications that make admissions officers remember you.",
    blurb: "SOPs, essays, LORs and applications crafted to win offers from top universities.",
    intro:
      "Admissions officers read thousands of applications — we make sure yours is the one they remember. From a compelling statement of purpose to polished essays, strong references and flawless submissions, we shape every element of your application so your best self reaches the desk of every university on your list.",
    points: [
      "Statement of Purpose (SOP) crafting",
      "Personal essays & supplemental writing",
      "Letters of Recommendation strategy",
      "CV / résumé polishing",
      "Application form completion & submission",
      "Deadline tracking across every university",
    ],
    process: [
      { title: "Shortlist & positioning", text: "We finalise your university list and the story that ties your application together." },
      { title: "Documents & essays", text: "We draft and refine your SOP, essays, LORs and CV until they shine." },
      { title: "Submit & track", text: "We submit accurate applications and monitor every portal and deadline." },
      { title: "Offers & decisions", text: "We help you compare offers and choose the right one with confidence." },
    ],
    stats: [
      { label: "Offer rate", value: "94%" },
      { label: "Partner universities", value: "800+" },
      { label: "Scholarships won", value: "$45M+" },
      { label: "Avg. offers / student", value: "3+" },
    ],
    faqs: [
      { q: "Will you write my SOP for me?", a: "We craft it with you — your story, your voice, professionally shaped. Authenticity is what admissions officers reward, so it's always genuinely yours." },
      { q: "How many universities should I apply to?", a: "We usually build a balanced list of ambitious, target and safe choices so you have real options — most students receive three or more offers." },
      { q: "Can you help me win a scholarship too?", a: "Yes. We position your application for the merit awards and grants you qualify for; our students have unlocked over $45M in funding." },
    ],
  },
  {
    slug: "ielts-pte-preparation",
    code: "SVC-04",
    icon: "📚",
    title: "IELTS / PTE Preparation",
    short: "IELTS / PTE Prep",
    tagline: "Hit the band score your dream university demands.",
    blurb: "Expert IELTS, PTE and TOEFL coaching — strategy and mocks, not just practice.",
    intro:
      "Your English test can make or break your admission and your visa. Our coaches — who have topped these exams themselves — teach the strategy behind each section, not just endless practice. Diagnostic, targeted coaching and full-length mocks get you to the band score your university and visa require.",
    points: [
      "Diagnostic test & target-score plan",
      "IELTS, PTE & TOEFL coaching",
      "Section-by-section strategy (all four skills)",
      "1:1 and small-group classes",
      "Full-length, timed mock exams",
      "Score-boost & re-test strategies",
    ],
    process: [
      { title: "Diagnostic", text: "A full mock to pinpoint your current level and target band." },
      { title: "Targeted coaching", text: "Focused lessons on the sections and skills holding your score back." },
      { title: "Mock exams", text: "Timed, realistic practice with detailed feedback after each attempt." },
      { title: "Test day", text: "Booking guidance and a final strategy so you peak on the day." },
    ],
    stats: [
      { label: "Avg. band achieved", value: "7+" },
      { label: "Exams covered", value: "IELTS·PTE·TOEFL" },
      { label: "Target-score rate", value: "9 in 10" },
      { label: "Format", value: "Online / In-person" },
    ],
    faqs: [
      { q: "Which exams do you prepare students for?", a: "IELTS, PTE Academic and TOEFL iBT — plus guidance on which test best suits your target country and university." },
      { q: "How long does preparation take?", a: "It depends on your starting level and target band, but most students are test-ready in four to eight weeks of focused coaching." },
      { q: "Are classes online or in-person?", a: "Both. We offer live online classes and in-person coaching, in one-to-one or small-group formats." },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
