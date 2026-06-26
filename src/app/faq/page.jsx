import FaqHeader from "../../components/Faqheader";
import FaqHero from "../../components/FaqHero";
import FaqAccordion from "../../components/FaqAccordion";

export const metadata = {
  title: "FAQ | Fast Professional Cargo Movers",
  description:
    "Find answers to all your relocation and logistics questions. Fast Professional Cargo Movers covers booking, packing moving services, pricing, door to door parcel service, and local or national support.",
  keywords: [
    "delivery courier service",
    "parcel services near me",
    "door to door parcel service",
    "goods transport service near me",
    "transport services ahmedabad",
    "cargo transportation services",
    "truck transport in ahmedabad",
    "goods transport services in india",
    "packing moving services",
    "near me packers and movers"
  ]
};

export default function FaqPage() {
  return (
    <main>
      <FaqHeader/>
      <FaqHero />
      <FaqAccordion />
    </main>
  );
}