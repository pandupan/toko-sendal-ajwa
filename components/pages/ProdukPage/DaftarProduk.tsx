import { CardProducts } from "@/components/core/CardProducts";
import { LuSearch } from "react-icons/lu";

const DaftarProduk = () => {
    
  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] ">
      <div className="flex flex-col justify-center items-center w-full gap-6 my-6">
        <h1 className="font-bold text-xl text-zinc-700">Daftar Produk</h1>
        <div className="flex items-center justify-center w-full gap-2 px-4">
          <input
            type="text"
            placeholder="Pencarian Produk"
            className="w-full lg:max-w-[900px] h-[35px] border border-[#AAA896] rounded-md px-4"
          />
          <button title="search">
            <LuSearch size={28} className="text-[#AAA896]"/>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-10">
        <CardProducts/>
        <CardProducts/>
        <CardProducts/>
        <CardProducts/>
        <CardProducts/>
      </div>
    </div>
  )
}

export default DaftarProduk
