import React from "react";
import { LiaStarSolid } from "react-icons/lia";

const Ulasan = () => {
  return (
    <div className="flex py-10 px-20 justify-center items-center bg-[#98957f]">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-2xl font-bold">Ulasan</h1>
        <div className="container flex flex-row gap-4 justify-center items-center flex-wrap">
          <div className="flex justify-center items-center flex-col bg-white rounded-xl text-black p-6 text-center gap-2 w-auto h-auto text-sm font-semibold">
            <div className="text-xl flex flex-row font-bold">
              <LiaStarSolid size={30} />
              <LiaStarSolid size={30} />
              <LiaStarSolid size={30} />
              <LiaStarSolid size={30} />
              <LiaStarSolid size={30} />
            </div>
            <p>
              Saya sangat puas dengan sandal yang saya beli dari toko online
              ini. Sandalnya nyaman, ringan, dan sesuai dengan ukuran kaki saya.
              Bahan kulitnya juga berkualitas dan tidak mudah rusak. Pengiriman
              barangnya cepat dan rapi, tidak ada kerusakan atau kekurangan saat
              saya terima. Saya merekomendasikan toko online ini bagi siapa saja
              yang mencari sandal berkualitas dengan harga terjangkau.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ulasan;
