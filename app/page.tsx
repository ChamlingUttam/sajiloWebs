import Hero from "./components/HeroSection";
import HeroWithDashboard from "./components/Container";
import FeaturesSection from "./components/FeaturesSection";
  import Faq from "@/src/components/Faq/Faq";

export default function page() {
  return (
    <>
      <Hero />
      <HeroWithDashboard />
      <FeaturesSection />
      <Faq />
      
    </>
  )
}

