"use client";

import Image from "next/image";
import { produk } from "@/lib/store/products";
import { usePathname } from "next/navigation";
import Link from "next/link";

type DetailProdukPageProps = { params: { slug: string } };
type UsePathnameType = () => string;

const DetailProduk = (props: DetailProdukPageProps) => {
  const { params } = props;
  console.log(params);

  const pathname: string = (usePathname as UsePathnameType)();
  console.log(pathname);

  const { slug } = params;
  console.log(slug);

  const tampilDetail = produk.find((product) => product.id === slug);
  console.log(tampilDetail?.nama);

  return (
    <>
      <div className="flex flex-row justify-center items-center py-28 px-8">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-20 justify-center items-center">
            <div className="relative w-[300px] h-[260px] sm:w-[600px] sm:h-[455px]">
              {tampilDetail?.gambar ? (
                <Image
                  src={tampilDetail.gambar}
                  alt="sandal"
                  fill={true}
                  className="object-cover"
                />
              ) : (
                <div>Gagal Menampilkan Image</div>
              )}
            </div>
            <div className="flex flex-col gap-4 items-center mx-auto px-2">
              <h1 className="text-2xl font-bold border-b-2 pb-4">
                {tampilDetail?.nama}
              </h1>
              <h2 className="text-[#aca785] font-semibold text-4xl">
                {tampilDetail?.harga}
              </h2>
              <div className="border  rounded-full">
                <a
                  href="https://wa.me/6281321036536"
                  title="wa"
                  className="bg-[#aaa896] text-white p-2 rounded-lg"
                >
                  Kontak ke Whatsapp
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 text-[#6d6d6d] mt-4 px-2">
            <div>
              <h3>{tampilDetail?.tagline}</h3>
              <p>Bahan : {tampilDetail?.bahan}</p>
              <p>Sole : {tampilDetail?.sole}</p>
              <p>Size : {tampilDetail?.size}</p>
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
      <div className="flex w-full py-10 px-2 sm:px-20 justify-center items-center bg-white border-t-2">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-2xl text-black font-bold">Produk Lain</h1>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;
