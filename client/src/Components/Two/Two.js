import React from "react";
import "./Two.css";
import conferenceBg from "./conference-bg.png"; // the crowd photo

export default function Two() {
  return (
    <section className="two">
      <div className="two-topline"></div>

      <div className="two-overlay">
        <div className="two-content">
          <h2 className="two-title">THE CONFERENCE</h2>
          <div className="two-divider"></div>

          <p className="two-description">
            The International Conference on &quot;Sustainable Development in
            Chemical and Environmental Engineering&quot; (SDCEE-2024) holds
            significant relevance in promoting sustainable practices,
            facilitating knowledge exchange, fostering collaborations, and
            outreach activities. It focuses on various areas of Chemical
            Engineering, including Materials, Energy, Environment, Sustainable
            Processing, Green Technologies, etc. It emphasizes sustainable
            development and encourages multidisciplinary approaches to tackle
            field challenges. The conference offers networking opportunities,
            research dissemination, and publication prospects in Journals of
            international repute. Overall, the conference will play a crucial
            role in driving innovation and sustainability in chemical and
            environmental engineering, making it an important event for
            researchers and industry professionals.
          </p>

          <p className="two-description">
            It emphasizes sustainable development and encourages
            multidisciplinary approaches to tackle field challenges. The
            conference offers networking opportunities, research
            dissemination, and publication prospects in Journals of
            international repute. Overall, the conference will play a crucial
            role in driving innovation and sustainability in chemical and
            environmental engineering, making it an important event for
            researchers and industry professionals.
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
              <div className="topic">Sustainable Environmental Solutions</div>
              <div className="topic">Advancements in Energy Engineering</div>
              <div className="topic">Materials in Engineering</div>
            </div>

            <div className="topics-column">
              <div className="topic">Modeling and Simulation of Processes</div>
              <div className="topic">Bioprocessing and Food Engineering</div>
              <div className="topic">Applied Radiation Technology</div>
              <div className="topic">
                AI, Machine Learning, and Data Analytics in Process
                Design/Optimization
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}