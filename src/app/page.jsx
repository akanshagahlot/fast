
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import WorkProcess from "../components/WorkProcess";
import ContactBanner from "../components/ContactBanner";


export default function Home() {
  return (
    <>
      
      <Hero />
      <Services />
      <AboutSection />
      <WorkProcess/>
      <ContactBanner />
      
    </>
  );
}