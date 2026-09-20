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

// const FALLBACK_IMAGE = "/assets/blog/blog-fallback.jpg";

// interface BlogCardProps {
//   blog: Blog;
// }

// export function BlogCard({ blog }: BlogCardProps) {
//   const router = useRouter();

//   const imageUrl = blog.image
//     ? `https://sajilowebs.product-api.hamroyouthit.com${blog.image}`
//     : FALLBACK_IMAGE;

//   const [imageSrc, setImageSrc] = useState(imageUrl);

//   const handleCardClick = () => {
//     router.push(`/our-blog/${blog.slug}`);
//   };

//   return (
//     <Card
//       onClick={handleCardClick}
//       className="mx-auto w-full  cursor-pointer border border-gray-200  overflow-hidden pt-0 transition-transform duration-300 hover:-translate-y-1"
//     >
//       {/* Blog Image */}
//       <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
//         <Image
//           src={imageSrc}
//           alt={blog.title}
//           fill
//           sizes="(max-width: 768px) 100vw, 33vw"
//           className="object-cover transition-transform duration-300 hover:scale-105"
//           onError={() => setImageSrc(FALLBACK_IMAGE)}
//         />
//       </div>

//       <CardHeader className="gap-4">
//         {/* Title */}
//         <CardTitle className="text-center font-medium text-[#491A53]">
//           {blog.title}
//         </CardTitle>

//         {/* Description */}
//         <CardDescription className="line-clamp-3 text-center text-[#491A53]">
//           {blog.short_description}
//         </CardDescription>

//         {/* Author + Date */}
//         <div className="flex w-full items-center justify-between pt-2">
//           <div className="flex items-center gap-2">
//             <User
//               size={18}
//               className="text-[#491A53]"
//             />

//             <span className="text-sm text-[#491A53]">
//               By {blog.Author || "Stock Team"}
//             </span>
//           </div>

//           <div className="flex items-center gap-2">
//             <Calendar
//               size={18}
//               className="text-[#491A53]"
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

  const imageUrl = blog.image
    ? `${process.env.NEXT_PUBLIC_SAJILO_URL}${blog.image}`
    : FALLBACK_IMAGE;

  const [imageSrc, setImageSrc] = useState(imageUrl);

  const handleCardClick = () => {
    router.push(`/our-blog/${blog.slug}`);
  };

  return (
    <Card
      onClick={handleCardClick}
      className="mx-auto w-full cursor-pointer overflow-hidden border border-gray-200 pt-0 transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Blog Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        <Image
          src={imageSrc}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
          onError={() => setImageSrc(FALLBACK_IMAGE)}
        />
      </div>

      {/* Content */}
      <CardHeader className="gap-4 px-5 py-5 sm:px-6">
        {/* Title */}
        <CardTitle className="text-left font-medium text-[#491A53]">
          {blog.title}
        </CardTitle>

        {/* Description */}
        <CardDescription className="line-clamp-3 text-left text-[#491A53]">
          {blog.short_description}
        </CardDescription>

        {/* Author + Date */}
        <div className="flex w-full items-center justify-between gap-4 pt-2">
          {/* Author */}
          <div className="flex items-center gap-2">
            <User
              size={18}
              className="shrink-0 text-[#491A53]"
            />

            <span className="text-sm text-[#491A53]">
              By {blog.Author || "Sajilo Team"}
            </span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2">
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
