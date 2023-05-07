import Image from 'next/image'
import car from '../assets/car.png'
import sideview from '../assets/sideview.png'
import Container from '../components/Container'

export default function Home() {
  return (
    <main className='relative overflow-hidden'>
      <Container>
        <div className='text-white text-[7.5rem] font-bold tracking-tighter mt-20 whitespace-nowrap max-3xl:mt-5 max-md:text-center max-md:text-[5rem] max-sm:text-[3.5rem]'>
          <h1 >Drive with </h1>
          <h1 className='bg-gradient-to-r from-seagreen to-blue-500 bg-clip-text text-transparent bg-[400%] text-[9rem] -mt-20 -mb-5 max-md:text-[7rem] max-md:text-center max-md:-mt-14 max-sm:text-[5rem] max-sm:-mt-10 '>Awareness</h1>
        </div>
        <p className='font-semibold text-slate-300 text-[1.8rem] tracking-tighter w-[45rem] mb-5 max-md:text-[1.5rem] max-md:text-center max-md:mx-auto max-md:w-[35rem] max-sm:text-[1rem] max-sm:w-[20rem]'>
          Get yourself behind the wheel with the aid of our experienced driving instructors. You&apos;ll be able to pass your test with confidence.
        </p>

        {/*Button*/}
        <a href="#_" className="relative mb-20 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-seagreen bg-seagreen rounded-lg shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-seagreen group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white text-lg transition-all duration-300 transform group-hover:translate-x-full ease">Start Driving</span>
          <span className="relative invisible">Button Text</span>
        </a>
        <Image className='object-contain absolute top-60 -right-80' alt='car' src={sideview} height={1000} width={1000} />
      </Container>
    </main>
  )
}

