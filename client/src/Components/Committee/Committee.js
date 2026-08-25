import React from "react";
import "./Comittee.css";
import GradientRing from "../GradientRing/GradientRing";

const organizing = [
  {
    name: "Prof. B. K. Chudasama",
    img: require("./images/bkc.jpg"),
    dept: "Physics & Materials Science, TIET Patiala",
  },
  {
    name: "Prof. B. C. Mohanty",
    img: require("./images/bcm.jpg"),
    dept: "Physics & Materials Science, TIET Patiala",
  },
  {
    name: "Prof. H. D. Joshi",
    img: require("./images/hdj.png"),
    dept: "E&C Engineering, TIET Patiala",
  },
  {
    name: "Prof. Dheeraj Gupta",
    img: require("./images/dheeraj.jpg"),
    dept: "Mechanical Engineering, TIET Patiala",
  },
  {
    name: "Prof. Dwarika Nath Ratha",
    img: require("./images/dnr.jpg"),
    dept: "Civil Engineering, TIET Patiala",
  },
  {
    name: "Prof. Manmohan Chhibber",
    img: require("./images/manmohan.jpg"),
    dept: "Chemistry and Biochemistry, TIET Patiala",
  },
  {
    name: "Dr. Sharad Saxena",
    img: require("./images/sharadsaxena.jpg"),
    dept: "CSE, TIET Patiala",
  },
  {
    name: "Dr. Shilpi Verma",
    img: require("./images/shilpiverma.jpg"),
    dept: "Energy & Environment, TIET Patiala",
  },
  {
    name: "Dr. H. S. Singh",
    img: require("./images/harishankar.png"),
    dept: "E&C Engineering, TIET Patiala",
  },
  {
    name: "Dr. Dhamodharan K.",
    img: require("./images/dk.jpeg"),
    dept: "Energy & Environment, TIET Patiala",
  },
  {
    name: "Dr. Sapna Sharma",
    img: require("./images/sapnasharma.jpg"),
    dept: "Mathematics, TIET Patiala",
  },
  {
    name: "Dr. Rohit Singla",
    img: require("./images/rohitkumar.jpg"),
    dept: "Mechanical Engineering, TIET Patiala",
  },
  {
    name: "Dr. Vivek Gupta",
    img: require("./images/vivekGupta.jpg"),
    dept: "Civil Engineering, TIET Patiala",
  },
  {
    name: "Prof. Rajeev Mehta",
    img: require("./images/rajeevmeheta.jpg"),
    dept: "Chemical Engineering, TIET Patiala",
  },
  {
    name: "Prof. Raj K. Gupta",
    img: require("./images/rajkumargupta.jpg"),
    dept: "Chemical Engineering, TIET Patiala",
  },
  {
    name: "Prof. H. Bhunia",
    img: require("./images/haripadabhunia.jpg"),
    dept: "Chemical Engineering, TIET Patiala",
  },
  {
    name: "Prof. S. Barman",
    img: require("./images/sanghita.jpg"),
    dept: "Chemical Engineering, TIET Patiala",
  },
  {
    name: "Prof. S. K. Ahuja",
    img: require("./images/sanjeevkumar.jpg"),
    dept: "Chemical Engineering, TIET Patiala",
  },
  {
    name: "Prof. N. Singh",
    img: require("./images/neetusingh.jpg"),
    dept: "Chemical Engineering, TIET Patiala",
  },
  {
    name: "Dr. J. P. Kushwaha",
    img: require("./images/jaiprakashkhushwaha.jpg"),
    dept: "Chemical Engineering, TIET Patiala",
  },
  {
    name: "Dr. Rakesh Gupta",
    img: require("./images/rakeshkumar.jpg"),
    dept: "Chemical Engineering, TIET Patiala",
  },
];

const coreteam = [
  {
    name: "Prof. Avinash Chandra",
    img: require("./images/avinashchandra.jpg"),
    role: "Chairperson & Convener",
  },
];

const coconveners = [
  {
    name: "Dr. Sudhir Kumar Singh",
    img: require("./images/sudhir.jpg"),
    role: "Co-Convener",
  },
  {
    name: "Dr. Parminder Singh",
    img: require("./images/parminder.jpeg"),
    role: "Co-Convener",
  },
  {
    name: "Dr. Vivek Pawar",
    img: require("./images/vivekpawar.jpg"),
    role: "Co-Convener",
  },
  {
    name: "Dr. Himali Horo",
    img: require("./images/himalihoro.jpg"),
    role: "Co-Convener",
  },
];

