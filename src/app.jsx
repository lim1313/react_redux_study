import React from "react";
import "./app.css";
import Subscribers from "./components/subscribers";
import { Provider } from "react-redux";
import store from "./redux/store";
import Display from "./components/display";
import Views from "./components/views";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Subscribers />
        <Views />
        <Display />
      </div>
    </Provider>
  );
}

// Provider 컴포넌트 하위 컴포넌트들이 Provider를 통해 Redux의 store에 access(접근)할 수 있게 해준다.

export default App;
