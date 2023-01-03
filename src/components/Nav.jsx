import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="mx-48 pt-12">
      <nav className="flex items-center justify-between text-black">
        <div className="flex gap-x-12">
          <a>LAPTOPS</a>
          <a>BUILD YOUR PC</a>
        </div>

        <div className="flex items-center gap-x-6">
          <button className="py-2 px-6 rounded-3xl border-2 border-blue-600 text-[#0156FF] text-sm">
            Our Deals
          </button>
          <AiOutlineSearch />
          <AiOutlineShoppingCart className="-scale-x-100" />
        </div>
      </nav>
      <hr className="text-gray-300 my-6"></hr>
    </div>
  );
};

export default Nav;
