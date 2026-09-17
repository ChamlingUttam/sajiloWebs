"use client"
import React, {  useState } from 'react'
// import { apis } from './api'
import { ChevronDown } from 'lucide-react'
import { Button } from '@base-ui/react'
import { useFaq } from '@/src/hooks/faq'

type Faq = {
  id: number;
  question: string;
  answer: string;
};
const RightFaq = () => {
    const [open,setOpen] = useState<number|null>(null)

    const toggleIcon = (id:number)=>{
        setOpen(open === id ? null : id)

    }
    console.log(open)

    const {data:faqdata} = useFaq()

    
  return (
    <section className="space-y-8 px-10 ">
        <p className='text-md'>Everything you need to create, manage, and grow your hotel’s <br /> online presence- all in one platform.</p>

        {faqdata?.map((faq:Faq)=>( 
            <div key={faq?.id} className='flex justify-between'>
                <div>
                     <h2 className="text-xl font-semibold">
          {faq?.question}
         </h2>
         <p className="mt-2 text-gray-500 pr-2">
           {open == faq.id && (
            <span>{faq.answer}</span>
           ) }
         </p>
                </div>
       
         <Button onClick={()=>toggleIcon(faq.id)} className={""}>
            <ChevronDown className={`transition-transform cursor-pointer duration-500 ${open ==faq?.id ? "rotate-180" : 'rotate-0'}`}/>
            </Button>

    </div>
        ))}
    </section>
  )
}

export default RightFaq