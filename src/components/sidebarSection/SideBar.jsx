import React from "react";
import logo from "../../assets/images/logo.png";
import { ImCross } from "react-icons/im";
import bank from "../../assets/icons/bank.svg";
import qr from "../../assets/icons/qrcode.svg";
import pay from "../../assets/icons/pay.svg";
import money from "../../assets/icons/addmoney.svg";
import passbook from "../../assets/icons/passbook.svg";
import setting from "../../assets/icons/setting.svg";
import currencyConverter from "../../assets/icons/moneyconverter.svg";
import history from "../../assets/icons/history.svg";
const SideBar = () => {
  const listItem = [
    { image: bank, title: "saving account" },
    { image: qr, title: "qr code" },
    { image: pay, title: "pay" },
    { image: money, title: "add money" },
    { image: passbook, title: "acount details" },
    { image: setting, title: "card setting" },
    { image: currencyConverter, title: "currency convertor" },
    { image: history, title: "history" },
  ];
  const closeBarHandler = () => {
    let handler = document.getElementById("navbar");
    if (handler) {
      handler.style.left = "-100%";
    }
  };

  return (
    <>
      <div className="w-[300px] rounded-lg border-2 border-red-600 overflow-hidden bg-slate-100 pb-20">
        <div className="bg-white flex justify-between items-center mb-5 px-3 py-2 shadow-lg shadow-gray-600">
          <div className="w-40 h-20 ">
            <img src={logo} alt="" className="w-full h-full" />
          </div>
          <div className="text-2xl pr-3">
            <ImCross onClick={closeBarHandler} className="cursor-pointer" />
          </div>
        </div>
        {listItem?.map((item, i) => (
          <ul key={i} className="flex justify-left items-center px-2 gap-6 bg-white py-3 my-3 border-2 border-gray-500 mx-4 rounded-md cursor-pointer">
            <li className="w-11 h-11">
              <img src={item?.image} alt="icons" className="h-full w-full" />
            </li>
            <li className="uppercase text-lg font-semibold font-sans">{item?.title}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default SideBar;
