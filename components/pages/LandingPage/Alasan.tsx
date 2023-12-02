import React from "react";

const Alasan = () => {
  return (
    <div className="flex py-10 px-20 justify-center items-center bg-[#98957f]">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-2xl text-white font-bold">Alasan membeli di toko kami</h1>
        <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
          <div className="flex justify-center items-center flex-col bg-white rounded-xl text-black p-6 text-center gap-2 w-[340px] h-[120px] text-sm font-semibold">
            <h1 className="text-xl font-bold">Harga Termurah & Terjangkau</h1>
            <p className="w-[180px]">Harga Pasti Paling Murah dan Terjangkau</p>
          </div>
          <div className="flex justify-center items-center flex-col bg-white rounded-xl text-black p-6 text-center gap-2 w-[340px] h-[120px] text-sm font-semibold">
            <h1 className="text-xl font-bold">Free Shipping</h1>
            <p className="w-[180px]">Gratis Ongkir Ke Seluruh Indoneisa</p>
          </div>
          <div className="flex justify-center items-center flex-col bg-white rounded-xl text-black p-6 text-center gap-2 w-[340px] h-[120px] text-sm font-semibold">
            <h1 className="text-xl font-bold">Service Diutamakan</h1>
            <p className="w-[180px]">Costumer Satisfaction Is Number One Priority</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alasan;
