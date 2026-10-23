import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { SERVICES } from "@/lib/site";

const service = SERVICES.find((s) => s.slug === "hkp")!;

export const metadata: Metadata = {
  title: "HKP-Erstellung · Heil- und Kostenpläne für ZE, PAR, KFO und KBR",
  description:
    "Prüfung, Erstellung und Überarbeitung von Heil- und Kostenplänen für ZE, PAR, KFO und KBR. Mit Alternativplänen und verständlicher Patientenerklärung.",
  alternates: { canonical: "/leistungen/hkp" },
  openGraph: {
    title: "HKP-Erstellung · Milana Kollmann",
    description:
      "Heil- und Kostenpläne für ZE, PAR, KFO, KBR. Alternativpläne und klare Patientenkommunikation.",
  },
};

export default function Page() {
  return <ServicePage service={service} />;
}
