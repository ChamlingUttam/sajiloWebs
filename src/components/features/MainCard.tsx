

// import { CardOne } from "./CardOne";
// import { CardTwo } from "./CardTwo";

// export function MainCard() {
//   return (
//     <section className="w-full">
//       <div className="container ">
//         <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-10">
//           <CardOne />
//           <CardTwo />
//         </div>
//       </div>
//     </section>
//   );
// }










"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CardOne } from "./CardOne";
import { CardTwo } from "./CardTwo";

gsap.registerPlugin(ScrollTrigger);

export function MainCard() {
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

      tl.from(".card-one", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        ".card-two",
        {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden">
      <div className="container">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-10">
          <div className="card-one">
            <CardOne />
          </div>

          <div className="card-two">
            <CardTwo />
          </div>
        </div>
      </div>
    </section>
  );
}