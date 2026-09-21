
import {
  Card,
  // CardAction,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
// import { Button } from "../ui/button";
import Image from "next/image";
import { LayoutGrid } from "lucide-react";

export function CardOne() {
  return (
    <Card className="relative mx-auto w-full  overflow-hidden pt-0">

      {/* Image */}
     <div className="relative w-full">
  <Image
    src="/Image.png"
    alt="background"
    width={1200}
    height={675}
    className="h-auto w-full object-cover"
  />

        {/* Overlay */}
        <div className="absolute inset-0 " />
      </div>

      <CardHeader className="flex flex-col gap-4">
        <span className="h-10 w-10 bg-[#491A53] text-white rounded-full flex items-center justify-around"><LayoutGrid/></span>
        <CardTitle><h1 className="font-semibold text-lg text-[#491A53]"> Drag &amp; Drop Builder</h1></CardTitle>

        <CardDescription>
       <p className=" text-[#491A53]">  Create beautiful hotel pages visually with our intuitive editor.
              No coding skills required - just drag, drop, and publish.</p>
        </CardDescription>
      </CardHeader>

   
    </Card>
  );
}