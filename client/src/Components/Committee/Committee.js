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
    dept: "Electronics and Communication, TIET Patiala",
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
    dept: "Computer Science Engineering, TIET Patiala",
  },
  {
    name: "Dr. Shilpi Verma",
    img: require("./images/shilpiverma.jpg"),
    dept: "Energy & Environment, TIET Patiala",
  },
  {
    name: "Dr. H. S. Singh",
    img: require("./images/harishankar.png"),
    dept: "Electronics and Communication, TIET Patiala",
  },
  {
    name: "Dr. Dhamodharan K.",
    img: require("./images/dk.jpeg"),
    dept: "Energy & Environment, TIET Patiala",
  },
  {
    name: "Prof. Sapna Sharma",
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
];

const coreteam = [
  {
    name: "Prof. Avinash Chandra",
    img: require("./images/avinashchandra.jpg"),
  },
];

const coconveners = [
  {
    name: "Dr. Sudhir Kumar Singh",
    img: require("./images/sudhir.jpg"),
  },
  {
    name: "Dr. Parminder Singh",
    img: require("./images/parminder.jpeg"),
  },
  {
    name: "Dr. Vivek Pawar",
    img: require("./images/vivekpawar.jpg"),
  },
  {
    name: "Dr. Himali Horo",
    img: require("./images/himalihoro.jpg"),
  },
];

const orgsecs = [
  {
    name: "Dr. Renuka",
    img: require("./images/Dr. Renuka.jpg"),
  },
  {
    name: "Dr. Sushma Kumari",
    img: require("./images/Dr. Sushma Kumari.jpeg"),
  },
  {
    name: "Dr. Lovepreet Singh",
    img: require("./images/Dr. Lovepreet Singh.png"),
  },
  {
    name: "Dr. Sujoy Chattaraj",
    img: require("./images/Dr. Sujoy Chattaraj.png"),
  },
  {
    name: "Dr. Chandra Shekhar",
    img: require("./images/Dr. Chandra Shekhar.jpg"),
  },
];

const tpc = [
  "Prof. Rajeev Mehta",
  "Prof. Raj Kumar Gupta",
  "Prof. Haripada Bhunia",
  "Prof. Sanghamitra Barman",
  "Prof. Sanjeev Kumar Ahuja",
  "Prof. Neetu Singh",
  "Dr. Jai Prakash Kushwaha",
  "Dr. Rakesh Kumar Gupta",
];

const webteam = [
  "Jash Patel",
  "Yashmit Vaish",
  "Ankita Sharma",
  "Varun Gupta",
  "Rudraans Singh",
];

const intladvcom = [
  { name: "Prof. Ajay Dalai", department: "Univ. of Saskatchewan, Canada" },
  { name: "Prof. Chanatip Samart", department: "Thammasat University, Thailand" },
  { name: "Prof. Dipan Kundu", department: "UNSW Sydney, Australia" },
  { name: "Prof. Amarjit Singh Sarpal", department: "FURG, Brazil" },
  { name: "Prof. Animesh Jha", department: "Univ. of Leeds, UK" },
  { name: "Prof. Rahul R. Bhosale", department: "UT Chattanooga, USA" },
  { name: "Prof. Rajendra Prasad Singh", department: "Southeast University, China" },
  { name: "Prof. Devendra P. Saroj", department: "Univ. of Surrey, UK" },
  { name: "Prof. Siddharth Gadkari", department: "Univ. of Surrey, UK" },
  { name: "Prof. Ashutosh Goyal", department: "Rutgers University, USA" },
  { name: "Prof. Ramesh Kumar", department: "Hanyang University, South Korea" },
  { name: "Prof. Akhilesh Kumar", department: "Ewha Womans University, South Korea" },
  { name: "Prof. Prhashanna Ammu", department: "Standard Industries, USA" },
  { name: "Prof. Christina G. Georgantopoulou", department: "Bahrain Polytechnic, Bahrain" },
  { name: "Prof. Gollapudi Narayana", department: "Bahrain Polytechnic, Bahrain" },
  { name: "Prof. Abdul Gani Abdul Jameel", department: "KFUPM, Saudi Arabia" },
  { name: "Prof. Lakkimsetty Nageswara Rao", department: "AURAK, UAE" },
  { name: "Prof. Amrita Jain", department: "Polish Academy of Sciences, Poland" },
];

