
"use client"

import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { useBlog, useBlogById } from "@/src/hooks/blog"
import { Calendar, User } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { BlogCardSkeleton } from "../components/BlogCardSkeleton"

export default function BlogPage() {
  const params = useParams<{ slug: string }>()
  const slug = params.slug

  //   all blogs
  const {
    data: blogsData,
    isLoading: blogsLoading,
  } = useBlog()

  //  Find the blog using the slug from the URL
  const blog = blogsData?.find(
    (blog: { slug: string }) => blog.slug === slug
  )

  // Get the complete blog using its ID
  const {
    data: blogsDataId,
    isLoading: blogLoading,
  } = useBlogById(blog?.id ?? "")

  useEffect(() => {
    console.log("Blog detail:", blogsDataId)
  }, [blogsDataId])

  // Loading state
  if (blogsLoading || blogLoading) {
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

  // Blog not found
  if (!blog) {
    return (
      <div className="p-10 text-center">
        Blog not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white  w-full px-4 py-6 sm:px-6 lg:px-10">
      <Card className="mx-auto flex  w-full max-w-5xl flex-col items-center overflow-hidden py-0">

        {/* Image */}
        {blogsDataId?.image && (
          <div className="relative aspect-video w-full lg:max-w-4xl max-w-md rounded-2xl  overflow-hidden">
            <Image
              src={`https://sajilowebs.product-api.hamroyouthit.com${blogsDataId.image}`}
              alt={blogsDataId.title ?? "Blog image"}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 z-10 " />
          </div>
        )}

        <CardHeader className="flex w-full flex-col items-center px-4 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">

          {/* Author / Date */}
          <CardAction className="flex w-full flex-wrap items-center justify-center gap-6 sm:gap-10">

            {/* Author */}
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center border border-[#033773] text-[#491A53]">
                <User size={18} />
              </span>

              <span className="text-sm font-medium text-[#491A53] sm:text-base">
                By stock team
              </span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center border border-[#033773] text-[#491A53]">
                <Calendar size={18} />
              </span>

              <span className="text-sm font-medium text-[#491A53] sm:text-base">
                {blogsDataId?.created_at &&
                  new Date(
                    blogsDataId.created_at
                  ).toLocaleDateString()}
              </span>
            </div>

          </CardAction>

          {/* Title */}
          <CardTitle className="mt-6 w-full px-1 text-center">
            <h1 className="text-xl font-semibold leading-tight text-[#491A53] sm:text-2xl md:text-3xl lg:text-4xl">
              {blogsDataId?.title}
            </h1>
          </CardTitle>

          {/* Description */}
          <CardDescription className="w-full">
            <div
              className="
                w-full
                text-base
                leading-7
                text-[#491A53]
                sm:text-lg
                sm:leading-8
                lg:text-xl
                px-5
                lg:leading-10
              "
              dangerouslySetInnerHTML={{
                __html:
                  blogsDataId?.long_description ?? "",
              }}
            />
          </CardDescription>

        </CardHeader>
      </Card>
    </div>
  )
}
