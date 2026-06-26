import ServiceHeader from "../../components/Serviceheader";
import ServiceHero from "../../components/Servicehero";
import Services from "../../components/Services";
import WhyChooseUs from "../../components/Whychooseus";

export const metadata = {
  title: "Services | Fast Professional Cargo Movers",
  description:
    "Explore our complete packing moving services, door to door parcel service, cargo transportation services, and reliable truck transport in Ahmedabad and across India.",
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

export default function ServicesPage() {
  return (
    <main>
      <ServiceHeader/>
      <ServiceHero />
      <Services/>
      <WhyChooseUs />
    </main>
  );
}