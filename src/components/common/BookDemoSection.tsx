// import { Gem } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// const BookDemoSection = () => {
//   return (
//     <section className="w-full bg-white px-4 py-8 sm:px-6 md:px-10 lg:px-20">
//       <div
//         className="
//           relative
//           w-full
//           rounded-xl sm:rounded-3xl
//           bg-[#491A53]
//           p-6
//           sm:p-8
//           md:p-10
//           overflow-hidden
//         "
//       >
//         {/* Header */}
//         <div className="relative z-20 max-w-2xl mx-auto text-center">
//           <h2
//             className="
//               text-white
//               font-bold
//               text-2xl
//               sm:text-3xl
//               md:text-4xl
//               lg:text-5xl
//               leading-tight
//             "
//           >
//             See Sajilo Webs in Action — Book a Free Demo
//           </h2>

//           <p
//             className="
//               text-purple-200/70
//               text-sm
//               sm:text-base
//               md:text-lg
//               mt-3
//               sm:mt-4
//               leading-relaxed
//             "
//           >
//             Our team will walk you through a personalized demo tailored to
//             your hotel&apos;s needs. Discover how we can help you grow your
//             direct bookings.
//           </p>

//           {/* Email + Button */}
//           <div
//             className="
//               flex
//               flex-col
//               sm:flex-row
//               gap-3
//               mt-6
//               sm:mt-8
//               max-w-md
//               mx-auto
//             "
//           >
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="
//                 w-full
//                 flex-1
//                 bg-white/10
//                 border
//                 border-white/20
//                 rounded-lg
//                 px-4
//                 py-3
//                 text-sm
//                 text-white
//                 placeholder:text-purple-200/50
//                 focus:outline-none
//                 focus:ring-1
//                 focus:ring-orange-400
//               "
//             />

//             <button
//               className="
//                 w-full
//                 sm:w-auto
//                 bg-orange-500
//                 hover:bg-orange-600
//                 text-white
//                 text-sm
//                 font-medium
//                 px-6
//                 py-3
//                 rounded-lg
//                 whitespace-nowrap
//                 transition-colors
//               "
//             >
//               Book a Demo
//             </button>
//           </div>

//           {/* Features */}
//           <div
//             className="
//               flex
//               flex-col
//               sm:flex-row
//               sm:flex-wrap
//               items-center
//               justify-center
//               gap-3
//               sm:gap-x-6
//               sm:gap-y-2
//               mt-6
//               sm:mt-8
//               text-purple-200/60
//               text-xs
//               sm:text-sm
//             "
//           >
//             <span className="flex items-center gap-1.5">
//               <Gem size={14} />
//               No commitment
//             </span>

//             <span className="flex items-center gap-1.5">
//               <Gem size={14} />
//               30-minute session
//             </span>

//             <span className="flex items-center gap-1.5">
//               <Gem size={14} />
//               Available Sun-Fri
//             </span>
//           </div>
//         </div>

//         {/* Dashboard Image, framed with bg pattern */}
//         <div className="relative z-10 mt-3 sm:mt-4 md:mt-0 flex justify-center">
//           <div
//             className="
//               w-[92%] sm:w-[92%] md:w-[85%] lg:w-[75%]
//               rounded-2xl
//               bg-cover bg-center bg-no-repeat
//               p-2 sm:p-3
//               translate-y-[30%]
//             "
//             style={{ backgroundImage: "url('/assets/homepage/purple-bg.jpg')" }}
//           >
//             <div className="w-full rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10">
//               <Image
//                 src="/assets/homepage/dashboard.png"
//                 alt="dashboard"
//                 width={2280}
//                 height={1400}
//                 className="w-full h-auto"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookDemoSection;

















import { Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookDemoSection = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-14">
      {/* Same container as Navbar / FAQ / Templates / RoomManagement */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-xl
            bg-[#491A53]
            p-6
            sm:rounded-3xl
            sm:p-8
            md:p-10
          "
        >
          {/* Header */}
          <div className="relative z-20 mx-auto max-w-2xl text-center">
            <h2
              className="
                text-2xl
                font-bold
                leading-tight
                text-white
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
              "
            >
              See Sajilo Webs in Action — Book a Free Demo
            </h2>

            <p
              className="
                mt-3
                text-sm
                leading-relaxed
                text-purple-200/70
                sm:mt-4
                sm:text-base
                md:text-lg
              "
            >
              Our team will walk you through a personalized demo tailored to
              your hotel&apos;s needs. Discover how we can help you grow your
              direct bookings.
            </p>

            {/* Email + Button */}
            <div
              className="
                mx-auto
                mt-6
                flex
                max-w-md
                flex-col
                gap-3
                sm:mt-8
                sm:flex-row
              "
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="
                  w-full
                  flex-1
                  rounded-lg
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  py-3
                  text-sm
                  text-white
                  placeholder:text-purple-200/50
                  focus:outline-none
                  focus:ring-1
                  focus:ring-orange-400
                "
              />

              <Link
                href="/schedule-demo"
                className="
                  w-full
                  rounded-lg
                  bg-orange-500
                  px-6
                  py-3
                  text-center
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  hover:bg-orange-600
                  sm:w-auto
                  sm:whitespace-nowrap
                "
              >
                Book a Demo
              </Link>
            </div>

            {/* Features */}
            <div
              className="
                mt-6
                flex
                flex-col
                items-center
                justify-center
                gap-3
                text-xs
                text-purple-200/60
                sm:mt-8
                sm:flex-row
                sm:flex-wrap
                sm:gap-x-6
                sm:gap-y-2
                sm:text-sm
              "
            >
              <span className="flex items-center gap-1.5">
                <Gem size={14} />
                No commitment
              </span>

              <span className="flex items-center gap-1.5">
                <Gem size={14} />
                30-minute session
              </span>

              <span className="flex items-center gap-1.5">
                <Gem size={14} />
                Available Sun-Fri
              </span>
            </div>
          </div>

          {/* Dashboard Image */}
          <div
            className="
              relative
              z-10
              mt-4
              flex
              justify-center
              sm:mt-5
              md:mt-0
            "
          >
            <div
              className="
                w-[95%]
                translate-y-[25%]
                rounded-2xl
                bg-cover
                bg-center
                bg-no-repeat
                p-2
                sm:w-[92%]
                sm:p-3
                md:w-[85%]
                lg:w-[75%]
              "
              style={{
                backgroundImage:
                  "url('/assets/homepage/purple-bg.jpg')",
              }}
            >
              <div
                className="
                  w-full
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                "
              >
                <Image
                  src="/assets/homepage/dashboard.png"
                  alt="Sajilo Webs dashboard"
                  width={2280}
                  height={1400}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemoSection;
