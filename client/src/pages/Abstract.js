import React from "react";
import "./registration.css";
import "./Abstract.css";
import Navbar from "../Components/Navbar/Navbar";
import wos from "./wos.png";
import scopus from "./scopus.png";
import banner from "../Components/Hero/banner.webp";

export default function Registration() {
  return (
    <div>
      <Navbar />
      <div className="abstract" id="">
        <img src={banner} alt="SDCEE 2027 banner" className="reg-banner" />
        <div className="wrapper-reg">
          <div className="register-center">
            <p className="abs-para">
              Welcome to the abstract submission for the International
              Conference on "Sustainable Development in
              Chemical Engineering, Energy and Environment" (SDCEE-2027).
            </p>
          </div>
          <div className="abs-journal">
            <h5 className="blink">
              <span>
                Selected papers will be published in indexed journals.
              </span>
            </h5>
            <h5>
              <span className="partner-label">Publication Partners:</span>
              <span className="partner-links">
                <a
                  href="https://www.tandfonline.com/journals/tice20/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Indian Chemical Engineer (Impact Factor ≈ 1.2)
                </a>
                <a
                  href="https://www.frontiersin.org/journals/chemical-engineering"
                  target="_blank"
                  rel="noreferrer"
                >
                  Frontiers in Chemical Engineering (Impact Factor ≈ 4.0)
                </a>
                <a
                  href="https://onlinelibrary.wiley.com/journal/15214125"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chemical Engineering &amp; Technology (Impact Factor ≈ 2.0)
                </a>
              </span>
            </h5>
          </div>
          <br />
          <br />
          <div className="abs-index">
            <h4>Indexed Journals</h4>
            <div className="index-images">
              <img className="index-img wos" src={wos} alt="Web of Science" />
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
                <div className="abs-topic">Sustainable Chemical Processes &amp; Intensification</div>
                <div className="abs-topic">Fluid Mechanics, Heat Transfer, Transport Phenomena &amp; CFD</div>
                <div className="abs-topic">Advanced Materials, Nanotechnology &amp; Catalysis</div>
                <div className="abs-topic">Clean Energy, Energy Transition &amp; Storage Technologies</div>
                <div className="abs-topic">Net-Zero, Carbon Capture &amp; Utilization</div>
              </div>
              <div className="abs-topics-column">
                <div className="abs-topic">Environmental Pollution Control &amp; Waste Valorization</div>
                <div className="abs-topic">Applied Radiation Technologies &amp; Radioisotopes</div>
                <div className="abs-topic">Industrial Biotechnology, Bioenergy &amp; Biorefineries</div>
                <div className="abs-topic">AI/ML, Digital Twin, Modelling &amp; Simulation</div>
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
