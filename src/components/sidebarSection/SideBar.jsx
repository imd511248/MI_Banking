import React from "react";
import logo from "../../assets/images/logo.png";
import { ImCross } from "react-icons/im";
const SideBar = () => {
  const listItem = [
    { image: "https://ambankservices.netlify.app/static/media/bank.882c3a825afffe7b70d6311f9344329f.svg", title: "saving account" },
    { image: "https://ambankservices.netlify.app/static/media/qrcode.37390060ee41a117445497c580ce6e3a.svg", title: "qr code" },
    { image: "https://ambankservices.netlify.app/static/media/pay.e9cafb8672d5fd3f0fbad5853097a83e.svg", title: "pay" },
    { image: "https://ambankservices.netlify.app/static/media/addmoney.477d463e8d6088c088c38c9218c1c052.svg", title: "add money" },
    { image: "	https://ambankservices.netlify.app/static/media/passbook.df4dba8a626dcfec737ed34ccd74e147.svg", title: "acount details" },
    { image: "https://ambankservices.netlify.app/static/media/card.9cd2a3969356f4338bf57a7f6facc122.svg", title: "card setting" },
    { image: "https://ambankservices.netlify.app/static/media/moneyconverter.90c3b9f33701ab77abc1dc037d092393.svg", title: "currency convertor" },
    { image: "https://ambankservices.netlify.app/static/media/history.d4bbe5788ea95e29ae1fede2206e445c.svg", title: "history" },
  ];
  return (
    <>
      <div className="w-[300px] rounded-lg border-2 border-red-600 overflow-hidden bg-slate-100">
        <div className="bg-white flex justify-between items-center mb-5 px-3 py-2 shadow-lg shadow-gray-600">
          <div className="w-40 h-20 ">
            <img src={logo} alt="" className="w-full h-full" />
          </div>
          <div className="text-2xl pr-3">
            <ImCross />
          </div>
        </div>
        {listItem?.map((item) => (
          <ul className="flex justify-left items-center px-2 gap-6 bg-white py-1 my-3 border-2 border-gray-500 mx-4 rounded-md cursor-pointer">
            <li className="w-9 h-10">
              <img src={item?.image} alt="icons" className="h-full w-full" />
            </li>
            <li className="uppercase text-base font-medium font-sans">{item?.title}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default SideBar;
