import { FaUserLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/addData/AddSlice";

const LogInPage = () => {
  const [istrue, setIstrue] = useState(true);
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.userDetails);
  console.log(data?.data);

  useEffect(() => {
    dispatch(fetchData({ obj: "" }));
    //eslint-disable-next-line
  }, []);

  const InputHandler = (e) => {
    setInputData((prev) => {
      const updatedInputData = { ...prev, [e.target.name]: e.target.value };
      const isValid = updatedInputData.email.toLocaleLowerCase().includes("@") && updatedInputData.password !== "";
      if (isValid !== !istrue) {
        setIstrue(!isValid);
      }
      return updatedInputData;
    });
  };

  const loginHandler = () => {
    if (inputData.email !== "" && inputData.password !== "") {
      let filterData = data.data?.find((item) => item.email === inputData.email && item.password1 === inputData.password);
      !filterData ? alert("invalid user email or password") : navigate("/home");
      setInputData({ email: "", password: "" });
    }
  };
  return (
    <>
      <div className="w-screen h-screen bg-indigo-50-200 pt-44">
        <div className="shadow-md shadow-gray-400 bg-opacity-30 bg-indigo-400 border-2 rounded-xl py-3 lg:w-3/6 xl:w-3/6 2xl:w-2/6 w-5/6 mx-auto">
          <h1 className="relative before:absolute before:bg-red-500 before:-bottom-2 before:w-full before:h-[3px] mb-8 w-fit mx-auto text-4xl text-center font-bold text-red-500">
            Login
          </h1>
          <form className="w-11/12 mx-auto">
            <div className="flex justify-left items-center bg-[#e8f0fe] py-2 my-3 border-2 border-gray-400 rounded text-gray-700">
              <label className="ml-2 mr-4 text-xl">
                <MdAlternateEmail />
              </label>
              <input className="text-xl outline-none bg-transparent truncate w-5/6" onChange={InputHandler} value={inputData.email} placeholder="Email" type="email" name="email" />
            </div>
            <div className="flex justify-left items-center bg-[#e8f0fe] py-2 my-3 border-2 border-gray-400 rounded text-gray-700">
              <label className="ml-2 mr-4 text-xl">
                <FaUserLock />
              </label>
              <input
                className="text-xl outline-none bg-transparent truncate w-5/6"
                onChange={InputHandler}
                value={inputData.password}
                placeholder="Password"
                type="password"
                name="password"
              />
            </div>
          </form>
          {/* ..........................,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,............................................... */}
          <button onClick={loginHandler} disabled={istrue} className={`text-white px-9 py-3 flex justify-center mx-auto rounded-xl ${istrue ? "bg-red-300" : "bg-red-500"}`}>
            Login
          </button>
          <p className="text-gray-400 hover:text-gray-500 cursor-pointer text-lg font-medium text-center mt-2">Forgot the password</p>
          <p className="text-center text-[#6a6262] font-semibold my-3">
            Don't have an account?{" "}
            <Link to="/sign">
              <button className="text-[red] underline">Click here</button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
