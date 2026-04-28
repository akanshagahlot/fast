
import DeliveryHeader from "../../components/Deliveryheader";
import DeliveryHero from "../../components/DeliveryHero";
import DeliveryPackages from "../../components/DeliveryPackages";


export const metadata = {
  title: "Delivery Packages | Nex Go Packers & Movers",
  description:
    "Choose from Basic, Fast, or Super Fast Delivery packages. Nex Go offers transparent pricing with professional packing and relocation across India.",
};

export default function DeliveryPackagesPage() {
  return (
    <main>
    
      <DeliveryHeader/>
      <DeliveryHero />
      <DeliveryPackages />
      
    </main>
  );
}