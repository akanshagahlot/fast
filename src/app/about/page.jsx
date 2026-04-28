
import AboutUsHeader from "../../components/Aboutusheader";
import AboutHero   from "../../components/Abouthero";

import AboutStory   from "../../components/Aboutstory";
import Services from "../../components/Services";
import AboutCTA     from "../../components/Aboutcta";


export const metadata = {
  title: "About Us | Nex Go Packers & Movers",
  description:
    "Learn about Nex Go Packers & Movers — India's trusted relocation partner with 12+ years of safe, on-time moving experience.",
};

export default function AboutPage() {
  return (
    <main>
               <AboutUsHeader/>
      <AboutHero/>
      <AboutStory />
      <Services/>
      <AboutCTA />
     
    </main>
  );
}