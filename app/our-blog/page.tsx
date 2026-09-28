



import BookDemoSection from "@/src/components/common/BookDemoSection";
import { BlogGrid } from "./components/BlogGrid";
import BlogHeader from "./components/BlogHeader";

export default function BlogSection() {
  return (
    <main className="w-full">
      <BlogHeader />
      <BlogGrid />
      <BookDemoSection/>
    </main>
  );
}
