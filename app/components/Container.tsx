import Image from "next/image";

export default function DashboardPreview() {
  return (
    <section className="w-full overflow-hidden bg-[#3B1547] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-4xl">
        {/* Background frame */}
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            p-2
            sm:rounded-3xl
            sm:p-3
            lg:p-4
          "
          style={{
            backgroundImage: "url('/assets/homepage/purple-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#491A53]/20" />

          {/* Dashboard */}
          <div
            className="
              relative
              overflow-hidden
              rounded-xl
              border
              border-white/15
              bg-black/10
              shadow-[0_25px_70px_rgba(0,0,0,0.45)]
              sm:rounded-2xl
            "
          >
            <Image
              src="/assets/homepage/dashboard.png"
              alt="Sajilo Webs dashboard preview"
              width={2280}
              height={1400}
              priority
              className="
                block
                h-auto
                w-full
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}