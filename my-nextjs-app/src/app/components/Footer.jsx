
import React from "react";
import {FaPhone, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#17414F] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  ">
          <div className="bg-[#215D72] p-4 rounded-md flex items-center text-center justify-center">
            <FaPhone className="text-2xl text-white mr-4" />
            <div>
              <p className="font-semibold">Phone Number</p>
              <p className="text-sm">+974 3118 1843</p>
            </div>
          </div>

          <div className="bg-[#215D72] p-4 rounded-md flex items-center justify-center">
            <FaEnvelope className="text-2xl text-white mr-4" />
            <div>
              <p className="font-semibold">Email Address</p>
              <p className="text-sm">Elbritchqhr@gmail.com</p>
            </div>
          </div>

          <div className="bg-[#215D72] p-4 rounded-md flex items-center justify-center">
            <FaMapMarkerAlt className="text-2xl text-white mr-4" />
            <div>
              <p className="font-semibold">Office Location</p>
              <p className="text-sm">Ambassador Street, Zone 61</p>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-700 my-8"></div>

        <div className="flex flex-col md:flex-row justify-start items-center md:items-start gap-6">
          <div className="flex-shrink-0">
            <img
              src="/image/image (1).png"
              alt="Elbrit Life Sciences Pvt. Ltd."
              className="h-16"
            />
          </div>

          <div className="text-center md:text-left text-sm max-w-md">
            <p>
              Your health, physical and emotional well-being is important to us.
              We are always by your side and have made it even easier for you to
              find the necessary vitamins.
            </p>
          </div>
        </div>

        <div className="text-center text-xs mt-6 text-gray-300">
          &copy; Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
          400051
        </div>
      </div>
    </footer>
  );
};

export default Footer;
