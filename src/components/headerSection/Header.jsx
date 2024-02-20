import React from "react";
import logo from "../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotificationsCircle } from "react-icons/io5";
import { FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import Help from "../pages/Help";

const Header = () => {
  const helpHandlerModal = () => {
    let data = document.querySelector(".targetHandler");
    data.style.transform === "scale(1)" ? (data.style.transform = "scale(0)") : (data.style.transform = "scale(1)");
  };
  const modalHandler = () => {
    let handler = document.getElementById("navbar");
    if (handler) {
      handler.style.left = "10px";
    }
  };

  return (
    <>
      <div className="flex justify-between mx-auto px-5 py-2 shadow-lg bg-white shadow-gray-600 sticky top-0 z-50">
        <ul className="flex justify-center gap-4 items-center">
          <li className="h-16 w-full hidden sm:block md:block lg:block xl:block">
            <img src={logo} alt="" className="w-full h-full" />
          </li>
          <li className="text-4xl cursor-pointer" onClick={modalHandler}>
            <GiHamburgerMenu />
          </li>
        </ul>
        <ul className="flex justify-center gap-3 items-center">
          <li onClick={helpHandlerModal} className="cursor-pointer text-3xl">
            <FaQuestionCircle />
            <div className="absolute z-50 right-2 top-24 rounded-lg bg-white text-lg overflow-hidden  duration-500 scale-0 origin-top targetHandler">
              <Help />
            </div>
          </li>
          <li className="cursor-pointer text-4xl">
            <IoNotificationsCircle />
          </li>
          <li className="cursor-pointer text-5xl ml-2 text-red-600 relative">
            <FaUserCircle />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
