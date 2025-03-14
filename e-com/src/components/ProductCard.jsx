import React from "react";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product, index }) => {
  const dispatch = useDispatch();

  const handleAddtoCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("Before");
    dispatch(addToCart(product));
    console.log("after");
    alert("Product Added Succesfully!");
  };
  return (
    <div key={index} className="bg-white p-4 shadow rounded relative border">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.price}</p>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
      <button
        className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 
      group font-bold cursor-pointer text-white text-sm rounded-full hover:w-32 hover:bg-red-700"
        onClick={(e) => handleAddtoCart(e, product)}
      >
        <span className="group-hover:hidden">+</span>
        <span className="hidden group-hover:block">Add to cart</span>
      </button>
    </div>
  );
};

export default ProductCard;
