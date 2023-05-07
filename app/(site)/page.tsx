import Image from 'next/image'
import car from '../assets/vecteezy_vector-side-view-sedan_15582468.jpg'
import Container from '../components/Container'
import Button from '../components/Button'


export default function Home() {
  return (
    <main>
      <Container>
        <div className='text-black-500 text-[7.5rem] font-bold tracking-tighter mt-20 whitespace-nowrap max-md:text-center max-md:text-[5rem] max-sm:text-[3.5rem]'>
          <h1 >Drive with </h1>
          <h1 className='text-seagreen text-[9rem] -mt-20 -mb-5 max-md:text-[7rem] max-md:text-center max-md:-mt-14 max-sm:text-[5rem] max-sm:-mt-10 '>Awareness</h1>
        </div>
        <p className='font-semibold text-slate-500 text-[1.8rem] tracking-tighter w-[45rem] mb-5 max-md:text-[1.5rem] max-md:text-center max-md:mx-auto max-md:w-[35rem] max-sm:text-[1rem] max-sm:w-[20rem]'>
          Get yourself behind the wheel with the aid of our experienced driving instructors. You'll be able to pass your test with confidence.
        </p>

        {/*Button*/}

        
        <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-seagreen bg-seagreen rounded-lg shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-seagreen group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white text-lg transition-all duration-300 transform group-hover:translate-x-full ease">Start Driving</span>
          <span className="relative invisible">Button Text</span>
        </a>

      </Container>
    </main>
  )
}

