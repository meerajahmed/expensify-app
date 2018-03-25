import React from "react";
import ReactDOM from "react-dom";
import AppRouters from "./routers/app-router";

import "normalize.css/normalize.css";
import "./style/style.scss";

const appRoot = document.getElementById("app");

ReactDOM.render(<AppRouters />, appRoot);