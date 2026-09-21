"use client";

import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { usePrice } from "@/src/hooks/price";
import { BlogCardSkeleton } from "@/app/our-blog/components/BlogCardSkeleton";

type Price = {
  subscription: string;
  description: string;
  short_description: string | null;
  amount: string;
};

const PricingCard = () => {
  const { data: priceData, isLoading } = usePrice();

  if (isLoading) {
    return (
      <section className="w-full bg-white py-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#FCFAFC] py-12 sm:py-14 lg:py-16">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-5
          px-4
          sm:px-6
          md:grid-cols-3
          md:px-10
          lg:gap-8
        "
      >
        {priceData?.map((price: Price) => (
          <Card
            key={price.subscription}
            className="
              relative
              flex
              h-full
              min-w-0
              flex-col
              overflow-hidden
              rounded-2xl
              border
              bg-white
            "
          >
            {/* Header */}
            <CardHeader className="pb-1 pt-5">
              <CardTitle className="text-xl font-semibold text-[#491A53]">
                {price.subscription}
              </CardTitle>

              <CardDescription className="text-xs text-[#491A53]/70">
                {price.short_description}
              </CardDescription>
            </CardHeader>

            {/* Content */}
            <CardContent className="flex-1">
              {/* Price */}
              <div className="flex items-end">
                <span className="text-2xl font-bold text-[#491A53]">
                  Rs. {Number(price.amount).toLocaleString()}
                </span>

                <span className="mb-0.5 ml-1 text-xl text-[#491A53]/70">
                  /month
                </span>
              </div>

              {/* Features */}
              <ul className="mt-4 space-y-2">
                {price.description
                  .split("\n")
                  .map((item: string, index: number) => (
                    <li key={index}>
                      <div className="flex gap-2 text-sm text-[#491A53]">
                        <span className="shrink-0">
                          <Check size={20} />
                        </span>

                        <span>{item}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </CardContent>

            {/* Button */}
            <CardFooter className="bg-transparent pb-5 pt-2">
              <Button
                className="
                  h-9
                  w-full
                  cursor-pointer
                  bg-[#D3C8D6]
                  text-xs
                  font-medium
                  text-[#160818]
                  hover:bg-[#491A53]
                  hover:text-white
                "
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingCard;