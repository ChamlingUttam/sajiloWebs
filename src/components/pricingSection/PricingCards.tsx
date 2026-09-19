
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

type Price = {
  subscription: string;
  description: string;
  short_description: string | null;
  amount: string;
};

const PricingCard = () => {
  const { data: priceData } = usePrice();

  return (
    <section className="px-4 sm:px-6 lg:px-40 py-12 bg-[#FCFAFC]">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3 items-stretch">
        {priceData?.map((price: Price) => (
          <Card
            key={price.subscription}
            className="relative flex h-full flex-col rounded-2xl border w  bg-[#FFFFFF] overflow-hidden"
          >
            <CardHeader className="pb-1 pt-5">
              <CardTitle className="text-xl font-semibold text-[#491A53]">
                {price.subscription}
              </CardTitle>

              <CardDescription className="text-xs text-[#491A53]/70">
                {price.short_description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="flex items-end">
                <span className="text-2xl font-bold text-[#491A53]">
                  Rs. {Number(price.amount).toLocaleString()}
                </span>

                <span className="mb-0.5 ml-1 text-xl text-[#491A53]/70">
                  /month
                </span>
              </div>

              <ul className="mt-3 space-y-2">
                {price.description
                  .split("\n")
                  .map((item: string, index: number) => (
                    <li key={index} className="">
                      <div className="flex gap-2  text-[#491A53] text-sm  ">
                        <span>
                          <Check size={20} />
                        </span>
                        <span>{item}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </CardContent>

            <CardFooter className="pb-5 pt-2 bg-transparent">
              <Button className="h-8 w-full text-xs bg-[#D3C8D6] text-[#160818] font-medium">
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





