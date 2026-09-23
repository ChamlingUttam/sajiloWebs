












import LeftFaq from "./LeftFaq";
import RightFaq from "./RightFaq";

const Faq = () => {
  return (
    <section className="w-full bg-[#F3F1F7] py-16 text-[#3E1647] sm:py-20">
      <div
        className="
          mx-auto
          grid
          w-full
          container
          grid-cols-1
          gap-10
          sm:gap-12
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
