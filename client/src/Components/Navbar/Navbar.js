import React, { useRef, useState } from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [archivesOpen, setArchivesOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
    setArchivesOpen(false);
  };

  const openArchives = () => {
    clearTimeout(closeTimeoutRef.current);
    setArchivesOpen(true);
  };

  const scheduleCloseArchives = () => {
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setArchivesOpen(false), 300);
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

        <Link to="/abstract" className="nav-link" onClick={closeMenu}>
          Abstract/Paper Submission
        </Link>

        <Link to="/#dates" className="nav-link" onClick={closeMenu}>
          Schedule
        </Link>

        <Link to="/#team" className="nav-link" onClick={closeMenu}>
          Our Team
        </Link>

        <div
          className={`nav-dropdown ${archivesOpen ? "open" : ""}`}
          onMouseEnter={openArchives}
          onMouseLeave={scheduleCloseArchives}
        >
          <button
            type="button"
            className="nav-link nav-dropdown-toggle"
            onClick={() => setArchivesOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={archivesOpen}
          >
            Archives <span className="nav-dropdown-arrow">&#9662;</span>
          </button>

          <div className="nav-dropdown-menu">
            <a
              href="https://sdcee2024.thapar.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-dropdown-item"
              onClick={closeMenu}
            >
              SDCEE 2024
            </a>
          </div>
        </div>

        <div className="nav-regg">
          <Link to="/register" className="text-link" onClick={closeMenu}>
            <button>Register</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}