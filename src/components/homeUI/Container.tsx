



// import Image from "next/image";

// export default function DashboardPreview() {
//   return (
//     <section className="w-full overflow-hidden bg-[#3B1547] pb-10">
//       <div className="container mx-auto w-full">
//         <div
//           className="rounded-2xl sm:rounded-3xl bg-cover bg-center bg-no-repeat p-2 sm:p-3"
//           style={{
//             backgroundImage: "url('/assets/homepage/purple-bg.jpg')",
//           }}
//         >
//           <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
//             <Image
//               src="/assets/homepage/dashboard.png"
//               alt="Sajilo Webs dashboard preview"
//               width={2280}
//               height={1400}
//               priority
//               className="h-auto w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }











"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DashboardPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Background container
      tl.from(".dashboard-bg", {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      });

      // Dashboard image
      tl.from(
        ".dashboard-image",
        {
          opacity: 0,
          y: 40,
          scale: 0.92,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.7"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#3B1547] pb-10"
    >
      <div className="container mx-auto w-full">
        <div
          className="dashboard-bg rounded-2xl sm:rounded-3xl bg-cover bg-center bg-no-repeat p-2 sm:p-3"
          style={{
            backgroundImage: "url('/assets/homepage/purple-bg.jpg')",
          }}
        >
          <div className="dashboard-image overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <Image
              src="/assets/homepage/dashboard.png"
              alt="Sajilo Webs dashboard preview"
              width={2280}
              height={1400}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}