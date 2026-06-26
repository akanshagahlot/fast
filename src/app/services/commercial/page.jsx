import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata = {
  title: "Commercial Moving Services | Fast Professional Cargo Movers",
 
  description: "Large-scale cargo transportation and commercial moving services for factories, showrooms, hospitals and retail stores. Zero disruption to your business.",
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

const service = {
  title: "Commercial Moving",
  slug: "commercial",
  category: "Commercial Services",
 
  mainImage: "/images/services/commercial/main.png",
  gridImage1: "/images/services/commercial/grid1.png",
  gridImage2: "/images/services/commercial/grid2.png",
  chooseImage: "/images/services/commercial/choose.png",
  intro1:
    "Fast Professional Cargo Movers specializes in large-scale commercial moving for factories, showrooms, hospitals, retail chains and corporate offices. Our goods transport service team is equipped with heavy-duty equipment and expertise to handle complex multi-floor relocations efficiently.",
  intro2:
    "We understand that commercial downtime means financial loss. Our project managers create a detailed moving plan, coordinate with your team and execute the entire door to door parcel service and heavy shipment relocation with minimal disruption to your ongoing business operations.",
  intro3:
    "From heavy machinery relocation to server room migration and retail fixture reinstallation, Fast Professional Cargo Movers handle everything with specialized tools and trained personnel. Every commercial move is backed by our service guarantee and insurance coverage.",
  chooseTitle: "Choose Your Services",
  chooseDesc:
    "Specialized commercial moving solutions for large businesses. Expert handling of heavy equipment, IT infrastructure and commercial assets with zero disruption and complete insurance coverage for every move.",
  features: [
    "Home Shifting",
    "Office Shifting",
    "Loading & Unloading",
    "Packing & Unpacking",
    "Warehouse Services",
    "Insurance Services",
  ],
};

export default function CommercialPage() {
  return (
    <>
    
      <ServicePageLayout service={service} />
      
    </>
  );
}