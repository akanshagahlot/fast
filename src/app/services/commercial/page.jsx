
import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata = {
  title: "Commercial Moving Services | Nex Go Packers & Movers",
  description: "Large-scale commercial moving services for factories, showrooms, hospitals and retail stores. Zero disruption to your business.",
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
    "Nex Go specializes in large-scale commercial moving for factories, showrooms, hospitals, retail chains and corporate offices. Our commercial moving team is equipped with heavy-duty equipment and expertise to handle complex multi-floor relocations efficiently.",
  intro2:
    "We understand that commercial downtime means financial loss. Our project managers create a detailed moving plan, coordinate with your team and execute the entire relocation with minimal disruption to your ongoing business operations.",
  intro3:
    "From heavy machinery relocation to server room migration and retail fixture reinstallation, Nex Go commercial movers handle everything with specialized tools and trained personnel. Every commercial move is backed by our service guarantee and insurance coverage.",
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