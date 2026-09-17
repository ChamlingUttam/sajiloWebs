"use client"
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { usePrice } from "@/src/hooks/price";


const PricingCard = () => {

  const {data:priceData} = usePrice()

 
  return (
    <section className="px-4 sm:px-6 lg:px-15 py-12 bg-white">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3 items-stretch">
        {priceData?.map((price) => (
          <Card
            key={price.subscription}
            className={`relative flex h-full flex-col rounded-2xl border overflow-hidden ${
              price.popular
                ? "border-[#3E1647] bg-[#3E1647] text-white"
                : "border-[#e4dfe5] bg-white text-[#491A53]"
            }`}
          >
            {price.popular && (
              <div className="bg-[#3E1647] border-b border-white/10 text-center text-[11px] font-medium py-2">
                Most Popular
              </div>
            )}

            <CardHeader className="pb-1 pt-5">
              <CardTitle
                className={`text-xl font-semibold ${price.popular ? "text-white" : "text-[#491A53]"}`}
              >
                {price.subscription}
              </CardTitle>
              <CardDescription
                className={`text-xs ${price.popular ? "text-white/75" : "text-[#491A53]/70"}`}
              >
                {price.short_description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="flex items-end">
                <span className={`text-2xl font-bold ${price.popular ? "text-white" : "text-[#491A53]"}`}>
                  Rs. {price.amount.toLocaleString()}
                </span>
                <span className={`mb-0.5 ml-1 text-xl ${price.popular ? "text-white/75" : "text-[#491A53]/70"}`}>
                  /month
                </span>
              </div>

             

              <ul className="mt-3 space-y-2">
                 {price.description.split("\n").map((item, index) => (
        <li key={index}>
          <div className="flex gap-2 items-center">
            <span><Check size={20}/></span>

          <span>{item}</span>
          </div>
          </li>
      ))}

              </ul>
            </CardContent>

           <CardFooter className="pb-5 pt-2 bg-transparent">
  <Button
    className={`h-8 w-full text-xs font-medium ${
      price.popular
        ? "bg-[#FF751F] text-white hover:bg-[#e15e0d]"
        : "bg-white border border-[#491A53]/30 text-[#491A53] hover:bg-[#491A53]/5"
    }`}
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


