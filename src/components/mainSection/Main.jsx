import React from "react";
import Header from "../headerSection/Header";
// import Footer from "../footerSection/Footer";
import { useSelector } from "react-redux";

const Main = () => {
  const data = useSelector((state) => state.userDetails);

  return (
    <>
      <Header />
      <div className="mt-4">
        {data?.data?.map((item, i) => {
          return (
            <ul className="flex flex-col mx-auto w-fit" key={i}>
              <li>{item.name}</li>
              <br />
              <li>{item.balance}</li>
              <br />
              <li>{item.upi}</li>
              <br />
              <li>{item.number}</li>
              <br />
              <li>
                <img src={item.img} alt="" className="w-20 h-20" />
              </li>
            </ul>
          );
        })}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
