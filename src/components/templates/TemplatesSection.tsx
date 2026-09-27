// "use client";

// import Image from "next/image";
// import { ArrowUpRight, ArrowUp, ArrowDown } from "lucide-react";
// import { useTemplates } from "@/src/hooks/templates";
// import { BlogCardSkeleton } from "../../../app/our-blog/components/BlogCardSkeleton";
// import { Card, CardContent } from "@/src/components/ui/card";
// import { useRef, useState } from "react";

// export type Template = {
//   id: number;
//   created_at: string;
//   updated_at: string;
//   name: string;
//   content: string;
//   image: string;
//   unique_identifier: string;
//   slug: string;
//   version: string;
//   demo_url: string | null;
// };

// const PAGE_SIZE = 6;

// export default function TemplatesSection() {
//   const { data: templatesData = [], isLoading } = useTemplates();

//   const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
//   const sectionRef = useRef<HTMLElement>(null);

//   if (isLoading) {
//     return (
//       <section className="w-full bg-[#3B1547] py-10">
//         <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {Array.from({ length: 6 }).map((_, index) => (
//               <BlogCardSkeleton key={index} />
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   const visibleTemplates = templatesData.slice(0, visibleCount);
//   const allShown = visibleCount >= templatesData.length;
//   const hasMore = templatesData.length > PAGE_SIZE;

//   const handleClick = () => {
//     if (allShown) {
//       sectionRef.current?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });

//       setVisibleCount(PAGE_SIZE);
//     } else {
//       setVisibleCount((prev) => prev + PAGE_SIZE);
//     }
//   };

//   return (
//     <section
//       id="templates"
//       ref={sectionRef}
//       className="scroll-mt-20 w-full bg-[#3B1547] "
//     >
//       {/* Same container as Navbar and RoomManagement */}
//       <div className="mx-auto w-full ">

       

//         {/* Templates */}
//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
//           {visibleTemplates?.map((tpl) => (
//             <Card
//               key={tpl?.id}
//               className="w-full  cursor-pointer border-0 bg-transparent shadow-none"
//             >
//               <CardContent className="p-0">

//                 {/* Image Card */}
//                 <div
//                   className="
//                     relative
//                     flex
//                     aspect-[4/3.2]
//                     w-full
//                     items-center
//                     justify-center
//                     overflow-hidden
//                     rounded-xl
//                     bg-cover
//                     bg-center
//                     p-2
//                     sm:p-3
//                   "
//                   style={{
//                     backgroundImage:
//                       "url('/assets/homepage/purple-bg(3).jpg')",
//                   }}
//                 >
//                   {tpl?.image && (
//                     <Image
//                       src={tpl?.image}
//                       alt={tpl?.name}
//                       width={500}
//                       height={400}
//                       className="h-auto w-full rounded-lg object-cover shadow-xl"
//                       sizes="
//                         (max-width: 640px) 90vw,
//                         (max-width: 1024px) 45vw,
//                         30vw
//                       "
//                     />
//                   )}
//                 </div>

//                 {/* Title + Button */}
//                 <div className="mt-3 flex items-center justify-between gap-3">
//                   <span className="min-w-0 truncate text-base font-bold text-[#EDE8EE]">
//                     {tpl?.name}
//                   </span>

//                   {tpl?.demo_url ? (
//                     <a
//                       href={tpl?.demo_url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={`View ${tpl?.name} demo`}
//                       className="
//                         flex
//                         h-7
//                         w-7
//                         shrink-0
//                         items-center
//                         justify-center
//                         rounded-[10px]
//                         bg-[#6A4372]
//                       "
//                     >
//                       <ArrowUpRight size={14} className="text-white" />
//                     </a>
//                   ) : (
//                     <button
//                       disabled
//                       aria-label="No demo available"
//                       className="
//                         flex
//                         h-7
//                         w-7
//                         shrink-0
//                         items-center
//                         justify-center
//                         rounded-[10px]
//                         bg-[#6A4372]
//                         opacity-50
//                       "
//                     >
//                       <ArrowUpRight size={14} className="text-white" />
//                     </button>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Read more / Move to top */}
//         {hasMore && (
//           <div className="my-10 flex justify-center">
//             <button
//               onClick={handleClick}
//               className="
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-lg
//                 border
//                 border-[#CC5E19]
//                 bg-[#FF751F]
//                 px-4
//                 py-2
//                 text-sm
//                 font-medium
//                 text-[#EDE8EE]
//                 shadow-lg
//                 transition-colors
//                 hover:bg-orange-600
//                 sm:px-6
//                 cursor-pointer
//               "
//             >
//               {allShown ? (
//                 <>
//                   <span className="cursor-pointer">Move To Top</span>
//                   <ArrowUp size={16} />
//                 </>
//               ) : (
//                 <>
//                   <span className="cursor-pointer">Read More</span>
//                   <ArrowDown size={16} />
//                 </>
//               )}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }











