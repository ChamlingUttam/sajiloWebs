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
    <Card className="relative mx-auto w-full  overflow-hidden pt-0">
      <div className="relative w-full ">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={675}
          className="h-auto w-full object-cover"
        />
        <div className="absolute inset-0" />
      </div>

      <CardHeader className="flex flex-col gap-4">
        <span className="h-10 w-10 bg-[#491A53] text-white rounded-full flex items-center justify-around">
          <LayoutGrid />
        </span>
        <CardTitle>
          <h1 className="font-semibold text-lg text-[#491A53]">{title}</h1>
        </CardTitle>
        <CardDescription>
          <p className="text-[#491A53]">{description}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}