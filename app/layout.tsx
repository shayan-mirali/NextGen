import type { Metadata } from "next";
import { Poppins, Space_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsApp from "@/components/WhatsApp";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
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
    default: "NextGen Study Abroad — Your Gateway to Global Education",
    template: "%s · NextGen Study Abroad",
  },
  description:
    "Your gateway to global education. NextGen Study Abroad offers expert study-abroad consultancy, student visa assistance, admission guidance and IELTS/PTE preparation — with a 98% visa success rate across 16 destinations.",
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
    title: "NextGen Study Abroad — Your Gateway to Global Education",
    description:
      "Your gateway to global education. From consultancy and admissions to student visas and IELTS/PTE prep, we walk every step beside you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${spaceMono.variable}`}
    >
      <body>
        <Cursor />
        <ScrollProgress />
        <Nav />
        {children}
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
