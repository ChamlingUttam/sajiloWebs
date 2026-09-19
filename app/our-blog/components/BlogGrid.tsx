


// "use client"

// import Image from "next/image"
// import { Calendar, User } from "lucide-react"
// import { useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { useBlog } from "@/src/hooks/blog"
// import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
// import { Button } from "@/src/components/ui/button"

// export interface BlogCategory {
//   id: number
//   name: string
// }

// export interface Blog {
//   id: number
//   category: BlogCategory
//   title: string
//   short_description: string
//   long_description: string
//   image: string
//   Author: string | null
//   is_published: boolean
//   slug: string
//   created_at: string
// }

// export function BlogGrid() {
//   const { data: blogsData, isLoading } = useBlog()

//   const router = useRouter()

//   const handleReadMore = (slug: string) => {
//     router.push(`/OurBlog/${slug}`)
//   }

//   useEffect(() => {
//     console.log("BlogsData:", blogsData)
//   }, [blogsData])

//   if (isLoading) {
//     return (
//       <div className="px-4 sm:px-6 lg:px-8">
//         <p>Loading blogs...</p>
//       </div>
//     )
//   }

//   if (!blogsData || blogsData.length === 0) {
//     return (
//       <div className="px-4 sm:px-6 lg:px-8">
//         <p>No blogs found.</p>
//       </div>
//     )
//   }

//   const truncateWords = (text: string, wordLimit: number) => {
//   const words = text.split(" ");

//   return words.length > wordLimit
//     ? `${words.slice(0, wordLimit).join(" ")}...`
//     : text;
// };



//   return (
//     <div className="p-10 zpx-4 px-2 bg-white lg:px-18">
//       <div className="grid grid-cols-1 gap-6 lg:px-22 lg:grid-cols-3">
//         {blogsData.map((blog: Blog) => { 
//           const Icon2 = User
//           const Icon1 = Calendar

//           return (                      

//             <Card
//               key={blog.id}
//               className="relative mx-auto  w-full max-w-sm overflow-hidden pt-0"
//             >
//               {/* Image */}
//               {blog.image && (
//                 <div className="relative aspect-video w-full overflow-hidden">
//                   <Image
//                     src={`https://sajilowebs.product-api.hamroyouthit.com${blog.image}`}
//                     alt={blog.title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 1024px"
//                     className="object-cover"
//                     priority
//                   />

//                   {/* Image overlay */}
//                   <div className="absolute inset-0 z-10 " />
//                 </div>
//               )}

//               <CardHeader className="flex flex-col gap-4">
//                 {/* Icons */}
//                 <CardAction className="my-4 flex w-full items-center  justify-around ">
//                   <div className="flex items-center justify-center gap-2">
//                     <span className="h-5 w-5 border text-center text-[#491A53]">
//                       <Icon2 size={20} />
//                     </span>

//                     <span className="text-[#491A53]">
//                       By stock team
//                     </span>
//                   </div>

//                   <div className="flex items-center justify-center gap-2">
//                     <span className="h-5 w-5 border text-center text-[#491A53]">
//                       <Icon1 size={20} />
//                     </span>

//                     <span className="text-[#491A53]">
//                       {new Date(blog.created_at).toLocaleDateString()} 
//                     </span>
//                   </div>
//                 </CardAction>

//                 {/* Heading */}
//                 <CardTitle className="w-full flex items-center justify-center">
//                   <h1 className="  text-center font-Sans font-medium text-[#491A53]">
//                     {truncateWords(blog.title, 4)}
//                   </h1>
//                 </CardTitle>

//                 {/* Description */}
//                 <CardDescription className=" w-full  flex items-center justify-center">
//                   <p className="text-center  line-clamp-3 text-[#491A53]">
//                     {blog.short_description}
//                   </p>
//                 </CardDescription>
//               </CardHeader>

//               {/* Footer */}
//               <CardFooter>
//                 <Button
//                   onClick={() => handleReadMore(blog.slug)}
//                   className="bg-[#007BFF] p-4 text-white"
//                 >
//                   Read more
//                 </Button>
//               </CardFooter>
//             </Card>
//           )
//         })}
//       </div>
//     </div>
//   )

// }




















"use client";

import { useBlog } from "@/src/hooks/blog";


import { BlogCardSkeleton } from "./BlogCardSkeleton";
import { BlogCard } from "./BlogCard";

export interface BlogCategory {
  id: number;
  name: string;
}

export interface Blog {
  id: number;
  category: BlogCategory;
  title: string;
  short_description: string;
  long_description: string;
  image: string;
  Author: string | null;
  is_published: boolean;
  slug: string;
  created_at: string;
}

export function BlogGrid() {
  const { data: blogsData, isLoading } = useBlog();

  /* Loading */
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

  /* Empty */
  if (!blogsData || blogsData.length === 0) {
    return (
      <section className="bg-white px-4 py-10">
        <p className="text-center text-[#491A53]">
          No blogs found.
        </p>
      </section>
    );
  }

  /* Blogs */
  return (
    <section className="bg-white px-2 py-10 lg:px-18">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3  lg:px-22">
        {blogsData.map((blog: Blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </section>
  );
}