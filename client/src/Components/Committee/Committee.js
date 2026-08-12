import React from "react";
import "./Comittee.css";

const organizing = [
  {
    name: "Prof. B. K. Chudasama",
    img: require("./images/bkchudasama.jpg"),
    dept: "Physics & Materials Science, TIET Patiala",
  },
  {
    name: "Prof. B. C. Mohanty",
    img: require("./images/bcmohantay.jpg"),
    dept: "Physics & Materials Science, TIET Patiala",
  },
  {
    name: "Prof. H. D. Joshi",
    img: require("./images/amitdhir.jpg"),
    dept: "E&C Engineering, TIET Patiala",
  },
  {
    name: "Prof. Dheeraj Gupta",
    img: require("./images/dvarikanratha.jpg"),
    dept: "Mechanical Engineering, TIET Patiala",
  },
  {
    name: "Prof. Dwarika Nath Ratha",
    img: require("./images/ssmalick.jpg"),
    dept: "Civil Engineering, TIET Patiala",
  },
  {
    name: "Dr. Sharad Saxena",
    img: require("./images/anoopverma.jpg"),
    dept: "CSE, TIET Patiala",
  },
  {
    name: "Dr. Shilpi Verma",
    img: require("./images/sapnasharma.jpg"),
    dept: "Energy & Environment, TIET Patiala",
  },
  {
    name: "Dr. H. S. Singh",
    img: require("./images/sharadsaxena.jpg"),
    dept: "E&C Engineering, TIET Patiala",
  },
  {
    name: "Dr. Dhamodharan K.",
    img: require("./images/Dchoudhury.jpg"),
    dept: "Energy & Environment, TIET Patiala",
  },
  {
    name: "Dr. Sapna Sharma",
    img: require("./images/shilpiverma.jpg"),
    dept: "Mathematics, TIET Patiala",
  },
  {
    name: "Dr. Rohit Singla",
    img: require("./images/BunushreeBehera.png"),
    dept: "Mechanical Engineering, TIET Patiala",
  },
  {
    name: "Dr. Vivek Gupta",
    img: require("./images/JyotsanaMehta.jpg"),
    dept: "Civil Engineering, TIET Patiala",
  },
  {
    name: "Prof. Rajeev Mehta",
    img: require("./images/vivekGupta.jpg"),
    dept: "Chemical Engineering, TIET Patiala",
  },
  {
    name: "Prof. Raj K. Gupta",
    img: require("./images/bonamalipal.jpg"),
    dept: "Chemical Engineering, TIET Patiala",
  },
];

const coreteam = [
  {
    name: "Prof. Rajeev Mehta",
    img: require("./images/rajeevmeheta.jpg"),
    role: "Chairperson",
  },
  {
    name: "Dr. Avinash Chandra",
    img: require("./images/avinashchandra.jpg"),
    role: "Convener",
  },
];

const orgsecs = [
  {
    name: "Dr. Chandra Shekhar",
    img: require("./images/Dr. Chandra Shekhar.jpg"),
    role: "Organizing Secretary",
  },
  {
    name: "Dr. Sujoy Chattaraj",
    img: require("./images/Dr. Sujoy Chattaraj.png"),
    role: "Organizing Secretary",
  },
  {
    name: "Dr. Sushma Kumari",
    img: require("./images/Dr. Sushma Kumari.jpeg"),
    role: "Organizing Secretary",
  },
];

const jointsecs = [
  {
    name: "Dr. Lovepreet Singh",
    img: require("./images/Dr. Lovepreet Singh.png"),
    role: "Joint Secretary",
  },
  {
    name: "Dr. Renuka",
    img: require("./images/Dr. Renuka.jpg"),
    role: "Joint Secretary",
  },
];

