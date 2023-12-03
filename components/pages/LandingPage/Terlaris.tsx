'use client'

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { produk } from "@/lib/store/products";

const Terlaris = () => {
  return (
    <div className="flex py-10 px-20 justify-center items-center bg-[#98957f]">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-2xl text-white font-bold">Produk Terlaris Kami</h1>
        <div className="flex w-full flex-wrap flex-row gap-10 justify-center items-center">
            {produk.map((product, index)=>(
              <div 
                className="flex flex-col bg-[#fafaf5] rounded-xl border-2 text-black gap-2 w-full sm:w-[340px] h-[350px] text-sm font-semibold"
                key={index}
              >
                <Link href={product.url2}>
                  <div className="relative w-full h-[240px]  ">
                    <Image
                      src={product.gambar}
                      alt="swallow"
                      fill={true}
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                  <div className=" px-4 flex flex-col">
                    <h1 className="text-normal font-semibold">{product.nama}</h1>
                    <p className="text-[#aca785] -mt-1">{product.harga}</p>
                    <p className="text-[#999997] mt-4 text-xs">
                      {product.tagline}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>a
      </div>
    </div>
  );
};

export default Terlaris;
