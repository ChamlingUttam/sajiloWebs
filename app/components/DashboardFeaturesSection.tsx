import Image from "next/image";
import {
  LayoutDashboard,
  PenLine,
  ListChecks,
  Languages,
  Users,
  LineChart,
} from "lucide-react";

const features = [
  { icon: LayoutDashboard, text: "Manage rooms, rates, photos, and content" },
  { icon: PenLine, text: "Integrated SEO tools to rank higher on Google" },
  { icon: ListChecks, text: "View live bookings and revenue in real time" },
  { icon: Languages, text: "Multi-language support for international guests" },
  { icon: Users, text: "Built-in CRM and guest profiles" },
  { icon: LineChart, text: "Smart analytics with guest behavior insights" },
];

export default function DashboardFeaturesSection() {
  return (
    <section className="w-full overflow-hidden bg-[#F3F1F7] px-4 md:px-10 py-10 sm:py-14">
<div className="max-w-7xl mx-auto text-center px-2">
  <span className="inline-block bg-[#3B1547] text-white text-xs font-medium px-3 py-2 rounded-sm mb-4">
    Dashboard
  </span>
  <h2 className="text-[#3B1547] font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
    Your Hotel Website Dashboard
  </h2>
  <p className="text-[#491A53] text-sm sm:text-base mt-3 max-w-[280px] sm:max-w-xl mx-auto">
    A powerful control center to manage every aspect of your hotel&apos;s online presence.
  </p>

  <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
    <button className="bg-[#FF751F] hover:bg-orange-600 text-white text-xs sm:text-sm font-medium px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg whitespace-nowrap">
      Start 14-Days Free Trial
    </button>
    <button className="bg-white border border-gray-200 text-[#160818] text-xs sm:text-sm font-medium px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg whitespace-nowrap hover:bg-gray-50">
      Book a Demo
    </button>
  </div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 md:gap-12 items-center mt-14 text-left">
          <div className="relative w-full max-w-xl mx-auto md:mx-0">
            <Image
              src="/assets/homepage/Mockup.png"
              alt="Hotel dashboard laptop mockup"
              width={1600}
              height={1100}
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map(({ icon: Icon, text }) => (
              <div key={text} className="flex flex-col gap-3">
                <Icon size={22} className="text-[#3B1547]" />
                <p className="text-sm text-gray-600 leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}