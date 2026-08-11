import React from "react";
import "./InfoBar.css";

export default function InfoBar() {
  return (
    <div className="info-bar">
      <div className="info-item">
        <span>September 26-27, 2025</span>
      </div>

      <div className="info-item">
        <span>Thapar Institute of Engineering &amp; Technology</span>
      </div>

      <button className="register-btn">Register Now</button>
    </div>
  );
}