"use client"
import React, { useEffect } from 'react'
import LeftFaq from './LeftFaq'
import RightFaq from './RightFaq'
import { useFaq } from '@/src/hooks/faq'


const Faq = () => {

const {data:faqdata} = useFaq()

useEffect(()=>{
console.log("faq:",faqdata)
console.log("faq is ")
},[faqdata])
  return (
    <section className="w-full px-6 lg:px-15 py-20 bg-white text-[#3E1647]  ">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

    {/* LEFT */}
   <LeftFaq/>

    {/* RIGHT */}
    <RightFaq/>

  </div>
</section>
  )
}

export default Faq
