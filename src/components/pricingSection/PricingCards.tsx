
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    description: "Suitable for small hotels, guest houses & homestays",
    price: 15000,
    features: [
      "Hotel website on your hotel website",
      "Free website setup",
      "Photo gallery (up to 40 images)",
      "Contact & inquiry form",
      "Google Maps integration",
      "Rooms listing with categories",
      "Booking from website",
      "Free hosting for 1 year",
      "Admin Dashboard",
      "Basic SEO setup",
      "Admin Dashboard",
    ],
  },
  {
    id: 2,
    name: "Standard",
    description: "Suitable for boutique hotels and resorts",
    price: 25000,
    features: [
      "Everything in Basic",
      "Custom domain (.com/.np) for 1 year",
      "Room showcase & details",
      "Online booking request form",
      "Advanced SEO setup",
      "Gallery images (up to 150 images)",
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
    features: [
      "Everything in Standard",
      "Hosted on own domain",
      "Custom Design",
      "Unlimited room listings",
      "Special offers & promotions section",
      "Blogs/News management",
      "Premium design customization",
      "Priority support",
    ],
  },
];

const PricingCard = () => {
  return (
    <section className="px-6 lg:px-15 py-12">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.id}
            className="flex h-full flex-col rounded-2xl border-[#e4dfe5] bg-white shadow-sm"
          >
            {/* Header */}
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold text-[#491A53]">
                {plan.name}
              </CardTitle>

              <CardDescription className="text-sm leading- text-[#491A53]">
                {plan.description}
              </CardDescription>
            </CardHeader>

            {/* Content */}
            <CardContent className="flex-1">
              {/* Price */}
              <div className="flex items-end">
                <span className="lg:text-3xl text-2xl  font-bold text-[#491A53]">
                  Rs. {plan.price.toLocaleString()}
                </span>

                <span className="mb-1 ml-1 text-md text-[#491A53]">
                  /month
                </span>
              </div>

              {/* Features */}
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-md text-[#491A53] "
                  >
                    <Check
                      size={11}
                      className="mt-1 shrink-0 text-[#491A53]"
                    />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            {/* Footer */}
            <CardFooter>
              <Button
                variant="outline"
                className="h-7 cursor-pointer w-full text-md text-[#491A53] bg-gray-400 font-normal"
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