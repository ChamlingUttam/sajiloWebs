// import React from 'react'

// const TemplateHeader = () => {
//   return (
//     <div>
//            <div className="mb-10 flex flex-col gap-6 pt-8 text-left md:flex-row md:items-end md:justify-between">

//           {/* Heading */}
//           <div className='pt-5'>
//             <h2 className="text-2xl font-bold leading-tight text-[#EDE8EE] sm:text-3xl md:text-5xl">
//               Beautiful Templates Ready
//             </h2>

//             <h2 className="text-2xl font-bold leading-tight text-[#EDE8EE] sm:text-3xl md:text-5xl">
//               to Launch
//             </h2>
//           </div>

//           {/* Description + CTA */}
//           <div className="flex flex-col items-start gap-4 ">
//             <p className="max-w-md text-left text-xl  text-[#EDE8EE] ">
//               Choose from professionally designed templates tailored for every
//               type of hospitality property.
//             </p>

//             <button
//               className="
//                 rounded-lg
//                 border
//                 border-[#CC5E19]
//                 bg-[#FF751F]
//                 px-3
//                 py-1
//                 text-xs
//                 font-medium
//                 text-white
//                 shadow-lg
//                 hover:bg-orange-600
//                 sm:px-5
//                 sm:py-2
//                 sm:text-sm
//                 lg:px-6
//                 lg:py-3
//                 cursor-pointer
//               "
//             >
//               Start 14-Days Free Trial
//             </button>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default TemplateHeader















"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TemplateHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Heading comes from the left
      timeline.from(".template-heading", {
        x: -80,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Description + button come from the right
      timeline.from(
        ".template-content",
        {
          x: 80,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={headerRef}>
      <div className="mb-10 flex flex-col gap-6 pt-8 text-left md:flex-row md:items-end md:justify-between">

        {/* Heading */}
        <div className="template-heading pt-5">
          <h2 className="text-2xl font-bold leading-tight text-[#EDE8EE] sm:text-3xl md:text-5xl">
            Beautiful Templates Ready
          </h2>

          <h2 className="text-2xl font-bold leading-tight text-[#EDE8EE] sm:text-3xl md:text-5xl">
            to Launch
          </h2>
        </div>

        {/* Description + CTA */}
        <div className="template-content flex flex-col items-start gap-4">
          <p className="max-w-md text-left text-xl text-[#EDE8EE]">
            Choose from professionally designed templates tailored for every
            type of hospitality property.
          </p>

          <button
            className="
              cursor-pointer
              rounded-lg
              border
              border-[#CC5E19]
              bg-[#FF751F]
              px-3
              py-1
              text-xs
              font-medium
              text-white
              shadow-lg
              hover:bg-orange-600
              sm:px-5
              sm:py-2
              sm:text-sm
              lg:px-6
              lg:py-3
            "
          >
            Start 14-Days Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateHeader;