import DemoForm from "./DemoForm";
import DemoBenefits from "./DemoBenefits";

export default function DemoSection() {
  return (
    <section>
      <div className="bg-[#3B1547] px-4 md:px-10 pt-16 sm:pt-20 pb-12 sm:pb-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
            Schedule Your Free Demo
          </h2>
          <p className="text-purple-200/70 text-sm sm:text-base mt-3">
            Experience how Sajilo Webs can transform your hotel operations.
            Book a personalized 30-minute walkthrough.
          </p>
        </div>
      </div>

      {/* Content - light/white bg, form card purple */}
      <div className="bg-[#F3F1F7] px-4 md:px-40 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 items-start">
          <DemoForm />
          <DemoBenefits />
        </div>
      </div>
    </section>
  );
}