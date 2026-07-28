import React from "react";
import "./Speakers.css";
const chief = [
  {
    name: "Prof. A. B. Pandit ",
    position: "Vice Chancellor, UGC Professor",
    department: " Department of Chemical Engineering ",
    image: require("./images/AbPandit.jpg"),
    place: "Institute of Chemical Technology, Mumbai, India",
  },
];
const speakers = [
  {
    name: "Prof. Jhuma Sadhukhan",
    position: "Director of Research and Innovation",
    department: "Environmental, Energy and Chemical Engineering",
    image: require("./images/Jhuma Sadhukhan.jpg"),
    place: "University of Surrey, UK",
  },
  {
    name: "Prof. Animesh Jha",
    position: "",
    department: "School of Chemical and Process Engineering",
    image: require("./images/animeshjha.jpg"),
    place: "University of Leeds, Leeds, UK",
  },
  {
    name: "Prof. Fulvia Chiampo",
    position: "",
    department: "Department of Applied Science and Technology",
    image: require("./images/Fulvia Chiampo.jpg"),
    place: "Politecnico di Torino, Italy",
  },
  {
    name: "Prof. P. R. Gogate",
    department: "Department of Chemical Engineering",
    image: require("./images/paragGogate.jpg"),
    place: "Institute of Chemical Technology, Mumbai, India",
  },
  {
    name: "Prof. Vimal Chandra Srivastava",
    position:
      "G B Pant Institute Chair Professor and Dean (International Relations)",
    department: "Indian Institute of Technology Roorkee, India",
    image: require("./images/Vimal Chandra Srivastava.jpg"),
    place: "",
  },
  {
    name: "Prof. Anil Verma",
    position: "Department of Chemical Engineering",
    department: "Indian Institute of Technology Delhi, India",
    image: require("./images/Prof. Anil Verma.jpg"),
    place: "",
  },
  {
    name: "Prof. Amit Kumar Dhiman",
    position: "Department of Chemical Engineering",
    department: "Indian Institute of Technology Roorkee, India",
    image: require("./images/amitkumardhiman.jpg"),
    place: "",
  },
  {
    name: "Prof. Kishalay Mitra",
    position: "Department of Chemical Engineering",
    department: "Indian Institute of Technology Hyderabad, India",
    image: require("./images/Kishalay_Mitra.jpg"),
    place: "",
  },
  {
    name: " Prof. Sushil Kumar Kansal",
    position: "",
    department: "Department of Chemical Engineering",
    image: require("./images/sushilKamsal.jpg"),
    place:
      "Dr. S. S. Bhatnagar University Institute of Chemical Engineering & Technology, Punjab, India",
  },
  {
    name: "Prof. Narasimha Mangadoddy",
    department: "Department of Chemical Engineering",
    image: require("./images/narasimha.jpg"),
    place: "Indian Institute of Technology Hyderabad, India",
  },
  {
    name: "Prof. Chinmay Ghoroi",
    position: "Department of Chemical Engineering",
    department: "Indian Institute of Technology Gandhinagar, India",
    image: require("./images/Chinmay Ghoroi.jpg"),
    place: "",
  },
  {
    name: "Prof. Girish M. Joshi",
    position: "Department of Chemical Engineering",
    department:
      "Institute of Chemical Technology (ICT) Mumbai Marathwada Campus Jalna, India",
    image: require("./images/Girish M Joshi.jpg"),
    place: "",
  },
  {
    name: "Prof. Rajesh Kumar Upadhyay",
    position: "Department of Chemical Engineering",
    department: "Indian Institute of Technology (BHU) Varanasi, India",
    image: require("./images/Rajesh_kumar.jpg"),
    place: "",
  },
  {
    name: "Prof. Manojkumar Ramteke",
    position: "Department of Chemical Engineering",
    department: "Indian Institute of Technology Delhi, India",
    image: require("./images/Manoj_kumar.jpg"),
    place: "",
  },
  {
    name: "Dr. Prasun Roy",
    position: "Scientist-F",
    department: "Centre for Fire, Explosive and Environment Safety",
    image: require("./images/Prasun Roy.jpg"),
    place: "Defense Research and Development Organization, India",
  },
  {
    name: "Dr. Bhanu Pratap Singh",
    position: "Senior Principal Scientist and Deputy Head",
    department: "Advanced Carbon Products and Metrology Section",
    image: require("./images/Bhanu Pratap Singh.jpg"),
    place: "CSIR-National Physical Laboratory, India",
  },
  {
    name: "Dr. H. J. Pant",
    position: "Outstanding Scientist and Head",
    department: "Isotope and Radiation Application Division",
    image: require("./images/H.J.Pant.jpg"),
    place: "Bhabha Atomic Research Centre, Mumbai, India",
  },
  {
    name: "Dr. Ram Chandar",
    position: "Director",
    department: "Huwel Lifesciences",
    image: require("./images/Ram Chandar.jpg"),
    place: "Hyderabad, India",
  },
  {
    name: "Dr. Sandip Patil",
    position: "Director",
    department: "E-Spin Nanotech Pvt. Ltd.",
    image: require("./images/Sandip Patil.jpg"),
    place: "Kanpur, India",
  },
  {
    name: "Dr. Sachin Kumar",
    position: "Deputy Director/Scientist",
    department: "Sardar Swaran Singh National Institute of Bio-Energy",
    image: require("./images/Sachin-kumar.jpg"),
    place: "Kapurthala, India",
  },
];

export default function Speakers() {
  return (
    <>
      <div className="chiefguest">
        <h1 className="center chief">Chief Guest</h1>
        <div className="chief-speakercont">
          {chief.map((chief) => (
            <div className="onespeaker">
              <img src={chief.image} className="chief-speakerimg" />
              <h3>{chief.name}</h3>
              <h6>{chief.position}</h6>
              <h6>{chief.department}</h6>
              <h6>{chief.place}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className="wrapper">
        <div className="speakers" id="speakers">
          <div>
            <h1>Keynote Speakers</h1>
          </div>

          <div className="speakercont">
            {speakers.map((speaker) => (
              <div className="onespeaker">
                <img src={speaker.image} className="speakerimg" />
                <h3>{speaker.name}</h3>
                <h6>{speaker.position}</h6>
                <h6>{speaker.department}</h6>
                <h6>{speaker.place}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
