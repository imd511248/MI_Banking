import React from "react";
import { FaUser } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

const Tab1 = ({ InputHandler, value, value2 }) => {
  return (
    <div className="w-11/12 mx-auto text-left mt-3">
      <h1 className="mb-2 w-fit text-4xl font-bold text-gray-700">Sign Up</h1>
      <p className="text-gray-500 text-base pb-3">Require information for account creation</p>
      <form className="w-11/12 mx-auto">
        <div className="flex justify-between items-center bg-[#e8f0fe] py-2 my-3 border-2 border-gray-400 rounded text-red-600 px-3">
          <input onChange={InputHandler} value={value} name="name" placeholder={"Full Name"} type="text" className="text-xl outline-none bg-transparent truncate w-5/6" />
          <label className="text-xl">
            <FaUser />
          </label>
        </div>
        <div className="flex justify-between items-center bg-[#e8f0fe] py-2 my-3 border-2 border-gray-400 rounded text-red-600 px-3">
          <input onChange={InputHandler} value={value2} name="number" placeholder={"Phone no"} type="number" className="text-xl outline-none bg-transparent truncate w-5/6" />
          <label className="text-xl">
            <FaPhoneFlip />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Tab1;
