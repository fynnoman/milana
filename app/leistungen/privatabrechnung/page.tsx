import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { SERVICES } from "@/lib/site";

const service = SERVICES.find((s) => s.slug === "privatabrechnung")!;

export const metadata: Metadata = {
  title: "Privatabrechnung · GOZ, GOÄ, BEB, BEL II",
  description:
    "Externe Privatabrechnung für Zahnarztpraxen. GOZ inklusive §2-Begründungen, Analog- und Verlangensleistungen, Fremd- und Eigenlabor nach BEB und BEL II. Persönlich, präzise, zuverlässig.",
  alternates: { canonical: "/leistungen/privatabrechnung" },
  openGraph: {
    title: "Privatabrechnung · Milana Kollmann",
    description:
      "Externe Privatabrechnung nach GOZ für Zahnarztpraxen in Deutschland.",
  },
};

export default function Page() {
  return <ServicePage service={service} />;
}
