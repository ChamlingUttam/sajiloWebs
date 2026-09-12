import Hero from "./components/HeroSection";
import HeroWithDashboard from "./components/Container";
import FeaturesSection from "./components/FeaturesSection";
  import Faq from "@/src/components/Faq/Faq";
import DashboardFeaturesSection from "./components/DashboardFeaturesSection";
import TemplatesSection from "./components/TemplatesSection";
import RoomManagementSection from "./components/RoomManagementSection";


export default function page() {
  return (
    <>
      <Hero />
      <HeroWithDashboard />
      

      <FeaturesSection />
      <RoomManagementSection />
      <DashboardFeaturesSection />
      <TemplatesSection />
      <Faq />
      
    </>
  )
}

