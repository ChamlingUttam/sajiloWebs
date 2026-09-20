// import {
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";
// import Image from "next/image";
// import { LayoutGrid } from "lucide-react";

// export function FeatureCard({
//   title,
//   description,
//   image,
// }: {
//   title: string;
//   description: string;
//   image: string;
// }) {
//   return (
//     <Card className="relative mx-auto w-full  overflow-hidden pt-0">
//       <div className="relative w-full ">
//         <Image
//           src={image}
//           alt={title}
//           width={1200}
//           height={675}
//           className="h-auto w-full object-cover"
//         />
//         <div className="absolute inset-0" />
//       </div>

//       <CardHeader className="flex flex-col gap-4">
//         <span className="h-10 w-10 bg-[#491A53] text-white rounded-full flex items-center justify-around">
//           <LayoutGrid />
//         </span>
//         <CardTitle>
//           <h1 className="font-semibold text-lg text-[#491A53]">{title}</h1>
//         </CardTitle>
//         <CardDescription>
//           <p className="text-[#491A53]">{description}</p>
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

export function FeatureCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <Card className="w-full overflow-hidden rounded-xl border-0 pt-0 shadow-sm">
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <CardHeader className="gap-3 p-5 sm:p-6">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#491A53] text-white">
          <LayoutGrid className="h-5 w-5" />
        </span>

        <CardTitle className="text-lg font-semibold text-[#491A53] sm:text-xl">
          {title}
        </CardTitle>

        <CardDescription className="text-sm leading-6 text-[#491A53] sm:text-base sm:leading-7">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

