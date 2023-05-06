import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar'
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
      <body className={font.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
