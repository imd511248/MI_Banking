import React from "react";
import { FaTools } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Tab2 = ({ emailHandler, value, value2 }) => {
  return (
    <div className="w-11/12 mx-auto text-left mt-3">
      <h1 className="mb-2 w-fit text-4xl font-bold text-gray-700">Sign up</h1>
      <p className="text-gray-500 text-base pb-3">Require information for account creation</p>
      <form className="w-11/12 mx-auto">
        <div className="flex justify-between items-center bg-[#e8f0fe] py-2 my-3 border-2 border-gray-400 rounded text-red-600 px-3">
          <input onChange={emailHandler} value={value} name="email" placeholder={"Email"} type="email" className="text-xl outline-none bg-transparent truncate w-5/6" />
          <label className="text-xl">
            <MdAlternateEmail />
          </label>
        </div>
        <div className="flex justify-between items-center bg-[#e8f0fe] py-2 my-3 border-2 border-gray-400 rounded text-red-600 px-3">
          <input onChange={emailHandler} value={value2} name="status" placeholder={"Status"} type="text" className="text-xl outline-none bg-transparent truncate w-5/6" />
          <label className="text-xl">
            <FaTools />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Tab2;
