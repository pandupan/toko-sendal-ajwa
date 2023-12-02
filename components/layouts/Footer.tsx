import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='min-h-[250px] bg-[#191717] flex flex-col'>
      <div className='flex flex-row my-auto text-white h-[120px] justify-between px-20'>
        <div className=' my-auto'>
        <h3 className='max-w-[500px] '>
        Jl. Residen Ardiwinangun, Linggajaya, Kec. Mangkubumi, 
Kab. Tasikmalaya, Jawa Barat 46181
        </h3>
        </div>
        <div className='flex flex-col items-center justify-center text-center px-20 border-x '>
          <h3>
            Profile Toko
          </h3>
          <h3>
            Produk
          </h3>
        </div>
        <div className=' flex flex-row gap-8 ml-40 my-auto mx-auto'>
        <FaInstagram size={30}/>
        <FaFacebook size={30}/>
        <FaWhatsapp size={30}/>
        </div>
      </div>
      <h3 className='text-white items-center justify-center text-center '>
      © 2023 Toko Sandal Adwa
      </h3>
    </div>
  )
}

export default Footer
