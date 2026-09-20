// import Image from "next/image";
// import { Wand2, Languages, BarChart3, Headphones } from "lucide-react";

// const cards = [
//   {
//     icon: Languages,
//     title: "Multi-Language Support",
//     description:
//       "Reach international guests with automatic translations in 30+ languages. Localized content that converts.",
//     bg: "/assets/homepage/purple-bg (4).jpg",
//     image: "/assets/homepage/Appearance Setting.png",
//   },
//   {
//     icon: BarChart3,
//     title: "SEO & Analytics",
//     description:
//       "Built-in SEO optimization and detailed analytics dashboards. Track bookings, traffic, and revenue in one place.",
//     bg: "/assets/homepage/purple-bg (6).jpg",
//     image: "/assets/homepage/Appearance Setting (1).png",
//   },
//   {
//     icon: Headphones,
//     title: "24/7 Support",
//     description:
//       "Our hospitality-trained support team is available around the clock. Live chat, email, and phone support included.",
//     bg: "/assets/homepage/purple-bg (5).jpg",
//     bgOverlay: "/assets/homepage/Group 1.png",
//     image: "/assets/homepage/Appearance Setting (2).png",
//   },
// ];

// export default function RoomManagementSection() {
//   return (
// <section className="bg-white px-4 sm:px-6 md:px-10 py-16 sm:py-20">  
//       <div className="max-w-7xl mx-auto">
//         {/* Room & Rate Management - text only, no image */}
    

//         {/* 3 cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
//           {cards.map(({ icon: Icon, title, description, bg, image }) => (
//             <div key={title} className="flex flex-col gap-4">
//               <div
//                 className="relative aspect-[4/3.2] rounded-xl overflow-hidden bg-cover bg-center p-3 sm:p-4 flex flex-col items-center justify-center gap-3"
//                 style={{ backgroundImage: `url('${bg}')` }}
//               >
//                 <Image
//                   src={image}
//                   alt={title}
//                   width={400}
//                   height={300}
//                   className="relative w-full max-w-[85%] h-auto rounded-lg shadow-2xl"
//                 />
//                 {title === "24/7 Support" && (
//                   <button className="bg-white text-[#3E1647] text-base font-bold px-8 py-3 rounded-full border-4 border-[#6A4372] shadow-lg">
//                     Contact Us
//                   </button>
//                 )}
//               </div>
//               <div className="w-9 h-9 rounded-full bg-[#3B1547] flex items-center justify-center">
//                 <Icon size={25} className="text-white" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg text-[#1A1A1A] mb-1">
//                   {title}
//                 </h3>
//                 <p className="text-gray-500 text-sm">{description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




















import Image from "next/image";
import {
  Languages,
  BarChart3,
  Headphones,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/src/components/ui/card";

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
    image: "/assets/homepage/Appearance Setting (2).png",
  },
];

export default function RoomManagementSection() {
  return (
   <section className="bg-white  px-6  md:px-40 w-full ">
  <div className="mx-auto max-w-7xl w-full">
    <div className="flex flex-col gap-4 md:flex-row md:gap-8">
      {cards.map(({ icon: Icon, title, description, bg, image }) => (
        <Card
          key={title}
          className="w-full  bg-transparent shadow-none "
        >
          <CardHeader className="p-0">
            <div
              className="relative flex aspect-[4/3.2] flex-col items-center justify-center gap-3 overflow-hidden rounded-xl bg-cover bg-center  sm:p-4"
              style={{
                backgroundImage: `url('${bg}')`,
              }}
            >
              <Image
                src={image}
                alt={title}
                width={400}
                height={300}
                className="h-auto w-full max-w-[85%] rounded-lg shadow-2xl"
              />

              {title === "24/7 Support" && (
                <button className="rounded-full border-4 border-[#6A4372] bg-white px-8 py-3 text-base font-bold text-[#3E1647] shadow-lg">
                  Contact Us
                </button>
              )}
            </div>
          </CardHeader>

          <CardContent className="p-0 pt-4">
            <div className="mb-3 flex h-8 w-8 lg:h-10 lg:w-10  items-center justify-center rounded-full bg-[#3B1547]">
              <Icon  className="text-white lg:h-5 lg:w-5 h-4 w-4" />
            </div>

            <CardTitle className="mb-1 text-lg font-semibold text-[#3E1647]">
              {title}
            </CardTitle>

            <CardDescription className="text-sm text-[#491A53]">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
  );
}