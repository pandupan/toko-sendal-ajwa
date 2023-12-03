"use client";

import Image from "next/image";
import React from "react";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import {
  FaSun,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";
import { RiMoonFill } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      {/* Navbar Desktop */}
      <div className="hidden lg:flex flex-col">
        <div className="flex w-full h-auto justify-between bg-[#f1efef] px-20 py-10">
          <a
            href="/"
            title="logo"
            className="flex  w-[83px] h-[81px] relative "
          >
            <Image
              src="/image/LogoToko.png"
              alt="logo"
              fill={true}
              className="object-cover"
            />
          </a>
          <div className=" flex h-[40px] text-xl my-auto justify-center items-center gap-6">
            <a href="/ProfileToko" className="text-black">
              Profile Toko
            </a>
            <a href="/DaftarProduk" className="text-black">
              Produk
            </a>
          </div>
        </div>
      </div>
      {/* End Navbar Destktop */}

      {/* Hamburger On Mobile  */}
      <div className="fixed flex justify-between items-center w-full h-[83px] lg:hidden border-b border-theme px-[25px] bg-white z-10">
        <Link href="/">
          <div className="relative w-[50px] h-[50px] py-auto">
            <Image src="/image/LogoToko.png" alt="logo" fill={true} />
          </div>
        </Link>
        {nav ? (
          <AiOutlineClose
            size={30}
            onClick={() => setNav(!nav)}
            className="text-theme"
          />
        ) : (
          <AiOutlineMenu
            size={30}
            onClick={() => setNav(!nav)}
            className="text-theme"
          />
        )}
      </div>
      {/* End Hamburger On Mobile  */}

      {/* Dropdown Menu Mobile */}
      <div
        className={
          nav
            ? "fixed lg:hidden top-[83px] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-700 z-[80]"
            : "fixed lg:hidden top-[-200%] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-700 z-[80]"
        }
      >
        <div className="w-full h-full px-[25px]">
          <ul
            className="space-y-5 text-lg my-6 px-1"
            onClick={() => setNav(!nav)}
          >
            <li>
              <Link href="/ProfileToko">Profile Toko</Link>
            </li>
            <li>
              <Link href="/DaftarProduk">Daftar Produk</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End Dropdown Menu Mobile */}
    </>
  );
};

export default Navbar;
