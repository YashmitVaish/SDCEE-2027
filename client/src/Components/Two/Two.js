import React from "react";
import "./Two.css";
import conferenceBg from "./conference-bg.png"; // the crowd photo

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

          <p className="two-live">
            Join us live:{" "}
            <a
              href="https://www.youtube.com/live/C4utU76THcQ?si=y5Jmw_UBvwytKJ0O"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/live/C4utU76THcQ?si=y5Jmw_UBvwytKJ0O
            </a>
          </p>

          <h3 className="topics-title">CONFERENCE THEMES :</h3>

          <div className="topics-grid">
            <div className="topics-column">
              <div className="topic">Chemical &amp; Process Engineering</div>
              <div className="topic">Environmental Remediation and Sustainability</div>
              <div className="topic">Energy Engineering and Renewable Energy Technologies</div>
              <div className="topic">Sustainable Processes and Green Technologies</div>
              <div className="topic">Transport Phenomena (Fluid Flow, Heat Transfer, and Mass Transfer)</div>
              <div className="topic">Particle Technology and Mechanics</div>
              <div className="topic">Nanotechnology and Advanced Materials</div>
              <div className="topic">Process Modelling, Simulation, and Optimization</div>
              <div className="topic">Computational Fluid Dynamics (CFD)</div>
            </div>

            <div className="topics-column">
              <div className="topic">Biotechnology, Bioprocess Engineering, and Food Technology</div>
              <div className="topic">
                Artificial Intelligence, Machine Learning, and Data Analytics for
                Process Design, Control, and Optimization
              </div>
              <div className="topic">Carbon Capture, Utilization, and Storage (CCUS)</div>
              <div className="topic">Hydrogen Energy and Fuel Cell Technologies</div>
              <div className="topic">Circular Economy and Waste Valorization</div>
              <div className="topic">Colloidal Science, Soft Matter, and Rheology</div>
              <div className="topic">Process Safety, Risk Assessment, and Industrial Sustainability</div>
              <div className="topic">Applied Radiation Technology</div>
              <div className="topic">Experiential learnings in chemistry</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}