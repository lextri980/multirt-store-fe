import { AnimatePresence } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import App from "./App";
import { history, store } from "./store/store";
import "./themes/scss/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AnimatePresence mode="wait">
        <Router history={history}>
          <App />
        </Router>
      </AnimatePresence>
    </Provider>
  </React.StrictMode>
);
