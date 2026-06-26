import Navbar from "../../../components/Navbar";
import FaqHero from "../../../components/FaqHero";
import FaqAccordion from "../../../components/FaqAccordion";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "FAQ | Fast Professional Cargo Movers",
  description:
    "Find answers to all your logistics and relocation questions. Fast Professional Cargo Movers covers booking, packing moving services, pricing, truck transport, and local or national cargo transportation.",
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
      <Navbar/>
      <FaqHero />
      <FaqAccordion />
      <Footer/>
    </main>
  );
}