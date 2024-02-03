import SignupPage from "./components/loginUserDetails/SignupPage";
import Main from "./components/mainSection/Main";
import LogInPage from "./components/loginUserDetails/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/home" element={<Main />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/sign" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
