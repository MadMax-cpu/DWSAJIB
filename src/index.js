import React from "react";
import ReactDOM from "react-dom";
import { HashHashRouter } from "react-HashRouter-dom";
import { Router } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,

  document.getElementById("root")
);
