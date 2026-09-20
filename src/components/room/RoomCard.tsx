// import Image from "next/image";
// import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
// import { Wand2 } from "lucide-react";

// export function RoomCard() {
//   return (
//     <Card className="relative mx-auto w-full py-2 lg:py-4 max-w-xl lg:px-1  md:max-w-4xl px-5   shadow-none">
//       <div className="absolute inset-0 z-30 aspect-video" />
//       <Image
//         src="/room.png"
//         alt="room"
//         width={1200}
//         height={650}
//         className="w-full object-cover h-auto"
//       />
//        <CardHeader>
//         <span>  <Wand2 size={16} className="text-white" /></span>
//         <CardTitle><h3 className="font-semibold text-lg text-[#1A1A1A] mb-1">
//                     Room &amp; Rate Management
//                   </h3></CardTitle>
//         <CardDescription>
//            <p className="text-gray-500 text-sm max-w-xl">
//                     Manage room types, seasonal rates, and packages effortlessly.
//                     Dynamic pricing tools maximize revenue.
//                   </p>
//         </CardDescription>
//       </CardHeader>
       
//     </Card>
//   );
// }



















import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Wand2 } from "lucide-react";

export function RoomCard() {
  return (
    <div className="w-full">
      <Card className="relative mx-auto w-full max-w-5xl   py-2 shadow-none md:max-w-4xl lg:px-1 lg:py-4">
      <Image
        src="/room.png"
        alt="Room and rate management"
        width={1200}
        height={650}
        className="h-auto w-full object-cover"
      />

      <CardHeader>
        <span className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-full bg-[#491A53]">
          <Wand2  className="text-white h-4 w-4 lg:w-5 lg:h-5" />
        </span>

        <CardTitle className="mb-1 lg:text-lg text-md font-semibold text-[#491A53]">
          Room & Rate Management
        </CardTitle>

        <CardDescription className="max-w-xl text-sm text-[#491A53]">
          Manage room types, seasonal rates, and packages effortlessly.
          Dynamic pricing tools maximize revenue.
        </CardDescription>
      </CardHeader>
    </Card>

    </div>
    
  );
}
