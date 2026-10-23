import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mb-zahnabrechnung.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Milana Kollmann · Zahnärztliche Abrechnung",
    template: "%s · Milana Kollmann",
  },
  description:
    "Externe zahnärztliche Abrechnung für Praxen in Deutschland. Privatabrechnung nach GOZ, KZV- und BEMA-Abrechnung, HKP-Erstellung, Reklamationsmanagement. Persönlich, präzise, zuverlässig. Aus dem Saarland, deutschlandweit digital.",
  applicationName: "Milana Kollmann · Zahnärztliche Abrechnung",
  keywords: [
    "zahnärztliche Abrechnung",
    "Zahnarzt Abrechnung extern",
    "Privatabrechnung Zahnarzt",
    "GOZ Abrechnung",
    "KZV Abrechnung",
    "BEMA Abrechnung",
    "HKP Erstellung",
    "Reklamationsmanagement Zahnarzt",
    "Abrechnungsservice Zahnarztpraxis",
    "DAMPSOFT Abrechnung",
    "CHARLY Abrechnung",
    "evident Abrechnung",
    "Praxisberatung Zahnarzt",
    "Saarland",
    "Saarlouis",
  ],
  authors: [{ name: "Milana Kollmann" }],
  creator: "Milana Kollmann",
  publisher: "Milana Kollmann",
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Milana Kollmann · Zahnärztliche Abrechnung",
    title: "Milana Kollmann · Zahnärztliche Abrechnung",
    description:
      "Persönliche externe Unterstützung für die zahnärztliche Abrechnung. GOZ, BEMA, HKP, Reklamationsmanagement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milana Kollmann · Zahnärztliche Abrechnung",
    description:
      "Externe zahnärztliche Abrechnung. Persönlich, präzise, zuverlässig.",
  },
  category: "Dental Billing Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans bg-white text-navy antialiased">
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
