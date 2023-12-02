import React from 'react'
import Image from 'next/image'


const ProdukLain = () => {
  return (
<div className="flex py-10 px-20 justify-center items-center bg-white border-t-2">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-2xl text-black font-bold">Produk Lain</h1>
        <div className="flex flex-row gap-10 justify-center items-center flex-wrap lg:flex-nowrap">
          <div className="flex flex-col bg-[#fafaf5] rounded-xl border-2 text-black gap-2 w-[340px] h-[350px] text-sm font-semibold">
            <div className="relative w-full h-[240px]  ">
              <Image
                src="/image/SwallowTL.png"
                alt="swallow"
                fill={true}
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className=" px-4 flex flex-col">
              <h1 className="text-lg font-semibold">SANDAL JEPIT</h1>
              <p className="text-[#aca785] -mt-1">Rp. 10.000</p>
              <p className="text-[#999997] mt-4 text-xs">DEWASA BAHAN BERKUALITAS</p>
            </div>
          </div>
          <div className="flex flex-col bg-[#fafaf5] rounded-xl border-2 text-black gap-2 w-[340px] h-[350px] text-sm font-semibold">
            <div className="relative w-full h-[240px]  ">
              <Image
                src="/image/SandalGunung.png"
                alt="swallow"
                fill={true}
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className=" px-4 flex flex-col">
              <h1 className="text-lg font-semibold">SANDAL GUNUNG ERGER DEWASA</h1>
              <p className="text-[#aca785] -mt-1">Rp. 23.000</p>
              <p className="text-[#999997] mt-4 text-xs">DEWASA BAHAN BERKUALITAS</p>
            </div>
          </div>
          <div className="flex flex-col bg-[#fafaf5] rounded-xl border-2 text-black gap-2 w-[340px] h-[350px] text-sm font-semibold">
            <div className="relative w-full h-[240px]  ">
              <Image
                src="/image/SandalPriaBarnet.png"
                alt="swallow"
                fill={true}
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className=" px-4 flex flex-col">
              <h1 className="text-lg font-semibold">SANDAL PRIA MODEL BARNET</h1>
              <p className="text-[#aca785] -mt-1">Rp. 47.000</p>
              <p className="text-[#999997] mt-4 text-xs">BAHAN KULIT BERKUALITAS DAN TERMURAH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProdukLain
