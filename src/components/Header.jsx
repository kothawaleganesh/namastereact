import React, { useState } from "react";
import { USER_LOGO } from "../Data/AppConfig";
import { Link } from "react-router-dom";
import LOGO from "../../public/Images/Logo.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [btnText, setBtnText] = useState("Login");
  const toggleButtonText = () => {
    if (setBtnText === "Login");
    {
      setBtnText("Logout");
      navigate("/login");
    }
    if (setBtnText === "Logout") {
      setBtnText("Login");
      navigate("/login");
    }
  };

  return (
    <header className="header">
      <img src={LOGO} className="logo" alt="Logo" />
      <div className="menu">
        <ul className="menu-list">
          <li>
            <Link to="/" className="custom-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="custom-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="custom-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <button id="Login" className="Login" onClick={toggleButtonText}>
        {btnText}
      </button>
      <img src={USER_LOGO} className="user" alt="User Icon" />
    </header>
  );
};

export default Header;