const orgsecs = [
  {
    name: "Dr. Chandra Shekhar",
    img: require("./images/Dr. Chandra Shekhar.jpg"),
    role: "Organizing Secretary",
  },
  {
    name: "Dr. Sushma Kumari",
    img: require("./images/Dr. Sushma Kumari.jpeg"),
    role: "Organizing Secretary",
  },
  {
    name: "Dr. Sujoy Chattaraj",
    img: require("./images/Dr. Sujoy Chattaraj.png"),
    role: "Organizing Secretary",
  },
];

const jointsecs = [
  {
    name: "Dr. Renuka",
    img: require("./images/Dr. Renuka.jpg"),
    role: "Joint Secretary",
  },
  {
    name: "Dr. Lovepreet Singh",
    img: require("./images/Dr. Lovepreet Singh.png"),
    role: "Joint Secretary",
  },
];

const advcom = [
  { name: "Prof. Christopher Pain", department: "ICL, UK" },
  { name: "Prof. Hao Lin", department: "Rutgers University, New Jersey, US" },
  { name: "Prof. Dipan Kundu", department: "UNSW, Sydney" },
  { name: "Prof. Amit Dhiman", department: "IIT Roorkee, India" },
  { name: "Prof. Amarjit Singh Sarpal", department: "FURG, Brazil" },
  { name: "Dr. Siddharth Gadkari", department: "University of Surrey, UK" },
  { name: "Dr. Parag R. Gogate", department: "ICT, India" },
  { name: "Dr. Akhilesh Kumar", department: "CDC, South Korea" },
  { name: "Dr. Bhanu Pratap Singh", department: "CSIR-NPL, New Delhi, India" },
  { name: "Dr. Pooja Devi", department: "CSIR-CSIO, Chandigarh, India" },
  { name: "Dr. Amrita Jain", department: "IPPT-PAN, Poland" },
  { name: "Dr. Pratik N Sheth", department: "BITS Pilani, India" },
  { name: "Dr Sushil Kumar", department: "MNIT, Allahabad, India" },
  { name: "Dr. Ramesh Kumar", department: "H U, Seoul, Republic of Korea" },
  { name: "Dr. Raj Kumar Arya", department: "NIT Jalandhar, India" },
  { name: "Dr. Sandip Patil", department: "E-Spin Nanotech Pvt. Ltd., India" },
  { name: "Dr. Harish Kumar", department: "DRDO Kanpur, India" },
  { name: "Dr. Salim Jawed Ansari", department: "Jamia Millia Islamia, New Delhi" },
  { name: "Dr. Praveen Somwanshi", department: "MIT-ADT University Pune, India" },
  { name: "Dr. Anuj Tripathi", department: "BARC Mumbai, India" },
  { name: "Dr. Sunil Goswami", department: "BARC Mumbai, India" },
  { name: "Dr Jayashree Biswal", department: "BARC Mumbai, India" },
  { name: "Dr. Sudeep Tondon", department: "CIMAP Lucknow, India" },
  { name: "Dr. Naveen Sharma", department: "CSIO Chandigarh, India" },
  { name: "Dr. Bipul Sarkar", department: "IIP Dehradun, India" },
  { name: "Dr. Suryakant Kumar", department: "CFEES New Delhi, India" },
  { name: "Dr. Venkata Chandra Sekhar Palla", department: "IIP Dehradun, India" },
  { name: "Dr. Arti Bhatt", department: "CFEES, New Delhi, India" },
  { name: "Dr. Durgesh Nandini", department: "CFEES, New Delhi, India" },
  { name: "Dr. Akshar Tripathi", department: "IIT Patna, India" },
  { name: "Dr. Hreetabh Kishore", department: "RGIPT, India" },
];

