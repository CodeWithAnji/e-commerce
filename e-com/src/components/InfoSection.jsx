import React from "react";
import {
  FaMoneyBillWave,
  FaLock,
  FaTag,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
  ];

  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4  text-center cursor-pointer  border rounded-lg shadow-sm
            transform transition-transform duration-300 hover:scale-105 "
          >
            {item.icon}
            <h3 className="text-md  font-bold mt-4">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
