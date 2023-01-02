import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthuntificationProvider } from "./Store/auth-context";

ReactDOM.render(
  <AuthuntificationProvider>
    <App />
  </AuthuntificationProvider>,
  document.getElementById("root")
);
