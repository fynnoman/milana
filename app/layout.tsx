import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MB Zahnärztliche Abrechnung — Präzise Privatabrechnung für Ihre Praxis",
  description:
    "Externe Abrechnungsexpertin für Zahnarztpraxen. GOZ, GOÄ, BEMA, HKP, Reklamationsmanagement. Präzise, effizient, persönlich.",
  metadataBase: new URL("https://mb-abrechnung.de"),
  openGraph: {
    title: "MB Zahnärztliche Abrechnung",
    description:
      "Präzise Privatabrechnung für Zahnarztpraxen. GOZ, BEMA, HKP, Reklamationsmanagement.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans bg-ivory text-navy antialiased">{children}</body>
    </html>
  );
}
