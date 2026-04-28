import Navbar from "../../../components/Navbar";
import FaqHero from "../../../components/FaqHero";
import FaqAccordion from "../../../components/FaqAccordion";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "FAQ | Nex Go Packers & Movers",
  description:
    "Find answers to all your relocation questions. Nex Go FAQ covers booking, packing, pricing, delivery, and support.",
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