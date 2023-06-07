import { BeakerIcon, ChartBarIcon, AcademicCapIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'

const About = () => {
  return (
    <section className='relative h-[100vh] bg-emerald-500'>
      <div className='absolute top-[23%] w-full h-[500px] bg-teal-500'>
        <h2 className='text-gray-400 font-semibold text-xl uppercase text-center '>Why choose us?</h2>
        <h2 className='text-white text-[4rem] mt-[10] text-center '>Our Values</h2>
        
        <div className='flex justify-evenly max-md:flex-col max-xl:gap-7 gap-3'>
          <div className='h-[350px] w-[400px] bg-cyan-500 rounded-lg text-center'>
          <AcademicCapIcon className="h-[100px] text-orange-500 w-[100px] drop-shadow-[0_0px_20px_rgba(200,12,30,0.5)] shadow-rose-500 mx-auto mt-[20px]" />
          <h3 className=' text-3xl text-white mt-[5px] font-semibold '>High pass rate</h3>
          <h4 className=' text-2xl text-zinc-300 leading-[1.5] mt-[5px] font-semibold '>We pride ourselves in ensuring that all of our students pass with flying colours</h4>
          

          </div>
          <div className='h-[350px] w-[400px]  rounded-lg text-center bg-cyan-500'>
            <BeakerIcon className="h-[100px] w-[100px] drop-shadow-[0_0px_20px_rgba(200,12,30,0.5)] shadow-rose-500 text-rose-500 mx-auto mt-[20px] rotate-[20deg]" />
            {/* <svg className='bg-transparent drop-shadow-xl shadow-rose-500' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"></path>
            </svg> */}
            <h3 className=' text-3xl text-white mt-[5px] font-semibold '>Quality control</h3>
            <h4 className=' text-2xl text-zinc-300 leading-[1.5] mt-[5px] font-semibold '>We pride ourselves in ensuring that all of our students pass with flying colours</h4>
          </div>
          <div className='h-[350px] w-[400px] bg-cyan-500 rounded-lg text-center'>
            <ChartBarIcon className="h-[100px] text-blue-500 w-[100px] drop-shadow-[0_0px_20px_rgba(200,12,30,0.5)] shadow-rose-500 mx-auto mt-[20px]" />
            <h3 className=' text-3xl text-white mt-[5px] font-semibold '>Progress Analysis</h3>
            <h4 className=' text-2xl text-zinc-300 leading-[1.5] mt-[5px] font-semibold '>We pride ourselves in ensuring that all of our students pass with flying colours</h4>

          </div>
        </div>
      </div>
    </section>  
    )
}

export default About