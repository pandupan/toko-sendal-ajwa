import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Toko Sendal Ajwa',
  description: 'Toko ini menyediakan berbagai macam sandal dari mulai sandal anak Wanita , sandal anak pria , sandal tanggung anak Wanita , sandal tanggung pria , dan juga sandal dewasa pria dan Wanita , model sandal di toko ini sangat beragam dari mulai sandal untuk remaja hingga sandal untuk orang tua juga tersedia lengkap di toko ini.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='overflow-hidden'>
        <Navbar/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  )
}
