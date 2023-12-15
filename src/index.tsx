import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/** 引入创建的 store */
import store from "./store/index";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* 通过 React-Redux 的 <Provider>将 <App> 包裹起来,并将 store 作为 prop 传入。 */}
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