const advcom = [
  { name: "Prof. Christopher Pain", department: "ICL, UK" },
  { name: "Prof. Rajnish Kumar", department: "IIT Madras, India" },
  { name: "Prof. Jayant K. Singh", department: "IIT Kanpur, India" },
  { name: "Prof. Dipan Kundu", department: "UNSW, Sydney" },
  { name: "Prof. Vimal Chandra Srivastava", department: "IIT Roorkee, India" },
  { name: "Prof. Rabibrata Mukherjee", department: "IIT Kharagpur, India" },
  { name: "Prof. Vikram Vishal", department: "IIT Bombay, India" },
  { name: "Prof. Amit Dhiman", department: "IIT Roorkee, India" },
  { name: "Prof. Anil Verma", department: "IIT Delhi, India" },
  { name: "Prof. Amarjit Singh Sarpal", department: "FURG, Brazil" },
  { name: "Dr. Siddharth Gadkari", department: "University of Surrey, UK" },
  { name: "Dr. Parag R. Gogate", department: "ICT, India" },
  { name: "Dr. Akhilesh Kumar", department: "CDC, South Korea" },
  { name: "Dr. Sharad Lande", department: "Reliance Industries Ltd., India" },
  { name: "Dr. Kunal Mondal", department: "UCF, USA" },
  { name: "Dr. Bhanu Pratap Singh", department: "CSIR-NPL, New Delhi, India" },
  { name: "Dr. Pooja Devi", department: "CSIR-CSIO, Chandigarh, India" },
  { name: "Dr. Amrita Jain", department: "IPPT-PAN, Poland" },
  { name: "Dr. Pratik N Sheth", department: "BITS Pilani, India" },
  { name: "Dr Sushil Kumar", department: "MNIT, Allahabad, India" },
  { name: "Dr. Ramesh Kumar", department: "H U, Seoul, Republic of Korea" },
  { name: "Dr. Raj Kumar Arya", department: "NIT Jalandhar, India" },
  { name: "Dr. Sarang P. Gumfekar", department: "IIT Ropar, India" },
  { name: "Dr. Babul Prasad", department: "NCL Pune, India" },
  { name: "Dr. Sushil Kumar Kansal", department: "Punjab University, India" },
  { name: "Dr. Chandi Sasmal", department: "IIT Ropar, India" },
  { name: "Dr. Sandip Patil", department: "E-Spin Nanotech Pvt. Ltd., India" },
  { name: "Dr. Praveen Somwanshi", department: "MIT-ADT University Pune, India" },
];

export default function Committee() {
  return (
    <div className="committee" id="team">
      <div className="wrapper">
        <div className="patrons">
          <div className="patron">
            <img
              src={require("./images/padmakumarnair.jpg")}
              alt=""
              width={"45%"}
            />
            <h5 className="patronname">Prof. Padmakumar Nair</h5>
            <h4 className="patronhead">Chief Patron</h4>
            <p className="patronpost">Director, TIET</p>
          </div>
          <div className="patron" style={{ marginTop: "300px" }}>
            <img
              src={require("./images/ajaybatish.jpg")}
              alt=""
              width={"45%"}
            />
            <h5 className="patronname">Prof. Ajay Batish</h5>
            <h4 className="patronhead">Patron</h4>
            <p className="patronpost">Deputy Director, TIET</p>
          </div>
        </div>

        <div className="orgcom" style={{ marginBottom: "100px" }}>
          <div>
            <h1>CORE TEAM</h1>
            <h6>Department of Chemical Engineering, TIET Patiala</h6>
          </div>

          <div className="orgcommembers">
            {coreteam.map((member, i) => (
              <div className="orgcommember secs">
                <div>
                  <h3 className="color-role">{member.role}</h3>
                </div>
              </div>
            ))}

            {coreteam.map((member, i) => (
              <div className="orgcommember secs">
                <img
                  src={member.img}
                  alt=""
                  className="orgcommemberimg secsimg"
                />
                <div>
                  <h5 style={{ marginTop: "20px" }}>{member.name}</h5>
                </div>
              </div>
            ))}

            <h3 className="corehead">Organizing Secretaries</h3>

            {orgsecs.map((member, i) => (
              <div className="orgcommember orgsecs">
                <img src={member.img} alt="" className="orgcommemberimg" />
                <div>
                  <h5>{member.name}</h5>
                </div>
              </div>
            ))}

            <h3 className="corehead">Joint Secretaries</h3>

            {jointsecs.map((member, i) => (
              <div className="orgcommember">
                <img src={member.img} alt="" className="orgcommemberimg" />
                <div>
                  <h5>{member.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="orgcom">
          <h1>ORGANIZING COMMITTEE</h1>

          <div className="orgcommembers">
            {organizing.map((member, i) => (
              <div className="orgcommember">
                <img src={member.img} alt="" className="orgcommemberimg" />
                <div>
                  <h5>{member.name}</h5>
                  <p>{member.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="othercom">
          <div className="othercom1">
            <h3>Advisory Committee</h3>
            <div className="committee-list">
              {advcom.map((person, index) => (
                <div key={index} className="committee-item">
                  <p className="name-department">
                    <span className="name-adv">
                      <strong>{person.name}</strong>
                    </span>
                    ,{" "}
                    <span className="department-adv">{person.department}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="othercom1">
            <h3>Student Committee</h3>

            <h5 className="post">Web Designers</h5>
            <p className="name">Tithi Srivastava</p>
            <p className="name">Akhilesh Bhardwaj</p>
            <p className="name">Saanvi Mangla</p>
            <p className="name">Arnav Gupta</p>

            <h5 className="post">Brouchure Designers</h5>
            <p className="name">Ishita Bharadwaaj</p>
            <p className="name">Sudipta Bora</p>

            <h5 className="post">Developers</h5>
            <p className="name">Sharath Chandra</p>
            <p className="name">Saaransh Gupta</p>
          </div>
        </div>
      </div>
    </div>
  );
}