const natadvcom = [
  { name: "Prof. Adarsh K. Arya", department: "HBTU Kanpur, India" },
  { name: "Prof. Amit Kumar Dhiman", department: "IIT Roorkee, India" },
  { name: "Prof. Anil Kumar", department: "DTU Delhi, India" },
  { name: "Dr. Arti Bhatt", department: "CFEES-DRDO, Delhi, India" },
  { name: "Dr. Bhanu Pratap Singh", department: "CSIR-NPL, New Delhi, India" },
  { name: "Prof. Bhaskar Bhaduri", department: "IIT Kharagpur, India" },
  { name: "Dr. Bipul Sarkar", department: "CSIR-IIP, Dehradun, India" },
  { name: "Prof. Brajesh Kumar", department: "NIT Srinagar, India" },
  { name: "Prof. Chandi Sasmal", department: "IIT Ropar, India" },
  { name: "Prof. Dipankar Bandyopadhyay", department: "IIT Guwahati, India" },
  { name: "Dr. Durgesh Nandini", department: "CFEES-DRDO, Delhi, India" },
  { name: "Prof. G. L. Devnani", department: "HBTU Kanpur, India" },
  { name: "Dr. Harish Jagat Pant", department: "Former Scientist & Head, BARC, India" },
  { name: "Dr. Jayashree Biswal", department: "BARC Mumbai, India" },
  { name: "Dr. Jayshree Ramkumar", department: "BARC Mumbai, India" },
  { name: "Prof. Jayant K. Singh", department: "IIT Kanpur, India" },
  { name: "Prof. Narsimha Mangadoddy", department: "IIT Hyderabad, India" },
  { name: "Prof. Parag R. Gogate", department: "ICT Mumbai, India" },
  { name: "Prof. Paramita Das", department: "IISER Bhopal, India" },
  { name: "Dr. Pooja Devi", department: "CSIR-CSIO, India" },
  { name: "Prof. Prateek N. Seth", department: "BITS Pilani, India" },
  { name: "Prof. Praveen Somvanshi", department: "MIT-ADT University, Pune, India" },
  { name: "Prof. R. P. Chhabra", department: "Shiv Nadar University, India" },
  { name: "Prof. Rabibrata Mukherjee", department: "IIT Kharagpur, India" },
  { name: "Prof. Raj Kumar Arya", department: "NIT Jalandhar, India" },
  { name: "Prof. Rakesh Kumar", department: "RGIPT, India" },
  { name: "Prof. S.Vasudevan", department: "CSIR-CECRI, India" },
  { name: "Prof. S. T. Mhaske", department: "ICT Mumbai, India" },
  { name: "Prof. Sachin Kumar", department: "HBTU Kanpur, India" },
  { name: "Prof. Saleem Javed", department: "Jamia Millia Islamia, India" },
  { name: "Prof. Sandeep Khan", department: "IIT Patna, India" },
  { name: "Prof. Sandip Patil", department: "E-Spin Nanotech, India" },
  { name: "Prof. Siddharth Sengupta", department: "IIT (ISM) Dhanbad, India" },
  { name: "Prof. Sushil Kumar", department: "MNNIT Allahabad, India" },
  { name: "Dr. Surya Kant Kumar", department: "CFEES-DRDO, Delhi, India" },
  { name: "Prof. Tarak Patra", department: "IIT Madras, India" },
  { name: "Dr. V. K. Sharma", department: "BARC, India" },
  { name: "Dr. Veerendra Sharma", department: "BARC, India" },
  { name: "Dr. Venkata Chandra Sekhar Palla", department: "CSIR-IIP, Dehradun, India" },
  { name: "Prof. Vimal Katiyar", department: "IIT Guwahati, India" },
  { name: "Prof. Vimal Kumar", department: "IIT Roorkee, India" },
  { name: "Prof. Vishal Singh", department: "NIT Hamirpur, India" },
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

        <div className="orgcom" style={{ marginBottom: "60px" }}>
          <div>
            <h1>Core Team</h1>
            <h6>Department of Chemical Engineering, TIET Patiala</h6>
          </div>

          <div className="orgcommembers">

            {/* CHAIRPERSON & CONVENER */}

            <h3 className="corehead">
              Chairperson &amp; Convener
            </h3>

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
                  <p className="core-role">Chairperson &amp; Convener</p>
                </div>
              </div>
            ))}

            {/* CO-CONVENERS */}

            <h3 className="corehead">
              Co-Conveners
            </h3>

            {coconveners.map((member, i) => (
              <div
                className="orgcommember core-member co-convener"
                key={i}
              >
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
                  <p className="core-role">Co-Convener</p>
                </div>
              </div>
            ))}

            {/* ORGANIZING SECRETARIES */}

            <h3 className="corehead">
              Organizing Secretaries
            </h3>

            {orgsecs.map((member, i) => (
              <div
                className="orgcommember core-member orgsecs"
                key={i}
              >
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
          <h1>Organizing Committee</h1>

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
                        <circle
                          cx="12"
                          cy="8"
                          r="4"
                          fill="#c9c2c4"
                        />
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

          {[
            ["International Advisory Committee", intladvcom, ""],
            ["National Advisory Committee", natadvcom, " national"],
          ].map(([title, list, extra]) => (
          <div className={"othercom1" + extra} key={title}>
            <h3>{title}</h3>

            <div className="committee-list">
              {list.map((person, index) => (
                <div
                  key={index}
                  className="committee-item"
                >
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
          ))}

          <div className="othercom-stack">

            <div className="othercom1">
              <h3>Technical Programme Committee</h3>

              <div className="committee-list">
                {tpc.map((name) => (
                  <p className="name-department" key={name}>
                    <strong>{name}</strong>
                    , Chemical Engineering, TIET
                  </p>
                ))}
              </div>
            </div>

            <div className="othercom1">
              <h3>Web Development Team</h3>

              {webteam.map((name) => (
                <p className="name" key={name}>
                  <strong>{name}</strong>
                </p>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}