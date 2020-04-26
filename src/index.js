import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";

import reducers from "./redux/reducers/index";
import App from "./routes/App";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(
  reducers, //Todos los reducer
  {}, //Estado inicial
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
