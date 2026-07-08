// Generates the downloadable brochure PDFs into public/brochures/.
// Re-run any time you edit the content below:  node scripts/gen-brochures.mjs
// Pure Node (no deps) — emits valid, uncompressed PDFs using the base-14 fonts.
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "brochures");
mkdirSync(OUT, { recursive: true });

const PAGE_W = 595.28, PAGE_H = 841.89;
const MARGIN = 62;
const NAVY = "0.043 0.106 0.227"; // brand ink
const GOLD = "0.776 0.635 0.314";
const GREY = "0.36 0.36 0.36";
const BLACK = "0 0 0";

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

// crude width estimate for wrapping (Helvetica avg ~0.52em)
const fits = (text, size, maxW) => text.length * size * 0.52 <= maxW;
function wrap(text, size, maxW) {
  const words = text.split(" ");
  const lines = [];
  let cur = "";
  for (const w of words) {
    const test = cur ? cur + " " + w : w;
    if (fits(test, size, maxW)) cur = test;
    else { if (cur) lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  return lines;
}

// A "doc" is an array of blocks. Block: {t:'title'|'sub'|'h'|'body'|'bullet'|'rule'|'space', text}
function render(blocks) {
  const maxW = PAGE_W - MARGIN * 2;
  const pages = [];
  let ops = [];
  let y = PAGE_H - MARGIN;

  const newPage = () => { pages.push(ops); ops = []; y = PAGE_H - MARGIN; };
  const line = (text, size, color, x, font = "F1") => {
    ops.push(`BT /${font} ${size} Tf ${color} rg ${x.toFixed(2)} ${y.toFixed(2)} Td (${esc(text)}) Tj ET`);
  };
  const rule = (color) => {
    ops.push(`${color} RG 1 w ${MARGIN} ${y.toFixed(2)} m ${(PAGE_W - MARGIN).toFixed(2)} ${y.toFixed(2)} l S`);
  };
  const need = (h) => { if (y - h < MARGIN) newPage(); };

  for (const b of blocks) {
    switch (b.t) {
      case "title": {
        need(40); line(b.text, 26, NAVY, MARGIN, "F2"); y -= 12;
        need(6); rule(GOLD); y -= 22; break;
      }
      case "sub": { need(20); line(b.text, 11, GOLD, MARGIN, "F2"); y -= 22; break; }
      case "h": { y -= 6; need(22); line(b.text, 14, NAVY, MARGIN, "F2"); y -= 20; break; }
      case "body": {
        for (const ln of wrap(b.text, 11, maxW)) { need(16); line(ln, 11, GREY, MARGIN); y -= 16; }
        y -= 6; break;
      }
      case "bullet": {
        const lines = wrap(b.text, 11, maxW - 16);
        lines.forEach((ln, i) => {
          need(16);
          if (i === 0) line("•", 11, GOLD, MARGIN);
          line(ln, 11, BLACK, MARGIN + 16);
          y -= 16;
        });
        y -= 2; break;
      }
      case "rule": { need(10); rule("0.85 0.85 0.85"); y -= 14; break; }
      case "space": { y -= (b.h || 10); break; }
    }
  }
  pages.push(ops);
  return pages;
}

function buildPDF(blocks) {
  const pages = render(blocks);
  const objects = [];
  const push = (s) => { objects.push(s); return objects.length; };

  // 1 catalog, 2 pages, 3 F1, 4 F2, then per page: content + page
  const catalogId = push(""); // placeholder, fill later
  const pagesId = push("");
  const f1Id = push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const f2Id = push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

  const pageIds = [];
  for (const ops of pages) {
    const stream = ops.join("\n");
    const contentId = push(`<< /Length ${Buffer.byteLength(stream, "latin1")} >>\nstream\n${stream}\nendstream`);
    const pageId = push(
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] ` +
      `/Resources << /Font << /F1 ${f1Id} 0 R /F2 ${f2Id} 0 R >> >> /Contents ${contentId} 0 R >>`
    );
    pageIds.push(pageId);
  }

  objects[catalogId - 1] = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`;
  objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((i) => `${i} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

  let pdf = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
  const offsets = [];
  for (let i = 0; i < objects.length; i++) {
    offsets[i] = Buffer.byteLength(pdf, "latin1");
    pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  }
  const xrefStart = Buffer.byteLength(pdf, "latin1");
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const off of offsets) pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  return Buffer.from(pdf, "latin1");
}

const FOOT = [
  { t: "space", h: 14 },
  { t: "rule" },
  { t: "body", text: "NextGen Study Abroad  ·  Your Gateway to Global Education  ·  info@nextgenstudyabroad.com" },
];

const docs = {
  "company-profile": [
    { t: "sub", text: "COMPANY PROFILE" },
    { t: "title", text: "NextGen Study Abroad" },
    { t: "body", text: "NextGen Study Abroad is your gateway to global education. We guide ambitious students from first conversation to boarding gate — across consultancy, admissions, student visas and English-test preparation, in 16 study destinations worldwide." },
    { t: "h", text: "Our Mission" },
    { t: "body", text: "To make world-class education accessible to every ambitious student — with honest advice, expert execution and genuine care at every step of the journey." },
    { t: "h", text: "Our Vision" },
    { t: "body", text: "A world where a student's potential, not their postcode, decides where they can study — and where NextGen is the most trusted name guiding them there." },
    { t: "h", text: "Our Success Ratio" },
    { t: "bullet", text: "98% student visa success rate" },
    { t: "bullet", text: "94% university offer rate — 3+ offers per student on average" },
    { t: "bullet", text: "12,000+ students placed at universities worldwide" },
    { t: "bullet", text: "$45M+ in scholarships and funding unlocked" },
    { t: "bullet", text: "16 study destinations · 800+ partner universities" },
    { t: "bullet", text: "15+ years guiding the next generation of global students" },
    { t: "h", text: "What We Do" },
    { t: "bullet", text: "Study Abroad Consultancy — country, university and course selection" },
    { t: "bullet", text: "Student Visa Assistance — documentation, financials and mock interviews" },
    { t: "bullet", text: "Admission Guidance — SOPs, essays, LORs and applications" },
    { t: "bullet", text: "IELTS / PTE / TOEFL Preparation — strategy, coaching and mock exams" },
    ...FOOT,
  ],
  "university-brochures": [
    { t: "sub", text: "UNIVERSITY BROCHURE" },
    { t: "title", text: "Study Destinations & Universities" },
    { t: "body", text: "A snapshot of our 16 destinations and the courses students choose most. Book a free consultation for a personalised university shortlist matched to your profile and budget." },
    // destinations injected below
    ...FOOT,
  ],
  "visa-checklist": [
    { t: "sub", text: "STUDENT VISA CHECKLIST" },
    { t: "title", text: "Your Student Visa Checklist" },
    { t: "body", text: "A general checklist of documents most student visa applications require. Exact requirements vary by country — your NextGen counsellor will give you a precise, destination-specific list." },
    { t: "h", text: "Core Documents" },
    { t: "bullet", text: "Valid passport (with 6+ months validity beyond your stay)" },
    { t: "bullet", text: "University offer / admission letter (CAS, I-20, CoE or equivalent)" },
    { t: "bullet", text: "Completed visa application form and visa fee payment" },
    { t: "bullet", text: "Passport-size photographs to specification" },
    { t: "h", text: "Academic & Test Records" },
    { t: "bullet", text: "Academic transcripts, mark sheets and degree certificates" },
    { t: "bullet", text: "English test score (IELTS / PTE / TOEFL) if required" },
    { t: "bullet", text: "Statement of Purpose and letters of recommendation" },
    { t: "h", text: "Financial Evidence" },
    { t: "bullet", text: "Proof of funds — bank statements, blocked account or GIC" },
    { t: "bullet", text: "Scholarship / sponsorship or education loan letters" },
    { t: "bullet", text: "Tuition fee deposit receipt where applicable" },
    { t: "h", text: "Supporting Documents" },
    { t: "bullet", text: "Medical examination and required vaccinations" },
    { t: "bullet", text: "Overseas student health insurance (e.g. OSHC / GHIC)" },
    { t: "bullet", text: "Accommodation proof and travel itinerary" },
    { t: "bullet", text: "Visa interview preparation (where required)" },
    ...FOOT,
  ],
  "ielts-guide": [
    { t: "sub", text: "IELTS PREPARATION GUIDE" },
    { t: "title", text: "The NextGen IELTS Guide" },
    { t: "body", text: "IELTS is scored 0–9 across four skills — Listening, Reading, Writing and Speaking. Most universities ask for an overall 6.0–7.0 with no band below 5.5–6.0. Here's how to get there." },
    { t: "h", text: "Listening (30 min)" },
    { t: "bullet", text: "Practise with a range of accents; predict answers before you hear them." },
    { t: "bullet", text: "Watch spelling and word limits — small errors cost whole marks." },
    { t: "h", text: "Reading (60 min)" },
    { t: "bullet", text: "Skim for structure first, then scan for specific answers." },
    { t: "bullet", text: "Manage time: ~20 minutes per passage; don't get stuck on one question." },
    { t: "h", text: "Writing (60 min)" },
    { t: "bullet", text: "Task 1: describe the data — trends, comparisons, key figures." },
    { t: "bullet", text: "Task 2: clear position, 4 paragraphs, real examples, formal tone." },
    { t: "bullet", text: "Task 2 carries more weight — spend ~40 minutes on it." },
    { t: "h", text: "Speaking (11–14 min)" },
    { t: "bullet", text: "Extend every answer — give reasons and examples, never one-word replies." },
    { t: "bullet", text: "Fluency and coherence beat big words used incorrectly." },
    { t: "h", text: "Score-Boost Strategy" },
    { t: "bullet", text: "Take a diagnostic mock to find your target gap." },
    { t: "bullet", text: "Sit at least 3 full, timed mock exams before test day." },
    { t: "bullet", text: "Review every mistake — patterns matter more than raw practice." },
    ...FOOT,
  ],
  "admission-process": [
    { t: "sub", text: "ADMISSION PROCESS" },
    { t: "title", text: "The Admission Process, Step by Step" },
    { t: "body", text: "From first call to final offer, here is exactly how a NextGen application unfolds. Timelines vary by country and intake — your counsellor will map precise dates for you." },
    { t: "h", text: "1 · Discovery & Profile Assessment" },
    { t: "body", text: "A free consultation to understand your goals, grades and budget. We benchmark your profile against real admission data." },
    { t: "h", text: "2 · Country & University Shortlist" },
    { t: "body", text: "A balanced list of ambitious, target and safe universities matched to your course, career and finances." },
    { t: "h", text: "3 · Documents & Applications" },
    { t: "body", text: "We craft your SOP, essays, LORs and CV, then submit accurate applications and track every portal and deadline." },
    { t: "h", text: "4 · Offers & Decision" },
    { t: "body", text: "We help you compare offers, accept the right one, and pay any deposit to secure your place." },
    { t: "h", text: "5 · Visa & Finances" },
    { t: "body", text: "We prepare your visa documentation, proof of funds and mock interview — the discipline behind our 98% success rate." },
    { t: "h", text: "6 · Pre-Departure & Beyond" },
    { t: "body", text: "Accommodation, travel, forex and a pre-departure briefing — plus an alumni network waiting on the other side." },
    ...FOOT,
  ],
};

// Destination summaries for the university brochure (kept in sync with lib/destinations.ts)
const DESTS = [
  ["United Kingdom", "LHR", "Business & Management, Data Science, Law, Engineering, Public Health"],
  ["United States", "JFK", "Computer Science, Business (MBA), Engineering, Finance, Design"],
  ["Canada", "YYZ", "Business, Health Sciences, IT & Software, Engineering, Hospitality"],
  ["Australia", "SYD", "Nursing & Health, Engineering, IT, Accounting, Environmental Science"],
  ["Ireland", "DUB", "Computer Science, Pharmaceuticals, Business Analytics, Finance, Biotech"],
  ["New Zealand", "AKL", "Agriculture & Environment, IT, Engineering, Business, Film & Design"],
  ["Germany", "FRA", "Mechanical Engineering, Computer Science, Automotive, Data Science, Physics"],
  ["France", "CDG", "Business & Management, Luxury & Fashion, Engineering, Culinary Arts"],
  ["Italy", "FCO", "Architecture & Design, Fashion, Engineering, Fine Arts, Food Science"],
  ["Hungary", "BUD", "Medicine & Dentistry, Engineering, Business, Pharmacy, Computer Science"],
  ["Malaysia", "KUL", "Business, Engineering, IT & Computing, Hospitality, Actuarial Science"],
  ["United Arab Emirates", "DXB", "Business & Finance, Engineering, Aviation, IT, Media & Design"],
  ["South Korea", "ICN", "Engineering, Computer Science, Business, Korean Studies, Media & Arts"],
  ["Turkey", "IST", "Engineering, Medicine, Business, Architecture, International Relations"],
  ["Thailand", "BKK", "Business, Hospitality & Tourism, International Relations, Engineering"],
  ["China", "PEK", "Engineering, Medicine (MBBS), Business, Chinese Language, Computer Science"],
];

// Build the university-brochure body: insert destination blocks before the footer.
{
  const doc = docs["university-brochures"];
  const footStart = doc.length - FOOT.length;
  const rows = [];
  for (const [name, code, courses] of DESTS) {
    rows.push({ t: "h", text: `${name}  (${code})` });
    rows.push({ t: "body", text: `Popular courses: ${courses}.` });
  }
  docs["university-brochures"] = [...doc.slice(0, footStart), ...rows, ...doc.slice(footStart)];
}

// Generate every PDF.
for (const [name, blocks] of Object.entries(docs)) {
  const buf = buildPDF(blocks);
  const path = join(OUT, `${name}.pdf`);
  writeFileSync(path, buf);
  console.log(`wrote ${path}  (${buf.length} bytes)`);
}

