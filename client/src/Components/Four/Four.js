import React from "react";
import institute from "./hostel M.png";
import "./Four.css";
<img src={require("./hostel M.png")} alt="institute" />;

export default function four() {
  return (
    <div className="four" id="venue">
        <div className="wrapper">
          <h2 className="center">Venue</h2>
          <hr />
          <div className="venuecont">
            <div className="venuetext">
              <h3>The Institute</h3>
              <p>
                Thapar Institute of Engineering and Technology (TIET) is one of
                India’s oldest and finest educational institutions, which provides a
                steady source of highly skilled talent to the nation and overseas.
                Founded in 1956 with a campus spread across sprawling 250 acres, the
                institute in Patiala has been a pioneer in engineering education,
                research, and innovation. Our community involves ingenious minds
                solvers eager to make the world a better place to live in with their
                innovative techniques and discoveries. Rated amongst the country's
                top-ranked innovation-driven private universities and technical
                institutes, TIET has been accredited with an A+ grade by the
                National Assessment and Accreditation Council (NAAC). Currently, the
                institute is ranked 20th in the country by NIRF. Our alumni have
                stood out in various fields, such as business and industry,
                administrative and regulatory services, research and education, and
                social and human rights organizations
              </p>
            </div>

            <img className="venueimage" src={require("./m2.jpg")} alt="" />
          </div>
        </div>
    </div>
  );
}
