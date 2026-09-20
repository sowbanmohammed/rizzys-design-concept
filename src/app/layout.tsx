import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import OpeningLoader from "@/components/OpeningLoader";

/* =========================================================
   LUXURY EDITORIAL DISPLAY FONT
========================================================= */

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

/* =========================================================
   CLEAN ARCHITECTURAL FONT
========================================================= */

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    default: "Rizzy's Design Concept | Luxury Interior Design Chennai",
    template: "%s | Rizzy's Design Concept",
  },

  description:
    "Rizzy's Design Concept is a Chennai-based interior design studio creating refined residential and commercial spaces with architectural precision, premium materials and turnkey execution.",

  keywords: [
    "Rizzy's Design Concept",
    "interior designers Chennai",
    "luxury interior design Chennai",
    "luxury home interiors",
    "premium interior designers",
    "villa interior design Chennai",
    "residential interior design",
    "commercial interior design",
    "turnkey interior design",
  ],

  authors: [
    {
      name: "Rizzy's Design Concept",
    },
  ],

  creator: "Rizzy's Design Concept",

  metadataBase: new URL("https://rizzysdesignconcept.com"),

  alternates: {
    canonical: "/",
  },

  /* =======================================================
     FAVICON / BROWSER TAB ICON
  ======================================================= */

  icons: {
    icon: "/icons/logo.svg",
    shortcut: "/icons/logo.svg",
    apple: "/icons/logo.svg",
  },

  openGraph: {
    title: "Rizzy's Design Concept | Luxury Interior Design",
    description:
      "Transforming Spaces, Enhancing Lives. A Chennai-based interior design studio crafting refined, personalised spaces.",
    url: "https://rizzysdesignconcept.com",
    siteName: "Rizzy's Design Concept",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rizzy's Design Concept",
    description:
      "Luxury interior design, architectural detailing and turnkey execution in Chennai.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable}`}
    >
      <body
        className="
          min-h-screen
          bg-[#080807]
          text-[#F1EEE7]
          antialiased
        "
      >
        <OpeningLoader />

        <Navbar />

        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}