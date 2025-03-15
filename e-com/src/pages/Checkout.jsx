import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const cart = useSelector((state) => state.cart);

  return (
    <div className="mt-[120px] ">
      <div className="container mx-auto py-6 min-h-96 px-4 md:px-16 lg:px-24 ">
        <div className="flex flex-col md:flex-row justify-between space-x-10 ">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-2">CHECKOUT</h3>
            <div className="border p-2 mb-6 my-4 ">
              <div
                className="flex item justify-between"
                onClick={() => setBillingToggle(!billingToggle)}
              >
                <h3 className="text-lg font-semibold mb-2 ">
                  Billing Information
                </h3>
                {billingToggle ? (
                  <FaAngleDown className="text-xl  cursor-pointer hover:text-red-600 " />
                ) : (
                  <FaAngleUp className="text-xl cursor-pointer hover:text-red-600 " />
                )}
              </div>
              <div className={`${billingToggle ? "" : "hidden"}`}>
                <div className="mt-2">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full px-3 py-2 border"
                  />
                </div>
                <div className="mt-2">
                  <label className=" text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full px-3 py-2 border"
                  />
                </div>
                <div className="mt-2">
                  <label className=" text-gray-700">Phone</label>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>
            </div>
            <div className="border p-2 mb-6 my-4 ">
              <div
                className="flex item justify-between"
                onClick={() => setShippingToggle(!shippingToggle)}
              >
                <h3 className="text-lg font-semibold mb-2 ">
                  Shipping Information
                </h3>
                {shippingToggle ? (
                  <FaAngleDown className="text-xl  cursor-pointer  hover:text-red-600" />
                ) : (
                  <FaAngleUp className="text-xl cursor-pointer  hover:text-red-600" />
                )}
              </div>
              <div className={`${shippingToggle ? "" : "hidden"}`}>
                <div className="mt-2">
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className="w-full px-3 py-2 border"
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mt-2">
                  <label className=" text-gray-700">City</label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="w-full px-3 py-2 border"
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, city: e.target.value })
                    }
                  />
                </div>
                <div className="mt-2">
                  <label className=" text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    placeholder="Enter zip code"
                    className="w-full px-3 py-2 border"
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, zip: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="border p-2 mb-6 my-4 ">
              <div
                className="flex items-center justify-between"
                onClick={() => setPaymentToggle(!paymentToggle)}
              >
                <h3 className="text-lg font-semibold mb-2">
                  Payment Information
                </h3>
                {paymentToggle ? (
                  <FaAngleDown className="text-xl cursor-pointer hover:text-red-600" />
                ) : (
                  <FaAngleUp className="text-xl cursor-pointer hover:text-red-600" />
                )}
              </div>
              <div className={`${paymentToggle ? "" : "hidden"}`}>
                <div className="mt-2 flex items-center space-x-2">
                  <input
                    type="radio"
                    className="w-4 h-4"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <label className="text-gray-700">Cash on Delivery</label>
                </div>
                <div className="mt-2 flex items-center space-x-2 mb-4">
                  <input
                    type="radio"
                    className="w-4 h-4"
                    name="payment"
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                  />
                  <label className="block ml-2 text-gray-700">Debit Card</label>
                </div>
                {paymentMethod === "dc" && (
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold mb-4">
                      Debit Card Information
                    </h3>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Card Number
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Card Number"
                        className="border p-2 w-full rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Card Holder Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Card Holder Name"
                        className="border p-2 w-full rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Expire Date
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Expire Date"
                          className="border p-2 w-full rounded"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="Enter CVV"
                          className="border p-2 w-full rounded"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div>
              {cart.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center space-x-4 mb-4"
                >
                  <img
                    src={product.image}
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p>
                      ${product.price} × {product.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between font-semibold text-lg">
              <span>Total Price:</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
            <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
