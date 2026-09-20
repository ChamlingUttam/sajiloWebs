
import LeftFaq from './LeftFaq'
import RightFaq from './RightFaq'



const Faq = () => {


  return (
    <section className="w-full px-6 lg:px-40 md:px-10 py-20 bg-white text-[#3E1647]  ">
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
