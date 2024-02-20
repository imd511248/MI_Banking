import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const Accounts = () => {
  const data = useSelector((state) => state.userDetails);
  console.log(data);
  return (
    <>
      <div className="w-10/12 sm:w-10/12 md:w-10/12 lg:w-10/12 xl:w-10/12 mx-auto mt-10">
        <div className="flex justify-left items-center gap-x-5">
          <div className="w-14 h-14">
            <FaUserCircle className="cursor-pointer text-5xl ml-2 text-red-600 relative w-full h-full" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-800">WelCome Back,</h4>
            <b className="text-red-600 text-xl font-bold">Irshad</b>
          </div>
        </div>
        <button className="border border-gray-400 bg-gray-200 text-gray-800 rounded-md text-xl text-center w-full py-1 mt-5">Create New UPI ID</button>
        <div className="flex justify-center flex-wrap mt-8">
          <div className="w-[300px] h-52 bg-gray-200 border rounded-md">hello</div>
        </div>
      </div>
    </>
  );
};

export default Accounts;
