import Hero from "../src/components/homeUI/HeroSection";
import HeroWithDashboard from "../src/components/homeUI/Container";
import Faq from "@/src/components/Faq/Faq";
import DashboardFeaturesSection from "../src/components/homeUI/DashboardFeaturesSection";
import RoomManagementSection from "../src/components/homeUI/RoomManagementSection";
import BookDemoSection from "../src/components/common/BookDemoSection";
import Feature from "@/src/components/features/Feature";
import Templates from "@/src/components/templates/Templates";

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
      <Templates />
      <Faq />

      <BookDemoSection />
    </>
  );
}