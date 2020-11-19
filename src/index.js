import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "modules";

const store = createStore(rootReducer);
//  전역 상태관리로 redux 사용
ReactDOM.render(
  // 개발환경에서만 적용, 개발환경속도 높이고 hooks오용 방지하기 위해 2번 렌더링
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <App></App>
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
