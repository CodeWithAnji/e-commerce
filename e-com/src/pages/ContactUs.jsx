import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="mt-24 container mx-auto px-4 md:px-16 lg:px-24 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <p className="text-center text-gray-600 mb-8">
        Have any questions or concerns? Feel free to reach out to us.
      </p>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Contact Info */}
        <div className="md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <div className="flex items-center space-x-4 mb-4">
            <FaPhone className="text-red-600 text-xl" />
            <span className="text-gray-700">+1 234 567 890</span>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <FaEnvelope className="text-red-600 text-xl" />
            <span className="text-gray-700">eshop@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-red-600 text-xl" />
            <span className="text-gray-700">
              500001 e-mart Hyderabad,Telangana- India
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
