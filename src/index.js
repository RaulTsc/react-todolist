import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./scenes/App/App";

import registerServiceWorker from "./registerServiceWorker";
import { getStore } from "./helpers/getStore";

import "./index.css";

ReactDOM.render(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
