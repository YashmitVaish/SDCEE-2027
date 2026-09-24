import React from "react";
import "./Speakers.css";
import GradientRing from "../GradientRing/GradientRing";

const speakers = [
  {
    name: "Hannah Affum",
    department: "International Atomic Energy Agency",
    image: require("./images/hannahaffum.png"),
    place: "Austria",
    highlight: true,
  },
  {
    name: "Prof. Olivier Potier",
    position: "",
    department: "University of Lorraine",
    image: require("./images/OlivierPotier.png"),
    place: "France",
    highlight: true,
  },
  {
    name: "Dr. Chanatip Samart",
    position: "",
    department: "Thammasat University",
    image: require("./images/ChanatipSamart.webp"),
    place: "Thailand",
    highlight: true,
  },
  {
    name: "Dr. Hao Lin",
    position: "",
    department: "Rutgers University",
    image: require("./images/linhao.jpg"),
    place: "USA",
    highlight: true,
  },
  {
    name: "Prof. Christopher Pain",
    position: "",
    department: "Imperial College London",
    image: require("./images/christopherPain.jpg"),
    place: "UK",
    highlight: true,
  },
  {
    name: "Dr. Kunal Mondal",
    position: "",
    department: "University of Central Florida",
    image: require("./images/kunalmondal.jpg"),
    place: "USA",
  },
  {
    name: "Dr. Gopalakrishnan Kumar",
    position: "",
    department: "University of Stavanger",
    image: require("./images/gopalkrishnan.jpg"),
    place: "Norway",
  },
  {
    name: "Dr. Vinod M. Janardhanan",
    position: "",
    department: "IIT Hyderabad",
    image: require("./images/vinodj.jpg"),
    place: "India",
  },
  {
    name: "Prof. Rajnish Kumar",
    position: "",
    department: "Indian Institute of Technology Madras",
    image: require("./images/rajnishkumar.jpg"),
    place: "India",
  },
  {
    name: "Prof. Jayant K. Singh",
    position: "",
    department: "Indian Institute of Technology Kanpur",
    image: require("./images/jayantksingh.jpg"),
    place: "India",
  },
  {
    name: "Prof. Rabibrata Mukherjee",
    position: "",
    department: "Indian Institute of Technology Kharagpur",
    image: require("./images/rabibratamukherjee.png"),
    place: "India",
  },
  {
    name: "Prof. Anil Verma",
    position: "",
    department: "Indian Institute of Technology Delhi",
    image: require("./images/Prof. Anil Verma.jpg"),
    place: "India",
  },
  {
    name: "Prof. Vimal Chandra Srivastava",
    position: "",
    department: "Indian Institute of Technology Roorkee",
    image: require("./images/Vimal Chandra Srivastava.jpg"),
    place: "India",
  },
  {
    name: "Prof. Vikram Vishal",
    position: "",
    department: "Indian Institute of Technology Bombay",
    image: require("./images/vikramvishal.jpg"),
    place: "India",
  },
  {
    name: "Prof. H. J. Pant (Rtd.)",
    position: "",
    department: "Isotope and Radiation Application Division, Bhabha Atomic Research Centre",
    image: require("./images/H.J.Pant.jpg"),
    place: "Mumbai, India",
  },
  {
    name: "Dr. Sharad Lande",
    position: "",
    department: "Reliance Industries Limited",
    image: require("./images/sharadlande.webp"),
    place: "India",
  },
  {
    name: "Dr. Babul Prasad (Scientist)",
    position: "",
    department: "National Chemical Laboratory",
    image: require("./images/babulprasad.webp"),
    place: "Pune, India",
  },
  {
    name: "Dr. Sushil Kumar Kansal",
    position: "",
    department:
      "Dr. S. S. Bhatnagar University Institute of Chemical Engineering and Technology",
    image: require("./images/sushilKamsal.jpg"),
    place: "Punjab, India",
  },
  {
    name: "Dr. Prasun Roy",
    position: "",
    department: "Centre for Fire, Explosive and Environment Safety, Defence Research and Development Organisation",
    image: require("./images/Prasun Roy.jpg"),
    place: "India",
  },
  {
    name: "Dr. S. Manigandan",
    position: "",
    department: "Indian Institute of Technology Ropar",
    image: require("./images/manigandan.jpg"),
    place: "India",
  },
  {
    name: "Dr. Chandi Sasmal",
    position: "",
    department: "Indian Institute of Technology Ropar",
    image: require("./images/chandisasmal.jpg"),
    place: "India",
  },
  {
    name: "Dr. Neelkanth Nirmalkar",
    position: "",
    department: "Indian Institute of Technology Ropar",
    image: require("./images/neelkanthnirmalkar.jpg"),
    place: "India",
  },
  {
    name: "Dr. Sarang P. Gumfekar",
    position: "",
    department: "Indian Institute of Technology Ropar",
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
          {speakers.map((speaker) => {
            return (
            <div
              className={`onespeaker${speaker.highlight ? " highlighted" : ""}`}
              key={speaker.name}
            >
              <div className="speaker-photo">
                {speaker.image && (
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="speakerimg"
                  />
                )}

                <GradientRing className="speaker-ring" />
              </div>

              <h3>{speaker.name}</h3>

              {speaker.position && <h6>{speaker.position}</h6>}

              {speaker.department && <h6>{speaker.department}</h6>}

              {speaker.place && <h6>{speaker.place}</h6>}
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}