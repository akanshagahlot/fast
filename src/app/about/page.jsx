import AboutUsHeader from "../../components/Aboutusheader";
import AboutHero from "../../components/Abouthero";
import AboutStory from "../../components/Aboutstory";
import Services from "../../components/Services";
import AboutCTA from "../../components/Aboutcta";

export const metadata = {
  title: "About Us | Fast Professional Cargo Movers",
  description:
    "Learn about Fast Professional Cargo Movers — India's trusted relocation partner with 12+ years of safe, on-time moving experience.",
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
    "near me packers and movers",
  ],
};

export default function AboutPage() {
  return (
    <main>
      <AboutUsHeader />
      <AboutHero />
      <AboutStory />
      <Services />
      <AboutCTA />
    </main>
  );
}