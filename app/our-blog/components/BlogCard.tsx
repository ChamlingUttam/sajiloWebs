
// "use client";

// import Image from "next/image";
// import { Calendar, User } from "lucide-react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// import {
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/src/components/ui/card";

// import type { Blog } from "./BlogGrid";

// const FALLBACK_IMAGE = "/aaaa.png";

// interface BlogCardProps {
//   blog: Blog;
// }

// export function BlogCard({ blog }: BlogCardProps) {
//   const router = useRouter();

//   const imageUrl = blog?.image
//     ? `${process.env.NEXT_PUBLIC_SAJILO_URL}${blog.image}`
//     : FALLBACK_IMAGE;

//   const [imageSrc, setImageSrc] = useState(imageUrl);

//   const handleCardClick = () => {
//     router.push(`/our-blog/${blog.slug}`);
//   };

//   return (
//     <Card
//       onClick={handleCardClick}
//       className="mx-auto w-full cursor-pointer overflow-hidden border border-gray-200 pt-0 transition-transform duration-300 hover:-translate-y-1"
//     >
//       {/* Blog Image */}
//       <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
//         <Image
//           src={imageSrc || FALLBACK_IMAGE}
//           alt={blog.title}
//           fill
//           sizes="(max-width: 768px) 100vw, 33vw"
//           className="object-cover transition-transform duration-300 hover:scale-105"
//           onError={() => setImageSrc(FALLBACK_IMAGE)}
//         />
//       </div>

//       {/* Content */}
//       <CardHeader className="gap-4 px-5 py-5 sm:px-6">
//         {/* Title */}
//         <CardTitle className="text-left font-medium text-[#491A53]">
//           {blog.title}
//         </CardTitle>

//         {/* Description */}
//         <CardDescription className="line-clamp-3 text-left text-[#491A53]">
//           {blog.short_description}
//         </CardDescription>

//         {/* Author + Date */}
//         <div className="flex w-full items-center justify-between gap-4 pt-2">
//           {/* Author */}
//           <div className="flex items-center gap-2">
//             <User
//               size={18}
//               className="shrink-0 text-[#491A53]"
//             />

//             <span className="text-sm text-[#491A53]">
//               By {blog.Author || "Sajilo Team"}
//             </span>
//           </div>

//           {/* Date */}
//           <div className="flex items-center gap-2">
//             <Calendar
//               size={18}
//               className="shrink-0 text-[#491A53]"
//             />

//             <span className="text-sm text-[#491A53]">
//               {new Date(blog.created_at).toLocaleDateString()}
//             </span>
//           </div>
//         </div>
//       </CardHeader>
//     </Card>
//   );
// }





"use client";

import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

import type { Blog } from "./BlogGrid";

const FALLBACK_IMAGE = "/aaaa.png";

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  const router = useRouter();

  const imageUrl = blog?.image
    ? `${process.env.NEXT_PUBLIC_SAJILO_URL}${blog.image}`
    : FALLBACK_IMAGE;

  const [imageSrc, setImageSrc] = useState(imageUrl);

  const handleCardClick = () => {
    router.push(`/our-blog/${blog.slug}`);
  };

  return (
    <Card
      onClick={handleCardClick}
      className="
        mx-auto
        w-full
        min-w-0
        cursor-pointer
        overflow-hidden
        border
        border-gray-200
        pt-0
        transition-transform
        duration-300
        hover:-translate-y-1
      "
    >
      {/* Blog Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        <Image
          src={imageSrc || FALLBACK_IMAGE}
          alt={blog.title}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 768px) 50vw,
            33vw
          "
          className="object-cover transition-transform duration-300 hover:scale-105"
          onError={() => setImageSrc(FALLBACK_IMAGE)}
        />
      </div>

      {/* Content */}
      <CardHeader className="gap-4 px-4 py-5 sm:px-5 sm:py-6">
        {/* Title */}
        <CardTitle className="text-left text-base font-medium leading-6 text-[#491A53] sm:text-lg">
          {blog.title}
        </CardTitle>

        {/* Description */}
        <CardDescription className="line-clamp-3 text-left text-sm leading-6 text-[#491A53] sm:text-base">
          {blog.short_description}
        </CardDescription>

        {/* Author + Date */}
        <div className="flex w-full flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          {/* Author */}
          <div className="flex min-w-0 items-center gap-2">
            <User
              size={18}
              className="shrink-0 text-[#491A53]"
            />

            <span className="truncate text-sm text-[#491A53]">
              By {blog.Author || "Sajilo Team"}
            </span>
          </div>

          {/* Date */}
          <div className="flex shrink-0 items-center gap-2">
            <Calendar
              size={18}
              className="shrink-0 text-[#491A53]"
            />

            <span className="text-sm text-[#491A53]">
              {new Date(blog.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
