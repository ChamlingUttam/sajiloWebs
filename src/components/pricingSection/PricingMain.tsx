import React from 'react'
import PricingHeader from './PricingHeader'
import PricingCard from './PricingCards'
import PricingDownSection from './PricingDownSection'

const PricingMain = () => {
  return (
    <div className='w-full'>
      <PricingHeader/>
      <PricingCard/>
      <PricingDownSection/>
    </div>
  )
}

export default PricingMain
