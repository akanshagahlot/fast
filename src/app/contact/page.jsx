import ContactHeader from "../../components/ContactHeader";
import ContactInfo from "../../components/ContactInfo";
import ContactForm from "../../components/ContactForm";
import ContactMap from "../../components/ContactMap";

export const metadata = {
  title: "Contact Us | Fast Professional Cargo Movers",
  description: "Get in touch with Fast Professional Cargo Movers for reliable door to door parcel service, cargo transportation services, and top-rated truck transport in Ahmedabad and across India.",
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

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </>
  );
}