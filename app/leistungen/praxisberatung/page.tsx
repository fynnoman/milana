import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { SERVICES } from "@/lib/site";

const service = SERVICES.find((s) => s.slug === "praxisberatung")!;

export const metadata: Metadata = {
  title: "Praxisberatung · Abrechnungsabläufe und Übergaben",
  description:
    "Gemeinsamer Blick auf Ihre Abrechnungsabläufe und die Übergaben zwischen Behandlung, Assistenz und Verwaltung. Ohne Beraterjargon, mit konkreten Vorschlägen.",
  alternates: { canonical: "/leistungen/praxisberatung" },
  openGraph: {
    title: "Praxisberatung · Milana Kollmann",
    description:
      "Prozesse, Abläufe und Übergaben rund um die zahnärztliche Abrechnung.",
  },
};

export default function Page() {
  return <ServicePage service={service} />;
}
