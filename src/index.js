import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "modules";

const store = createStore(rootReducer);
//  전역 상태관리로 redux 사용
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <App></App>
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
