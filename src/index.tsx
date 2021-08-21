import React from "react";
import ReactDOM from "react-dom";

import App from "components/App";

import "assets/scripts/smooth-scrolling";
import "assets/styles/reset.css";
import "assets/styles/general.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // eslint-disable-next-line unicorn/prefer-query-selector
  document.getElementById("root")
);
