import React from "react";
import "./Two.css";

export default function Two() {
  return (
    <section className="two">

      <div className="two-overlay">
        <div className="two-content">
          <h2 className="two-title">THE CONFERENCE</h2>
          <div className="two-divider"></div>

          <p className="two-description">
        The International Conference on “Sustainable Development in Chemical Engineering, Energy and Environment” (SDCEE-2027) plays a pivotal role in advancing sustainable practices, facilitating knowledge exchange, and fostering collaborative outreach. Covering key areas of chemical engineering, including soft matter, advanced materials, energy, the environment, sustainable processing, and green technologies, the conference emphasizes sustainable development and encourages multidisciplinary approaches to complex challenges.
          </p>

          <p className="two-description">
SDCEE-2027 offers valuable networking opportunities, research dissemination, and publication prospects in internationally reputed journals. The conference is a vital catalyst for innovation and sustainability, making it essential for academicians, researchers, and industry professionals. The event will be conducted in online and offline both modes.
          </p>


          <h3 className="topics-title">
            <span className="topics-title-main">CONFERENCE THEMES</span>
            <span className="topics-title-colon"> :</span>
          </h3>

          <div className="topics-grid">
            <div className="topics-column">
              <div className="topic">Sustainable Chemical Processes &amp; Intensification</div>
              <div className="topic">Fluid Mechanics, Heat Transfer, Transport Phenomena &amp; CFD</div>
              <div className="topic">Advanced Materials, Nanotechnology &amp; Catalysis</div>
              <div className="topic">Clean Energy, Energy Transition &amp; Storage Technologies</div>
              <div className="topic">Net-Zero, Carbon Capture &amp; Utilization</div>
            </div>
            <div className="topics-column">
              <div className="topic">Environmental Pollution Control &amp; Waste Valorization</div>
              <div className="topic">Applied Radiation Technologies &amp; Radioisotopes</div>
              <div className="topic">Industrial Biotechnology, Bioenergy &amp; Biorefineries</div>
              <div className="topic">AI/ML, Digital Twin, Modelling &amp; Simulation</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}