import React, { useState } from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={`nav ${menuVisible ? "active" : ""}`} id="nav">
      <button className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <Link smooth to="#hero" className="text-link">
        <div className="logo">
          <img src={require("./Full-Logo.png")} alt="logo" />
        </div>
      </Link>
      <div className={`nav-menu ${menuVisible ? "active" : ""}`}>
        <Link smooth to="#hero" className="text-link">
          <a className="nav-link">Home</a>
        </Link>
        <Link smooth to="#venue" className="text-link">
          <a className="nav-link">Venue</a>
        </Link>
        <Link smooth to="#speakers" className="text-link">
          <a className="nav-link">Speakers</a>
        </Link>
        <Link smooth to="/abstract" className="text-link">
          <a className="nav-link">Abstract/Paper Submission</a>
        </Link>
        <Link smooth to="#dates" className="text-link">
          <a className="nav-link">Schedule</a>
        </Link>
        <Link smooth to="#team" className="text-link">
          <a className="nav-link">Our Team</a>
        </Link>
      </div>
      <Link smooth to="/register" className="text-link">
        <div className="nav-regg">
          <button>Register</button>
        </div>
      </Link>
    </div>
  );
}
