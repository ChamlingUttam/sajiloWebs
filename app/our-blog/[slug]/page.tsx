
// "use client"

// import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
// import { useBlog, useBlogById } from "@/src/hooks/blog"
// import { Calendar, User } from "lucide-react"
// import Image from "next/image"
// import { useParams } from "next/navigation"
// import { useEffect } from "react"
// import { BlogCardSkeleton } from "../components/BlogCardSkeleton"

// export default function BlogPage() {
//   const params = useParams<{ slug: string }>()
//   const slug = params.slug

//   //   all blogs
//   const {
//     data: blogsData,
//     isLoading: blogsLoading,
//   } = useBlog()

//   //  Find the blog using the slug from the URL
//   const blog = blogsData?.find(
//     (blog: { slug: string }) => blog.slug === slug
//   )

//   // Get the complete blog using its ID
//   const {
//     data: blogsDataId,
//     isLoading: blogLoading,
//   } = useBlogById(blog?.id ?? "")

//   useEffect(() => {
//     console.log("Blog detail:", blogsDataId)
//   }, [blogsDataId])

//   // Loading state
//   if (blogsLoading || blogLoading) {
//     return (
//         <section className="bg-white px-2 py-10 lg:px-18">
//           <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:px-22">
//             {Array.from({ length: 6 }).map((_, index) => (
//               <BlogCardSkeleton key={index} />
//             ))}
//           </div>
//         </section>
//       );
//   }

//   // Blog not found
//   if (!blog) {
//     return (
//       <div className="p-10 text-center">
//         Blog not found
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-white  w-full px-4 py-6 sm:px-6 lg:px-10">
//       <Card className="mx-auto flex  w-full max-w-5xl flex-col items-center overflow-hidden py-0">

//         {/* Image */}
//         {blogsDataId?.image && (
//           <div className="relative aspect-video w-full lg:max-w-4xl max-w-md rounded-2xl  overflow-hidden">
//             <Image
//               src={`https://sajilowebs.product-api.hamroyouthit.com${blogsDataId.image}`}
//               alt={blogsDataId.title ?? "Blog image"}
//               fill
//               sizes="(max-width: 768px) 100vw, 1024px"
//               className="object-cover"
//               priority
//             />

//             <div className="absolute inset-0 z-10 " />
//           </div>
//         )}

//         <CardHeader className="flex w-full flex-col items-center px-4 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">

//           {/* Author / Date */}
//           <CardAction className="flex w-full flex-wrap items-center justify-center gap-6 sm:gap-10">

//             {/* Author */}
//             <div className="flex items-center gap-2">
//               <span className="flex h-7 w-7 items-center justify-center border border-[#033773] text-[#491A53]">
//                 <User size={18} />
//               </span>

//               <span className="text-sm font-medium text-[#491A53] sm:text-base">
//                 By stock team
//               </span>
//             </div>

//             {/* Date */}
//             <div className="flex items-center gap-2">
//               <span className="flex h-7 w-7 items-center justify-center border border-[#033773] text-[#491A53]">
//                 <Calendar size={18} />
//               </span>

//               <span className="text-sm font-medium text-[#491A53] sm:text-base">
//                 {blogsDataId?.created_at &&
//                   new Date(
//                     blogsDataId.created_at
//                   ).toLocaleDateString()}
//               </span>
//             </div>

//           </CardAction>

//           {/* Title */}
//           <CardTitle className="mt-6 w-full px-1 text-center">
//             <h1 className="text-xl font-semibold leading-tight text-[#491A53] sm:text-2xl md:text-3xl lg:text-4xl">
//               {blogsDataId?.title}
//             </h1>
//           </CardTitle>

//           {/* Description */}
//           <CardDescription className="w-full">
//             <div
//               className="
//                 w-full
//                 text-base
//                 leading-7
//                 text-[#491A53]
//                 sm:text-lg
//                 sm:leading-8
//                 lg:text-xl
//                 px-5
//                 lg:leading-10
//               "
//               dangerouslySetInnerHTML={{
//                 __html:
//                   blogsDataId?.long_description ?? "",
//               }}
//             />
//           </CardDescription>

//         </CardHeader>
//       </Card>
//     </div>
//   )
// }


























"use client";

import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { useBlog, useBlogById } from "@/src/hooks/blog";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { BlogCardSkeleton } from "../components/BlogCardSkeleton";

export default function BlogPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  /* Get all blogs */
  const {
    data: blogsData,
    isLoading: blogsLoading,
  } = useBlog();

  /* Find blog using slug */
  const blog = blogsData?.find(
    (blog: { slug: string }) => blog.slug === slug
  );

  /* Get complete blog using ID */
  const {
    data: blogsDataId,
    isLoading: blogLoading,
  } = useBlogById(blog?.id ?? "");

  useEffect(() => {
    console.log("Blog detail:", blogsDataId);
  }, [blogsDataId]);

  /* Loading */
  if (blogsLoading || blogLoading) {
    return (
      <section className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* Blog not found */
  if (!blog) {
    return (
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 md:px-10">
          <h1 className="text-xl font-semibold text-[#491A53] sm:text-2xl">
            Blog not found
          </h1>
        </div>
      </section>
    );
  }

  const imageUrl = blogsDataId?.image
    ? `${process.env.NEXT_PUBLIC_SAJILO_URL}${blogsDataId.image}`
    : "/aaaa.png";

  return (
    <main className="w-full bg-white">
      <section className="w-full py-6 sm:py-8 md:py-10 lg:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
          <Card className="mx-auto flex w-full max-w-5xl flex-col overflow-hidden border border-gray-200 bg-white py-0 shadow-sm">
            {/* Blog Image */}
            <div className="w-full px-3 pt-3 sm:px-5 sm:pt-5">
              <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src={imageUrl}
                  alt={blogsDataId?.title ?? "Blog image"}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 768px) 90vw,
                    (max-width: 1280px) 80vw,
                    1024px
                  "
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <CardHeader className="flex w-full flex-col items-center px-4 py-6 sm:px-8 sm:py-8 md:px-10 lg:px-12 lg:py-10">
              {/* Author / Date */}
              <CardAction className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
                {/* Author */}
                <div className="flex min-w-0 items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-[#033773] text-[#491A53]">
                    <User size={18} />
                  </span>

                  <span className="text-sm font-medium text-[#491A53] sm:text-base">
                    By {blogsDataId?.Author || "Sajilo Team"}
                  </span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-[#033773] text-[#491A53]">
                    <Calendar size={18} />
                  </span>

                  <span className="text-sm font-medium text-[#491A53] sm:text-base">
                    {blogsDataId?.created_at
                      ? new Date(
                          blogsDataId.created_at
                        ).toLocaleDateString()
                      : ""}
                  </span>
                </div>
              </CardAction>

              {/* Title */}
              <CardTitle className="mt-6 w-full px-0 text-center sm:mt-8">
                <h1 className="text-xl font-semibold leading-tight text-[#491A53] sm:text-2xl md:text-3xl lg:text-4xl">
                  {blogsDataId?.title}
                </h1>
              </CardTitle>

              {/* Description / Article */}
              <CardDescription className="mt-5 w-full sm:mt-7">
                <article
                  className="
                    w-full
                    px-0
                    text-base
                    leading-7
                    text-[#491A53]
                    sm:text-lg
                    sm:leading-8
                    lg:text-xl
                    lg:leading-10
                  "
                  dangerouslySetInnerHTML={{
                    __html: blogsDataId?.long_description ?? "",
                  }}
                />
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </main>
  );
}
