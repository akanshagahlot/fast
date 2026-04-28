
import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata = {
  title: "Logistics Services | Nex Go Packers & Movers",
  description: "End-to-end logistics solutions for businesses and individuals. Fast, reliable and trackable freight services across India.",
};

const service = {
  title: "Logistics Services",
  slug: "logistic",
  category: "Logistics & Freight",
 
  mainImage: "/images/services/logistic/main.png",
  gridImage1: "/images/services/logistic/grid1.png",
  gridImage2: "/images/services/logistic/grid2.png",
  chooseImage: "/images/services/logistic/choose.png",
  intro1:
    "Nex Go delivers end-to-end logistics solutions for businesses and individuals across India. From last-mile delivery to full truckload freight, our logistics network ensures your goods reach the destination safely, on schedule and at the best rates.",
  intro2:
    "Our logistics fleet includes small delivery vehicles, mini trucks, container trucks and specialized transport for oversized goods. Real-time GPS tracking keeps you informed at every stage of the delivery journey from pickup to final destination.",
  intro3:
    "With partnerships across 200+ cities and a dedicated operations team, Nex Go logistics ensures seamless movement of goods. We handle all documentation, toll compliance and route optimization to deliver the fastest and most cost-effective service.",
  chooseTitle: "Choose Your Services",
  chooseDesc:
    "Reliable logistics services for businesses of all sizes. Real-time tracking, express delivery options and pan-India coverage make Nex Go the preferred logistics partner for smooth supply chain management.",
  features: [
    "Home Shifting",
    "Office Shifting",
    "Loading & Unloading",
    "Packing & Unpacking",
    "Warehouse Services",
    "Insurance Services",
  ],
};

export default function LogisticPage() {
  return (
    <>

      <ServicePageLayout service={service} />
      
    </>
  );
}