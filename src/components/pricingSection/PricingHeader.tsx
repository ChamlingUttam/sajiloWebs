import React from "react";

const PricingHeader = () => {
  return (
    <div>
      <header className="flex w-full flex-col items-center justify-center bg-[#3E1647] px-6 py-16 text-center text-white sm:px-8 lg:px-12 lg:py-24">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          A plan that grows with
          <br className="hidden sm:block" />
          every booking
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-white/90 sm:text-base lg:text-lg lg:leading-7">
          Launch your hotel website, accept direct reservations, and grow your
          revenue — without commission fees.
        </p>

        <div className="mt-8 flex w-fit items-center rounded-full bg-white/10 p-1">
          <button
            className="rounded-full px-4 py-2 text-xs font-medium text-white
                       sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Monthly
          </button>

          <button
            className="rounded-full bg-gray-100 px-4 py-2 text-xs font-medium text-[#491A53]
                       sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Yearly
            <span className="ml-1 text-[10px] text-green-500 sm:ml-2 sm:text-xs">
              Save 20%
            </span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default PricingHeader;