import React, { useState } from "react";
import "./Navbar.css";
import Icons from "../../assets/Icons.png";
import chevron from "../../assets/chevron-down.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="./public/vector.png" alt="logo" />
        </div>

        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <li>
            Card access{" "}
            <span className="arrow">
              <img src={chevron} alt="chevron down" />
            </span>
          </li>
          <li>Banking</li>
          <li>Processing</li>
          <li>About</li>
          <li>Carrier</li>
          <li>Contact</li>
        </ul>

        <div className="navbar-action">
          <button className="login-btn">
            Login
            <img src={Icons} alt="login icon" />
          </button>
        </div>

        <button className="hamburger-btn" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
