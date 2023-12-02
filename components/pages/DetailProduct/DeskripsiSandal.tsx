import Image from "next/image";
import React from "react";

const DeskripsiSandal = () => {
  return (
    <div className="flex flex-row justify-center items-center py-28 px-8">
      <div className="flex flex-col">
        <div className="flex flex-row gap-20 justify-center items-center">
          <div className="relative w-[455px] h-[455px]">
            <Image
              src="/image/SandalGunung.png"
              alt="sandal"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 items-center mx-auto">
            <h1 className="text-2xl font-bold border-b-2 pb-4">SANDAL GUNUNG ERGER DEWASA</h1>
            <h2 className="text-[#aca785] font-semibold text-4xl">RP 23.000</h2>
            <div className="border  rounded-full">
            <a href="/" title="wa" className="bg-[#aaa896] text-white p-2 rounded-lg">
                Kontak ke Whatsapp
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-[#6d6d6d] mt-4">
          <div>
            <h3>Sandal gunung dewasa kuat anti slip</h3>
            <p>Bahan : karet dan spons</p>
            <p>Sole : Karet</p>
            <p>Size : Standar</p>
          </div>
          <div>
            <p>No 38 - 25,5 cm</p>
            <p>No 39 - 26 cm</p>
            <p>No 40 - 26,5 cm</p>
            <p>No 41 - 27 cm</p>
            <p>No 42 - 27,5 cm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeskripsiSandal;
