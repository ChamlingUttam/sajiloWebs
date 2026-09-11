import Image from "next/image";
import { LayoutGrid, ListChecks } from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Drag & Drop Builder",
    description:
      "Create beautiful hotel pages visually with our intuitive editor. No coding skills required - just drag, drop, and publish.",
image: "/assets/homepage/purple-bg.jpg",  },
  {
    icon: ListChecks,
    title: "Real-Time Booking Engine",
    description:
      "Accept direct bookings with zero commission fees. Sync availability across channels in real time.",
image: "/assets/homepage/purple-bg.jpg",  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#F3F1F7] px-4 sm:px-10 md:px-16 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block bg-[#3B1547] text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
              Features
            </span>
            <h2 className="text-[#3B1547] font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
              Powerful Features
            </h2>
            <h2 className="text-[#3B1547] font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
              Built for Hospitality Business
            </h2>
          </div>
          <p className="text-gray-500 text-sm sm:text-base max-w-sm">
            Everything you need to create, manage, and grow your hotel online presence - all in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map(({ icon: Icon, title, description, image }) => (
            <div key={title}>
              <div className="rounded-2xl overflow-hidden mb-6">
                <Image
                  src={image}
                  alt={title}
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#3B1547] flex items-center justify-center mb-3">
                <Icon size={18} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg text-[#1A1A1A] mb-2">{title}</h3>
              <p className="text-gray-500 text-sm max-w-md">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}