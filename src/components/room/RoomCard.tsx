// import Image from "next/image";
// import { Card } from "../ui/card";

// export function RoomCard() {
//   return (
//     <Card className="relative mx-auto w-full py-2 lg:py-3 lg:px-10 px-7 !border-0 shadow-none">
//       <div className="absolute inset-0 z-30 aspect-video" />
//       <Image
//         src="/room.png"
//         alt="room"
//         width={1200}
//         height={650}
//         className="w-full object-cover h-auto"
//       />
//     </Card>
//   );
// }




import Image from "next/image";
import { Card } from "../ui/card";

export function RoomCard() {
  return (
    <section className="w-full bg-white py-6 sm:py-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <Card className="relative w-full overflow-hidden border-0 bg-transparent p-0 shadow-none">
          <div className="absolute inset-0 z-30" />

          <Image
            src="/room.png"
            alt="Room preview"
            width={1200}
            height={650}
            priority
            className="h-auto w-full rounded-xl object-cover sm:rounded-2xl"
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 768px) 90vw,
              (max-width: 1280px) 85vw,
              1200px
            "
          />
        </Card>
      </div>
    </section>
  );
}
