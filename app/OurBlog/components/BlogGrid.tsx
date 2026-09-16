import { useBlog } from "@/src/hooks/blog";
import BlogCard from "./BlogCard";
import { useEffect } from "react";

const posts = Array.from({ length: 6 }, () => ({
  title: "Why Every Hotel Needs a Professional Website in 2026?",
  excerpt: "In today's digital world, having a professional website for hotel businesses is no longer optional—it's essential.",
  author: "Aakash Chaudhary",
  date: "Aug 18, 2026",
}));

export default function BlogGrid() {

  const {data:blogsData,isLoading:blogsLoading} = useBlog()

  useEffect(()=>{
    console.log(blogsData)
  },[blogsData])
  return (
    <div className="bg-white px-4 md:px-10 py-14 sm:py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <BlogCard key={i} {...post} />
        ))}
      </div>
    </div>
  );
}