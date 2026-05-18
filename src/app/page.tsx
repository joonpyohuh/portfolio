import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyMe from "@/components/sections/WhyMe";
import OnBrandMarketing from "@/components/sections/OnBrandMarketing";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";
import SerialBadge from "@/components/SerialBadge";

export default function HomePage() {
  return (
    <>
      <SerialBadge />
      <Hero />
      <About />
      <WhyMe />
      <OnBrandMarketing />
      <Experience />
      <Certifications />
      <Work />
      <Contact />
    </>
  );
}
