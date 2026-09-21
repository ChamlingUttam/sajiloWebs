
import Image from "next/image";
import {
  Languages,
  BarChart3,
  Headphones,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/src/components/ui/card";

const cards = [
  {
    icon: Languages,
    title: "Multi-Language Support",
    description:
      "Reach international guests with automatic translations in 30+ languages. Localized content that converts.",
    bg: "/assets/homepage/purple-bg (4).jpg",
    image: "/assets/homepage/Appearance Setting.png",
  },
  {
    icon: BarChart3,
    title: "SEO & Analytics",
    description:
      "Built-in SEO optimization and detailed analytics dashboards. Track bookings, traffic, and revenue in one place.",
    bg: "/assets/homepage/purple-bg (6).jpg",
    image: "/assets/homepage/Appearance Setting (1).png",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our hospitality-trained support team is available around the clock. Live chat, email, and phone support included.",
    bg: "/assets/homepage/purple-bg (5).jpg",
    image: "/assets/homepage/Appearance Setting (2).png",
  },
];

export default function RoomManagementSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-14">
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          md:px-10
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-8
            sm:gap-10
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-8
          "
        >
          {cards.map(({ icon: Icon, title, description, bg, image }) => (
            <Card
              key={title}
              className="w-full min-w-0 border-0 bg-transparent shadow-none"
            >
              {/* Image */}
              <CardHeader className="p-0">
                <div
                  className="
                    relative
                    flex
                    aspect-[4/3.2]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-xl
                    bg-cover
                    bg-center
                    p-4
                    sm:p-5
                  "
                  style={{
                    backgroundImage: `url('${bg}')`,
                  }}
                >
                  <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={300}
                    className="
                      h-auto
                      w-full
                      max-w-[88%]
                      rounded-lg
                      object-contain
                      shadow-2xl
                      sm:max-w-[85%]
                    "
                    sizes="
                      (max-width: 640px) 90vw,
                      (max-width: 768px) 42vw,
                      (max-width: 1024px) 45vw,
                      30vw
                    "
                  />

                  {/* Contact button */}
                  {title === "24/7 Support" && (
                    <button
                      type="button"
                      className="
                        rounded-full
                        border-2
                        border-[#6A4372]
                        bg-white
                        px-5
                        py-2
                        text-sm
                        font-bold
                        text-[#3E1647]
                        shadow-lg
                        transition-transform
                        hover:scale-105
                        sm:border-4
                        sm:px-7
                        sm:py-2.5
                        sm:text-base
                      "
                    >
                      Contact Us
                    </button>
                  )}
                </div>
              </CardHeader>

              {/* Content */}
              <CardContent className="p-0 pt-4 sm:pt-5">
                {/* Icon */}
                <div
                  className="
                    mb-3
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#3B1547]
                    sm:h-9
                    sm:w-9
                    lg:h-10
                    lg:w-10
                  "
                >
                  <Icon
                    className="
                      h-4
                      w-4
                      text-white
                      sm:h-[18px]
                      sm:w-[18px]
                      lg:h-5
                      lg:w-5
                    "
                  />
                </div>

                {/* Title */}
                <CardTitle
                  className="
                    mb-1
                    text-base
                    font-semibold
                    text-[#3E1647]
                    sm:text-lg
                    lg:text-lg
                  "
                >
                  {title}
                </CardTitle>

                {/* Description */}
                <CardDescription
                  className="
                    max-w-md
                    text-sm
                    leading-6
                    text-[#491A53]
                    sm:text-sm
                    lg:text-[15px]
                  "
                >
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
