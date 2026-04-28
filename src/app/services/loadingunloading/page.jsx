
import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata = {
  title: "Loading & Unloading Services | Nex Go Packers & Movers",
  description: "Expert loading and unloading services with trained manpower and modern equipment. Safe handling of all goods.",
};

const service = {
  title: "Loading & Unloading",
  
  mainImage: "/images/services/loadingunloading/main.png",
  gridImage1: "/images/services/loadingunloading/grid1.png",
  gridImage2: "/images/services/loadingunloading/grid2.png",
  chooseImage: "/images/services/loadingunloading/choose.png",
  intro1:
    "Nex Go provides expert loading and unloading services with trained manpower and modern equipment. Our team carefully handles all types of goods — from heavy furniture to delicate appliances — ensuring zero damage during the entire loading process.",
  intro2:
    "Our loading experts use proper lifting techniques, trolleys, ramps and straps to handle every item safely. We work efficiently to minimize the time taken while ensuring maximum safety for your valuable belongings during transit.",
  intro3:
    "Professional unloading services at your destination ensure every item is placed exactly where you want it. Our team does not just dump goods — we carefully unload, arrange and ensure everything is intact before we leave your premises.",
  chooseTitle: "Choose Your Services",
  chooseDesc:
    "Trained loading and unloading team with proper equipment for safe and efficient handling of all household and commercial goods. Available for local and long-distance moves across India.",
  features: [
    "Home Shifting",
    "Office Shifting",
    "Loading & Unloading",
    "Packing & Unpacking",
    "Warehouse Services",
    "Insurance Services",
  ],
};

export default function LoadingUnloadingPage() {
  return (
    <>
     
      <ServicePageLayout service={service} />
      
    </>
  );
}