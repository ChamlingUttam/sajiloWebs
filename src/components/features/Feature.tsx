// "use client";

// import React, { useEffect, useState } from "react";
// import { FeatureCard } from "./FeatureCard";
// import { Button } from "../ui/button";
// import { RoomCard } from "../room/RoomCard";
// import { getFeatures, Feature as FeatureType } from "@/Services/api/features";
// import MainCard from "./MainCard";

// const Feature = () => {
//   const [features, setFeatures] = useState<FeatureType[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     getFeatures()
//       .then((data) => setFeatures(data))
//       .catch(() => setError("Failed to load features"))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div id="features" className="w-full bg-white">
//       <div className="w-full mx-auto lg:max-w-7xl lg:px-8 ">

//         <header className="flex w-full flex-col gap-2 px-4 py-10 sm:px-6 md:px-40 lg:flex-row lg:justify-between lg:py-10">
//           <div className="flex flex-col  gap-4">
//             <Button className="w-fit bg-[#491A53] text-white">
//               Our Features
//             </Button>
//             <h1 className="text-xl  text-[#491A53] font-semibold leading-tight tracking-tight lg:text-5xl">
//               Powerful Features <br />
//               Built for Hospitality Business
//             </h1>
//           </div>
//           <p className="max-w-md text-[#491A53] leading-7 sm:text-lg">
//             Everything you need to create, manage, and grow your hotel&apos;s online
//             presence — all in one platform.
//           </p>
//         </header>

//         <div className="grid grid-cols-1 gap-5 px-4 pb-10 sm:px-6 md:px-10 lg:grid-cols-2">
//           {loading && <p className="text-[#491A53]">Loading...</p>}
//           {error && <p className="text-red-500">{error}</p>}
//           {!loading &&
//             !error &&
//             features.map((f) => (
//               <FeatureCard
//                 key={f.id}
//                 title={f.title}
//                 description={f.description}
//                 image={f.image}
//               />
//             ))}
//         </div>
//         <MainCard/>
//         <RoomCard />
//       </div>
//     </div>
//   );
// };

// export default Feature;











"use client";

import React, { useEffect, useState } from "react";
import { FeatureCard } from "./FeatureCard";
import { Button } from "../ui/button";
import { RoomCard } from "../room/RoomCard";
import {
  getFeatures,
  Feature as FeatureType,
} from "@/Services/api/features";
import MainCard from "./MainCard";

const Feature = () => {
  const [features, setFeatures] = useState<FeatureType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getFeatures()
      .then((data) => setFeatures(data))
      .catch(() => setError("Failed to load features"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="features" className="w-full bg-white">
      <div className="mx-auto w-full lg:max-w-5xl px-4 sm:px-6 lg:px-15">

        {/* Header */}
        <header className="flex flex-col gap-4 py-10 sm:py-14 lg:flex-row lg:items-end sm:px-5 lg:px-2 lg:justify-between lg:gap-2">
          
          <div className="flex max-w-2xl flex-col gap-4">
            <Button className="w-fit bg-[#491A53] text-white hover:bg-[#491A53]">
              Our Features
            </Button>

            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-[#491A53] sm:text-3xl md:text-4xl lg:text-5xl">
              Powerful Features
              <br className="hidden sm:block" />
              {" "}Built for Hospitality Business
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-[#491A53] sm:text-base sm:leading-7 lg:max-w-md  lg:text-lg">
            Everything you need to create, manage, and grow your hotel&apos;s
            online presence — all in one platform.
          </p>
        </header>

        {/* API Features */}
        <div className="grid grid-cols-1 gap-5 pb-8 sm:gap-6 lg:grid-cols-2">
          {loading && (
            <p className="text-[#491A53]">
              Loading...
            </p>
          )}

          {error && (
            <p className="text-red-500">
              {error}
            </p>
          )}

          {!loading &&
            !error &&
            features.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                image={feature.image}
              />
            ))}
        </div>

        {/* Static feature cards */}
        <MainCard />

        <RoomCard />
      </div>
    </section>
  );
};

export default Feature;
