import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/HeaderComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header />
    <Body />
  </div>
);
