import React, { useState } from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <nav className={`nav ${menuVisible ? "menu-open" : ""}`} id="nav">
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src={require("./Full-Logo.png")} alt="Thapar Institute" />
      </Link>

      <button
        className="menu-icon"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`nav-menu ${menuVisible ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/#venue" className="nav-link" onClick={closeMenu}>
          Venue
        </Link>

        <Link to="/#speakers" className="nav-link" onClick={closeMenu}>
          Speakers
        </Link>

        <Link to="/abstract" className="nav-link" onClick={closeMenu}>
          Abstract/Paper Submission
        </Link>

        <Link to="/#schedule" className="nav-link" onClick={closeMenu}>
          Schedule
        </Link>

        <Link to="/#team" className="nav-link" onClick={closeMenu}>
          Our Team
        </Link>

        <div className="nav-regg">
          <Link to="/register" className="text-link" onClick={closeMenu}>
            <button>Register</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}