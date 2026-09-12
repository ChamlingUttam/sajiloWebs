import { Gem } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#3B1547] px-6 py-14 sm:py-20 md:py-24 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
          Build Stunning Hotel
        </h1>
        <h2 className="text-purple-300/60 font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mt-1">
          Websites That Fill Rooms
        </h2>

        <p className="text-purple-200/70 text-sm sm:text-base mt-5 max-w-xl mx-auto">
          The all-in-one SaaS platform for hotels, resorts &amp; boutique stays. No code. No designers. Just results that matter and drive growth.
        </p>

        <div className="flex flex-col gap-3 mt-8 max-w-xs mx-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-3 rounded-lg w-full sm:w-auto">
            Start 14-Days Free Trial
          </button>
          <button className="bg-white border border-gray-200 text-[#160818] text-sm font-medium px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-gray-100">
            Book a Demo
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mt-8 text-purple-200/60 text-xs sm:text-sm">
          <span className="flex items-center gap-1.5">
            <Gem size={14} /> No commitment
          </span>
          <span className="flex items-center gap-1.5">
            <Gem size={14} /> 30-minute session
          </span>
          <span className="flex items-center gap-1.5">
            <Gem size={14} /> Available Sun-Fri
          </span>
        </div>
      </div>
    </section>
  );
}