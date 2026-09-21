
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

  /* Empty */
  if (!blogsData || blogsData.length === 0) {
    return (
      <section className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
          <p className="text-center text-[#491A53]">
            No blogs found.
          </p>
        </div>
      </section>
    );
  }

  /* Blogs */
  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {blogsData.map((blog: Blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </section>
  );
}






// `use client`;

// import { useBlog } from "@/src/hooks/blog";


// import { BlogCardSkeleton } from "./BlogCardSkeleton";
// import { BlogCard } from "./BlogCard";

// export interface BlogCategory {
//   id: number;
//   name: string;
// }

// export interface Blog {
//   id: number;
//   category: BlogCategory;
//   title: string;
//   short_description: string;
//   long_description: string;
//   image: string;
//   Author: string | null;
//   is_published: boolean;
//   slug: string;
//   created_at: string;
// }

// export function BlogGrid() {
//   const { data: blogsData, isLoading } = useBlog();

//   /* Loading */
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

//   /* Empty */
//   if (!blogsData || blogsData.length === 0) {
//     return (
//       <section className="bg-white px-4 py-10">
//         <p className="text-center text-[#491A53]">
//           No blogs found.
//         </p>
//       </section>
//     );
//   }

//   /* Blogs */
//   return (
//     <section className="bg-white px-2 py-10 lg:px-18">
//       <div className="grid grid-cols-1 gap-6 lg:grid-cols-3  lg:px-22">
//         {blogsData.map((blog: Blog) => (
//           <BlogCard
//             key={blog.id}
//             blog={blog}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }