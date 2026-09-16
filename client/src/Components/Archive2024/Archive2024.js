import React from "react";
import "./Archive2024.css";

/*
 * Preserved copy of the SDCEE-2024 home page (originally sdcee2024.thapar.edu,
 * source in this repo's `old/` folder). Content is reproduced verbatim; the
 * marquee, registration/hostel buttons and the Abstract Booklet QR + download
 * link were dropped because none of them lead anywhere any more.
 *
 * Every class name is prefixed `a24-` on purpose: the old site is a fork of this
 * one and shares ~70 class names with it, and CRA bundles CSS globally.
 * Nothing in this file may be a link, button or form.
 */

const JOURNALS = [
  "The Canadian Journal of Chemical Engineering (IF 2.1)",
  "Chemical and Biochemical Engineering Quarterly (IF 1.5)",
  "Chemical Engineering & Technology (IF 2.1)",
  "Environmental Science and Pollution Research (ESPR) (IF 5.8)",
];

const THEMES = [
  "Chemical & Process Engineering",
  "Sustainable Environmental Solutions",
  "Advancements in Energy Engineering",
  "Materials in Engineering",
  "Modeling and Simulation of Processes",
  "Bioprocessing and Food Engineering",
  "Applied Radiation Technology",
  "AI, Machine Learning, and Data Analytics in Process Design/Optimization",
];

const chiefGuest = {
  name: "Prof. A. B. Pandit",
  position: "Vice Chancellor, UGC Professor",
  department: "Department of Chemical Engineering",
  place: "Institute of Chemical Technology, Mumbai, India",
  image: require("./images/AbPandit.jpg"),
};

const speakers = [
  {
    name: "Prof. Jhuma Sadhukhan",
    position: "Director of Research and Innovation",
    department: "Environmental, Energy and Chemical Engineering",
    place: "University of Surrey, UK",
    image: require("./images/Jhuma Sadhukhan.jpg"),
  },
  {
    name: "Prof. Animesh Jha",
    department: "School of Chemical and Process Engineering",
    place: "University of Leeds, Leeds, UK",
    image: require("./images/animeshjha.jpg"),
  },
  {
    name: "Prof. Fulvia Chiampo",
    department: "Department of Applied Science and Technology",
    place: "Politecnico di Torino, Italy",
    image: require("./images/Fulvia Chiampo.jpg"),
  },
  {
    name: "Prof. P. R. Gogate",
    department: "Department of Chemical Engineering",
    place: "Institute of Chemical Technology, Mumbai, India",
    image: require("./images/paragGogate.jpg"),
  },
  {
    name: "Prof. Vimal Chandra Srivastava",
    position:
      "G B Pant Institute Chair Professor and Dean (International Relations)",
    department: "Indian Institute of Technology Roorkee, India",
    image: require("./images/Vimal Chandra Srivastava.jpg"),
  },
  {
    name: "Prof. Anil Verma",
    position: "Department of Chemical Engineering",
    department: "Indian Institute of Technology Delhi, India",
    image: require("./images/Prof. Anil Verma.jpg"),
  },
  {
    name: "Prof. Amit Kumar Dhiman",
    position: "Department of Chemical Engineering",
    department: "Indian Institute of Technology Roorkee, India",
    image: require("./images/amitkumardhiman.jpg"),
  },
  {
    name: "Prof. Kishalay Mitra",
    position: "Department of Chemical Engineering",
    department: "Indian Institute of Technology Hyderabad, India",
    image: require("./images/Kishalay_Mitra.jpg"),
  },
  {
    name: "Prof. Sushil Kumar Kansal",
    department: "Department of Chemical Engineering",
    place:
      "Dr. S. S. Bhatnagar University Institute of Chemical Engineering & Technology, Punjab, India",
    image: require("./images/sushilKamsal.jpg"),
  },
  {
    name: "Prof. Narasimha Mangadoddy",
    department: "Department of Chemical Engineering",
    place: "Indian Institute of Technology Hyderabad, India",
    image: require("./images/narasimha.jpg"),
  },
  {
    name: "Prof. Chinmay Ghoroi",
    position: "Department of Chemical Engineering",
    department: "Indian Institute of Technology Gandhinagar, India",
    image: require("./images/Chinmay Ghoroi.jpg"),
  },
  {
    name: "Prof. Girish M. Joshi",
    position: "Department of Chemical Engineering",
    department:
      "Institute of Chemical Technology (ICT) Mumbai Marathwada Campus Jalna, India",
    image: require("./images/Girish M Joshi.jpg"),
  },
  {
    name: "Prof. Rajesh Kumar Upadhyay",
    position: "Department of Chemical Engineering",
    department: "Indian Institute of Technology (BHU) Varanasi, India",
    image: require("./images/Rajesh_kumar.jpg"),
  },
  {
    name: "Prof. Manojkumar Ramteke",
    position: "Department of Chemical Engineering",
    department: "Indian Institute of Technology Delhi, India",
    image: require("./images/Manoj_kumar.jpg"),
  },
  {
    name: "Dr. Prasun Roy",
    position: "Scientist-F",
    department: "Centre for Fire, Explosive and Environment Safety",
    place: "Defense Research and Development Organization, India",
    image: require("./images/Prasun Roy.jpg"),
  },
  {
    name: "Dr. Bhanu Pratap Singh",
    position: "Senior Principal Scientist and Deputy Head",
    department: "Advanced Carbon Products and Metrology Section",
    place: "CSIR-National Physical Laboratory, India",
    image: require("./images/Bhanu Pratap Singh.jpg"),
  },
  {
    name: "Dr. H. J. Pant",
    position: "Outstanding Scientist and Head",
    department: "Isotope and Radiation Application Division",
    place: "Bhabha Atomic Research Centre, Mumbai, India",
    image: require("./images/H.J.Pant.jpg"),
  },
  {
    name: "Dr. Ram Chandar",
    position: "Director",
    department: "Huwel Lifesciences",
    place: "Hyderabad, India",
    image: require("./images/Ram Chandar.jpg"),
  },
  {
    name: "Dr. Sandip Patil",
    position: "Director",
    department: "E-Spin Nanotech Pvt. Ltd.",
    place: "Kanpur, India",
    image: require("./images/Sandip Patil.jpg"),
  },
  {
    name: "Dr. Sachin Kumar",
    position: "Deputy Director/Scientist",
    department: "Sardar Swaran Singh National Institute of Bio-Energy",
    place: "Kapurthala, India",
    image: require("./images/Sachin-kumar.jpg"),
  },
];

