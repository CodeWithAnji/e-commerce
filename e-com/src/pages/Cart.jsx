import React, { useState } from "react";
import { useSelector } from "react-redux";
import Empty from "../assets/images/empty1.jpg";
import { FaTrashAlt } from "react-icons/fa";
import Model from "../components/Model";
import ChangeAdress from "../components/ChangeAdress";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
useNavigate;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main street 509324");
  const [isModel, setIsModel] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-[120px]">
        <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
          {cart.products.length > 0 ? (
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-red-600">
                SHOPPING CART
              </h3>

              {/* Flex Container to Align Both Sections */}
              <div className="flex flex-col md:flex-row justify-between items-start space-x-10 mt-4">
                {/* Shopping Cart Section */}
                <div className="md:w-2/3">
                  <div className="flex justify-between border-b items-center mb-2 text-xs font-bold">
                    <p>PRODUCTS</p>
                    <div className="flex space-x-12">
                      <p>PRICE</p>
                      <p>QUANTITY</p>
                      <p>SUBTOTAL</p>
                      <p>REMOVE</p>
                    </div>
                  </div>
                  <div>
                    {cart.products.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center justify-between p-3 border-b"
                      >
                        <div className="md:flex items-center space-x-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 object-contain rounded"
                          />
                          <div className="flex-1 ml-4">
                            <h3 className="text-lg font-semibold">
                              {product.name}
                            </h3>
                          </div>
                        </div>
                        <div className="flex space-x-12 items-center">
                          <p>${product.price}</p>
                          <div className="flex items-center justify-center border">
                            <button
                              className="text-xl font-bold px-1.5 border-r hover:bg-gray-300"
                              onClick={() =>
                                dispatch(decreaseQuantity(product.id))
                              }
                            >
                              -
                            </button>
                            <p className="text-md px-1.5 border-r">
                              {product.quantity}
                            </p>
                            <button
                              className="text-xl font-bold px-1.5 border-r hover:bg-gray-300"
                              onClick={() =>
                                dispatch(increaseQuantity(product.id))
                              }
                            >
                              +
                            </button>
                          </div>
                          <p className="text-md">
                            ${(product.quantity * product.price).toFixed(2)}
                          </p>
                          <button className="text-xl px-1 text-green-600 border-1 hover:text-red-600">
                            <FaTrashAlt
                              onClick={() =>
                                dispatch(removeFromCart(product.id))
                              }
                            />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cart Total Section */}
                <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border self-start">
                  <h3 className="text-lg font-semibold mb-5">CART TOTAL</h3>

                  <div className="flex justify-between mb-5 border-b pb-1">
                    <span>Total Items:</span>
                    <span>{cart.totalQuantity}</span>
                  </div>

                  <div className="mb-4 border-b pb-2">
                    <p className="font-bold"> Shipping:</p>
                  </div>

                  <p className="font-semibold ml-2">
                    Shipping To: <span className="text-sm ">{address}</span>
                  </p>

                  <button
                    className="text-blue-500 hover:underline mt-1 ml-2"
                    onClick={() => setIsModel(true)}
                  >
                    Change Address
                  </button>

                  {/* Total Price */}
                  <div className="flex justify-between mt-5 text-lg font-semibold">
                    <span>Total Price:</span>
                    <span>${cart.totalPrice}</span>
                  </div>

                  {/* Checkout Button */}
                  <button
                    className="w-full mt-6 bg-red-600 text-white py-3 rounded-lg hover:bg-red-800"
                    onClick={() => navigate("/checkout")}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
              <Model isModel={isModel} setIsModel={setIsModel}>
                <ChangeAdress
                  setAddress={(newAddr) => setAddress(newAddr)}
                  setIsModel={setIsModel}
                />
              </Model>
            </div>
          ) : (
            <div className="mt-[100px] flex items-center justify-center">
              <img className="w-[400px]" src={Empty} alt="Empty Cart" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
