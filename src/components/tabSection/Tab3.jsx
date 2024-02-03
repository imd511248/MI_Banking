import React from "react";
import male from "../../assets/images/male.svg";
import female from "../../assets/images/female.svg";

const Tab3 = ({ genderHandler, borderColor, borderColor2 }) => {
  return (
    <div className="w-11/12 mx-auto text-left mt-3">
      <h1 className="mb-2 w-fit text-4xl font-bold text-gray-700">Select Gender</h1>
      <p className="text-gray-500 text-base pb-3">Require information for account creation</p>
      <div className="w-11/12 mx-auto flex justify-center gap-10 my-5">
        <div
          onClick={() => genderHandler("male")}
          className={`w-14 h-14 cursor-pointer relative before:absolute before:border-2 before:-left-1 before:-top-1 ${borderColor} before:h-16 before:w-16 before:rounded-full`}>
          <img src={male} alt="Male" className="w-full h-full rounded-full" />
        </div>
        <div
          onClick={() => genderHandler("female")}
          className={`w-14 h-14 cursor-pointer relative before:absolute before:border-2 before:-left-1 before:-top-1 ${borderColor2} before:h-16 before:w-16 before:rounded-full`}>
          <img src={female} alt="Female" className="w-full h-full rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Tab3;
