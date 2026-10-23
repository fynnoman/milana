import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { SERVICES } from "@/lib/site";

const service = SERVICES.find((s) => s.slug === "kzv-abrechnung")!;

export const metadata: Metadata = {
  title: "KZV-Abrechnung · BEMA, PAR, ZE, Gutachten",
  description:
    "Quartalsweise BEMA-Abrechnung für Vertragszahnarztpraxen. PAR, ZE, KBR, Gutachten-Dossiers und Begleitung im Widerspruchsverfahren.",
  alternates: { canonical: "/leistungen/kzv-abrechnung" },
  openGraph: {
    title: "KZV-Abrechnung · Milana Kollmann",
    description:
      "BEMA-Quartalsabschluss, PAR, ZE, KBR und Gutachten für Vertragszahnarztpraxen.",
  },
};

export default function Page() {
  return <ServicePage service={service} />;
}
