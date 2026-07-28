import React from "react";
import "./SponsorshipComponent.css";
import spimg from "./download.png";
import spimg2 from "./download (1).png";
import spimg3 from "./csir.png";
import spimg4 from "./saipl-logo.png";
import spimg5 from "./brns.png";
import spimg6 from "./DRDO.png";

const SponsorshipComponent = () => {
  return (
    <div className="our-sponsors">
      <h2 className="section-heading">Our Sponsors</h2>
      <div className="separator"></div>
      <br />
      <div className="carousel">
        <img
          src={spimg}
          alt="Sponsor 1"
          className="sponsor-image1 sponsor-image"
        />
        <img
          src={spimg2}
          alt="Sponsor 2"
          className="sponsor-image2 sponsor-image"
        />
        <img
          src={spimg3}
          alt="Sponsor 3"
          className="sponsor-image3 sponsor-image"
        />
        <img
          src={spimg4}
          alt="Sponsor 4"
          className="sponsor-image4 sponsor-image"
        />
        <img
          src={spimg5}
          alt="Sponsor 5"
          className="sponsor-image5 sponsor-image"
        />
        <img
          src={spimg6}
          alt="Sponsor 5"
          className="sponsor-image5 sponsor-image"
        />
      </div>

      {/* 
      <button className="sponsorship-button" onClick={openPDF}>
        Sponsorship Options
      </button> */}
    </div>
  );
};

export default SponsorshipComponent;
