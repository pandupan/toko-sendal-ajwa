import { kaisei } from "@/lib/fonts/font";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="mt-[83px] lg:mt-0 h-[501px] w-full bg-[#ccc8aa] flex overflow-hidden">
      <div className="relative flex flex-col sm:flex-row justify-between ">
        <div className="flex flex-row flex-wrap sm:px-20 xl:px-40 my-auto p-4 sm:p-0">
          <div className="space-y-10">
            <h1 className="text-bold text-white text-4xl sm:text-5xl lg:text-7xl font-black">
              <span className={kaisei.className}>
                Bukan Sekedar Sandal Biasa
              </span>
            </h1>
            <h2 className="text-semibold text-lg font-black text-white">
              <span className={kaisei.className}>
                Sandal berkualitas dengan harga terjangkau
              </span>
            </h2>
          </div>
        </div>
        <div className="overflow-hidden relative h-[600px] sm:-ml-40">
          <div className="w-[200px] h-[180px] sm:w-[853px] sm:h-[599px]">
            <Image
              src="/image/Swallow.png"
              alt="swallow"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