const patrons = [
  { name: "Prof. Padmakumar Nair", role: "Chief Patron — Director, TIET" },
  { name: "Prof. Ajay Batish", role: "Patron — Deputy Director, TIET" },
];

const coreteam = [
  { name: "Prof. Rajeev Mehta", role: "Chairperson" },
  { name: "Dr. Avinash Chandra", role: "Convener" },
  { name: "Dr. Sanghamitra Barman", role: "Organizing Secretary" },
  { name: "Dr. Jaiprakash Kushwaha", role: "Organizing Secretary" },
  { name: "Dr. Neetu Singh", role: "Organizing Secretary" },
  { name: "Dr. Vivek Pawar", role: "Joint Secretary" },
  { name: "Dr. Himali Horo", role: "Joint Secretary" },
];

const organizing = [
  { name: "Dr. Bonamali Pal", dept: "Chemistry & Biochemistry, TIET Patiala" },
  { name: "Dr. B K Chudasama", dept: "Physics & Material Science, TIET Patiala" },
  { name: "Dr. B. C. Mohanty", dept: "Physics & Material Science, TIET Patiala" },
  { name: "Dr. Amit Dhir", dept: "Energy & Environment, TIET Patiala" },
  { name: "Dr. Dwarika N. Ratha", dept: "Civil Engineering, TIET Patiala" },
  { name: "Dr. S. S. Mallick", dept: "Mechanical Engineering, TIET Patiala" },
  { name: "Dr. Anoop Verma", dept: "Energy & Environment, TIET Patiala" },
  { name: "Dr. Sapna Sharma", dept: "Mathematics, TIET Patiala" },
  { name: "Dr. Sharad Saxena", dept: "Computer Science & Eng, TIET Patiala" },
  { name: "Dr. D. Choudhury", dept: "Chemistry & Biochemistry, TIET Patiala" },
  { name: "Dr. Shilpi Verma", dept: "Energy & Environment, TIET Patiala" },
  { name: "Dr. Bunushree Behera", dept: "Biotechnology, TIET Patiala" },
  { name: "Dr. Jyotsana Mehta", dept: "Biotechnology, TIET Patiala" },
  { name: "Dr. Vivek Gupta", dept: "Civil Engineering Department, TIET Patiala" },
];

