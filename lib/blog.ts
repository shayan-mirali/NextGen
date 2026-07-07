export type Block =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  emoji: string;
  date: string; // ISO — displayed as-is
  dateLabel: string;
  readTime: string;
  author: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "ace-your-student-visa-interview",
    title: "How to Ace Your Student Visa Interview",
    excerpt:
      "The visa interview decides everything — yet most nerves come from not knowing what's coming. Here's exactly how to walk in prepared and calm.",
    category: "Visas",
    emoji: "🛂",
    date: "2026-06-24",
    dateLabel: "24 Jun 2026",
    readTime: "6 min read",
    author: "NextGen Visa Team",
    body: [
      { kind: "p", text: "For most students, the visa interview is the single most nerve-wracking moment of the whole journey. The good news: it's also the most predictable. Officers are checking three things — that you're a genuine student, that you can fund your studies, and that you intend to follow the rules. Answer those convincingly and you're through." },
      { kind: "h", text: "1. Know your 'why' cold" },
      { kind: "p", text: "You should be able to explain, in one clear sentence, why this course, why this university and why this country. Vague answers ('it's a good university') raise flags. Specific answers ('their MSc has a data-engineering track that matches the analyst career I'm building') build confidence." },
      { kind: "h", text: "2. Own your finances" },
      { kind: "p", text: "Know your tuition, living costs, and exactly who is funding you. If a sponsor is involved, know their occupation and income. Officers can tell instantly when a student hasn't looked at their own numbers." },
      { kind: "h", text: "3. Prepare for the classic questions" },
      { kind: "ul", items: [
        "Why did you choose this university over others?",
        "How will you fund your studies and stay?",
        "What are your plans after you graduate?",
        "Do you have family or ties in your home country?",
      ] },
      { kind: "h", text: "4. Practise out loud" },
      { kind: "p", text: "Reading answers in your head is not the same as saying them under pressure. Every NextGen student sits mock interviews with a counsellor until the answers are second nature — it's a big part of our 98% success rate." },
      { kind: "p", text: "Be honest, be specific, be calm. You've done the work to get the offer; the interview is just the final gate. Book a free consultation and we'll rehearse it with you." },
    ],
  },
  {
    slug: "uk-vs-canada-which-is-right-for-you",
    title: "UK vs Canada: Which Is Right for You?",
    excerpt:
      "Two of the world's most popular study destinations, two very different journeys. We break down cost, degree length, work rights and PR pathways.",
    category: "Destinations",
    emoji: "🌍",
    date: "2026-06-10",
    dateLabel: "10 Jun 2026",
    readTime: "7 min read",
    author: "NextGen Counselling",
    body: [
      { kind: "p", text: "The UK and Canada top almost every student's shortlist — but they suit different goals. Here's how they compare on the things that actually matter." },
      { kind: "h", text: "Degree length & cost" },
      { kind: "p", text: "A UK master's is typically just one year, so you finish faster and pay less tuition overall. Canadian programmes usually run longer but often cost less per year, and living costs outside the big cities are gentler." },
      { kind: "h", text: "Work rights" },
      { kind: "ul", items: [
        "UK: 20 hrs/week during term; a 2-year Graduate Route visa after you finish.",
        "Canada: up to 24 hrs/week off-campus; a Post-Graduation Work Permit of up to 3 years.",
      ] },
      { kind: "h", text: "Path to staying long-term" },
      { kind: "p", text: "This is where Canada pulls ahead for many. Its immigration system offers one of the world's clearest routes from student to permanent resident. The UK's post-study route is generous but less directly tied to settlement." },
      { kind: "h", text: "So which one?" },
      { kind: "p", text: "Want to qualify fast and get back to work? The UK's one-year master's is hard to beat. Thinking about building a life abroad long-term? Canada's PR pathway is exceptional. In a free consultation we'll match the choice to your budget, career and settlement goals — not the other way around." },
    ],
  },
  {
    slug: "how-i-scored-ielts-7-in-six-weeks",
    title: "How I Scored IELTS 7.0 in Six Weeks",
    excerpt:
      "A realistic, strategy-first plan that took one of our students from 5.5 to 7.0 — without living inside a textbook.",
    category: "Test Prep",
    emoji: "📚",
    date: "2026-05-28",
    dateLabel: "28 May 2026",
    readTime: "5 min read",
    author: "NextGen Test Prep",
    body: [
      { kind: "p", text: "A 7.0 overall opens the door to most top universities. Here's the six-week plan our coaches use to get there — built on strategy, not endless grinding." },
      { kind: "h", text: "Weeks 1–2: Diagnose and target" },
      { kind: "p", text: "Start with a full, timed mock. It tells you your real starting band and — more importantly — which section is dragging your score down. Most students are surprised: it's usually Writing, not Speaking." },
      { kind: "h", text: "Weeks 3–4: Fix the weakest skill" },
      { kind: "ul", items: [
        "Writing Task 2: one clear position, four paragraphs, real examples.",
        "Reading: skim for structure first, then scan for answers — never read every word.",
        "Listening: predict the answer before you hear it; watch spelling.",
      ] },
      { kind: "h", text: "Weeks 5–6: Full mocks under pressure" },
      { kind: "p", text: "Sit at least three complete, timed mock exams and review every single mistake. Patterns in your errors teach you far more than raw practice volume ever will." },
      { kind: "p", text: "The student who inspired this plan went from 5.5 to 7.0 in exactly six weeks. Want the same structure with a coach beside you? That's what our IELTS/PTE preparation is for." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
