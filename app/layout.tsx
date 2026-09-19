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
  title: "Milana Kollmann · Zahnärztliche Abrechnung",
  description:
    "Persönliche Unterstützung für die zahnärztliche Abrechnung. Privatabrechnung, KZV, HKP und Reklamationsmanagement. Aus Saarlouis, mit Ruhe und Sorgfalt.",
  openGraph: {
    title: "Milana Kollmann · Zahnärztliche Abrechnung",
    description:
      "Persönliche Unterstützung für Ihre Abrechnung. Privatabrechnung, KZV, HKP, Reklamationsmanagement.",
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
      <body className="font-sans bg-white text-navy antialiased">{children}</body>
    </html>
  );
}
