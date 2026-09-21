import { CardOne } from "./CardOne";
import { CardTwo } from "./CardTwo";

export function MainCard() {
  return (
    <div className="grid w-full grid-cols-1 gap-5 px-4 pb-10 sm:px-6 md:px-10 lg:grid-cols-2">
      <CardOne />
      <CardTwo />
    </div>
  );
}