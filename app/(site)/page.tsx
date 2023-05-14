import Image from 'next/image'
import sideview from '../assets/sideviewps.png'
import speedsign from '../assets/speedsign.png'
import Container from '../components/Container'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Pricing from '../components/Pricing'
import Join from '../components/Join'

export default function Home() {
  return (
    <main className='relative'>
      <Container>
        <Hero/>
        <About/>
        <Pricing/>
        <Contact/>
        <Join/>
      </Container>
    </main>
  )
}

