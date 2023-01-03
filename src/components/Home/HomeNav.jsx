import React from 'react';
import { AiFillInstagram, AiFillFacebook, AiOutlineShoppingCart } from "react-icons/ai";

const HomeNav = () => {
  return (
    <nav className="mx-48 py-12 flex items-center justify-between">
      <div className="flex gap-x-12">
            <a>BEST SELLERS</a>
            <a>REVIEWS</a>
            <a>FINANCING</a>
      </div>

      <div className="flex items-center gap-x-6">
         <div className="flex gap-x-3">
          <AiFillFacebook />
          <AiFillInstagram />
          </div>
          <button className="py-2 px-8 rounded-3xl bg-white text-[#101E7F] text-sm">BUILD YOUR PC</button>
         <AiOutlineShoppingCart className="-scale-x-100"/>
        </div>
    </nav>
  )
}

export default HomeNav