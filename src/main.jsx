import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router/index.jsx";
import ModulesProvider from "./lib/context/modules.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
