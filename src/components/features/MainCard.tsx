import React from "react";
import { CardOne } from "./CardOne";
import { CardTwo } from "./CardTwo";

const MainCard = () => {
  return (
    <div className="w-full">
      <div className="w-full md:px-41 px-5 flex md:flex-row lg:mb-8 mb-4 flex-col justify-between gap-7 items-center">
        <CardOne />
        <CardTwo />
      </div>
    </div>
  );
};

export default MainCard;