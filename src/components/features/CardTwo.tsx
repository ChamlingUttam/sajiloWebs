
// import {
//   Card,
//   // CardAction,
//   CardDescription,
//   // CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";
// // import { Button } from "../ui/button";
// import Image from "next/image";
// import { LayoutGrid, ListChecks } from "lucide-react";

// export function CardTwo() {
//   return (
//     <Card className="relative mx-auto w-full  overflow-hidden pt-0">

//       {/* Image */}
//      <div className="relative w-full">
//   <Image
//     src="/secondFeature.png"
//     alt="background"
//     width={1200}
//     height={675}
//     className="h-auto w-full object-cover"
//   />

//         {/* Overlay */}
//         <div className="absolute inset-0 " />
//       </div>

//       <CardHeader className="flex flex-col gap-4">
//         <span className="h-10 w-10 bg-[#491A53] text-white rounded-full flex items-center justify-around">< ListChecks/></span>
//                 <CardTitle><h1 className="font-semibold text-lg text-[#491A53]"> Real-Time Booking Engine
// </h1></CardTitle>


//         <CardDescription>
//        <p className=" text-[#491A53]">   Accept direct bookings with zero commission fees. Sync
//               availability across channels in real time.</p>
//         </CardDescription>
//       </CardHeader>

   
//     </Card>
//   );
// }











import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { ListChecks } from "lucide-react";

export function CardTwo() {
  return (
    <Card className="w-full overflow-hidden rounded-xl border-0 pt-0 shadow-sm">
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src="/secondFeature.png"
          alt="Real-Time Booking Engine"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <CardHeader className="gap-3 p-5 sm:p-6">
        <span className="flex h-8 w-8 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-[#491A53] text-white">
          <ListChecks className="h-5 w-5" />
        </span>

        <CardTitle className="text-lg font-semibold text-[#491A53] sm:text-xl">
          Real-Time Booking Engine
        </CardTitle>

        <CardDescription className="text-sm leading-6 text-[#491A53] sm:text-base sm:leading-7">
          Accept direct bookings with zero commission fees. Sync
          availability across channels in real time.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