const advcom = [
  { name: "Prof. Shang Dai", dept: "University of Leeds, UK" },
  { name: "Prof. Animesh Jha", dept: "University of Leeds, UK" },
  { name: "Prof. Ali Hassanpour", dept: "University of Leeds, UK" },
  { name: "Prof. Mika Sillanpaa", dept: "Aarhus University, Denmark" },
  { name: "Prof. Roop Mahajan", dept: "Virginia Tech, USA" },
  { name: "Prof. S. N. Upadhyay (Rtd.)", dept: "IIT (BHU), Varanasi, India" },
  { name: "Prof. Anil Verma", dept: "IIT Delhi, India" },
  { name: "Prof. V. C. Srivastava", dept: "IIT Roorkee, India" },
  { name: "Prof. Amit Dhiman", dept: "IIT Roorkee, India" },
  { name: "Prof. Narasimha Mangadoddy", dept: "IIT Hyderabad, India" },
  { name: "Prof. Rajat Chakrabarty", dept: "Jadavpur University, Kolkata, India" },
  { name: "Prof. Gopinath Halder", dept: "NIT Durgapur, India" },
  { name: "Dr. Bhanu Pratap Singh", dept: "CSIR-NPL, New Delhi, India" },
  { name: "Dr. Prasun Roy", dept: "Scientist-F, CFEES, DRDO, Delhi, India" },
  { name: "Dr. H. J. Pant", dept: "Head, IRAD, BARC, Mumbai, India" },
  { name: "Prof. Manoj K. C. Ramteke", dept: "IIT Delhi, India" },
  { name: "Prof. Ajay Mandal", dept: "IIT (ISM) Dhanbad, India" },
  { name: "Prof. Chinmay Ghoroi", dept: "IIT Gandhinagar, India" },
  { name: "Prof. R. K. Upadhyay", dept: "IIT (BHU), Varanasi, India" },
  { name: "Prof. G. M. Joshi", dept: "ICT, Mumbai (Marathwada Jalna Campus), India" },
  { name: "Prof. Raghvendra Gupta", dept: "IIT Guwahati, India" },
  { name: "Dr. Raj Kumar Arya", dept: "Dr. B. R. Ambedkar NIT Jalandhar, India" },
  { name: "Dr. Arvind Kumar Gautam", dept: "NIT Hamirpur, India" },
  { name: "Dr. S. Kumar", dept: "Dy. Director, SSN Inst. of Bioenergy, Kapurthala, India" },
  { name: "Dr. Sunil Dhole", dept: "CEO, Chemdist Group of Companies, India" },
  { name: "Dr. Sandip Patil", dept: "Director, E-Spin Nanotech, Kanpur, India" },
  { name: "Dr. Ammu Prhashanna", dept: "Principal Scientist, Mondelez Int., NY, USA" },
  { name: "Dr. Ram Chandar", dept: "Director, Huwel Lifesciences, Hyderabad, India" },
];

const studentcom = [
  { role: "Web Designers", names: ["Tithi Srivastava", "Akhilesh Bhardwaj", "Saanvi Mangla", "Arnav Gupta"] },
  { role: "Brochure Designers", names: ["Ishita Bharadwaaj", "Sudipta Bora"] },
  { role: "Developers", names: ["Sharath Chandra", "Saaransh Gupta"] },
];

const sponsors = [
  require("./sponsors/download.png"),
  require("./sponsors/download-1.png"),
  require("./sponsors/csir.png"),
  require("./sponsors/saipl-logo.png"),
  require("./sponsors/brns.png"),
  require("./sponsors/DRDO.png"),
];

function SpeakerCard({ person }) {
  return (
    <div className="a24-speaker">
      <img src={person.image} alt="" className="a24-speaker-img" />
      <h4 className="a24-speaker-name">{person.name}</h4>
      {person.position && <p className="a24-speaker-line">{person.position}</p>}
      {person.department && <p className="a24-speaker-line">{person.department}</p>}
      {person.place && <p className="a24-speaker-line">{person.place}</p>}
    </div>
  );
}

