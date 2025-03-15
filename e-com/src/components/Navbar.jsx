import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Model from "./Model";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const [isModel, setIsModel] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const products = useSelector((state) => state.cart.products);
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  const openSignup = () => {
    setIsLogin(false);
    setIsModel(true);
  };
  const openLogin = () => {
    setIsLogin(true);
    setIsModel(true);
  };

  return (
    <>
      <nav className="bg-[#A1EEBD] shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link to="/">
              <span className="text-red-600 text-3xl">e</span>-shop
            </Link>
          </div>
          <div className="relative flex-1 mx-4">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="search product"
                className="w-full border py-2 px-4 bg-[#F6D6D6] border-green-400"
                onChange={(e) => setSearch(e.target.value)}
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
            <button
              className="hidden md:block"
              onClick={() => setIsModel(true)}
            >
              Login | Register
            </button>
            <button className="block mdd:hidden">
              <FaUser />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-10 py-4 text-md font-bold">
          <Link to="/" className="group relative">
            Home
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/shop" className="group relative">
            Shop
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/contact" className="group relative">
            Contact
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/about" className="group relative">
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </div>

        <Model isModel={isModel} setIsModel={setIsModel}>
          {isLogin ? (
            <Login openSignup={openSignup} />
          ) : (
            <Register openLogin={openLogin} />
          )}
        </Model>
      </nav>
    </>
  );
};

export default Navbar;
