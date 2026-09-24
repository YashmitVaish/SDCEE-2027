import React from "react";
import "./Hero.css";
import { HashLink as Link } from "react-router-hash-link";
import collegePhoto from "./tiet.jpeg";
import newBlinking from "./new-blinking.gif";
import GradientRing from "../GradientRing/GradientRing";

export default function Hero() {
  return (
    <section className="hero">

      {/* College photo */}
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
              2nd International Conference on
              <br />
              "Sustainable Development in Chemical Engineering,
              <br />
              Energy and Environment"
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

            </div>

            <div className="journal">

              <h5>
                <img
                  className="new-blinking"
                  src={newBlinking}
                  alt="new"
                />

                <span>
                  Selected papers may be considered for publication in the
                  following journals after peer review:
                </span>
              </h5>
              <ul>
                <li>Indian Chemical Engineer</li>
                <li>Frontiers in Chemical Engineering</li>
              </ul>
              <p>APCs, if applicable, will be borne by the authors.</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}