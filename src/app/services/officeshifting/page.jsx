
import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata = {
  title: "Office Shifting Services | Nex Go Packers & Movers",
  description: "Reliable office shifting and commercial relocation services. Minimal downtime, maximum safety for your business assets.",
};

const service = {
  title: "Office Shifting",
  slug: "officeshifting",
  category: "Commercial Services",
 
  mainImage: "/images/services/officeshifting/main.png",
  gridImage1: "/images/services/officeshifting/grid1.png",
  gridImage2: "/images/services/officeshifting/grid2.png",
  chooseImage: "/images/services/officeshifting/choose.png",
  intro1:
    "Nex Go offers seamless office shifting services designed to minimize business downtime. Our trained professionals handle IT equipment, furniture, documents and all office assets with utmost care and precision throughout the entire relocation process.",
  intro2:
    "We understand that office relocation is time-sensitive. Our team works after hours or on weekends to ensure your business operations resume quickly. Every item is labeled, packed and delivered to the exact location in your new office space.",
  intro3:
    "From disassembly to reassembly, our office shifting experts manage every detail. We provide complete floor planning, modular furniture handling and secure data center relocation with zero damage and on-time delivery guaranteed.",
  chooseTitle: "Choose Your Services",
  chooseDesc:
    "Professional office relocation with expert planning, careful handling of IT assets and furniture, and timely setup at your new location. Trusted by businesses across India for stress-free office moves.",
  features: [
    "Home Shifting",
    "Office Shifting",
    "Loading & Unloading",
    "Packing & Unpacking",
    "Warehouse Services",
    "Insurance Services",
  ],
};

export default function OfficeShiftingPage() {
  return (
    <>
     
      <ServicePageLayout service={service} />
      
    </>
  );
}