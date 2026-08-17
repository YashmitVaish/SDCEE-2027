import React from "react";
import "./registration.css";
import "./Abstract.css";
import Navbar from "../Components/Navbar/Navbar";
import wos from "./wos.png";
import scopus from "./scopus.png";

export default function Registration() {
  return (
    <div>
      <Navbar />
      <div className="abstract" id="">
        <div className="wrapper-reg">
          <div className="register-top">
            <h1 className="hero-head reg-hero-head">SDCEE 2027</h1>
          </div>
          <div className="register-center">
            <p className="abs-para">
              Welcome to the abstract submission for the International
              Conference on "Sustainable Development in Chemical and
              Environmental Engineering"(SDCEE-2027).
            </p>
          </div>
          <div className="abs-journal">
            <h5 className="blink">
              <span>
                Selected papers will be published in indexed journals.
              </span>
            </h5>
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
            <div className="abs-topics-grid">
              <div className="abs-topics-column">
                <div className="abs-topic">Chemical &amp; Process Engineering</div>
                <div className="abs-topic">Environmental Remediation and Sustainability</div>
                <div className="abs-topic">Energy Engineering and Renewable Energy Technologies</div>
                <div className="abs-topic">Sustainable Processes and Green Technologies</div>
                <div className="abs-topic">Transport Phenomena (Fluid Flow, Heat Transfer, and Mass Transfer)</div>
                <div className="abs-topic">Particle Technology and Mechanics</div>
                <div className="abs-topic">Nanotechnology and Advanced Materials</div>
                <div className="abs-topic">Process Modelling, Simulation, and Optimization</div>
                <div className="abs-topic">Computational Fluid Dynamics (CFD)</div>
              </div>

              <div className="abs-topics-column">
                <div className="abs-topic">Biotechnology, Bioprocess Engineering, and Food Technology</div>
                <div className="abs-topic">
                  Artificial Intelligence, Machine Learning, and Data Analytics for
                  Process Design, Control, and Optimization
                </div>
                <div className="abs-topic">Carbon Capture, Utilization, and Storage (CCUS)</div>
                <div className="abs-topic">Hydrogen Energy and Fuel Cell Technologies</div>
                <div className="abs-topic">Circular Economy and Waste Valorization</div>
                <div className="abs-topic">Colloidal Science, Soft Matter, and Rheology</div>
                <div className="abs-topic">Process Safety, Risk Assessment, and Industrial Sustainability</div>
                <div className="abs-topic">Applied Radiation Technology</div>
                <div className="abs-topic">Experiential learnings in chemistry</div>
              </div>
            </div>
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
              <a
                href={`${process.env.PUBLIC_URL}/CMT_Submission_Guidelines.pdf`}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="pdf register-center abs-none"
              >
                Submission Guidelines (CMT)
              </a>
            </div>
            <div className="abs-center">
              <a
                href={`${process.env.PUBLIC_URL}/Abstract_Format.docx`}
                download
                className="pdf register-center abs-none"
              >
                Abstract Template
              </a>
            </div>
            <div className="abs-center">
              <a
                href={`${process.env.PUBLIC_URL}/Poster_Template.pptx`}
                download
                className="pdf register-center abs-none"
              >
                Poster Template
              </a>
            </div>
            <div className="abs-center abs-btn-cont">
              <a
                href="https://cmt3.research.microsoft.com/SDCEE2027"
                target="_blank"
                rel="noopener noreferrer"
                className="abs-btn"
              >
                Abstract/Paper Submission
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}