import { User, CalendarDays } from "lucide-react";

type BlogCardProps = {
  title: string;
  excerpt: string;
  author: string;
  date: string;
};

export default function BlogCard({ title, excerpt, author, date }: BlogCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      <div className="aspect-[16/10] bg-[#EDE8EE]" />
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-[#491A53] text-base leading-snug">{title}</h3>
        <p className="text-[#6A4372] text-sm">{excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-[#491A53] border-t pt-3 mt-auto">
          <span className="flex items-center gap-1.5">
            <User size={12} /> {author}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays size={12} /> {date}
          </span>
        </div>
      </div>
    </div>
  );
}