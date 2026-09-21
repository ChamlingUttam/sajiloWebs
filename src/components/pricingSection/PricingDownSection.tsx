import {
  Pencil,
  XCircle,
  Settings,
  ShieldCheck,
  HandCoins,
  Headset,
  type LucideIcon,
} from "lucide-react";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Reason = {
  id: string | number;
  title: string;
  description: string;
  icon: LucideIcon;
};

const reasons: Reason[] = [
  {
    id: 1,
    icon: Pencil,
    title: "Basic SEO setup",
    description:
      "Get started with complete pricing transparency, with no surprise charges or upfront setup fees.",
  },
  {
    id: 2,
    icon: XCircle,
    title: "Cancel Anytime",
    description:
      "Stay in control with the freedom to cancel your subscription whenever you choose.",
  },
  {
    id: 3,
    icon: Settings,
    title: "Regular Feature Updates",
    description:
      "Enjoy continuous improvements, new features, and updates designed to enhance your experience.",
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Secure Data Handling",
    description:
      "Your data is protected with secure systems and responsible data-handling practices.",
  },
  {
    id: 5,
    icon: HandCoins,
    title: "Money-Back Guarantee",
    description:
      "Try with confidence and get your money back if the service doesn't meet your expectations.",
  },
  {
    id: 6,
    icon: Headset,
    title: "24/7 Customer Support",
    description:
      "Get reliable assistance anytime with dedicated support whenever you need help.",
  },
];

const PricingDownSection = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        {/* Header */}
        <header className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-[#491A53] sm:text-3xl lg:text-4xl">
            Why Choose Us?
          </h2>

          <p className="mt-1 text-sm text-[#491A53]/70 sm:text-base">
            We&apos;re committed to providing the best value for your
            investment.
          </p>
        </header>

        {/* Reasons */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <Card
                key={reason.id}
                className="
                  w-full
                  min-w-0
                  border
                  border-[#e4dfe5]
                  shadow-sm
                "
              >
                <CardHeader>
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#491A53]
                      text-white
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <CardTitle className="text-lg text-[#491A53]">
                    {reason.title}
                  </CardTitle>

                  {/* Description */}
                  <CardDescription className="text-sm leading-6 text-[#491A53]/70">
                    {reason.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingDownSection;