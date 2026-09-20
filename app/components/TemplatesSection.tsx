// "use client"
// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";
// import { useTemplates } from "@/src/hooks/templates";
// import { BlogCardSkeleton } from "../our-blog/components/BlogCardSkeleton";
// const templates = Array.from({ length: 7 }, () => ({
//   title: "Business Hotel Theme",
// }));

// export default function TemplatesSection() {
//   const {data:templatesData,isLoading} = useTemplates()

//   console.log("template:",templatesData)
//   {/** if loading */}
//   if (isLoading) {
//       return (
//         <section className="bg-white px-2 py-10 lg:px-18">
//           <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:px-22">
//             {Array.from({ length: 6 }).map((_, index) => (
//               <BlogCardSkeleton key={index} />
//             ))}
//           </div>
//         </section>
//       );
//     }
  
//   return (
//     <section className="bg-[#3B1547] px-4 md:px-40 py-16 sm:py-20">
//       <div className="max-w-[1200px] mx-auto">
//         {/* Header */}
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 text-left">
//           {" "}
//           <div>
//             <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
//               Beautiful Templates Ready
//             </h2>
//             <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
//               to Launch
//             </h2>
//           </div>
//           <div className="flex flex-col items-start gap-4">
//             <p className="text-purple-200/70 text-sm sm:text-base max-w-md text-left">
//               Choose from professionally designed templates tailored for every
//               type of hospitality property.
//             </p>

