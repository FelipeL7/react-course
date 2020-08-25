import React from "react";
import ReactDOM from "react-dom";
// Counter don't need curly braces 'cause it was defined default export
import Counter from "./components/counter";

import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Counter />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
