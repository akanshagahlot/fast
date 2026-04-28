import Image from "next/image";
import Link from "next/link";
import "../styles/services.css";

const services = [
  {
    title: "Home Shifting",
    description:
      "Safe and smooth home relocation with careful packing, loading, transport, and doorstep delivery.",
    image: "/images/services/homeshifting/main.png",
    link: "/services/homeshifting",
    alt: "Home shifting service by Nex Go Packers and Movers",
  },
  {
    title: "Office Shifting",
    description:
      "Professional office moving service to shift furniture, files, systems, and equipment safely.",
    image: "/images/services/officeshifting/main.png",
    link: "/services/officeshifting",
    alt: "Office relocation service by Nex Go Packers and Movers",
  },
  {
    title: "Loading And Unloading",
    description:
      "Trained staff handle heavy and delicate items carefully during loading and unloading.",
    image: "/images/services/loadingunloading/main.png",
    link: "/services/loadingunloading",
    alt: "Loading and unloading service by professional movers",
  },
  {
    title: "Packing And Unpacking",
    description:
      "Quality packing materials are used to protect your goods and unpack them safely at destination.",
    image: "/images/services/packingunpacking/main.png",
    link: "/services/packingunpacking",
    alt: "Packing and unpacking service for safe relocation",
  },
  {
    title: "Warehouse Services",
    description:
      "Secure warehouse storage solutions for household, office, and commercial goods.",
    image: "/images/services/warehouse/main.png",
    link: "/services/warehouse",
    alt: "Warehouse storage service for goods and items",
  },
  {
    title: "Insurance Services",
    description:
      "Moving insurance support to keep your valuable goods protected during relocation.",
    image: "/images/services/insurance/main.png",
    link: "/services/insurance",
    alt: "Insurance service for safe and secure moving",
  },
  {
    title: "Logistics Services",
    description:
      "Reliable logistics and transport solutions for fast, safe, and timely goods delivery.",
    image: "/images/services/logistic/main.png",
    link: "/services/logistic",
    alt: "Logistics and transport service by Nex Go",
  },
  {
    title: "Commercial Moving",
    description:
      "Efficient commercial moving service for shops, offices, warehouses, and business units.",
    image: "/images/services/commercial/main.png",
    link: "/services/commercial",
    alt: "Commercial moving service for businesses and offices",
  },
];

export default function Services() {
  return (
    <section className="services">
      <div className="servicesHeader">
        <p className="sectionTag">Our Services</p>
        <h2>Services We Provide</h2>
      </div>

      <div className="serviceGrid">
        {services.map((service) => (
          <div className="serviceCard" key={service.title}>
            {/* Image Link */}
            <Link href={service.link} className="serviceImageBox">
              <Image
                src={service.image}
                alt={service.alt}
                width={300}
                height={200}
                className="serviceImg"
              />
            </Link>

            {/* Title */}
            <h3>{service.title}</h3>

            {/* Description */}
            <p className="serviceDescription">{service.description}</p>

            {/* See More Link */}
            <Link
              href={service.link}
              className="seeMoreLink"
              aria-label={`View more about ${service.title}`}
            >
              See More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}