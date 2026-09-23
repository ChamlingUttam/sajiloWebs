import DemoForm from "./DemoForm";
import DemoBenefits from "./DemoBenefits";
import BookDemoSection from "@/src/components/common/BookDemoSection";

export default function DemoSection() {
  return (
    <section>
      <div className="bg-[#3B1547] px-4 md:px-10 pt-16 sm:pt-20 pb-12 sm:pb-16 text-center">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-white font-bold text-6xl leading-tight">
            Schedule Your Free Demo
          </h2>
          <p className="text-[#D3C8D6] text-base max-w-xl mx-auto mt-3">
            Experience how Sajilo Webs can transform your hotel operations.
            Book a personalized 30-minute walkthrough.
          </p>
        </div>
      </div>

      {/* Content - light/white bg, form card purple */}
      <div className="bg-[#F3F1F7] w-full py-7">
        <div className="bg-[#F3F1F7]">
        <div className="w-full container mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 items-start">
          <DemoForm />
          <DemoBenefits />
        </div>
        <BookDemoSection />
        </div>
      </div>
    </section>
  );
}