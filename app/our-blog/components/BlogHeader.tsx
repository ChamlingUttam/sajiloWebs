// export default function BlogHeader() {
//   return (
//     <div className="bg-[#4B1D57] px-4 md:px-10 pt-14 sm:pt-16 pb-10 sm:pb-12 text-center">
//       <div className="max-w-md sm:max-w-xl mx-auto">
//         <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
//           Our Blog
//         </h2>
//         <p className="text-[#D3C8D6] text-sm sm:text-base mt-3">
//           Discover insights, tutorials, and stories about hotel marketing, tech, and hospitality business.
//         </p>
//       </div>
//     </div>
//   );
// }




export default function BlogHeader() {
  return (
    <section className="w-full bg-[#4B1D57] text-center">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Our Blog
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#D3C8D6] sm:text-base sm:leading-7">
            Discover insights, tutorials, and stories about hotel marketing,
            tech, and hospitality business.
          </p>
        </div>
      </div>
    </section>
  );
}
