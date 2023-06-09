import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from '../components/Navbar'
import Head from 'next/head'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Constantine',
  description: 'Drive with Awareness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">           
      <body className='bg-[#0E0E0E]'>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
