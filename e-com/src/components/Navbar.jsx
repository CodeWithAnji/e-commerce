import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link to="/">
              <span className="text-red-600 text-3xl">e</span>-shop
            </Link>
          </div>
          <div className="relative flex-1 mx-4">
            <form action="">
              <input
                type="text"
                placeholder="search product"
                className="w-full border py-2 px-4"
              />
              <FaSearch className="absolute top-3 right-3 text-red-500"></FaSearch>
            </form>
          </div>
          <div className="flex items-center space-x-4 ">
            <Link to="/cart" className="relative">
              <div className="relative">
                <FaShoppingCart className="text-xl" />
                {products.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white  font-bold text-xs w-4 h-5 flex items-center justify-center rounded-full">
                    {products.length}
                  </span>
                )}
              </div>
            </Link>
            <button className="hidden md:block">Login | Register</button>
            <button className="block mdd:hidden">
              <FaUser />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-10 py-4 text-md font-bold">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/shop" className="hover:underline">
            Shop
          </Link>
          <Link to="/" className="hover:underline">
            Contact
          </Link>
          <Link to="/" className="hover:underline">
            About
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