"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowUp, ArrowDown } from "lucide-react";
import { useTemplates } from "@/src/hooks/templates";
import { BlogCardSkeleton } from "../../../app/our-blog/components/BlogCardSkeleton";
import { Card, CardContent } from "@/src/components/ui/card";
import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type Template = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  content: string;
  image: string;
  unique_identifier: string;
  slug: string;
  version: string;
  demo_url: string | null;
};

const PAGE_SIZE = 6;

export default function TemplatesSection() {
  const { data: templatesData = [], isLoading } = useTemplates();

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const buttonIconRef = useRef<HTMLSpanElement>(null);

  const visibleTemplates = templatesData.slice(0, visibleCount);
  const allShown = visibleCount >= templatesData.length;
  const hasMore = templatesData.length > PAGE_SIZE;

  // Animate cards in whenever the visible set changes (initial load + "Read More")
  useLayoutEffect(() => {
    if (isLoading || !gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(
        gridRef.current!.querySelectorAll("[data-template-card]")
      );

      // Only animate cards that haven't been animated yet (newly revealed ones)
      const freshCards = cards.filter(
        (card) => card.getAttribute("data-animated") !== "true"
      );

      if (freshCards.length === 0) return;

      gsap.set(freshCards, { opacity: 0, y: 40 });

      ScrollTrigger.batch(freshCards, {
        start: "top 85%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.12,
            onComplete: () => {
              batch.forEach((el) => el.setAttribute("data-animated", "true"));
            },
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isLoading, visibleCount, templatesData.length]);

  const handleClick = () => {
    if (allShown) {
      // Animate the icon flip, then scroll up and collapse
      gsap.to(buttonIconRef.current, {
        rotate: 180,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          setVisibleCount(PAGE_SIZE);
          gsap.set(buttonIconRef.current, { rotate: 0 });
        },
      });
    } else {
      gsap.fromTo(
        buttonIconRef.current,
        { y: -4, opacity: 0.5 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      setVisibleCount((prev) => prev + PAGE_SIZE);
    }
  };

  if (isLoading) {
    return (
      <section className="w-full bg-[#3B1547] py-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="templates"
      ref={sectionRef}
      className="scroll-mt-20 w-full bg-[#3B1547] "
    >
      {/* Same container as Navbar and RoomManagement */}
      <div className="mx-auto w-full ">
        {/* Templates */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {visibleTemplates?.map((tpl) => (
            <Card
              key={tpl?.id}
              data-template-card
              className="w-full cursor-pointer border-0 bg-transparent shadow-none"
            >
              <CardContent className="p-0">
                {/* Image Card */}
                <div
                  className="
                    relative
                    flex
                    aspect-[4/3.2]
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    bg-cover
                    bg-center
                    p-2
                    sm:p-3
                  "
                  style={{
                    backgroundImage:
                      "url('/assets/homepage/purple-bg(3).jpg')",
                  }}
                >
                  {tpl?.image && (
                    <Image
                      src={tpl?.image}
                      alt={tpl?.name}
                      width={500}
                      height={400}
                      className="h-auto w-full rounded-lg object-cover shadow-xl"
                      sizes="
                        (max-width: 640px) 90vw,
                        (max-width: 1024px) 45vw,
                        30vw
                      "
                    />
                  )}
                </div>

                {/* Title + Button */}
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="min-w-0 truncate text-base font-bold text-[#EDE8EE]">
                    {tpl?.name}
                  </span>

                  {tpl?.demo_url ? (
                    <a
                      href={tpl?.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${tpl?.name} demo`}
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-[10px]
                        bg-[#6A4372]
                      "
                    >
                      <ArrowUpRight size={14} className="text-white" />
                    </a>
                  ) : (
                    <button
                      disabled
                      aria-label="No demo available"
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-[10px]
                        bg-[#6A4372]
                        opacity-50
                      "
                    >
                      <ArrowUpRight size={14} className="text-white" />
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Read more / Move to top */}
        {hasMore && (
          <div className="my-10 flex justify-center">
            <button
              onClick={handleClick}
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-[#CC5E19]
                bg-[#FF751F]
                px-4
                py-2
                text-sm
                font-medium
                text-[#EDE8EE]
                shadow-lg
                transition-colors
                hover:bg-orange-600
                sm:px-6
                cursor-pointer
              "
            >
              {allShown ? (
                <>
                  <span className="cursor-pointer">Move To Top</span>
                  <span ref={buttonIconRef} className="inline-flex">
                    <ArrowUp size={16} />
                  </span>
                </>
              ) : (
                <>
                  <span className="cursor-pointer">Read More</span>
                  <span ref={buttonIconRef} className="inline-flex">
                    <ArrowDown size={16} />
                  </span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}