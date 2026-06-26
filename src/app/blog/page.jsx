import BlogHeader from "../../components/Blogheader";
import BlogCards from "../../components/Blogcards";

export const metadata = {
  title: "Blog | Fast Professional Cargo Movers",
  description: "Read expert packing moving services guides, cargo transportation services advice, and tips on finding the best door to door parcel service from Fast Professional Cargo Movers.",
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

export default function BlogPage() {
  return (
    <main>
      <BlogHeader />
      <BlogCards />
    </main>
  );
}