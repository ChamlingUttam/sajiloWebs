import React from 'react'
import { CardOne } from './CardOne'
import { CardTwo } from './CardTwo'
import { Button } from '../ui/button'

const Feature = () => {
  return (
    <div className="w-full bg-white">

      {/* Header */}
      <header className="flex w-full flex-col gap-8 px-6 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-16">

        {/* Left */}
        <div className="flex flex-col gap-4">
          <Button className="w-fit bg-[#491A53] text-white">
            Our Features
          </Button>

          <h1 className="text-3xl text-[#491A53]  font-semibold leading-tight tracking-tight lg:text-5xl">
          Powerful Features <br />
Built for Hospitality Business 
          </h1>
        </div>

        {/* Right */}
        <p className="max-w-md text-[#491A53] leading-7 sm:text-lg">
          Everything you need to create, manage, and grow your hotel’s online
          presence — all in one platform.
        </p>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 px-7 pb-10 sm:px-8 lg:grid-cols-2 lg:px-12">
        <CardOne />
        <CardTwo />
      </div>
      
    </div>
  )
}

export default Feature






{/* // <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 px-20'> try ou the grid part too */}







