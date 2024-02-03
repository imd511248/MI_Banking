import React from "react";
import { FaChevronDown } from "react-icons/fa";
const Help = () => {
  return (
    <>
      <div className="border-2 border-gray-500 rounded-lg px-2 py-2 w-72">
        <div className="mb-4">
          <div className="bg-red-600 rounded-md text-white p-3 flex justify-between items-center">
            <p>Rule 1</p>
            <p>
              <FaChevronDown />
            </p>
          </div>
          <p className="text-base font-medium text-gray-700 mt-2 ml-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe! Nisi ut voluptate fugiat saepe sunt autem ad, dignissimos pariatur.
          </p>
        </div>
        <div className="mb-4">
          <div className="bg-red-600 rounded-md text-white p-3 flex justify-between items-center">
            <p>Rule 1</p>
            <p>
              <FaChevronDown />
            </p>
          </div>
          <p className="text-base font-medium text-gray-700 mt-2 ml-3 hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe! Nisi ut voluptate fugiat saepe sunt autem ad, dignissimos pariatur.
          </p>
        </div>
        <div className="mb-4">
          <div className="bg-red-600 rounded-md text-white p-3 flex justify-between items-center">
            <p>Rule 1</p>
            <p>
              <FaChevronDown />
            </p>
          </div>
          <p className="text-base font-medium text-gray-700 mt-2 ml-3 hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe! Nisi ut voluptate fugiat saepe sunt autem ad, dignissimos pariatur.
          </p>
        </div>
      </div>
    </>
  );
};

export default Help;
