import Hero from "./components/HeroSection";
import HeroWithDashboard from "./components/Container";
import Faq from "@/src/components/Faq/Faq";
import DashboardFeaturesSection from "./components/DashboardFeaturesSection";
import TemplatesSection from "./components/TemplatesSection";
import RoomManagementSection from "./components/RoomManagementSection";
import BookDemoSection from "../src/components/common/BookDemoSection";
import Feature from "@/src/components/features/Feature";

export default function page() {
  return (
    <>
      <Hero />
      <HeroWithDashboard />

      <section id="features" className="scroll-mt-20">
        <Feature />
      </section>

      
      <RoomManagementSection />
      <DashboardFeaturesSection />
      <TemplatesSection />
      <Faq />

      <BookDemoSection />
    </>
  );
}