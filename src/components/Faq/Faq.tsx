import React from 'react'
import LeftFaq from './LeftFaq'
import RightFaq from './RightFaq'

const Faq = () => {
  return (
    <section className="w-full px-6 lg:px-15 py-20  ">
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
