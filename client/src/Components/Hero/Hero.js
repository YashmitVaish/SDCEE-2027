import React from "react";
import "./Hero.css";
import { HashLink as Link } from "react-router-hash-link";
import banner from "./banner.webp";

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="visually-hidden">
        SDCEE-2027: 2nd International Conference on Sustainable Development
        in Chemical Engineering, Energy and Environment, February 18-20, 2027,
        Patiala, Punjab, India
      </h1>

      <img src={banner} alt="" className="hero-banner" />

      <div className="hero-bar">
        <Link smooth to="/register" className="text-link">
          <button className="hero-reg">Register</button>
        </Link>
      </div>
    </section>
  );
}
