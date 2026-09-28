



// import Image from "next/image";
// import { BedDouble } from "lucide-react";
// import { Card } from "../ui/card";

// export function RoomCard() {
//   return (
//     <section className="w-full bg-white py-0 sm:py-8 lg:py-10">
//       <div className="container">
//         <Card className="w-full overflow-hidden border-0 bg-transparent p-0 shadow-none">
//           {/* Room Image */}
//           <Image
//             src="/room.png"
//             alt="Room preview"
//             width={1200}
//             height={750}
//             // className="h-auto w-full rounded-xl object-cover sm:rounded-2xl"
//             className="h-70 w-full rounded-xl object-cover sm:h-85 lg:h-125 lg:rounded-2xl"
//             sizes="
//               (max-width: 640px) 100vw,
//               (max-width: 768px) 90vw,
//               (max-width: 1280px) 85vw,
//               1440px
//             "
//           />

//           {/* Card Content */}
//           <div className="p-4 pt-5 sm:p-6 sm:pt-6">
//             {/* Icon */}
//             <div className="mb-3 flex items-center gap-3">
//               <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#491A53] lg:h-10 lg:w-10">
//                 <BedDouble className="h-4 w-4 text-white lg:h-5 lg:w-5" />
//               </span>
//             </div>

//             {/* Title */}
//             <h1 className="text-lg font-semibold text-[#491A53] sm:text-xl">
//               Room & Rate Management
//             </h1>

//             {/* Description */}
//             <p className="mt-1 text-sm leading-6 text-[#491A53] sm:text-base">
//               Manage room types, seasonal rates, and packages effortlessly.
//               Dynamic pricing tools maximize revenue.
//             </p>
//           </div>
//         </Card>
//       </div>
//     </section>
//   );
// }










"use client";

import Image from "next/image";
import { BedDouble } from "lucide-react";
import { Card } from "../ui/card";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function RoomCard() {
  const roomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".room-image",
        {
          opacity: 0,
          y: -10,
        },
        {
          opacity: 1,
          y: 10,
          duration: 1.5,
          ease: "power2.out",

          scrollTrigger: {
            trigger: roomRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, roomRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={roomRef}
      className="w-full bg-white py-0 sm:py-8 lg:py-10"
    >
      <div className="container">
        <Card className="w-full overflow-hidden border-0 bg-transparent p-0 shadow-none">
          
          {/* Room Image */}
          <div className="overflow-hidden rounded-xl sm:rounded-2xl">
            <Image
              src="/room.png"
              alt="Room preview"
              width={1200}
              height={750}
              className="room-image h-70 w-full object-cover sm:h-85 lg:h-125"
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 768px) 90vw,
                (max-width: 1280px) 85vw,
                1440px
              "
            />
          </div>

          {/* Card Content */}
          <div className="p-4 pt-5 sm:p-6 sm:pt-6">
            
            {/* Icon */}
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#491A53] lg:h-10 lg:w-10">
                <BedDouble className="h-4 w-4 text-white lg:h-5 lg:w-5" />
              </span>
            </div>

            {/* Title */}
            <h1 className="text-lg font-semibold text-[#491A53] sm:text-xl">
              Room & Rate Management
            </h1>

            {/* Description */}
            <p className="mt-1 text-sm leading-6 text-[#491A53] sm:text-base">
              Manage room types, seasonal rates, and packages effortlessly.
              Dynamic pricing tools maximize revenue.
            </p>
          </div>

        </Card>
      </div>
    </section>
  );
}
