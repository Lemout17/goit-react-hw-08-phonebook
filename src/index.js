import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import store from "./redux/store";

import "./index.css";

import Loader from "react-loader-spinner";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate
        loading={<Loader type="Rings" color="#00BFFF" height={80} width={80} />}
        persistor={store.persistor}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
