
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
// import { LayoutGrid } from "lucide-react";

// export function CardOne() {
//   return (
//     <Card className="relative mx-auto w-full  overflow-hidden pt-0">

//       {/* Image */}
//      <div className="relative w-full">
//   <Image
//     src="/Image.png"
//     alt="background"
//     width={1200}
//     height={675}
//     className="h-auto w-full object-cover"
//   />

//         {/* Overlay */}
//         <div className="absolute inset-0 " />
//       </div>

//       <CardHeader className="flex flex-col gap-4">
//         <span className="h-10 w-10 bg-[#491A53] text-white rounded-full flex items-center justify-around"><LayoutGrid/></span>
//         <CardTitle><h1 className="font-semibold text-lg text-[#491A53]"> Drag &amp; Drop Builder</h1></CardTitle>

//         <CardDescription>
//        <p className=" text-[#491A53]">  Create beautiful hotel pages visually with our intuitive editor.
//               No coding skills required - just drag, drop, and publish.</p>
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
import { LayoutGrid } from "lucide-react";

export function CardOne() {
  return (
    <Card className="w-full overflow-hidden rounded-xl border-0 pt-0 shadow-sm">
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src="/Image.png"
          alt="Drag and Drop Builder"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <CardHeader className="gap-3 p-5 sm:p-6">
        <span className="flex h-8 w-8 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-[#491A53] text-white">
          <LayoutGrid className="lg:h-5 lg:w-5 h-4 w-4" />
        </span>

        <CardTitle className="lg:text-lg text-md font-semibold text-[#491A53] sm:text-xl">
          Drag &amp; Drop Builder
        </CardTitle>

        <CardDescription className="text-sm leading-6 text-[#491A53] sm:text-base sm:leading-7">
          Create beautiful hotel pages visually with our intuitive editor.
          No coding skills required - just drag, drop, and publish.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
