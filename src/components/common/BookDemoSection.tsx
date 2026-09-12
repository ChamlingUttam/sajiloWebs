// import Image from "next/image";
// import { Gem } from "lucide-react";

// export default function BookDemoSection() {
//   return (
//     <section className="w-full bg-white px-4 md:px-10 py-14 sm:py-20">
//       <div
//         className="max-w-7xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-[#3B1547] bg-cover bg-center bg-no-repeat px-4 md:px-10 pt-14 sm:pt-16 pb-10 sm:pb-14"
//         style={{ backgroundImage: "url('/assets/homepage/purple-bg.jpg')" }}
//       >
//         {/* Header */}
//         <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
//           <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
//             See Sajilo Webs in Action — Book a Free Demo
//           </h2>
//           <p className="text-purple-200/70 text-sm sm:text-base mt-3">
//             Our team will walk you through a personalized demo tailored to your hotel&apos;s needs. Discover how we can help you grow your direct bookings.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-3 mt-6 max-w-md mx-auto">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-purple-200/50 focus:outline-none focus:ring-1 focus:ring-orange-400"
//             />
//             <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-2.5 rounded-lg whitespace-nowrap">
//               Book a Demo
//             </button>
//           </div>

//           <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-purple-200/60 text-xs sm:text-sm">
//             <span className="flex items-center gap-1.5"><Gem size={14} /> No commitment</span>
//             <span className="flex items-center gap-1.5"><Gem size={14} /> 30-minute session</span>
//             <span className="flex items-center gap-1.5"><Gem size={14} /> Available Sun-Fri</span>
//           </div>
//         </div>

//         {/* Dashboard image */}
//         <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10">
//           <Image
//             src="/assets/homepage/dashboard.png"
//             alt="dashboard"
//             width={2280}
//             height={1400}
//             className="w-full h-auto"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }