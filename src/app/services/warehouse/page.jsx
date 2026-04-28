
import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata = {
  title: "Warehouse Services | Nex Go Packers & Movers",
  description: "Secure and affordable warehouse storage solutions. Short-term and long-term storage for household and commercial goods.",
};

const service = {
  title: "Warehouse Services",
  slug: "warehouse",
  category: "Storage Services",
  
  mainImage: "/images/services/warehouse/main.png",
  gridImage1: "/images/services/warehouse/grid1.png",
  gridImage2: "/images/services/warehouse/grid2.png",
  chooseImage: "/images/services/warehouse/choose.png",
  intro1:
    "Nex Go provides secure, clean and affordable warehouse storage solutions for both household and commercial goods. Whether you need short-term storage during a move or long-term storage for excess inventory, we have the right solution for you.",
  intro2:
    "Our warehouses are equipped with 24/7 CCTV surveillance, pest control, fire safety systems and climate control options. Every item stored with us is fully inventoried and insured for complete peace of mind throughout the storage period.",
  intro3:
    "Flexible storage plans starting from daily to yearly options make Nex Go the most convenient storage partner. Our professional team handles pickup, safe storage and delivery right to your door whenever you need your items back.",
  chooseTitle: "Choose Your Services",
  chooseDesc:
    "Safe and monitored storage facilities for all types of goods. Flexible plans, easy access and complete security make Nex Go the most trusted warehouse service provider across India.",
  features: [
    "Home Shifting",
    "Office Shifting",
    "Loading & Unloading",
    "Packing & Unpacking",
    "Warehouse Services",
    "Insurance Services",
  ],
};

export default function WarehousePage() {
  return (
    <>
     
      <ServicePageLayout service={service} />
      
    </>
  );
}