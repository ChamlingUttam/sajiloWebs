import Image from "next/image";
import {  Languages, BarChart3, Headphones } from "lucide-react";

const cards = [
  {
    icon: Languages,
    title: "Multi-Language Support",
    description:
      "Reach international guests with automatic translations in 30+ languages. Localized content that converts.",
    bg: "/assets/homepage/purple-bg (4).jpg",
    image: "/assets/homepage/Appearance Setting.png",
  },
  {
    icon: BarChart3,
    title: "SEO & Analytics",
    description:
      "Built-in SEO optimization and detailed analytics dashboards. Track bookings, traffic, and revenue in one place.",
    bg: "/assets/homepage/purple-bg (6).jpg",
    image: "/assets/homepage/Appearance Setting (1).png",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our hospitality-trained support team is available around the clock. Live chat, email, and phone support included.",
    bg: "/assets/homepage/purple-bg (5).jpg",
    bgOverlay: "/assets/homepage/Group 1.png",
    image: "/assets/homepage/Appearance Setting (2).png",
  },
];

export default function RoomManagementSection() {
  return (
<section className="bg-white px-4 sm:px-6 md:px-10 py-16 sm:py-20">  
      <div className="max-w-7xl mx-auto">
        {/* Room & Rate Management - text only, no image */}
        {/* <div className="flex flex-col gap-4 mb-12">
          <div className="w-9 h-9 rounded-full bg-[#3B1547] flex items-center justify-center">
            <Wand2 size={16} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-[#1A1A1A] mb-1">
              Room &amp; Rate Management
            </h3>
            <p className="text-gray-500 text-sm max-w-xl">
              Manage room types, seasonal rates, and packages effortlessly.
              Dynamic pricing tools maximize revenue.
            </p>
          </div>
        </div> */}

        {/* 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-x-8 gap-y-12">
          {cards.map(({ icon: Icon, title, description, bg, image }) => (
            <div key={title} className="flex flex-col gap-4 px-10 ">
              <div
                className="relative aspect-[4/3.2] rounded-xl overflow-hidden bg-cover bg-center p-3 sm:p-4 flex flex-col items-center justify-center gap-3"
                style={{ backgroundImage: `url('${bg}')` }}
              >
                <Image
                  src={image}
                  alt={title}
                  width={400}
                  height={300}
                  className="relative w-full max-w-[85%] h-auto rounded-lg shadow-2xl"
                />
                {title === "24/7 Support" && (
                  <button className="bg-white  text-base font-bold px-8 py-3 rounded-full border-4 border-[#6A4372] shadow-lg">
                    Contact Us
                  </button>
                )}
              </div>
              <div className="w-9 h-9 rounded-full bg-[#3B1547] flex items-center justify-center">
                <Icon size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#491A53] mb-1">
                  {title}
                </h3>
                <p className="text-[#491A53] text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
