import React from "react";

const Tab6 = ({ upiHandler, upi, balanceHandler, value }) => {
  const upiDetails = [
    { image: "https://ambankservices.netlify.app/static/media/gpay.40881643fc542e8c299d7c6680c890d4.svg", title: "googlepay" },
    { image: "https://ambankservices.netlify.app/static/media/phonepe.c0bffc242240d71e47601c4e924ec697.svg", title: "phonepay" },
    { image: "https://ambankservices.netlify.app/static/media/paytm.dcbe83108085b56b1eea157f65bd1a99.svg", title: "paytm" },
    { image: "https://ambankservices.netlify.app/static/media/amazon.a684ef8294fc22224d680a21d25f3bfc.svg", title: "amazon" },
    { image: "https://ambankservices.netlify.app/static/media/bajaj.2f7631f24e61625989d7cd411ea537ed.svg", title: "bajaj" },
    { image: "https://ambankservices.netlify.app/static/media/whatsapp.6300a339a9b44a1f29132c0c738b5037.svg", title: "whatsapp" },
  ];
  return (
    <div className="w-11/12 mx-auto text-left mt-3">
      <h1 className="mb-2 w-fit text-4xl font-bold text-gray-700">Add Balance</h1>
      <p className="text-gray-500 text-base ">Need balance for account creation</p>
      <div className="flex justify-between w-11/12 items-center py-2 mb-2 border-b-gray-400 border-b rounded text-gray-600 px-3">
        <label className="font-semibold text-2xl">₹</label>
        <input onChange={balanceHandler} value={value} name="password1" type="number" className="text-xl outline-none bg-transparent w-full ml-2 " />
      </div>
      <h1 className="uppercase text-xl font-bold">select upi app</h1>

      <div className="flex items-start gap-x-4 gap-y-4 flex-wrap my-4">
        {upiDetails?.map((item, i) => {
          return (
            <>
              <div onClick={() => upiHandler(item.title)} className="flex flex-col" key={i}>
                <div
                  className={`flex justify-center items-center bg-white border-2 border-gray-500  rounded-xl cursor-pointer h-14 w-14 relative p-2 ${
                    upi === item.title ? "border-gray-900" : "border-gray-500"
                  }`}>
                  <i
                    className={`fa-solid fa-circle-check absolute ease-in-out duration-300 -top-1 -right-1 opacity-0 bg-white rounded-full ${
                      upi === item.title ? "opacity-100" : "opacity-0"
                    }`}></i>
                  <img src={item?.image} alt="upi app" className="w-full h-full" />
                </div>
                <p className="capitalize text-sm text-gray-500 font-normal">{item?.title}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Tab6;
