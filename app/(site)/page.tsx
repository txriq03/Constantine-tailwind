import Image from 'next/image'
import sideview from '../assets/sideviewps.png'
import speedsign from '../assets/speedsign.png'
import { Container, Hero, About, Pricing, Contact, Join } from '@/components';


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

