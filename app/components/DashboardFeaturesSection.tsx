
import Image from "next/image";
import {
  PenLine,
  ListChecks,
  Languages,
  Users,
  LineChart,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    image: "/assets/homepage/bed-single.png",
    text: "Manage rooms, rates, photos, and content",
  },
  {
    icon: PenLine,
    text: "Integrated SEO tools to rank higher on Google",
  },
  {
    icon: ListChecks,
    text: "View live bookings and revenue in real time",
  },
  {
    icon: Languages,
    text: "Multi-language support for international guests",
  },
  {
    icon: Users,
    text: "Built-in CRM and guest profiles",
  },
  {
    icon: LineChart,
    text: "Smart analytics with guest behavior insights",
  },
];

export default function DashboardFeaturesSection() {
  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <span className="mb-4 inline-block rounded-sm bg-[#3B1547] px-3 py-2 text-xs font-medium text-white">
            Dashboard
          </span>

          <h2 className="text-2xl font-bold leading-tight text-[#3B1547] sm:text-3xl md:text-4xl">
            Your Hotel Website Dashboard
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#491A53] sm:text-base sm:leading-7">
            A powerful control center to manage every aspect of your hotel&apos;s
            online presence.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              className="
                rounded-lg
                border border-[#CC5E19]
                bg-[#FF751F]
                px-2 py-2.5
                text-xs font-medium
                whitespace-nowrap
                text-white
                transition-colors
                hover:bg-orange-600
                sm:px-6 sm:py-2.5 sm:text-sm
              "
            >
              Start 14-Days Free Trial
            </button>

            <Link
              href="/schedule-demo"
              className="
                rounded-lg
                border border-[#EDE8EE]
                bg-[#EDE8EE]
                px-4 py-2.5
                text-xs font-medium
                whitespace-nowrap
                text-[#160818]
                transition-colors
                hover:bg-gray-50
                sm:px-6 sm:py-3 sm:text-sm
              "
            >
              Book a Demo
            </Link>
          </div>
        </div>

        {/* Dashboard + Features */}
        <div
          className="
            mt-10
            grid w-full grid-cols-1
            items-center
            gap-10
            text-left
            sm:mt-12
            md:gap-12
            lg:mt-14
            lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]
          "
        >
          {/* Dashboard Image */}
          <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
            <Image
              src="/assets/homepage/Mockup.png"
              alt="Hotel dashboard laptop mockup"
              width={1600}
              height={1100}
              priority
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 90vw,
                60vw
              "
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Features */}
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-x-8 lg:gap-y-10">
            {features.map(({ icon: Icon, image, text }, i) => (
              <div
                key={i}
                className="flex min-w-0 flex-col gap-3"
              >
                <div
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-lg
                    bg-[#EDE8EE]
                  "
                >
                  {image ? (
                    <Image
                      src={image}
                      alt=""
                      width={22}
                      height={22}
                      className="h-5 w-5 object-contain"
                    />
                  ) : (
                    Icon && (
                      <Icon
                        size={20}
                        className="text-[#491A53]"
                        strokeWidth={1.8}
                      />
                    )
                  )}
                </div>

                <p className="max-w-xs text-sm leading-6 text-[#491A53] sm:text-[15px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
