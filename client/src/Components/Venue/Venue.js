import React from "react";
import "./Venue.css";
import venuePhoto from "./venue-photo.webp";
import venueIcon from "./venue-icon.svg";
import blobTopLeft from "./blob-topleft.svg";
import ringTopLeft from "./ring-topleft.svg";
import blobRight from "./blob-right.svg";
import blobBottomRight from "./blob-bottomright.svg";
import photoFrame from "./photo-frame.svg";
import arcSwirl from "./arc-swirl.svg";

export default function Venue() {
  return (
    <section className="venue">
      <img className="venue-decor venue-blob-topleft" src={blobTopLeft} alt="" aria-hidden="true" />
      <img className="venue-decor venue-ring-topleft" src={ringTopLeft} alt="" aria-hidden="true" />
      <img className="venue-decor venue-blob-right" src={blobRight} alt="" aria-hidden="true" />
      <img className="venue-decor venue-blob-bottomright" src={blobBottomRight} alt="" aria-hidden="true" />

      <img className="venue-decor venue-arc venue-arc-1" src={arcSwirl} alt="" aria-hidden="true" />
      <img className="venue-decor venue-arc venue-arc-2" src={arcSwirl} alt="" aria-hidden="true" />
      <img className="venue-decor venue-arc venue-arc-3" src={arcSwirl} alt="" aria-hidden="true" />

      <img className="venue-decor venue-photo-frame" src={photoFrame} alt="" aria-hidden="true" />

      <div className="venue-image-wrap">
        <img
          src={venuePhoto}
          alt="Thapar Institute of Engineering and Technology campus entrance"
          className="venue-image"
        />
      </div>

      <div className="venue-text">
        <h3 className="venue-subtitle">The Institute</h3>
        <p className="venue-description">
          Thapar Institute of Engineering and Technology (TIET) is one of
          India&apos;s oldest and finest educational institutions, which
          provides a steady source of highly skilled talent to the nation
          and overseas. Founded in 1956 with a campus spread across
          sprawling 250 acres, the institute in Patiala has been a pioneer
          in engineering education, research, and innovation. Our
          community involves ingenious minds solvers eager to make the
          world a better place to live in with their innovative techniques
          and discoveries. Rated amongst the country&apos;s top-ranked
          innovation-driven private universities and technical institutes,
          TIET has been accredited with an A+ grade by the National
          Assessment and Accreditation Council (NAAC). Currently, the
          institute is ranked 20th in the country by NIRF. Our alumni have
          stood out in various fields, such as business and industry,
          administrative and regulatory services, research and education,
          and social and human rights organizations.
        </p>
      </div>

      <img className="venue-decor venue-icon venue-icon-top" src={venueIcon} alt="" aria-hidden="true" />
      <img className="venue-decor venue-icon venue-icon-bottom" src={venueIcon} alt="" aria-hidden="true" />

      <h2 className="venue-title">VENUE</h2>
    </section>
  );
}
