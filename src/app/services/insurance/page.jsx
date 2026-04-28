
import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata = {
  title: "Insurance Services | Nex Go Packers & Movers",
  description: "Transit insurance coverage for your valuables during relocation. Full protection against damage and loss.",
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
    "Nex Go offers comprehensive transit insurance coverage for all your valuable belongings during relocation. Our insurance plans cover accidental damage, theft and loss during transportation giving you complete peace of mind throughout your move.",
  intro2:
    "We work with trusted insurance partners to provide quick claims processing and fair compensation. Whether you are moving electronics, antiques, jewellery or heavy furniture — our insurance plans are customized to match the value of your goods.",
  intro3:
    "Insurance is not just a document — it is your financial safety net. Nex Go ensures all insurance paperwork is transparent, claims are settled quickly and you are never left in a difficult situation after any unfortunate incident during transit.",
  chooseTitle: "Choose Your Services",
  chooseDesc:
    "Protect your valuables with Nex Go transit insurance. Fast claim settlement, transparent documentation and full coverage for all types of goods during domestic and interstate moves.",
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