function PeopleList({ title, people, roleKey }) {
  return (
    <div className="a24-people-block">
      <h3 className="a24-subheading">{title}</h3>
      <ul className="a24-people">
        {people.map((p) => (
          <li className="a24-person" key={p.name + p[roleKey]}>
            <span className="a24-person-name">{p.name}</span>
            <span className="a24-person-role">{p[roleKey]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Archive2024() {
  return (
    <div className="a24">
      <div className="a24-notice" role="note">
        <strong>Archived.</strong> SDCEE-2024 concluded on 24 February 2024. This
        is a preserved copy of the original conference site — registration,
        submissions and all external links are no longer active.
      </div>

      <header className="a24-hero">
        <div className="a24-inner">
          <h1 className="a24-hero-title">SDCEE-2024</h1>
          <p className="a24-hero-sub">
            International Conference on “Sustainable Development in Chemical and
            Environmental Engineering”
          </p>
          <p className="a24-hero-date">February 22–24, 2024</p>
          <p className="a24-hero-venue">
            Thapar Institute of Engineering &amp; Technology, Patiala, India
          </p>

          <a
            className="a24-booklet"
            href={`${process.env.PUBLIC_URL}/Abstract_Book_SDCEE_2024.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abstract Booklet
          </a>

          <div className="a24-journals">
            <h2 className="a24-journals-title">
              Selected papers were published in the following SCI/SCIE journals
            </h2>
            <ul>
              {JOURNALS.map((j) => (
                <li key={j}>{j}</li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <section className="a24-section a24-inner">
        <h2 className="a24-heading">The Conference</h2>
        <p className="a24-para">
          The International Conference on “Sustainable Development in Chemical
          and Environmental Engineering” (SDCEE-2024) holds significant relevance
          in promoting sustainable practices, facilitating knowledge exchange,
          fostering collaborations, and outreach activities. It focuses on
          various areas of Chemical Engineering, including Materials, Energy,
          Environment, Sustainable Processing, Green Technologies, etc. It
          emphasizes sustainable development and encourages multidisciplinary
          approaches to tackle field challenges. The conference offers networking
          opportunities, research dissemination, and publication prospects in
          Journals of international repute. Overall, the conference will play a
          crucial role in driving innovation and sustainability in chemical and
          environmental engineering, making it an important event for researchers
          and industry professionals.
        </p>

        <h3 className="a24-subheading">Conference Themes</h3>
        <p className="a24-para">
          The conference theme is encapsulated in the following subject areas,
          with an openness to explore additional related topics:
        </p>
        <ul className="a24-themes">
          {THEMES.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="a24-section a24-inner">
        <h2 className="a24-heading">Important Dates</h2>
        <p className="a24-para">
          <strong>Conference Date:</strong> February 22–24, 2024
        </p>
      </section>

      <section className="a24-section a24-inner">
        <h2 className="a24-heading">Chief Guest</h2>
        <div className="a24-speakers a24-speakers-single">
          <SpeakerCard person={chiefGuest} />
        </div>

        <h2 className="a24-heading">Keynote Speakers</h2>
        <div className="a24-speakers">
          {speakers.map((s) => (
            <SpeakerCard person={s} key={s.name} />
          ))}
        </div>
      </section>

      <section className="a24-section a24-inner">
        <h2 className="a24-heading">Committee</h2>

        <PeopleList title="Patrons" people={patrons} roleKey="role" />
        <PeopleList title="Core Team" people={coreteam} roleKey="role" />
        <PeopleList
          title="Organizing Committee"
          people={organizing}
          roleKey="dept"
        />
        <PeopleList title="Advisory Committee" people={advcom} roleKey="dept" />

        <div className="a24-people-block">
          <h3 className="a24-subheading">Student Committee</h3>
          {studentcom.map((group) => (
            <div className="a24-student-group" key={group.role}>
              <h4 className="a24-student-role">{group.role}</h4>
              <p className="a24-student-names">{group.names.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="a24-section a24-inner">
        <h2 className="a24-heading">Our Sponsors</h2>
        <div className="a24-sponsors">
          {sponsors.map((logo) => (
            <img src={logo} alt="" className="a24-sponsor-img" key={logo} />
          ))}
        </div>
      </section>
    </div>
  );
}
