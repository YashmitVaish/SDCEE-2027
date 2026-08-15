import React from "react";
import "./InfoBar.css";

export default function InfoBar() {
  return (
    <div className="info-bar">
      <div className="info-item">
        <svg
          className="info-icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="4"
            width="18"
            height="17"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
          <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span>February 18-20, 2027</span>
      </div>

      <div className="info-item">
        <svg
          className="info-icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="2" />
        </svg>
        <span>Thapar Institute of Engineering &amp; Technology</span>
      </div>

      <button className="register-btn">Register Now</button>
    </div>
  );
}