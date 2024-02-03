import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./components/Store";
import { Provider } from "react-redux";
// import SideBar from "./components/sidebarSection/SideBar";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// navbar.render(
//   <React.StrictMode>
//     <SideBar />
//   </React.StrictMode>
// );
