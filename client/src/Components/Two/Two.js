import React from "react";
import "./Two.css";

const THEMES = [
  "Chemical & Process Engineering",
  "Sustainable Environmental Solutions",
  "Advancements in Energy Engineering",
  "Materials in Engineering",
  "Modeling and Simulation of Processes",
  "Bioprocessing and Food Engineering",
  "AI, Machine Learning, and Data Analytics in Process Design/Optimization",
  "Sustainable Processes and Green Technologies",
  "Transport Phenomena (Fluid Flow, Heat Transfer, and Mass Transfer)",
  "Particle Technology and Mechanics",
  "Computational Fluid Dynamics (CFD)",
  "Carbon Capture, Utilization, and Storage (CCUS)",
  "Hydrogen Energy and Fuel Cell Technologies",
  "Circular Economy and Waste Valorization",
  "Colloidal Science, Soft Matter, and Rheology",
  "Process Safety, Risk Assessment, and Industrial Sustainability",
  "Applied Radiation Technology",
  "Experiential learnings in chemistry",
];

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
            {THEMES.map((theme) => (
              <div className="topic" key={theme}>
                {theme}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}