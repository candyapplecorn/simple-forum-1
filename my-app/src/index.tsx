import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./css/master-style.css";
import { HashRouter as Router } from "react-router-dom";
import RoutesTree from "./components/routes-tree";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RoutesTree />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
