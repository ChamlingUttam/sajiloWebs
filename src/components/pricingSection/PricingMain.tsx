import React from 'react'
import PricingHeader from './PricingHeader'
import PricingCard from './PricingCards'
import PricingDownSection from './PricingDownSection'
import BookDemoSection from '../common/BookDemoSection'

const PricingMain = () => {
  return (
    <div className='w-full'>
      <PricingHeader/>
      <PricingCard/>
      <PricingDownSection/>
      <BookDemoSection/>
    </div>
  )
}

export default PricingMain
