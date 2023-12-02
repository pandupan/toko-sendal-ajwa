'use client'

import DaftarProduk from "@/components/pages/ProdukPage/DaftarProduk"
import React, { useState } from "react";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  return (
    <div>
      <DaftarProduk  searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </div>
  )
}

export default Page
