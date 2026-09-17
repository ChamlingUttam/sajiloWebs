"use client"
import React, { useState } from 'react'
import { apis } from './api'
import { ChevronDown } from 'lucide-react'
import { Button } from '@base-ui/react'

const RightFaq = () => {
    const [open,setOpen] = useState<number|null>(null)

    const toggleIcon = (id:number)=>{
        setOpen(open === id ? null : id)

    }
    console.log(open)
    
  return (
    <section className="space-y-8 px-10 ">
        <p className='text-md'>Everything you need to create, manage, and grow your hotel’s <br /> online presence- all in one platform.</p>

        {apis?.map((api)=>( 
            <div key={api?.id} className='flex justify-between'>
                <div>
                     <h2 className="text-xl font-semibold">
          {api?.question}
         </h2>
         <p className="mt-2 text-gray-500 pr-2">
           {open == api.id && (
            <span>{api.answer}</span>
           ) }
         </p>
                </div>
       
         <Button onClick={()=>toggleIcon(api.id)} className={""}>
            <ChevronDown className={`transition-transform cursor-pointer duration-500 ${open ==api?.id ? "rotate-180" : 'rotate-0'}`}/>
            </Button>

    </div>
        ))}
    </section>
  )
}

export default RightFaq