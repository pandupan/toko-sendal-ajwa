'use client';

import { Card } from "@/components/ui/card"
import { produk } from "@/lib/store/products"
import Image from "next/image"
 
export function CardProducts() {

  return (
    <div className="flex w-full h-full flex-wrap justify-center items-center gap-[64px] p-6">
        {produk.map((produk : any,index : any)=>(
          <Card key={index} className="w-full sm:w-[395px] min-h-[420px] rounded-[24px] border border-[#AAA896] bg-[#fafaf5]">
            <div className="relative mx-auto w-[95%] sm:w-[370px] mt-1 min-h-[250px] rounded-xl">
              <Image
                src={produk.gambar}
                alt="image"
                fill={true}
              />
            </div>
            <div className="mt-16 px-4 space-y-2 text-sm tracking-wider">
                <p className="font-bold">{produk.nama}</p>
                <p className="text-[#AAA896] font-semibold">{produk.harga}</p>
                <p className="text-gray-400 font-medium">{produk.tagline}</p>
            </div>

          </Card>
        ))}
    </div>
  )
}