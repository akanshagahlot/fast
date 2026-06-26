import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata = {
  title: "Logistics Services | Fast Professional Cargo Movers",
  description: "End-to-end logistics solutions for businesses and individuals. Fast, reliable and trackable freight services across India.",
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
  title: "Logistics Services",
  slug: "logistic",
  category: "Logistics & Freight",
 
  mainImage: "/images/services/logistic/main.png",
  gridImage1: "/images/services/logistic/grid1.png",
  gridImage2: "/images/services/logistic/grid2.png",
  chooseImage: "/images/services/logistic/choose.png",
  intro1:
    "Fast Professional Cargo Movers delivers end-to-end delivery courier service solutions for businesses and individuals across India. From last-mile delivery to full truckload freight, our logistics network ensures your goods reach the destination safely, on schedule and at the best rates.",
  intro2:
    "Our transport services ahmedabad fleet includes small delivery vehicles, mini trucks, container trucks and specialized transport for oversized goods. Real-time GPS tracking keeps you informed at every stage of the delivery journey from pickup to final destination.",
  intro3:
    "With partnerships across 200+ cities and a dedicated operations team, Fast Professional Cargo Movers logistics ensures seamless cargo transportation services. We handle all documentation, toll compliance and route optimization to deliver the fastest and most cost-effective service.",
  chooseTitle: "Choose Your Services",
  chooseDesc:
    "Reliable logistics services for businesses of all sizes. Real-time tracking, express delivery options and pan-India coverage make Fast Professional Cargo Movers the preferred logistics partner for smooth supply chain management.",
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