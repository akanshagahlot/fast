import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata = {
  title: "Insurance Services | Fast Professional Cargo Movers",
  description: "Transit insurance coverage for your valuables during relocation. Full protection against damage and loss.",
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
  title: "Insurance Services",
  slug: "insurance",
  category: "Protection Services",
  
  mainImage: "/images/services/insurance/main.png",
  gridImage1: "/images/services/insurance/grid1.png",
  gridImage2: "/images/services/insurance/grid2.png",
  chooseImage: "/images/services/insurance/choose.png",
  intro1:
    "Fast Professional Cargo Movers offers comprehensive transit insurance coverage for all your valuable belongings during relocation. Our insurance plans cover accidental damage, theft and loss during cargo transportation giving you complete peace of mind throughout your move.",
  intro2:
    "We work with trusted insurance partners to provide quick claims processing and fair compensation. Whether you are moving electronics, antiques, jewellery or heavy furniture — our insurance plans are customized to match the value of your goods transport services in india.",
  intro3:
    "Insurance is not just a document — it is your financial safety net. Fast Professional Cargo Movers ensures all insurance paperwork is transparent, claims are settled quickly and you are never left in a difficult situation after any unfortunate incident during transit.",
  chooseTitle: "Choose Your Services",
  chooseDesc:
    "Protect your valuables with Fast Professional Cargo Movers transit insurance. Fast claim settlement, transparent documentation and full coverage for all types of goods during door to door parcel service and interstate moves.",
  features: [
    "Home Shifting",
    "Office Shifting",
    "Loading & Unloading",
    "Packing & Unpacking",
    "Warehouse Services",
    "Insurance Services",
  ],
};

export default function InsurancePage() {
  return (
    <>
      
      <ServicePageLayout service={service} />
      
    </>
  );
}