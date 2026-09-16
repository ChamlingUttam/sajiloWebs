import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    description: "Suitable for small hotels, guest houses & homestays",
    price: 15000,
    popular: false,
    features: [
      "Hotel website on yourhotel.sajilows.com",
      "Free website setup, Mobile-friendly design",
      "Photo gallery (up to 40 images)",
      "Contact & inquiry form",
      "Google Maps integration",
      "Rooms listing with categories",
      "Booking from website",
      "Free hosting for 1 year",
      "Basic SEO setup",
      "Admin Dashboard",
    ],
  },
  {
    id: 2,
    name: "Standard",
    description: "Suitable for boutique hotels and resorts",
    price: 25000,
    popular: true,
    features: [
      "Everything in Basic",
      "Custom domain (.com/.np) for 1 year",
      "Room showcase & details",
      "Online booking request form",
      "Advanced SEO setup",
      "Gallery images upto (150 images)",
      "Income and expense tracking",
      "Multiple Themes Option",
      "Early access to new features",
      "24 hrs support",
    ],
  },
  {
    id: 3,
    name: "Premium",
    description: "Suitable for hotels, resorts & luxury properties",
    price: 35000,
    popular: false,
    features: [
      "Everything in Standard",
      "Hosted on own domain",
      "Custom Design",
      "Unlimited room listings",
      "Special offers & promotions section",
      "Blog/News management",
      "Premium design customization",
      "Priority support",
    ],
  },
];

const PricingCard = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-15 py-12 bg-white">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3 items-stretch">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative flex h-full flex-col rounded-2xl border overflow-hidden ${
              plan.popular
                ? "border-[#3E1647] bg-[#3E1647] text-white"
                : "border-[#e4dfe5] bg-white text-[#491A53]"
            }`}
          >
            {plan.popular && (
              <div className="bg-[#3E1647] border-b border-white/10 text-center text-[11px] font-medium py-2">
                Most Popular
              </div>
            )}

            <CardHeader className="pb-1 pt-5">
              <CardTitle
                className={`text-base font-semibold ${plan.popular ? "text-white" : "text-[#491A53]"}`}
              >
                {plan.name}
              </CardTitle>
              <CardDescription
                className={`text-xs ${plan.popular ? "text-white/75" : "text-[#491A53]/70"}`}
              >
                {plan.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="flex items-end">
                <span className={`text-2xl font-bold ${plan.popular ? "text-white" : "text-[#491A53]"}`}>
                  Rs. {plan.price.toLocaleString()}
                </span>
                <span className={`mb-0.5 ml-1 text-xs ${plan.popular ? "text-white/75" : "text-[#491A53]/70"}`}>
                  /month
                </span>
              </div>

              <ul className="mt-3 space-y-2">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-2 text-xs ${plan.popular ? "text-white/90" : "text-[#491A53]"}`}
                  >
                    <Check size={12} className="mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

           <CardFooter className="pb-5 pt-2 bg-transparent">
  <Button
    className={`h-8 w-full text-xs font-medium ${
      plan.popular
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