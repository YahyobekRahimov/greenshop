import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "/src/redux/store.js";
import { CssVarsProvider } from "@mui/material-next";

ReactDOM.createRoot(document.getElementById("root")).render(
   <CssVarsProvider>
      <Provider store={store}>
         <App />
      </Provider>
   </CssVarsProvider>
);
