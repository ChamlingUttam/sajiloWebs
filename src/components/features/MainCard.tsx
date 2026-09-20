// import React from "react";
// import { CardOne } from "./CardOne";
// import { CardTwo } from "./CardTwo";

// const MainCard = () => {
//   return (
//     <div className="w-full">
//       <div className="w-full md:px-41 px-5 flex md:flex-row lg:mb-8 mb-4 flex-col justify-between gap-7 items-center">
//         <CardOne />
//         <CardTwo />
//       </div>
//     </div>
//   );
// };

// export default MainCard;



import React from "react";
import { CardOne } from "./CardOne";
import { CardTwo } from "./CardTwo";

const MainCard = () => {
  return (
    <div className="w-full pb-6 sm:pb-10 lg:pb-12">
      <div className="mx-auto grid w-full grid-cols-1 lg:gap-7 sm:px-7 lg:px-1 md-px-3 sm:gap-6 lg:grid-cols-2">
        <CardOne />
        <CardTwo />
      </div>
    </div>
  );
};

export default MainCard;
