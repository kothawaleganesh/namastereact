import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantList from "./components/RestaurantList";
import Header from "./components/HeaderComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header />
    <RestaurantList />
  </div>
);
