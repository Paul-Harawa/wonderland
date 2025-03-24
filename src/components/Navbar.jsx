import React, { useState } from "react";
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";
import logoImage from "../assets/logo.png";
import {
  FaCamera,
  FaFacebook,
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
    <div className="flex flex-row fixed w-full">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64 " : "w-0"
        } transition-width duration-300 bg-teal-800 text-white overflow-hidden`}
      >
        <div className="p-4 flex flex-col h-screen">
          <div className="flex flex-row space-x-2  pb-8">
            <FaCamera className="size-7 text-teal-300" />
            <h2 className="text-lg font-tertiarySecond pt-1">Wonderland</h2>
          </div>

          <ul className="pb-10 space-y-2">
            <li className="py-2 p-2 rounded-lg hover:bg-teal-600  cursor-pointer">
              Home
            </li>
            <li className="py-2 p-2 rounded-lg hover:bg-teal-600  cursor-pointer">
              Gallery
            </li>
            <li className="py-2 p-2 rounded-lg hover:bg-teal-600  cursor-pointer">
              Book Us
            </li>
            <li className="py-2 p-2 rounded-lg hover:bg-teal-600  cursor-pointer">
              Contact Us
            </li>
          </ul>

          <div className="flex flex-row flex-grow">
            <div className=" self-end w-full">
              <div className="flex flex-row space-x-2 p-2 justify-evenly  ">
                <FaFacebook className="size-7 text-teal-300 hover:text-teal-200 cursor-pointer" />
                <FaInstagram className="size-7 text-teal-300 hover:text-teal-200 cursor-pointer" />
                <FaYoutube className="size-7 text-teal-300 hover:text-teal-200 cursor-pointer" />
                <FaTwitter className="size-7 text-teal-300 hover:text-teal-200 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-transparent h-screen">
        <button
          onClick={toggleSidebar}
          className="m-4 p-3 bg-teal-600 text-white rounded"
        >
          {isOpen ? <RiCloseFill />  : <RiMenu2Fill />}
        </button>
        <div className="p-4">
          
        </div>
      </div>

      {isOpen ? ""  : <div className="p-3 m-3">
      <h2 className="text-lg font-tertiarySecond text-teal-300">Wonderland</h2>
      </div> }
      




    </div>
  );
};

export default Sidebar;
