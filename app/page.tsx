import Hero from "./components/HeroSection";
import HeroWithDashboard from "./components/Container";
// import FeaturesSection from "./components/FeaturesSection";
  import Faq from "@/src/components/Faq/Faq";
import DashboardFeaturesSection from "./components/DashboardFeaturesSection";
import TemplatesSection from "./components/TemplatesSection";
// import { CardOne } from "@/src/components/features/CardOne";
import Feature from "@/src/components/features/Feature";
import { RoomCard } from "@/src/components/room/RoomCard";



export default function page() {
  return (
    <>
      <Hero />
      <HeroWithDashboard />
      {/* <FeaturesSection /> */}
      <Feature/>
      <RoomCard/>
      <DashboardFeaturesSection />
      <TemplatesSection />
      <Faq />
     
      
    </>
  )
}

