import Navbar from '@/components/layouts/Navbar'
import Alasan from '@/components/pages/LandingPage/Alasan'
import HeroSection from '@/components/pages/LandingPage/HeroSection'
import Terlaris from '@/components/pages/LandingPage/Terlaris'
import Image from 'next/image'

export default function Home() {
  return (
<>
<Navbar/>
<HeroSection/>
<Alasan/>
<Terlaris/>
</>
  )
}