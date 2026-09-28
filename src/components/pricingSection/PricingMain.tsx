// import React from 'react'
// import PricingHeader from './PricingHeader'
// import PricingCard from './PricingCards'
// import PricingDownSection from './PricingDownSection'
// import BookDemoSection from '../common/BookDemoSection'

// const PricingMain = () => {
//   return (
//     <div className='w-full'>
//       <PricingHeader/>
//       <PricingCard/>
//       <PricingDownSection/>
//       <BookDemoSection/>
//     </div>
//   )
// }

// export default PricingMain

"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import PricingHeader from "./PricingHeader";
import PricingCard from "./PricingCards";
import PricingDownSection from "./PricingDownSection";
import BookDemoSection from "../common/BookDemoSection";

const PricingMain = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Header
      timeline.from(".pricing-header-content", {
        y: 40,
        opacity: 0,
        duration: 0.7,
      });

      // Pricing cards
      timeline.from(
        ".pricing-card",
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          stagger: 0.12,
          ease: "back.out(1.4)",
        },
        "-=0.3"
      );

      // Why Choose Us heading
      timeline.from(
        ".pricing-reason-header",
        {
          y: 30,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.2"
      );

      // Why Choose Us cards
      timeline.from(
        ".pricing-reason-card",
        {
          y: 35,
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
          stagger: 0.1,
        },
        "-=0.2"
      );

      // Book Demo
      timeline.from(
        ".pricing-demo",
        {
          y: 40,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.2"
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="w-full">
      {/* Pricing Header */}
      <div className="pricing-header-content">
        <PricingHeader />
      </div>

      {/* Pricing Cards */}
      <PricingCard />

      {/* Why Choose Us */}
      <PricingDownSection />

      {/* Book Demo */}
      <div className="pricing-demo">
        <BookDemoSection />
      </div>
    </div>
  );
};

export default PricingMain;