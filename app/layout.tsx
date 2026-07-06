import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NextGen Study Abroad — Your Global Education Journey",
    template: "%s · NextGen Study Abroad",
  },
  description:
    "NextGen Study Abroad turns global ambitions into acceptance letters. Expert university selection, applications, visas and scholarships — with a 98% visa success rate.",
  keywords: [
    "study abroad",
    "education consultant",
    "university admissions",
    "student visa",
    "scholarships",
    "NextGen Study Abroad",
  ],
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "NextGen Study Abroad — Your Global Education Journey",
    description:
      "Premium study-abroad consultation. From university selection to visas and scholarships, we walk every step beside you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${spaceMono.variable}`}
    >
      <body>
        <Cursor />
        <ScrollProgress />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
