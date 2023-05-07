import Container from './Container'
import { Nunito } from 'next/font/google'

const logo = Nunito({
   subsets: ['latin'],
   variable: '--font-nunito'
  })


const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 text-4xl shadow-md">
        <Container>
            <div className="flex flex-row justify-between gap-3 md:gap-0">
                {/*Logo will go here*/}
                <h2 className={` ${logo.variable} font-mono font-semibold tracking-tighter `}>Constantine</h2>
                <div className="flex whitespace-nowrap invisible md:visible items-center justify-between mx-auto gap-10 text-xl">
                  <p className='cursor-pointer font-semibold'>Home</p>
                  <p className='cursor-pointer'>About</p>
                  <p className='cursor-pointer'>Pricing</p>
                  <p className='cursor-pointer'>Contact Us</p>
                </div>
                <button className='text-base whitespace-nowrap bg-gray-800 text-white px-6 py-2 rounded-md'>
                  Book Now
                </button>
            </div>
        </Container>
    </div>
  )
}

export default Navbar