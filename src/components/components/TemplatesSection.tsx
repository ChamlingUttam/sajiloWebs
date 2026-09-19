import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
const templates = Array.from({ length: 7 }, () => ({
  title: "Business Hotel Theme",
}));

export default function TemplatesSection() {
  return (
    <section className="bg-[#3B1547] px-4 md:px-10 py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 text-left">
          {" "}
          <div>
            <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
              Beautiful Templates Ready
            </h2>
            <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
              to Launch
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className="text-purple-200/70 text-sm sm:text-base max-w-md text-left">
              Choose from professionally designed templates tailored for every
              type of hospitality property.
            </p>

            <button className="bg-[#FF751F] hover:bg-orange-600 text-white text-sm font-medium px-6 py-3 rounded-lg whitespace-nowrap border border-[#CC5E19] shadow-lg">
              Start 14-Days Free Trial
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {templates.map((tpl, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div
                className="relative aspect-[4/3.2] rounded-xl overflow-hidden bg-cover bg-center p-2 sm:p-3 flex items-center justify-center"
                style={{
                  backgroundImage: "url('/assets/homepage/purple-bg(3).jpg')",
                }}
              >
                <Image
                  src="/assets/homepage/Image.png"
                  alt={tpl.title}
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white text-sm font-medium">
                  {tpl.title}
                </span>
                <button className="w-7 h-7 rounded-[10px] bg-[#6A4372] flex items-center justify-center ">
                  <ArrowUpRight size={14} className="text-[#491A53" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
