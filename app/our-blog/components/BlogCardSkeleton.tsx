import { Card, CardFooter, CardHeader } from "@/src/components/ui/card";

export function BlogCardSkeleton() {
  return (
    <Card className="mx-auto w-full max-w-sm overflow-hidden pt-0">
      {/* Image */}
      <div className="aspect-video w-full animate-pulse bg-gray-200" />

      <CardHeader className="flex flex-col gap-4">
        {/* Author + Date */}
        <div className="my-4 flex w-full items-center justify-around">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-5 w-4/5 animate-pulse rounded bg-gray-200" />
          <div className="h-5 w-3/5 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Description */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
        </div>
      </CardHeader>

      {/* Button */}
      <CardFooter>
        <div className="h-10 w-28 animate-pulse rounded bg-gray-200" />
      </CardFooter>
    </Card>
  );
}