
import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata = {
  title: "Packing & Unpacking Services | Nex Go Packers & Movers",
  description: "Professional packing and unpacking services using quality materials. Complete protection for all your belongings.",
};

const service = {
  title: "Packing & Unpacking",
  slug: "packingunpacking",
  category: "Packing Services",
  
  mainImage: "/images/services/packingunpacking/main.png",
  gridImage1: "/images/services/packingunpacking/grid1.png",
  gridImage2: "/images/services/packingunpacking/grid2.png",
  chooseImage: "/images/services/packingunpacking/choose.png",
  intro1:
    "Nex Go's professional packing team uses industry-grade materials including bubble wrap, corrugated boxes, foam padding and stretch wrap to ensure every item is packed securely. From fragile crockery to heavy furniture, we pack it all with care.",
  intro2:
    "Our systematic packing approach involves room-by-room categorization, clear labeling and special handling for antiques, electronics and valuables. We ensure every box is packed optimally to prevent movement and damage during transit.",
  intro3:
    "At your new location, our unpacking team carefully opens each box and places items as per your instructions. We also handle debris removal after unpacking so your new home is clean and ready to live in from day one.",
  chooseTitle: "Choose Your Services",
  chooseDesc:
    "Expert packing with quality materials ensures your belongings are fully protected. Our professional team handles everything from wrapping to unpacking so you can relax during your entire relocation journey.",
  features: [
    "Home Shifting",
    "Office Shifting",
    "Loading & Unloading",
    "Packing & Unpacking",
    "Warehouse Services",
    "Insurance Services",
  ],
};

export default function PackingUnpackingPage() {
  return (
    <>
     
      <ServicePageLayout service={service} />
      
    </>
  );
}