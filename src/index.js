import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./Context/Books";
// import Test from "./Test";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
    <Provider>
        <App />
    </Provider>
);