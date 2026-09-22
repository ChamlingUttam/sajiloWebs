
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { LayoutGrid, ListChecks } from "lucide-react";

export function CardTwo() {
  return (
    <Card className="relative mx-auto w-full  overflow-hidden pt-0">

      {/* Image */}
     <div className="relative w-full">
  <Image
    src="/secondFeature.png"
    alt="background"
    width={1200}
    height={675}
    className="h-auto w-full object-cover"
  />

        {/* Overlay */}
        <div className="absolute inset-0 " />
      </div>

      <CardHeader className="flex flex-col gap-4">
        <span className="lg:h-10 lg:w-10 h-8 w-8 bg-[#491A53] text-white rounded-full flex items-center justify-around">
          < ListChecks className="lg:h-5 lg:w-5 h-4 w-4"/>
          </span>
                <CardTitle><h1 className="font-semibold text-lg text-[#491A53]"> Real-Time Booking Engine
</h1></CardTitle>


        <CardDescription>
       <p className=" text-[#491A53]">   Accept direct bookings with zero commission fees. Sync
              availability across channels in real time.</p>
        </CardDescription>
      </CardHeader>

   
    </Card>
  );
}