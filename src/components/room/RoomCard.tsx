import Image from "next/image";
import { Card } from "../ui/card";


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
    
    
    </Card>
  )
}