//             <button className="bg-[#FF751F] hover:bg-orange-600 text-white text-sm font-medium px-6 py-3 rounded-lg whitespace-nowrap border border-[#CC5E19] shadow-lg">
//               Start 14-Days Free Trial
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {templatesData.map((tpl) => (
//             <div key={tpl.id} className="flex flex-col gap-3">
//               <div
//                 className="relative aspect-[4/3.2] rounded-xl overflow-hidden bg-cover bg-center p-2 sm:p-3 flex items-center justify-center"
//                 style={{
//                   backgroundImage: "url('/assets/homepage/purple-bg(3).jpg')",
//                 }}
//               >
//                 <Image
//                   src="tpl.image"
//                   alt={tpl.title}
//                   width={500}
//                   height={400}
//                   className="w-full h-auto rounded-lg shadow-xl"
//                 />
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-white text-sm font-medium">
//                   {tpl.name}
//                 </span>
//                 <button className="w-7 h-7 rounded-[10px] bg-[#6A4372] flex items-center justify-center ">
//                   <ArrowUpRight size={14} className="text-[#491A53" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








// "use client";

// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";
// import { useTemplates } from "@/src/hooks/templates";
// import { BlogCardSkeleton } from "../our-blog/components/BlogCardSkeleton";
// import {
//   Card,
//   CardContent,
// } from "@/src/components/ui/card";
// import { useEffect } from "react";

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

// export default function TemplatesSection() {
//   const { data: templatesData = [], isLoading } = useTemplates();

//   useEffect(()=>{
// console.log("template",templatesData)
//   },[templatesData])

//   if (isLoading) {
//     return (
//       <section className="bg-white px-2 py-10 lg:px-18">
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:px-22">
//           {Array.from({ length: 6 }).map((_, index) => (
//             <BlogCardSkeleton key={index} />
//           ))}
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="bg-[#3B1547] px-4 py-16 sm:py-20 md:px-40">
//       <div className="mx-auto max-w-[1200px]">

//         {/* Header */}
//         <div className="mb-10 flex flex-col gap-6 text-left md:flex-row md:items-end md:justify-between">
//           <div>
//             <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
//               Beautiful Templates Ready
//             </h2>

//             <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
//               to Launch
//             </h2>
//           </div>

//           <div className="flex flex-col items-start gap-4">
//             <p className="max-w-md text-left text-sm text-purple-200/70 sm:text-base">
//               Choose from professionally designed templates tailored for every
//               type of hospitality property.
//             </p>

//             <button className="rounded-lg border border-[#CC5E19] bg-[#FF751F] px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-orange-600">
//               Start 14-Days Free Trial
//             </button>
//           </div>
//         </div>

//         {/* Templates */}
//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {templatesData?.map((tpl) => (
//             <Card
//               key={tpl?.id}
//               className="border-0 bg-transparent cursor-pointer shadow-none"
//             >
//               <CardContent className="p-0">

//                 {/* Image Card */}
//                 <div
//                   className="relative flex aspect-[4/3.2] items-center justify-center overflow-hidden rounded-xl bg-cover bg-center p-2 sm:p-3"
//                   style={{
//                     backgroundImage:
//                       "url('/assets/homepage/purple-bg(3).jpg')",
//                   }}
//                 >
//                   <Image
//                     src={tpl?.image}
//                     alt={tpl?.name}
//                     width={500}
//                     height={400}
//                     className="h-auto w-full rounded-lg object-fit shadow-xl"
//                   />
//                 </div>

//                 {/* Title + Button */}
//                 <div className="mt-3 flex items-center justify-between">
//                   <span className="text-md font-bold text-[#EDE8EE]">
//                     {tpl?.name}
//                   </span>

//                   <button className="flex h-7 w-7 items-center justify-center rounded-[10px] bg-[#6A4372]">
//                     <ArrowUpRight
//                       size={14}
//                       className="text-white"
//                     />
//                   </button>
//                 </div>

//               </CardContent>
//             </Card>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }















"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowUp, ArrowDown } from "lucide-react";
import { useTemplates } from "@/src/hooks/templates";
import { BlogCardSkeleton } from "../our-blog/components/BlogCardSkeleton";
import { Card, CardContent } from "@/src/components/ui/card";
import { useRef, useState } from "react";

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

  if (isLoading) {
    return (
      <section className="bg-white px-2 py-10 lg:px-18">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:px-22">
          {Array.from({ length: 6 }).map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
      </section>
    );
  }

  const visibleTemplates = templatesData.slice(0, visibleCount);
  const allShown = visibleCount >= templatesData.length;
  const hasMore = templatesData.length > PAGE_SIZE;

  const handleClick = () => {
    if (allShown) {
      // Move to top of the section, then collapse back to first 6
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      setVisibleCount(PAGE_SIZE);
    } else {
      setVisibleCount((prev) => prev + PAGE_SIZE);
    }
  };

  return (
    <section
      id="templates"
      ref={sectionRef}
      className="scroll-mt-20 bg-[#3B1547] px-4 py-16 sm:py-20 md:px-40"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 text-left md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
              Beautiful Templates Ready
            </h2>
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
              to Launch
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4">
            <p className="max-w-md text-left text-sm text-purple-200/70 sm:text-base">
              Choose from professionally designed templates tailored for every
              type of hospitality property.
            </p>

            <button className="rounded-lg border border-[#CC5E19] bg-[#FF751F] lg:px-6 lg:py-3 px-4 py-2  text-sm font-medium text-white shadow-lg hover:bg-orange-600">
              Start 14-Days Free Trial
            </button>
          </div>
        </div>

        {/* Templates */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTemplates?.map((tpl) => (
            <Card
              key={tpl?.id}
              className="cursor-pointer border-0 bg-transparent shadow-none"
            >
              <CardContent className="p-0">
                {/* Image Card */}
                <div
                  className="relative flex aspect-[4/3.2] items-center justify-center overflow-hidden rounded-xl bg-cover bg-center p-2 sm:p-3"
                  style={{
                    backgroundImage: "url('/assets/homepage/purple-bg(3).jpg')",
                  }}
                >
                  {tpl?.image && (
                    <Image
                      src={tpl?.image}
                      alt={tpl?.name}
                      width={500}
                      height={400}
                      className="h-auto w-full rounded-lg object-cover shadow-xl"
                    />
                  )}
                </div>

                {/* Title + Button */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-base font-bold text-[#EDE8EE]">
                    {tpl?.name}
                  </span>

                  {tpl?.demo_url ? (
                    
                     <a href={tpl?.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${tpl?.name} demo`}
                      className="flex h-7 w-7 items-center justify-center rounded-[10px] bg-[#6A4372]"
                    >
                      <ArrowUpRight size={14} className="text-white" />
                    </a>
                  ) : (
                    <button
                      disabled
                      aria-label="No demo available"
                      className="flex h-7 w-7 items-center justify-center rounded-[10px] bg-[#6A4372] opacity-50"
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
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleClick}
              className="inline-flex items-center gap-2 rounded-lg border border-[#CC5E19] bg-[#FF751F] px-6 py-2 text-sm font-medium text-[#EDE8EE] shadow-lg transition-colors hover:bg-orange-600"
            >
              {allShown ? (
                <>
                  Move to top <ArrowUp size={16} />
                </>
              ) : (
                <>
                  Read More <ArrowDown size ={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}