import Image from "next/image";
import { LayoutGrid, ListChecks } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="bg-[#F3F1F7] px-4 sm:px-10 md:px-10 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
            Everything you need to create, manage, and grow your hotel&apos;s
            online presence - all in one platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 - Drag & Drop Builder */}
          <div>
            <div
              className="relative aspect-[4/3] sm:aspect-[16/11] justify-between rounded-2xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/homepage/purple-bg.jpg')",
              }}
            >
              <Image
                src="/assets/homepage/Container.png"
                alt="Website builder nav"
                width={500}
                height={500}
                className="absolute left-[6%] top-[10%] w-[44%] h-auto"
              />
              <Image
                src="/assets/homepage/Container (1).png"
                alt="About us editor"
                width={500}
                height={500}
                className="absolute left-[38%] top-[10%] w-[50%] h-auto"
              />
            </div>
            <div className="w-10 h-10 rounded-full bg-[#3B1547] flex items-center justify-center mb-3 mt-6">
              <LayoutGrid size={18} className="text-white" />
            </div>
            <h3 className="font-semibold text-lg text-[#1A1A1A] mb-2">
              Drag &amp; Drop Builder
            </h3>
            <p className="text-gray-500 text-sm max-w-md">
              Create beautiful hotel pages visually with our intuitive editor.
              No coding skills required - just drag, drop, and publish.
            </p>
          </div>

          {/* Card 2 - Real-Time Booking Engine */}
          <div>
            <div
              className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: "url('/assets/homepage/purple-bg(2).jpg')",
              }}
            >
              <Image
                src="/assets/homepage/Container (2).png"
                alt="Booking notification"
                width={500}
                height={200}
                className="w-[80%] h-auto drop-shadow-xl"
              />
            </div>
            <div className="w-10 h-10 rounded-full bg-[#3B1547] flex items-center justify-center mb-3 mt-6">
              <ListChecks size={18} className="text-white" />
            </div>
            <h3 className="font-semibold text-lg text-[#1A1A1A] mb-2">
              Real-Time Booking Engine
            </h3>
            <p className="text-gray-500 text-sm max-w-md">
              Accept direct bookings with zero commission fees. Sync
              availability across channels in real time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
