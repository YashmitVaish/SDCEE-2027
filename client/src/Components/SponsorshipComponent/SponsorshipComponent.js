import React from "react";
import "./SponsorshipComponent.css";
import brns from "./brns.png";
import csir from "./csir.png";
import drdo from "./DRDO.png";
import serb from "./download.png";
import insa from "./download (1).png";
import saipl from "./saipl-logo.png";

const sponsors = [
  { name: "Board of Research in Nuclear Sciences", img: brns },
  { name: "Council of Scientific & Industrial Research", img: csir },
  { name: "Defence Research and Development Organisation", img: drdo },
  { name: "Science and Engineering Research Board", img: serb },
  { name: "Indian National Science Academy", img: insa },
  { name: "SAIPL", img: saipl },
];

const SponsorshipComponent = () => {
  return (
    <div className="our-sponsors">
      <h2 className="section-heading">OUR SPONSORS</h2>
      <div className="sponsors-panel">
        {sponsors.map((sponsor) => (
          <div className="sponsor-logo" key={sponsor.name}>
            <img src={sponsor.img} alt={sponsor.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorshipComponent;