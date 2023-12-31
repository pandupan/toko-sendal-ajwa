import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="min-h-[200px] w-full bg-[#191717] flex flex-col p-8 lg:p-0">
      <div className="flex flex-col mx-auto lg:flex-row lg:my-auto text-white h-full lg:h-[120px] justify-between lg:px-20 space-y-8 lg:space-y-0">
        <div className=" lg:my-auto">
          <Link href="https://www.google.com/search?q=toko+pd+adwa+sandal&oq=toko+pd+adwa+sandal">
            <h3 className=" w-full lg:max-w-[500px] text-center lg:text-left">
              Jl. Residen Ardiwinangun, Linggajaya, Kec. Mangkubumi, Kab.
              Tasikmalaya, Jawa Barat 46181
            </h3>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center text-center lg:px-20 lg:border-x gap-4 underline-offset-4">
          <h3>Profile Toko</h3>
          <h3>Produk</h3>
        </div>
        <div className=" flex flex-row justify-center items-center gap-8 lg:ml-40 lg:mt-auto mx-auto">
          <Link href="www.instagram.com">
            <FaInstagram size={30} />
          </Link>
          <Link href="https://www.facebook.com/pages/PD.Adwa%20Sandal/183761048302712/">
          <FaFacebook size={30} />
          </Link>
          <Link href="https://wa.me/6281321036536">
            <FaWhatsapp size={30} />
          </Link>
        </div>
      </div>
      <h3 className="text-white items-center justify-center text-center mt-8 lg:mt-0 ">
        © 2023 Toko Sandal Adwa
      </h3>
    </div>
  );
};

export default Footer;
