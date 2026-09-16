import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { LayoutGrid } from "lucide-react";

export function RoomCard() {
  return (
    <Card className="relative mx-auto w-full  py-2 lg:py-3 lg:px-10 px-7">
      <div className="absolute inset-0 z-30 aspect-video " />
      {/** image */}
      <Image src={"/room.png"} alt="room"
      width={1200}
      height={650}
      className="w-full object-cover h-auto"
      />
      <CardHeader>
        <span className="flex items-center justify-center h-10 w-10 rounded-full bg-[#491A53] text-white "><LayoutGrid/></span>
        <CardTitle>  <h1 className="font-semibold lg:text-lg text-md  text-[#491A53]">Room & Rate Management</h1></CardTitle>
        <CardDescription>
          <p className="text-sm lg:text-md text-[#491A53]">Manage room types, seasonal rates, and packages effortlessly. Dynamic pricing tools maximize revenue.</p>
        </CardDescription>
      </CardHeader>
    
    </Card>
  )
}
