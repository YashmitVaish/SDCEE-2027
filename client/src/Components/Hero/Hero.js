import React from "react";
import "./Hero.css";
import { HashLink as Link } from "react-router-hash-link";
import collegePhoto from "./college.jpg";
import newBlinking from "./new-blinking.gif";
import GradientRing from "../GradientRing/GradientRing";

export default function Hero() {
  return (
    <section className="hero">

      {/* Figma artwork */}
      <img
        src={collegePhoto}
        alt="Thapar Institute"
        className="hero-art"
      />
      <GradientRing className="hero-art-ring" />

      {/* Hero content */}
      <div className="hero-content">

        <div className="hero-left">

          <div className="hero-text">

            <h1 className="hero-head">
              SDCEE-2027
            </h1>

            <p className="hero-description">
              International Conference on
              <br />
              "Sustainable Development in Chemical and
              <br />
              Environmental Engineering"
            </p>

            <h3 className="hero-date">
              February 18-20, 2027
            </h3>

            <div className="hero-buttons">

              <Link
                smooth
                to="/register"
                className="text-link"
              >
                <button className="hero-reg">
                  Register
                </button>
              </Link>

              <a
                href="https://forms.gle/r784zXXhd1zkoNeE6"
                target="_blank"
                rel="noreferrer"
              >
                <button className="hero-reg hostel-button">
                  Hostel Accommodation
                </button>
              </a>

            </div>

            <div className="journal">

              <h5>
                <img
                  className="new-blinking"
                  src={newBlinking}
                  alt="new"
                />

                <span>
                  Selected papers will be published in indexed journals.
                </span>
              </h5>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}