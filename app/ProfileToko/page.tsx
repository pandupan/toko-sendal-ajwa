import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex py-10 px-20 justify-center items-center bg-[#98957f]">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-2xl font-bold text-white">Profile Toko</h1>
        <div className="container flex flex-col gap-4 justify-center items-center flex-wrap">
          <div className="flex justify-center items-center flex-col bg-[#fafaf5] rounded-xl text-black p-6 text-center w-auto h-auto text-sm">
           <div className="flex flex-row gap-10">
           <div>
            <div className="relative w-[375px] h-[374px]">
              <Image
                src="/image/ilustrasitoko.png"
                alt="ilustrasitoko"
                fill={true}
                className="object-cover"
              />
            </div>

           </div>
            <div className="flex flex-col text-justify gap-4 ">
            <div>
              <h1 className="text-xl font-semibold">
                Deskripsi
              </h1>
              <p className="text-lg">
                Toko ini menyediakan berbagai macam sandal dari mulai sandal
                anak Wanita , sandal anak pria , sandal tanggung anak Wanita ,
                sandal tanggung pria , dan juga sandal dewasa pria dan Wanita ,
                model sandal di toko ini sangat beragam dari mulai sandal untuk
                remaja hingga sandal untuk orang tua juga tersedia
                lengkap di toko ini.
              </p>
              </div>
              <div>
              <h1 className="text-xl font-semibold">Alamat</h1>
              <p className="text-lg ">
                Toko sandal pd adwa merupakan toko sandal yang berada di
                tasikmalaya yang telah berdiri dari tahun 2009 yang belokasi di
                Jl. Residen Ardiwinangun, Ruko blok 7 No 12 , Pasar Cikurubuk
                ,Linggajaya, Kec. Mangkubumi, Kota Tasikmalaya, Jawa Barat
                46181.
              </p>
              </div>
            </div>
           </div>
           <div className="mt-4">
            <a href="/ListProduct" title="listproduct" className="bg-[#aaa896] px-6 py-3 font-medium rounded-lg text-white">
              Lanjut ke Produk
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
