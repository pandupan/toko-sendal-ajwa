'use client'

import { Card } from "@/components/ui/card";
import { produk } from "@/lib/store/products";
import Image from "next/image";

interface CardProductsProps {
  searchQuery: string;
}

export const CardProducts: React.FC<CardProductsProps> = ({ searchQuery }) => {
  
  const filteredProducts = produk.filter((product) =>
    product.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex w-full h-full flex-wrap justify-center items-center gap-[64px] p-6">
      {filteredProducts.map((product, index) => (
        <Card
          key={index}
          className="w-full sm:w-[395px] min-h-[420px] rounded-[24px] border border-[#AAA896] bg-[#fafaf5]"
        >
          <div className="relative mx-auto w-[95%] sm:w-[370px] mt-1 min-h-[250px] rounded-xl">
            <Image src={product.gambar} alt="image" fill={true} />
          </div>
          <div className="mt-16 px-4 space-y-2 text-sm tracking-wider">
            <p className="font-bold">{product.nama}</p>
            <p className="text-[#AAA896] font-semibold">{product.harga}</p>
            <p className="text-gray-400 font-medium">{product.tagline}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
