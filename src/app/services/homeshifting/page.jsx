import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata = {
  title: "Home Shifting Services | Fast Professional Cargo Movers",
  description: "Professional home shifting and packing moving services with safe packing, loading and timely delivery. Trusted movers across India.",
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
  title: "Home Shifting",
  slug: "homeshifting",
  category: "Residential Services",

  mainImage: "/images/services/homeshifting/main.png",
  gridImage1: "/images/services/homeshifting/grid1.png",
  gridImage2: "/images/services/homeshifting/grid2.png",
  chooseImage: "/images/services/homeshifting/choose.png",
  intro1:
    "Fast Professional Cargo Movers provides professional home shifting and packing moving services for safe and smooth relocation. Our expert team ensures careful packing and secure transport. In every city our reliable movers provide trusted home shifting with careful handling and timely delivery for all household goods safely.",
  intro2:
    "Safe and reliable door to door parcel service and transport provided. Skilled team manages home packing, loading and delivery. Professional movers handle goods carefully and ensure secure home shifting with proper safety and timely service for all customers.",
  intro3:
    "Professional moving team provides complete home shifting service with secure packing, careful loading and timely delivery. Customers receive safe goods transport services in india and reliable relocation support with trained staff and modern moving equipment always.",
  chooseTitle: "Choose Your Services",
  chooseDesc:
    "Safe home shifting service with expert packing, careful loading and secure delivery. Experienced movers ensure protection of goods and timely transport for home relocation with complete support and trusted service for every customer.",
  features: [
    "Home Shifting",
    "Office Shifting",
    "Loading & Unloading",
    "Packing & Unpacking",
    "Warehouse Services",
    "Insurance Services",
  ],
};

export default function HomeShiftingPage() {
  return (
    <>
    
      <ServicePageLayout service={service} />
     
    </>
  );
}