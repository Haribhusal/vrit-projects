import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between shadow-xl items-center py-5 px-10">
      <div className="logo">
        <img src="/vite.svg" alt="" />
      </div>
      <nav className="space-x-3">
        <Link to={"/"}>Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="buttons flex items-center gap-5">
        <button className=" h-full relative">
          <div className="count absolute -top-2 -right-3 bg-red-700 rounded-md text-sm p-0 px-1 border-2 border-white text-white rounded">
            2
          </div>
          <FaCartShopping className="text-purple-600 text-2xl" />
        </button>
        <button className="bg-blue-700 text-white px-5 py-2 rounded">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
