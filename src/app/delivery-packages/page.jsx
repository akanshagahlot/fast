import DeliveryHeader from "../../components/Deliveryheader";
import DeliveryHero from "../../components/DeliveryHero";
import DeliveryPackages from "../../components/DeliveryPackages";

export const metadata = {
  title: "Delivery Packages | Fast Professional Cargo Movers",
  description:
    "Choose from Basic, Fast, or Super Fast Delivery packages. Fast Professional Cargo Movers offers transparent pricing for delivery courier service, parcel services near me, and goods transport services in India.",
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

export default function DeliveryPackagesPage() {
  return (
    <main>
      <DeliveryHeader/>
      <DeliveryHero />
      <DeliveryPackages />
    </main>
  );
}