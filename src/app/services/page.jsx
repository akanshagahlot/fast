
import ServiceHeader from "../../components/Serviceheader";
import ServiceHero from "../../components/Servicehero";
import Services from "../../components/Services";
import WhyChooseUs from "../../components/Whychooseus";

export const metadata = {
  title: "Services | Nex Go Packers & Movers",
  description:
    "Explore Nex Go Packers & Movers services — home shifting, office relocation, vehicle transport, and more across India.",
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