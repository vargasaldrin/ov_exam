import ReactDOM from "react-dom";

import "./styles/index.css";
import App from "./App";
import { Provider } from "./context/UsersContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  rootElement,
);
