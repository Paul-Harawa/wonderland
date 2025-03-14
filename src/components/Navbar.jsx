import React, { useState } from "react";
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";
import logoImage from "../assets/logo.png";
import {
  FaCamera,
  FaFacebook,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-0"
        } transition-width duration-300 bg-teal-800 text-white h-screen overflow-hidden`}
      >
        <div className="p-4 flex flex-col ">
          <div className="flex flex-row space-x-2  pb-8">
            <FaCamera className="size-8 text-teal-300" />
            <h2 className="text-lg font-tertiarySecond pt-1">Wonderland</h2>
          </div>

          <ul>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Home</li>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Gallery</li>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Book Us</li>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Contacts</li>
          </ul>

          <div className="flex flex-row space-x-2 pb-8 pt-8 bottom-0">
            <FaFacebook className="size-8 text-teal-300 hover:text-teal-200 cursor-pointer" />
            <FaInstagram className="size-8 text-teal-300 hover:text-teal-200 cursor-pointer" />
            <FaYoutube className="size-8 text-teal-300 hover:text-teal-200 cursor-pointer" />
            <FaTwitter className="size-8 text-teal-300 hover:text-teal-200 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 h-screen">
        <button
          onClick={toggleSidebar}
          className="m-4 p-3 bg-teal-600 text-white rounded"
        >
          {isOpen ? <RiCloseFill /> : <RiMenu2Fill />}
        </button>
        <div className="p-4">Main content goes here</div>
      </div>
    </div>
  );
};

export default Sidebar;
