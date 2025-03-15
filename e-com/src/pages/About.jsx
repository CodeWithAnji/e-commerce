import React from "react";
import { FaShoppingCart, FaUsers, FaHandHoldingUsd } from "react-icons/fa";

const About = () => {
  return (
    <div className="mt-24 container mx-auto px-4 md:px-16 lg:px-24 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
      <p className="text-center text-gray-600 mb-8">
        Welcome to our e-shop! We are committed to providing the best products
        at unbeatable prices while delivering a seamless shopping experience.
      </p>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Our Mission */}
        <div className="md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
          <FaShoppingCart className="text-red-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700">
            We strive to offer high-quality products that enhance your everyday
            life, all at affordable prices.
          </p>
        </div>

        {/* Our Team */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <FaUsers className="text-red-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Team</h3>
          <p className="text-gray-700">
            Our passionate team works tirelessly to source the best products and
            ensure an excellent shopping experience for our customers.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
          <FaHandHoldingUsd className="text-red-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
          <p className="text-gray-700">
            We offer fast shipping, secure payments, and top-notch customer
            support to make your shopping experience enjoyable.
          </p>
        </div>
      </div>

      {/* Extra Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Join Us Today!</h3>
        <p className="text-gray-600 mb-6">
          Become part of our growing community and enjoy exclusive deals and
          offers.
        </p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default About;
