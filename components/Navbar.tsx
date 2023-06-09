import Container from './Container'
import { Nunito } from 'next/font/google'
import Link from 'next/link'


const logo = Nunito({
   subsets: ['latin'],
   variable: '--font-nunito'
  })


const Navbar = () => {
  return (
    <div className=" w-full bg-transparent z-10 ">
        <Container>
            <div className=" flex text-white flex-row justify-between gap-3 md:gap-0">
                {/*Logo will go here*/}
                <Link href='/'>
                  <h2 className={` ${logo.variable} font-mono font-semibold tracking-tighter mt-1 text-4xl max-sm:text-3xl `}>Constantine</h2>
                </Link>
                <div className=" whitespace-nowrap hidden md:flex items-center justify-between mx-auto gap-10 text-xl">
                  <p className='cursor-pointer font-semibold'>Home</p>
                  <p className='cursor-pointer'>About</p>
                  <p className='cursor-pointer'>Pricing</p>
                  <p className='cursor-pointer'>Contact Us</p>
                </div>
                <a href="#_" className="max-sm:text-base text-lg rounded px-5 py-2.5 overflow-hidden group bg-seagreen relative hover:bg-gradient-to-r hover:from-seagreen hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-emerald-400 transition-all ease-out duration-300">
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative whitespace-nowrap">Enroll Now</span>
                </a>
            </div>
        </Container>
    </div>
  )
}

export default Navbar