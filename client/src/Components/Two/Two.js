import React from "react";
import "./Two.css";

export default function Two() {
  return (
    <div className="two" id="about">
      {/* <p>
        Request for Hostel Accommodation https://forms.gle/r784zXXhd1zkoNeE6{" "}
      </p> */}
      <div className="wrapper">
        <div className="imgcont">
          <h1>The Conference</h1>
          <img src={require("./Mission.png")} alt="logo" className="img-two" />
        </div>
        <hr />
        <p>
          The International Conference on “Sustainable Development in Chemical
          and Environmental Engineering” (SDCEE-2024) holds significant
          relevance in promoting sustainable practices, facilitating knowledge
          exchange, fostering collaborations, and outreach activities. It
          focuses on various areas of Chemical Engineering, including Materials,
          Energy, Environment, Sustainable Processing, Green Technologies, etc.
          It emphasizes sustainable development and encourages multidisciplinary
          approaches to tackle field challenges. The conference offers
          networking opportunities, research dissemination, and publication
          prospects in Journals of international repute. Overall, the conference
          will play a crucial role in driving innovation and sustainability in
          chemical and environmental engineering, making it an important event
          for researchers and industry professionals.
        </p>
        <p>
          It emphasizes sustainable development and encourages multidisciplinary
          approaches to tackle field challenges. The conference offers
          networking opportunities, research dissemination, and publication
          prospects in Journals of international repute. Overall, the conference
          will play a crucial role in driving innovation and sustainability in
          chemical and environmental engineering, making it an important event
          for researchers and industry professionals.
        </p>
        <br />
        <p>
          <strong>
            Join us live: <a href="https://www.youtube.com/live/C4utU76THcQ?si=y5Jmw_UBvwytKJ0O">https://www.youtube.com/live/C4utU76THcQ?si=y5Jmw_UBvwytKJ0O</a>
          </strong>
        </p>
        <div className="topics">
          <h4>Conference Themes</h4>
          <p>
            The conference theme is encapsulated in the following subject areas,
            with an openness to explore additional related topics:
          </p>
          <ul>
            <li>
              <strong>Chemical & Process Engineering </strong>
            </li>
            <li>
              <strong>Sustainable Environmental Solutions</strong>
            </li>
            <li>
              <strong>Advancements in Energy Engineering</strong>
            </li>
            <li>
              <strong>Materials in Engineering</strong>
            </li>
            <li>
              <strong>Modeling and Simulation of Processes</strong>
            </li>
            <li>
              <strong>Bioprocessing and Food Engineering</strong>
            </li>
            <li>
              <strong>Applied Radiation Technology</strong>
            </li>
            <li>
              <strong>
                AI, Machine Learning, and Data Analytics in Process
                Design/Optimization
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
