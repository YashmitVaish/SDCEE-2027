import React, { useState } from "react";
import "./registration.css";
import "./Abstract.css";
import Pdf from "../Components/CMT Submission Guidelines.pdf";
import AbTemplate from "../Components/abstractTemplate.docx";
import { HashLink as Link } from "react-router-hash-link";
import journal1 from "./j1.jpg";
import journal2 from "./j2.jpg";
import journal3 from "./j3.jpg";
import journal4 from "./j4.png";
import wos from "./wos.png";
import scopus from "./scopus.png";

export default function Registration() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div>
      <div className={`nav ${menuVisible ? "active" : ""}`} id="nav">
        <button className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <Link smooth to="/" className="text-link">
          <div className="logo">
            <img
              src={require("../Components/Navbar/Full-Logo.png")}
              alt="logo"
            />
          </div>
        </Link>
        <div className={`nav-menu ${menuVisible ? "active" : ""}`}>
          <Link smooth to="/#hero" className="text-link">
            <a className="nav-link">Home</a>
          </Link>
          <Link smooth to="/#venue" className="text-link">
            <a className="nav-link">Venue</a>
          </Link>
          <Link smooth to="/#speakers" className="text-link">
            <a className="nav-link">Speakers</a>
          </Link>
          <Link smooth to="" className="text-link">
            <a className="nav-link">Abstract/Paper Submission</a>
          </Link>
          <Link smooth to="/#dates" className="text-link">
            <a className="nav-link">Schedule</a>
          </Link>
          {/* <Link smooth to="#sponsors" className="text-link">
          <a className="nav-link">Sponsors</a>
        </Link> */}
          <Link smooth to="/#team" className="text-link">
            <a className="nav-link">Our Team</a>
          </Link>
        </div>
        <Link smooth to="/register" className="text-link">
          <div className="nav-regg">
            <button>Register</button>
          </div>
        </Link>
      </div>
      <div className="abstract" id="">
        <div className="wrapper-reg">
          <div className="register-top">
            <h1 className="hero-head reg-hero-head">SDCEE 2024</h1>
          </div>
          <div className="register-center">
            <p className="abs-para">
              Welcome to the abstract submission for the International
              Conference on "Sustainable Development in Chemical and
              Environmental Engineering"(SDCEE-2024).
            </p>
          </div>
          <div className="abs-journal">
            <h5 className="blink">
              <span>
                Selected papers will be published in the following SCI/SCIE
                Journals:
              </span>
            </h5>
            <div className="journals">
              <div className="j1">
                <p>
                  <strong>
                    The Canadian Journal of Chemical Engineering (IF 2.1) ,
                    Special issue
                  </strong>
                </p>
                <img
                  src={journal1}
                  className="journal-images first-journal"
                  alt="The Canadian Journal of Chemical Engineering"
                />
              </div>
              <div className="j2">
                <p>
                  <strong>
                    Chemical and Biochemical Engineering Quarterly (IF 1.5)
                  </strong>
                </p>
                <img
                  src={journal2}
                  className="journal-images"
                  alt="The Canadian Journal of Chemical Engineering"
                />
                <br />
              </div>
              <div className="j3">
                <br />
                <p>
                  <strong>
                    Chemical Engineering & Technology
                    <br />
                    <span>(IF 2.1)</span>
                  </strong>
                </p>
                <img
                  src={journal3}
                  className="journal-images"
                  alt="Chemical Engineering & Technology"
                />
              </div>
              <div className="j4">
                <br />
                <p>
                  <strong>
                    Environmental Science and Pollutiion Research (ESPR)
                    (IF 5.8)
                  </strong>
                </p>
                <img
                  src={journal4}
                  className="journal-images"
                  alt="Chemical Engineering & Technology"
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="abs-index">
            <h4>Indexed Journals</h4>
            <div className="index-images">
              <img className="index-img wos" src={wos} alt="web of science" />
              <img className="index-img scopus" src={scopus} alt="Scopus" />
            </div>
          </div>
          <div className="topics abs-topics">
            <h4>Conference Themes</h4>
            <p>
              The conference theme is encapsulated in the following subject
              areas, with an openness to explore additional related topics:
            </p>
            <ul>
              <li>Chemical & Process Engineering </li>
              <li>Sustainable Environmental Solutions</li>
              <li>Advancements in Energy Engineering</li>
              <li>Materials in Engineering</li>
              <li>Modeling and Simulation of Processes</li>
              <li>Bioprocessing and Food Engineering</li>
              <li>Applied Radiation Technology</li>
              <li>
                AI, Machine Learning, and Data Analytics in Process
                Design/Optimization
              </li>
            </ul>
          </div>
          <div className="register-center">
            <div className="abs-gray">
              <p className="maroon-abs">
                <strong>
                  We invite authors to submit abstracts (300 words) in PDF, DOC,
                  or DOCX format.
                </strong>
              </p>
            </div>
          </div>
          <div className="abs-links">
            <div className="abs-center">
              <a href={Pdf} target="_blank" className="pdf register-center">
                Submission Guidelines (CMT)
              </a>
            </div>
            <div className="abs-center">
              <a
                href={AbTemplate}
                target="_blank"
                className="pdf register-center"
              >
                Abstract template
              </a>
            </div>
            <div className="abs-center abs-btn-cont">
              <button className="abs-btn">
                <strike>
                  {" "}
                  <a
                    className="abs-none"
                    target="_blank"
                    // href="https://cmt3.research.microsoft.com/SDCEE2024"
                  >
                    Abstract/Paper Submission
                  </a>
                </strike>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