export default function Committee() {
  return (
    <div className="committee" id="team">
      <div className="wrapper">
        <div className="patrons">
          <div className="patron">
            <div className="patron-photo">
              <img
                src={require("./images/padmakumarnair.jpg")}
                alt=""
                className="patronimg"
              />
              <GradientRing className="patron-ring" />
            </div>
            <h4 className="patronhead">Chief Patron</h4>
            <h5 className="patronname">Prof. Padmakumar Nair</h5>
            <p className="patronpost">Vice Chancellor, TIET</p>
          </div>

          <div className="patron">
            <div className="patron-photo">
              <img
                src={require("./images/ajaybatish.jpg")}
                alt=""
                className="patronimg"
              />
              <GradientRing className="patron-ring" />
            </div>
            <h4 className="patronhead">Patron</h4>
            <h5 className="patronname">Prof. Ajay Batish</h5>
            <p className="patronpost">Pro Vice Chancellor, TIET</p>
          </div>
        </div>

        <div className="orgcom" style={{ marginBottom: "100px" }}>
          <div>
            <h1>CORE TEAM</h1>
            <h6>Department of Chemical Engineering, TIET Patiala</h6>
          </div>

          <div className="orgcommembers">
            <h3 className="corehead">Chairperson &amp; Convener</h3>

            {coreteam.map((member, i) => (
              <div className="orgcommember core-member" key={i}>
                <div className="orgcommember-photo">
                  <img
                    src={member.img}
                    alt=""
                    className="orgcommemberimg"
                  />
                  <GradientRing className="orgcommember-ring" />
                </div>
                <div>
                  <h5>{member.name}</h5>
                </div>
              </div>
            ))}

            <h3 className="corehead">Co-Conveners</h3>

            {coconveners.map((member, i) => (
              <div className="orgcommember core-member" key={i}>
                {member.img && (
                  <div className="orgcommember-photo">
                    <img
                      src={member.img}
                      alt=""
                      className="orgcommemberimg"
                    />
                    <GradientRing className="orgcommember-ring" />
                  </div>
                )}
                <div>
                  <h5>{member.name}</h5>
                </div>
              </div>
            ))}

            <h3 className="corehead">Organizing Secretaries</h3>

            {orgsecs.map((member, i) => (
              <div className="orgcommember core-member orgsecs" key={i}>
                <div className="orgcommember-photo">
                  <img
                    src={member.img}
                    alt=""
                    className="orgcommemberimg"
                  />
                  <GradientRing className="orgcommember-ring" />
                </div>
                <div>
                  <h5>{member.name}</h5>
                </div>
              </div>
            ))}

            <h3 className="corehead">Joint Secretaries</h3>

            {jointsecs.map((member, i) => (
              <div className="orgcommember core-member" key={i}>
                <div className="orgcommember-photo">
                  <img
                    src={member.img}
                    alt=""
                    className="orgcommemberimg"
                  />
                  <GradientRing className="orgcommember-ring" />
                </div>
                <div>
                  <h5>{member.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="orgcom organizing-committee">
          <h1>ORGANIZING COMMITTEE</h1>

          <div className="orgcommembers">
            {organizing.map((member, i) => (
              <div className="orgcommember" key={i}>
                <div className="orgcommember-photo">
                  {member.img ? (
                    <img
                      src={member.img}
                      alt=""
                      className="orgcommemberimg"
                    />
                  ) : (
                    <div
                      className="orgcommemberimg orgcommember-placeholder"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="8" r="4" fill="#c9c2c4" />
                        <path
                          d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"
                          fill="#c9c2c4"
                        />
                      </svg>
                    </div>
                  )}
                  <GradientRing className="orgcommember-ring" />
                </div>

                <div className="orgcommember-plate">
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
                    <span className="department-adv">
                      {person.department}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="othercom1">
            <h3>Student Committee</h3>

            <h5 className="post">Funding</h5>
            <p className="name">Usha</p>
            <p className="name">Mohit</p>
            <p className="name">Pallavi</p>
            <p className="name">Muskaan</p>

            <h5 className="post">Act &amp; Email Correspondence</h5>
            <p className="name">Jyotica</p>
            <p className="name">Aniket</p>
            <p className="name">Nidhi</p>

            <h5 className="post">Web &amp; Brochure</h5>
            <p className="name">Gurmeet</p>
            <p className="name">Abhishek</p>
            <p className="name">Bhakti</p>

            <h5 className="post">Website &amp; Brochure Designing</h5>
            <p className="name">Riya</p>

            <h5 className="post">Developers</h5>
            <p className="name">Jash Patel</p>
            <p className="name">Yashmit Vaish</p>
            <p className="name">Varun Gupta</p>
          </div>
        </div>
      </div>
    </div>
  );
}