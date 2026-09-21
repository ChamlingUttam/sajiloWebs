
// import LeftFaq from './LeftFaq'
// import RightFaq from './RightFaq'



// const Faq = () => {


//   return (
//     <section className="w-full px-6 lg:px-15 py-20 bg-white text-[#3E1647]  ">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

//     {/* LEFT */}
//    <LeftFaq/>

//     {/* RIGHT */}
//     <RightFaq/>

//   </div>
// </section>
//   )
// }

// export default Faq


















import LeftFaq from "./LeftFaq";
import RightFaq from "./RightFaq";

const Faq = () => {
  return (
    <section className="w-full bg-white py-16 text-[#3E1647] sm:py-20">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-10
          px-4
          sm:gap-12
          sm:px-6
          md:px-10
          lg:grid-cols-2
          lg:gap-16
        "
      >
        {/* LEFT */}
        <LeftFaq />

        {/* RIGHT */}
        <RightFaq />
      </div>
    </section>
  );
};

export default Faq;
