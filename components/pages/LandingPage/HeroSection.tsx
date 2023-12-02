import { kaisei } from '@/lib/fonts/font'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-[501px] w-full bg-[#ccc8aa] flex overflow-hidden'>
      <div className='relative flex flex-row justify-between '>
        <div className='flex flex-row flex-wrap sm:px-20 xl:px-40 my-auto z-20'>
          <div className=''>
          <h1 className='text-bold text-white text-7xl font-black'>
            <span className={kaisei.className}>Bukan Sekedar Sandal Biasa</span>
          </h1>
          <h2 className='text-semibold text-lg font-black text-white'>
            <span className={kaisei.className}>Sandal berkualitas dengan harga terjangkau</span>
          </h2>

          </div>
        </div>
        <div className='overflow-hidden relative h-[600px] -ml-40'>
        <div className='w-[853px] h-[599px]'>
          <Image 
          src="/image/Swallow.png"
          alt='swallow'
          fill={true}
          className='object-cover'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
