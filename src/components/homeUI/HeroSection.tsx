// import { Gem } from "lucide-react";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="bg-[#3B1547] px-6  py-10 pt-12 text-center">
//      <div className="">
//        <div className="max-w-3xl mx-auto">
//         <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
//           Build Stunning Hotel
//         </h1>
//         <h2 className="text-[#6A4372] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mt-1">
//           Websites That Fill Rooms
//         </h2>

//         <p className="text-[#EDE8EE] text-sm sm:text-base mt-5 max-w-xl mx-auto">
//           The all-in-one SaaS platform for hotels, resorts &amp; boutique stays. No code. No designers. Just results that matter and drive growth.
//         </p>

//         <div className="flex flex-col gap-3 mt-8 max-w-xs mx-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
//           <button className="bg-[#FF751F] hover:bg-orange-600 text-[#EDE8EE] text-sm font-medium px-6 py-3 rounded-lg w-full sm:w-auto border border-[#CC5E19]">
//             Start 14-Days Free Trial
//           </button>
//           <Link href={"/schedule-demo"} className="bg-white border border-gray-200 text-[#160818] text-sm font-medium px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-gray-100">
//             Book a Demo
//           </Link>
//         </div>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mt-8 text-purple-200/60 text-xs sm:text-sm">
//           <span className="flex items-center gap-1.5">
//             <Gem size={14} /> No commitment
//           </span>
//           <span className="flex items-center gap-1.5">
//             <Gem size={14} /> 30-minute session
//           </span>
//           <span className="flex items-center gap-1.5">
//             <Gem size={14} /> Available Sun-Fri
//           </span>
//         </div>
//       </div>

//      </div>
//     </section>
//   );
// }














"use client";

import { Gem } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.8,
          ease: "power3.out",
        },
      });

      tl.from(".hero-title", {
        y: 50,
        opacity: 0,
      })
        .from(
          ".hero-subtitle",
          {
            y: 40,
            opacity: 0,
          },
          "-=0.5"
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
          },
          "-=0.5"
        )
        .from(
          ".hero-buttons",
          {
            y: 25,
            opacity: 0,
          },
          "-=0.4"
        )
        .from(
          ".hero-features",
          {
            y: 20,
            opacity: 0,
            stagger: 0.15,
          },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-[#3B1547] px-6 py-10 pt-12 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="hero-title text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
          Build Stunning Hotel
        </h1>

        <h2 className="hero-subtitle text-[#6A4372] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mt-1">
          Websites That Fill Rooms
        </h2>

        <p className="hero-description text-[#EDE8EE] text-sm sm:text-base mt-5 max-w-xl mx-auto">
          The all-in-one SaaS platform for hotels, resorts &amp; boutique
          stays. No code. No designers. Just results that matter and drive
          growth.
        </p>

        <div className="hero-buttons flex flex-col gap-3 mt-8 max-w-xs mx-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
          <button className="bg-[#FF751F] hover:bg-orange-600 text-[#EDE8EE] text-sm font-medium px-6 py-3 rounded-lg w-full sm:w-auto border border-[#CC5E19]">
            Start 14-Days Free Trial
          </button>

          <Link
            href="/schedule-demo"
            className="bg-white border border-gray-200 text-[#160818] text-sm font-medium px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-gray-100"
          >
            Book a Demo
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mt-8 text-purple-200/60 text-xs sm:text-sm">
          <span className="hero-features flex items-center gap-1.5">
            <Gem size={14} />
            No commitment
          </span>

          <span className="hero-features flex items-center gap-1.5">
            <Gem size={14} />
            30-minute session
          </span>

          <span className="hero-features flex items-center gap-1.5">
            <Gem size={14} />
            Available Sun-Fri
          </span>
        </div>
      </div>
    </section>
  );
}