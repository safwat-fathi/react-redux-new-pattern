import React from "react";
import ReactDOM from "react-dom";
// redux
import { Provider } from "react-redux";
import store from "./store";
// main app component
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
