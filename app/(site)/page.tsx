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
          <h1 className='animate-text bg-gradient-to-r from-cyan-500 via-[#2ebf91] to-blue-500 bg-clip-text text-transparent bg-[400%] text-[9rem] -mt-20 -mb-5 max-md:text-[7rem] max-md:text-center max-md:-mt-14 max-sm:text-[5rem] max-sm:-mt-10'>Awareness.</h1>
        </div>
        <p className='font-semibold text-slate-300 text-[1.8rem] tracking-tighter w-[45rem] mb-5 max-md:text-[1.5rem] max-md:text-center max-md:mx-auto max-md:w-[35rem] max-sm:text-[1rem] max-sm:w-[20rem]'>
          Get yourself behind the wheel with the aid of our experienced driving instructors. You&apos;ll be able to pass your test with confidence.
        </p>

        {/*Button*/}
        <a href="#_" className="relative p-0.5 mb-5 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-md">
          <span className="w-full h-full animate-text bg-gradient-to-br from-cyan-500 via-[#2ebf91] to-blue-500 group-hover:from-cyan-500 group-hover:via-[#2ebf91] group-hover:to-blue-500 absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-zinc-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white text-lg">Learn more</span>
          </span>
        </a>
        
        <Image className='object-contain absolute top-60 -right-[20rem] max-2xl:-right-[30rem] max-xl:-right-[40rem] max-lg:-right-[50rem]' alt='car' src={sideview} height={1000} width={1000} />
      </Container>
    </main>
  )
}

