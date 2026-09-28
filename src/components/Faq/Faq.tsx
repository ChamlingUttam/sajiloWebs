












// import LeftFaq from "./LeftFaq";
// import RightFaq from "./RightFaq";

// const Faq = () => {
//   return (
//     <section className="w-full bg-[#F3F1F7] py-16 text-[#3E1647] sm:py-20">
//       <div
//         className="
//           mx-auto
//           grid
//           w-full
//           container
//           grid-cols-1
//           gap-10
//           sm:gap-12
//           lg:grid-cols-2
//           lg:gap-16
//         "
//       >
//         {/* LEFT */}
//         <LeftFaq />

//         {/* RIGHT */}
//         <RightFaq />
//       </div>
//     </section>
//   );
// };

// export default Faq;












"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LeftFaq from "./LeftFaq";
import RightFaq from "./RightFaq";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        rightRef.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F3F1F7] py-16 text-[#3E1647] sm:py-20"
    >
      <div
        className="
          mx-auto
          grid
          w-full
          container
          grid-cols-1
          gap-10
          sm:gap-12
          lg:grid-cols-2
          lg:gap-16
        "
      >
        {/* LEFT */}
        <div ref={leftRef}>
          <LeftFaq />
        </div>

        {/* RIGHT */}
        <div ref={rightRef}>
          <RightFaq />
        </div>
      </div>
    </section>
  );
};

export default Faq;