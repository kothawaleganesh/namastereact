import React from "react";
import { LOGO_URL, USER_LOGO } from "../Data/AppConfig";

const Header = () => {
  return (
    <header className="header">
      <img src={LOGO_URL} className="logo" alt="Logo" />
      <div className="menu">
        <ul className="menu-list">
          <li>Home</li>
          <li>Settings</li>
          <li>Cart</li>
        </ul>
      </div>
      <img src={USER_LOGO} className="user" alt="User Icon" />
    </header>
  );
};
export default Header;
