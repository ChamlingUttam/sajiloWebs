
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
      <section className="w-full bg-white py-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const visibleTemplates = templatesData.slice(0, visibleCount);
  const allShown = visibleCount >= templatesData.length;
  const hasMore = templatesData.length > PAGE_SIZE;

  const handleClick = () => {
    if (allShown) {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setVisibleCount(PAGE_SIZE);
    } else {
      setVisibleCount((prev) => prev + PAGE_SIZE);
    }
  };

  return (
    <section
      id="templates"
      ref={sectionRef}
      className="scroll-mt-20 w-full bg-[#3B1547] py-16 sm:py-20"
    >
      {/* Same container as Navbar and RoomManagement */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 text-left md:flex-row md:items-end md:justify-between">
          {/* Heading */}
          <div>
            <h2 className="text-2xl font-bold leading-tight text-[#EDE8EE] sm:text-3xl md:text-5xl">
              Beautiful Templates Ready
            </h2>

            <h2 className="text-2xl font-bold leading-tight text-[#EDE8EE] sm:text-3xl md:text-5xl">
              to Launch
            </h2>
          </div>

          {/* Description + CTA */}
          <div className="flex flex-col items-start gap-4">
            <p className="max-w-md text-left text-sm text-purple-200/70 sm:text-base">
              Choose from professionally designed templates tailored for every
              type of hospitality property.
            </p>

            <button
              className="
                rounded-lg
                border
                border-[#CC5E19]
                bg-[#FF751F]
                px-3
                py-1
                text-xs
                font-medium
                text-white
                shadow-lg
                hover:bg-orange-600
                sm:px-5
                sm:py-2
                sm:text-sm
                lg:px-6
                lg:py-3
                cursor-pointer
              "
            >
              Start 14-Days Free Trial
            </button>
          </div>
        </div>

        {/* Templates */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visibleTemplates?.map((tpl) => (
            <Card
              key={tpl?.id}
              className="w-full min-w-0 cursor-pointer border-0 bg-transparent shadow-none"
            >
              <CardContent className="p-0">
                {/* Image Card */}
                <div
                  className="
                    relative
                    flex
                    aspect-[4/3.2]
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    bg-cover
                    bg-center
                    p-2
                    sm:p-3
                  "
                  style={{
                    backgroundImage:
                      "url('/assets/homepage/purple-bg(3).jpg')",
                  }}
                >
                  {tpl?.image && (
                    <Image
                      src={tpl?.image}
                      alt={tpl?.name}
                      width={500}
                      height={400}
                      className="h-auto w-full rounded-lg object-cover shadow-xl"
                      sizes="
                        (max-width: 640px) 90vw,
                        (max-width: 1024px) 45vw,
                        30vw
                      "
                    />
                  )}
                </div>

                {/* Title + Button */}
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="min-w-0 truncate text-base font-bold text-[#EDE8EE]">
                    {tpl?.name}
                  </span>

                  {tpl?.demo_url ? (
                    <a
                      href={tpl?.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${tpl?.name} demo`}
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-[10px]
                        bg-[#6A4372]
                      "
                    >
                      <ArrowUpRight size={14} className="text-white" />
                    </a>
                  ) : (
                    <button
                      disabled
                      aria-label="No demo available"
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-[10px]
                        bg-[#6A4372]
                        opacity-50
                      "
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
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-[#CC5E19]
                bg-[#FF751F]
                px-4
                py-2
                text-sm
                font-medium
                text-[#EDE8EE]
                shadow-lg
                transition-colors
                hover:bg-orange-600
                sm:px-6
              "
            >
              {allShown ? (
                <>
                  Move to top
                  <ArrowUp size={16} />
                </>
              ) : (
                <>
                  Read More
                  <ArrowDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
