import Image from 'next/image'
import React from 'react'
import { GoSearch } from "react-icons/go";

const Navbar = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex w-full h-auto justify-between bg-[#f1efef] px-20 py-10'>

          <div className='flex  w-[83px] h-[81px] relative '>
            <Image 
            src="/image/LogoToko.png"
            alt='logo'
            fill={true}
            className='object-cover'/>

        </div>
        <div className='flex text-black items-center'>
          <div>
            <GoSearch size={30}/>
          </div>
        </div>
      </div>
      <div className='bg-white flex h-[40px] justify-center items-center gap-6'>
        <a href='/ProfileToko' className='text-black'>
          Profile Toko
        </a>
        <a href='/ListProduct' className='text-black'>
          Product
        </a>
      </div>
    </div>
  )
}

export default Navbar
