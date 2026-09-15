
import { BedDouble, CalendarCheck, type  LucideIcon, User } from 'lucide-react'
import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

type Reason = {
    id:string | number
    title:string
    description:string
    icon:LucideIcon
    
}

const reasons:Reason[] = [
    {
    id: 1,
    icon: BedDouble,
    title: "Room & Rate Management",
    description:
      "Manage room types, seasonal rates, and packages effortlessly. Dynamic pricing tools maximize revenue.",
  },
  {
    id: 2,
    icon: CalendarCheck,
    title: "Booking Management",
    description:
      "Manage reservations, availability, and guest bookings from one simple and powerful platform.",
  },
  {
    id: 3,
    icon: User,
    title: "Guest Management",
    description:
      "Keep guest information organized and provide a smooth experience from booking to checkout.",
  },
]
const PricingDownSection = () => {
  return (
  <section className='bg-white w-full py-10'>
  <header className='full flex-col  text-center justify-center px-12'>
    <span><h1 className='text-[#491A53] lg:text-5xl text-xl font-bold'>Why Choose Us?</h1></span>
    <span><p className='text-[#491A53] '>We're committed to providing the best value for your investment.</p></span>
  </header>



   <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 px-12">
        {reasons.map((reason) => {
          const Icon = reason.icon;

          return (
            <Card
              key={reason.id}
              className="w-full border-0 shadow-sm"
            >
              <CardHeader>

                {/* Icon part*/}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#491A53] text-white">
                  <Icon className="h-5 w-5" />
                </div>

                
                <CardTitle className="text-lg text-[#491A53]">
                  {reason.title}
                </CardTitle>

                
                <CardDescription className="leading-6 text-sm text-[#491A53]">
                  {reason.description}
                </CardDescription>

              </CardHeader>
            </Card>
          );
        })}
      </div>

  </section>
  )
}

export default PricingDownSection







