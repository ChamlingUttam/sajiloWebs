// import { CardOne } from "./CardOne";
// import { CardTwo } from "./CardTwo";

// export function MainCard() {
//   return (
//     // <div className="grid w-full grid-cols-1 gap-5 px-4 pb-10 sm:px-6 md:px-10 lg:grid-cols-2">
//     <div className="w-full">
//       <div className="container flex justify-between gap-10 w-full mx-auto">
//       <CardOne />
//       <CardTwo />
//       </div>
//     </div>
//   );
// }



import { CardOne } from "./CardOne";
import { CardTwo } from "./CardTwo";

export function MainCard() {
  return (
    <section className="w-full">
      <div className="container ">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-10">
          <CardOne />
          <CardTwo />
        </div>
      </div>
    </section>
  );
}
