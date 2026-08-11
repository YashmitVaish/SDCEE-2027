import React from "react";
import "./Venue.css";
import venueImg from "./thapar-university.webp";

export default function Venue() {
  return (
    <section className="venue">
      <div className="venue-blob venue-blob-topleft"></div>
      <div className="venue-blob venue-blob-right"></div>
      <div className="venue-blob venue-blob-bottomright"></div>
      <div className="venue-arc"></div>

      <span className="venue-icon venue-icon-top">✷</span>
      <span className="venue-icon venue-icon-bottom">✷</span>

      <div className="venue-content">
        <div className="venue-text">
          <h2 className="venue-title">VENUE</h2>
          <h3 className="venue-subtitle">The Institute</h3>

          <p className="venue-description">
            Thapar Institute of Engineering and Technology (TIET) is one of
            India's oldest and finest educational institutions, which
            provides a steady source of highly skilled talent to the nation
            and overseas. Founded in 1956 with a campus spread across
            sprawling 250 acres, the institute in Patiala has been a pioneer
            in engineering education, research, and innovation. Our
            community involves ingenious minds solvers eager to make the
            world a better place to live in with their innovative techniques
            and discoveries. Rated amongst the country's top-ranked
            innovation-driven private universities and technical institutes,
            TIET has been accredited with an A+ grade by the National
            Assessment and Accreditation Council (NAAC). Currently, the
            institute is ranked 20th in the country by NIRF. Our alumni have
            stood out in various fields, such as business and industry,
            administrative and regulatory services, research and education,
            and social and human rights organizations.
          </p>
        </div>

        <div className="venue-image-wrap">
          <img
            src={venueImg}
            alt="Thapar Institute campus"
            className="venue-image"
          />
        </div>
      </div>
    </section>
  );
}