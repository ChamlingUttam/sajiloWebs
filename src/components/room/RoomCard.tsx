





import Image from "next/image";
import { BedDouble } from "lucide-react";
import { Card } from "../ui/card";

export function RoomCard() {
  return (
    <section className="w-full bg-white py-6 sm:py-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <Card className="w-full overflow-hidden border-0 bg-transparent p-0 shadow-none">
          <Image
            src="/room.png"
            alt="Room preview"
            width={1200}
            height={650}
            className="h-auto w-full rounded-xl object-cover sm:rounded-2xl"
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 768px) 90vw,
              (max-width: 1280px) 85vw,
              1200px
            "
          />

          {/* Card Content */}
          <div className="pt-5 sm:pt-6 p-4">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex lg:h-10 lg:w-10 w-8 h-8 shrink-0 items-center justify-center rounded-full bg-[#491A53] ">
                <BedDouble  className="text-white h-4 w-4 lg:w-5 lg:h-5" />
              </span>

             
            </div>
             <h1 className="font-semibold text-lg text-[#491A53]">
                Room & Rate Management
              </h1>

            <p className="text-[#491A53] ">
              Manage room types, seasonal rates, and packages effortlessly.
              Dynamic pricing tools maximize revenue.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}