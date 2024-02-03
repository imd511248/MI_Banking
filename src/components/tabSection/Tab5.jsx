import React from "react";
import { RiImageAddFill } from "react-icons/ri";

const Tab5 = ({ profileHandler, heading, imgPath }) => {
  return (
    <div className="w-11/12 mx-auto text-left mt-3">
      <h1 className="mb-2 w-fit text-4xl font-bold text-gray-700">{heading}</h1>
      <p className="text-gray-500 text-base pb-3">Require information for account creation</p>
      <div className="w-11/12 mx-auto flex justify-center gap-10 my-5">
        {imgPath === "" && (
          <label htmlFor="fileImg" className="w-24 h-24 bg-slate-200 rounded-full cursor-pointer p-1 border-2 border-red-600">
            <RiImageAddFill className="text-6xl mx-auto text-blue-700 mt-3" />
          </label>
        )}
        <input onChange={profileHandler} type="file" name="file" id="fileImg" className="h-full w-full hidden" />
        {imgPath !== "" && <img src={imgPath} alt="!found" className="w-24 h-24 object-cover bg-green-500 rounded-full p-1" />}
      </div>
    </div>
  );
};

export default Tab5;
