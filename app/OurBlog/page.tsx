import { BlogGrid } from "./components/BlogGrid";
import BlogHeader from "./components/BlogHeader";

export default function BlogSection() {
  return (
    <section>
      <BlogHeader />
      <BlogGrid />
    </section>
  );
}