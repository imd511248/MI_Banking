import React, { useEffect, useState } from "react";
import Tab1 from "../tabSection/Tab1";
import Tab2 from "../tabSection/Tab2";
import Tab3 from "../tabSection/Tab3";
import Tab4 from "../tabSection/Tab4";
import Tab5 from "../tabSection/Tab5";
import Tab6 from "../tabSection/Tab6";
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../features/addData/AddSlice";
import { useDispatch } from "react-redux";

const SignupPage = () => {
  const [inputData, setInputData] = useState({ name: "", number: "" });
  const [emailWork, setEmailWork] = useState({ email: "", status: "" });
  const [gender, setGender] = useState();
  const [password, setPassword] = useState({ password1: "", password2: "" });
  const [img, setImg] = useState("");
  const [upi, setUpi] = useState();
  const [balance, setBalance] = useState();
  const [istrue, setIstrue] = useState(true);
  const [activeTab, setActiveTab] = useState([true, false, false, false, false, false, false]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    number: "",
    email: "",
    status: "",
    gender: "",
    password1: "",
    password2: "",
    img: "",
    upi: "",
    balance: "",
    ifsc: "MIBK0210",
    bAccount: "",
    acountType: "saving account",
    branchLocation: "noida",
    branchName: "Mi_Bank",
    cutomerId: "",
    cardNumber: "",
    cardBalance: "",
    month: "",
    year: "",
    visa: "visa",
    bank: "",
    cvv: "",
    upiNumber: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = [
    { red: "bg-red-600", white: "bg-white" },
    { red: "bg-red-600", white: "bg-white" },
    { red: "bg-red-600", white: "bg-white" },
    { red: "bg-red-600", white: "bg-white" },
    { red: "bg-red-600", white: "bg-white" },
    { red: "bg-red-600", white: "bg-white" },
  ];
  // ...............Submit Handler and get data............................
  useEffect(() => {
    let acId;
    if (balance >= 1) {
      acId = generateId();
    }
    setUserDetails({
      name: inputData.name,
      number: inputData.number,
      email: emailWork.email,
      status: emailWork.status,
      gender: gender,
      password1: password.password1,
      img: img,
      upi: upi,
      ifsc: "MIBK0210",
      acountType: "saving account",
      branchLocation: "noida",
      branchName: "Mi_Bank",
      bAccount: acId?.userAcNumber,
      cutomerId: acId?.userId,
      upiNumber: "",
      cardInfo: [{ name: inputData.name, cardNumber: acId?.userCardNumber, month: acId?.month, year: acId?.century, visa: "visa", bank: "axis", cvv: acId?.cvv }],
    });
  }, [inputData, emailWork, gender, password, img, upi, balance]);
  const generateId = () => {
    const userId = Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000;
    const cvv = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    const userAcNumber = Math.floor(Math.random() * (99999999999 - 10000000000 + 1)) + 10000000000;
    const userCardNumber = Math.floor(Math.random() * (9999999999999999 - 1000000000000000 + 1)) + 1000000000000000;
    const now = new Date();
    let currentMonth = now.getMonth() + 1;
    let month = currentMonth > 9 ? currentMonth : `0${currentMonth}`;
    const century = `${now.getFullYear()}`.slice(2, 4);
    return { userAcNumber, userId, userCardNumber, month, century, cvv };
  };

  const InputHandler = (e) => {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const emailHandler = (e) => {
    setEmailWork((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const genderHandler = (e) => {
    setGender(e);
    setIstrue(false);
  };
  const passwordHandler = (e) => {
    setPassword((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const profileHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageURL = URL.createObjectURL(file);
      setImg(imageURL);
      setIstrue(false);
    }
  };
  const upiHandler = (e) => {
    setUpi(e);
  };
  const balanceHandler = (e) => {
    setBalance(e.target.value);
  };
  useEffect(() => {
    if (inputData.name !== "" && inputData.number !== "") {
      if (inputData.number.length === 10) {
        setIstrue(false);
      } else {
        setIstrue(true);
      }
    } else {
      setIstrue(true);
    }
  }, [inputData]);
  useEffect(() => {
    if (emailWork.email !== "" && emailWork.status !== "") {
      if (emailWork.email.includes("@")) {
        setIstrue(false);
      } else {
        setIstrue(true);
      }
    } else {
      setIstrue(true);
    }
  }, [emailWork]);
  useEffect(() => {
    if (password.password1 !== "" && password.password2 !== "") {
      if (password.password1.length >= 6 && password.password1 === password.password2) {
        setIstrue(false);
      } else {
        setIstrue(true);
      }
    } else {
      setIstrue(true);
    }
  }, [password]);
  useEffect(() => {
    if (balance !== "" && upi !== "") {
      if (balance > 0) {
        setIstrue(false);
      }
    } else {
      setIstrue(true);
    }
  }, [upi, balance]);
  const changeTabHandler = () => {
    const nextTabIndex = (activeTab[6] + 1) % 6;
    const newActiveTab = Array(6).fill(false);
    newActiveTab[nextTabIndex] = true;
    newActiveTab.push(nextTabIndex);
    setActiveTab(newActiveTab);
    setIstrue(true);
    if (activeTab[5] === true) {
      dispatch(fetchData({ obj: userDetails }));
      setInputData({ name: "", number: "" });
      setEmailWork({ email: "", status: "" });
      setGender("");
      setPassword({ password1: "", password2: "" });
      setImg("");
      setUpi("");
      setBalance("");
      navigate("/");
    }
  };

  return (
    <>
      <div className="w-screen h-screen bg-indigo-50-200 pt-32">
        <div className="shadow-md shadow-gray-400 bg-opacity-30 bg-indigo-400 border-2 rounded-xl py-3 lg:w-3/6 xl:w-3/6 2xl:w-2/6 w-5/6 mx-auto">
          {activeTab[0] === true && <Tab1 InputHandler={InputHandler} value={inputData.name} value2={inputData.number} />}
          {activeTab[1] === true && <Tab2 emailHandler={emailHandler} value={emailWork.email} value2={emailWork.status} />}
          {activeTab[2] === true && (
            <Tab3
              genderHandler={genderHandler}
              value="male"
              value2="female"
              borderColor={gender === "male" ? "before:border-red-600" : "before:border-red-200"}
              borderColor2={gender === "female" ? "before:border-red-600" : "before:border-red-200"}
            />
          )}
          {activeTab[3] === true && <Tab4 passwordHandler={passwordHandler} value={password.password1} value2={password.password2} />}
          {activeTab[4] === true && <Tab5 profileHandler={profileHandler} heading={"Upload Profile"} imgPath={img} />}
          {activeTab[5] === true && <Tab6 balanceHandler={balanceHandler} upiHandler={upiHandler} upi={upi} value={balance} />}

          <button
            onClick={changeTabHandler}
            className={`text-white px-9 py-3 flex justify-center m-auto uppercase rounded-xl ${istrue ? "bg-red-300" : "bg-red-500"}`}
            disabled={istrue}>
            {activeTab[5] === true ? "Submit" : " Next"}
          </button>
          {/* ..........................dot button active section........................... */}
          <div>
            <ul className="flex justify-center gap-3 mt-8">
              {classes.map((item, i) => (
                <>
                  <li className={`${activeTab[i] === true ? item.red : item.white} h-3 w-3 rounded-full`}></li>
                </>
              ))}
            </ul>
            <p className="text-center text-[#6a6262] font-semibold my-3">
              Don't have an account?{" "}
              <Link to="/login">
                <button className="text-[red] underline">Click here</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
