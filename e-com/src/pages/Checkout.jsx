import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Checkout = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(true);

  return (
    <div className="mt-[120px] ">
      <div className="container mx-auto py-6 min-h-96 px-4 md:px-16 lg:px-24 ">
        <div className="flex flex-col md:flex-row justify-between space-x-10 ">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold md-2">CHECKOUT</h3>
            <div className="border p-2 mb-6 my-4 bg-gray-100">
              <div
                className="flex item justify-between"
                onClick={() => setBillingToggle(!billingToggle)}
              >
                <h3 className="text-lg font-semibold mb-2 ">
                  Billling Information
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

            <div className="border p-2 mb-6 my-4 bg-gray-100">
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
                  />
                </div>

                <div className="mt-2">
                  <label className=" text-gray-700">City</label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="w-full px-3 py-2 border"
                  />
                </div>

                <div className="mt-2">
                  <label className=" text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    placeholder="Enter zip code"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>
            </div>
            <div className="border p-2 mb-6 my-4 bg-gray-100">
              <div
                className="flex items-center justify-between"
                onClick={() => setPaymentToggle(!paymentToggle)}
              >
                <h3 className="text-lg font-semibold mb-2 ">
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
                  <input type="radio" className="w-4 h-4" />
                  <label className="text-gray-700">Cash on Delivery</label>
                </div>

                <div className="mt-2 flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4" />
                  <label className="text-gray-700">Debit Card</label>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
