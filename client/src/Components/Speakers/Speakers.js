import React from "react";
import "./Speakers.css";
import GradientRing from "../GradientRing/GradientRing";

const speakers = [
  {
    name: "Prof. Rajnish Kumar",
    position: "",
    department: "IIT Madras",
    image: require("./images/rajnishkumar.jpg"),
    place: "India",
  },
  {
    name: "Prof. Jayant K. Singh",
    position: "",
    department: "IIT Kanpur",
    image: require("./images/jayantksingh.jpg"),
    place: "India",
  },
  {
    name: "Prof. Rabibrata Mukherjee",
    position: "",
    department: "IIT Kharagpur",
    image: require("./images/rabibratamukherjee.png"),
    place: "India",
  },
  {
    name: "Prof. Anil Verma",
    position: "",
    department: "IIT Delhi",
    image: require("./images/Prof. Anil Verma.jpg"),
    place: "India",
  },
  {
    name: "Prof. Vimal Chandra Srivastava",
    position: "",
    department: "IIT Roorkee",
    image: require("./images/Vimal Chandra Srivastava.jpg"),
    place: "India",
  },
  {
    name: "Prof. Vikram Vishal",
    position: "",
    department: "IIT Bombay",
    image: require("./images/vikramvishal.jpg"),
    place: "India",
  },
  {
    name: "Prof. H. J. Pant",
    position: "Head, IRAD",
    department: "BARC",
    image: require("./images/H.J.Pant.jpg"),
    place: "Mumbai, India",
  },
  {
    name: "Dr. Sharad Lande",
    position: "",
    department: "Reliance Industries Ltd.",
    image: require("./images/sharadlande.webp"),
    place: "India",
  },
  {
    name: "Dr. Kunal Mondal",
    position: "",
    department: "UCF",
    image: require("./images/kunalmondal.jpg"),
    place: "USA",
  },
  {
    name: "Dr. Babul Prasad",
    position: "",
    department: "NCL Pune",
    image: require("./images/babulprasad.webp"),
    place: "India",
  },
  {
    name: "Dr. Sushil Kumar Kansal",
    position: "",
    department: "Punjab University",
    image: require("./images/sushilKamsal.jpg"),
    place: "India",
  },
  {
    name: "Dr. Prasun Roy",
    position: "",
    department: "CFEES, DRDO",
    image: require("./images/Prasun Roy.jpg"),
    place: "India",
  },
  {
    name: "Dr. Gopalakrishnan Kumar",
    position: "",
    department: "University of Stavanger",
    image: require("./images/gopalkrishnan.jpg"),
    place: "Sweden",
  },
  {
    name: "Dr. S. Manigandan",
    position: "",
    department: "IIT Ropar",
    image: require("./images/manigandan.jpg"),
    place: "India",
  },
  {
    name: "Dr. Chandi Sasmal",
    position: "",
    department: "IIT Ropar",
    image: require("./images/chandisasmal.jpg"),
    place: "India",
  },
  {
    name: "Dr. Neelkanth Nirmalkar",
    position: "",
    department: "IIT Ropar",
    image: require("./images/neelkanthnirmalkar.jpg"),
    place: "India",
  },
  {
    name: "Dr. Sarang P. Gumfekar",
    position: "",
    department: "IIT Ropar",
    image: require("./images/saranggumfekar.jpg"),
    place: "India",
  },
];

export default function Speakers() {
  return (
    <div className="wrapper">
      <div className="speakers" id="speakers">

        <div>
          <h1>Keynote Speakers</h1>
        </div>

        <div className="speakercont">
          {speakers.map((speaker) => (
            <div className="onespeaker" key={speaker.name}>

              <div className="speaker-photo">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="speakerimg"
                />

                <GradientRing className="speaker-ring" />
              </div>

              <h3>{speaker.name}</h3>

              {speaker.position && (
                <h6>{speaker.position}</h6>
              )}

              {speaker.department && (
                <h6>{speaker.department}</h6>
              )}

              {speaker.place && (
                <h6>{speaker.place}</h6>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}