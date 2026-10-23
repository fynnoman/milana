import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { SERVICES } from "@/lib/site";

const service = SERVICES.find((s) => s.slug === "reklamationsmanagement")!;

export const metadata: Metadata = {
  title: "Reklamationsmanagement · Beihilfe, PKV, Erstattungsstellen",
  description:
    "Bei Rechnungskürzungen durch Beihilfe oder PKV: Nachbegründung im Namen der Praxis, fachlich fundiert, mit Blick auf eine gute Lösung. Widerspruch bis zur Klärung.",
  alternates: { canonical: "/leistungen/reklamationsmanagement" },
  openGraph: {
    title: "Reklamationsmanagement · Milana Kollmann",
    description:
      "Nachbegründungen und Widerspruch bei Rechnungskürzungen durch Beihilfe und PKV.",
  },
};

export default function Page() {
  return <ServicePage service={service} />;
}
