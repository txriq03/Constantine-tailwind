import { BeakerIcon, ChartBarIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className='relative h-[80vh] max-md:h-[1350px] max-3xl:mt-[100px]'>
      <div className='absolute top-[0] max-md:top-0 w-full h-[500px]'>
        <h2 className='text-gray-400 font-semibold text-xl uppercase text-center '>Why choose us?</h2>
        <h2 className='text-white text-[4rem] mt-[10] text-center max-sm:text-[3.5rem]'>Our Values</h2>
        
        <div className='flex justify-evenly max-md:flex-col max-xl:gap-7 gap-3 mt-[30px]  '>

          <div className='h-[350px] w-full rounded-lg text-center'>
            <AcademicCapIcon className="h-[100px] text-emerald-500 w-[100px] drop-shadow-[0_0px_10px_rgba(16,185,129,0.5)]  mx-auto mt-[20px]" />
            <h3 className=' text-3xl text-white mt-[20px] font-semibold '>High pass rate</h3>
            <h4 className=' text-2xl text-zinc-300 leading-[1.5] mt-[10px] mx-[50px] max-xl:mx-[10px]  '>We pride ourselves in ensuring that all of our students pass with flying colours!</h4>
          </div>

          <div className='h-[350px] w-full  rounded-lg text-center '>
            <BeakerIcon className="h-[100px] w-[100px] drop-shadow-[0_0px_10px_rgba(243,58,106,0.5)] shadow-rose-500 text-rose-500 mx-auto mt-[20px] rotate-[20deg]" />
            <h3 className=' text-3xl text-white mt-[20px] font-semibold '>Quality control</h3>
            <h4 className=' text-2xl text-zinc-300 leading-[1.5] mt-[5px] mx-[50px] max-xl:mx-[10px] '>All of our instructors have been tested to ensure that they teach our students effectively.</h4>
          </div>

          <div className='h-[350px] w-full  rounded-lg text-center'>
            <ChartBarIcon className="h-[100px] text-blue-500 w-[100px] drop-shadow-[0_0px_10px_rgba(0,0,255,1)] shadow-blue-500 mx-auto mt-[20px]" />
            <h3 className=' text-3xl text-white mt-[20px] font-semibold '>Progress Analysis</h3>
            <h4 className=' text-2xl text-zinc-300 leading-[1.5] mt-[10px] mx-[50px] max-xl:mx-[10px] '>Instructors measure progress of our students so we can teach them the skills to succeed.</h4>
          </div>

        </div>
      </div>
    </section>  
    )
}

export default About