import Image from 'next/image'
import sideview from '../assets/sideviewps.png'
import speedsign from '../assets/speedsign.png'

const Hero = () => {
  return (
    <section className='h-[90vh] mt-20 max-3xl:mt-5 max-sm:overflow-x-hidden'>
        <div className='text-white text-[7.5rem] font-bold tracking-tighter whitespace-nowrap max-lg:text-center max-md:text-[5rem] max-sm:text-[5rem] max-sm:mt-[30px]'>
          <h1 >
            <span className='mx-[10px] max-sm:block max-sm:h-[80px] max-sm:align-middle' >Drive</span>  
            <span className='mx-[10px]  max-sm:block max-sm:h-[130px]'>with</span>
          </h1>
          <h1 className='animate-text bg-gradient-to-r from-cyan-500 via-[#2ebf91] to-blue-500 bg-clip-text text-transparent bg-[400%] text-[9rem] -mt-20 -mb-5 max-md:text-[7rem] max-md:text-center max-md:-mt-14 max-sm:text-[5rem] '>Awareness.</h1>
        </div>
        <p className='max-sm:font-normal max-sm:text-xl max-sm:mt-[20px]  font-semibold text-gray-400 text-[1.8rem] tracking-tighter w-[45rem] mb-5 max-md:text-[1.5rem] max-lg:text-center max-lg:mx-auto max-md:w-[35rem] max-sm:text-[1rem] max-sm:w-[20rem]'>
          Get yourself behind the wheel with the aid of our experienced driving instructors. You&apos;ll be able to pass your test with confidence.
        </p>

        <div className='mx-auto max-lg:text-center max-sm:flex-col-reverse' >
          {/*Buttons*/}
          <button className="relative p-0.5 mr-2.5 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-md">
            <span className="w-full h-full animate-text bg-gradient-to-br from-cyan-500 via-[#2ebf91] to-blue-500 group-hover:from-cyan-500 group-hover:via-[#2ebf91] group-hover:to-blue-500 absolute"></span>
            <span className="relative px-6 py-3 max-sm:py-2.5 max-sm:w-full transition-all ease-out bg-zinc-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white text-lg max-sm:text-base">
                Learn more

                {/*info icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className= "inline mx-1 w-6 h-6">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                </svg>

              </span>
            </span>
          </button>

          <button className="relative ml-2.5 inline-flex items-center justify-center px-6 py-3 max-sm:py-2 max-sm:px-4 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] animate-text bg-gradient-to-br from-cyan-500 via-[#2ebf91] to-blue-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white text-xl max-sm:text-lg">
              Start driving

              {/*Academy icon*/}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" inline ml-2 mb-1 w-6 h-6">
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
              </svg>

            </span>
          </button>
        </div>


        {/*Hero image*/}
        <div className=' absolute -z-10 bg-white rounded-tl-[100%] rounded-bl-[100%] rounded-tr-[100%] w-[1100px] h-[1100px] -right-[25rem] -top-[200px] 2xl:-right-[30rem] 2xl:-top-[250px] xl:-top-[250px] xl:-right-[40rem]  max-xl:left-[85%] lg:-top-[300px] max-lg:hidden md:-right-[40rem] max-md:hidden  '/>
        <Image className=' z-[10] object-contain w-70 h-auto absolute top-[15rem] -right-[20rem] max-2xl:left-[65%] max-xl:left-[75%] max-lg:hidden 3xl:left-[60%] 3xl:top-[16rem] 3xl:w-[1200px]' alt='car' priority src={sideview} height={1000} width={1000} />
        <div className='absolute w-[250px] h-[70px] bg-seagreen top-[150px] right-[340px] text-center rounded-lg shadow-[0_0px_12px_1px_rgba(0,0,0,0.3)] shadow-seagreen bg-gradient-to-br from-cyan-500 to-[#2ebf91] max-lg:hidden max-xl:right-[100px] max-2xl:right-[200px] max-2xl:top-[100px] max-xl:h-[50px] max-xl:w-[200px] max-xl:rounded-[5px]'>
            <p className='text-xl mt-4 text-white font-semibold max-xl:text-sm max-xl:mt-2 '><span className='font-bold text-2xl max-xl:text-xl'>10+</span> years experience</p>
        </div>
        <div className='absolute w-[250px] h-[70px] top-[650px] z-20 right-[50px] text-center rounded-lg bg-gradient-to-br from-cyan-500 to-[#2ebf91] shadow-[0_0px_12px_1px_rgba(0,0,0,0.3)] shadow-seagreen border-seagreen border-[1px] max-lg:hidden max-2xl:top-[200px] max-2xl:z-[2] max-xl:h-[50px] max-xl:w-[200px] max-xl:top-[170px] max-xl:rounded-[5px]  '>
            <p className='text-xl mt-5 text-white font-semibold max-xl:text-sm max-xl:mt-3.5'>hundreds of clients</p>
        </div>

        {/*Scroll down arrow*/}
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
    </section>  
    
    )
}

export default Hero