import Image from "next/image";

export default function DashboardPreview() {
  return (
    <section className="w-full overflow-hidden bg-[#3B1547] px-4 sm:px-6 md:px-40 pt-1 pb-14 sm:pt-2 sm:pb-16">
      <div
        className=" flex w-full items-center  justify-center rounded-2xl sm:rounded-3xl  bg-cover bg-center bg-no-repeat p-2 sm:p-3"
        style={{ backgroundImage: "url('/assets/homepage/purple-bg.jpg')" }}
      >
        <div className="w-full rounded-xl  sm:rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10">
          <Image
            src="/assets/homepage/dashboard.png"
            alt="dashboard"
            width={2280}
            height={1400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}