import React, { useState } from "react";
import "../Components/Navbar/Navbar";
import "../Components/Footer/Footer";
import "./registration.css"; // Import your CSS file
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter, Route, Switch, Routes, Router } from "react-router-dom";

export default function Registration() {
  const registrationFees = [
    {
      category: "Faculty/Academicians (Indian)",
      earlyBird: "3500 INR",
      regular: "5000 INR",
      online: "3000 INR",
    },
    {
      category: "Research Scholars/Students",
      earlyBird: "2000 INR",
      regular: "3000 INR",
      online: "1500 INR",
    },
    {
      category: "Industrial participants",
      earlyBird: "7000 INR",
      regular: "10000 INR",
      online: "6000 INR",
    },
    {
      category: "Foreign Delegates",
      earlyBird: "300 $",
      regular: "400 $",
      online: "300 $",
    },
    {
      category: "Overseas Scholars from Indian Origin (With valid proof)",
      earlyBird: "200 $",
      regular: "300 $",
      online: "200 $",
    },
    {
      category: "Listener/ Accompanying Person",
      earlyBird: null,
      regular: (
        <>
          2000 INR
          <br />
          100 $ (for overseas)
        </>
      ),
      online: (
        <>
          1500 INR
          <br />
          80 $ (for overseas)
        </>
      ),
    },
  ];

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div className={`nav ${menuVisible ? "active" : ""}`} id="nav">
        <button className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <Link smooth to="/" className="text-link">
          <div className="logo">
            <img
              src={require("../Components/Navbar/Full-Logo.png")}
              alt="logo"
            />
          </div>
        </Link>
        <div className={`nav-menu ${menuVisible ? "active" : ""}`}>
          <Link smooth to="/#hero" className="text-link">
            <a className="nav-link">Home</a>
          </Link>
          <Link smooth to="/#venue" className="text-link">
            <a className="nav-link">Venue</a>
          </Link>
          <Link smooth to="/#speakers" className="text-link">
            <a className="nav-link">Speakers</a>
          </Link>
          <Link smooth to="/abstract" className="text-link">
            <a className="nav-link">Abstract/Paper Submission</a>
          </Link>
          <Link smooth to="/#dates" className="text-link">
            <a className="nav-link">Schedule</a>
          </Link>
          {/* <Link smooth to="#sponsors" className="text-link">
          <a className="nav-link">Sponsors</a>
        </Link> */}
          <Link smooth to="/#team" className="text-link">
            <a className="nav-link">Our Team</a>
          </Link>
        </div>
        <Link smooth to="/register" className="text-link">
          <div className="nav-regg">
            <button>Register</button>
          </div>
        </Link>
      </div>
      <div className="register" id="">
        <div className="wrapper-reg">
          <div className="register-top">
            <h1 className="hero-head reg-hero-head">SDCEE 2024</h1>
            <h4>
              {" "}
              International Conference on <br /> "Sustainable Development in
              Chemical and <br /> Environmental Engineering"
            </h4>
          </div>
          <div className="register-center">
            <h1>Registration Guidelines</h1>
          </div>
          <div className="fee-details">
            <h2>Registration Fee</h2>
            <table className="table-container">
              <thead>
                <tr>
                  <th>Participant</th>
                  <th>Early bird</th>
                  <th>Regular</th>
                  <th>Online</th>
                </tr>
              </thead>
              <tbody>
                {registrationFees.map((item, index) => (
                  <tr key={index}>
                    <td>{item.category}</td>
                    {item.category === "Listener/ Accompanying Person" ? (
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        {item.regular}
                      </td>
                    ) : (
                      <td>{item.earlyBird}</td>
                    )}
                    {item.category !== "Listener/ Accompanying Person" && (
                      <td>{item.regular}</td>
                    )}
                    <td>{item.online}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="register-guide">
              <ul className="guide-reg">
                <li>
                  All the participants have to submit the registration fee
                  through UPI or Netbanking, in order to attend/present paper in
                  the conference. E-receipt can be downloaded from payment
                  portal after successful payment process.
                </li>
                <li>
                  Once the payment has been done, the authors need to fill the
                  registration form for their confirmation.
                </li>
                <li>
                  {" "}
                  Registration fee includes registration kit, lunch, conference/
                  gala dinner, and tea during the conference sessions.
                </li>
              </ul>
            </div>
          </div>
          <div className="button-container">
            <a href="https://forms.gle/BwTenJaU7qAQLbAw8" target="_blank">
              <button>Link to Register</button>
            </a>
            <a href="https://forms.gle/r784zXXhd1zkoNeE6" target="_blank">
              <button>Hostel Accomodation</button>
            </a>
            <br />
            {/* <Link smooth to="/abstract" className="text-link">
              <a href="">
                <button>Submission Link</button>
              </a>
            </Link> */}
          </div>
          <div className="key-dates">
            <h2>Payment Details</h2>
            <p>
              <strong>Name of Beneficiary </strong> Thapar Institute of
              Engineering and Technology
            </p>
            <p>
              <strong>Account Number </strong> 0267104000092579
            </p>
            <p>
              <strong>Type of A/c </strong> Saving
            </p>
            <p>
              <strong>Bank Name </strong> Kotak Mahindra Bank Ltd.
            </p>
            <p>
              <strong>IFSC Code </strong> IBKL0000267
            </p>
            <p>
              <strong>Swift Code </strong> KKBKINBB
            </p>
            <p>
              <strong>Bank Address </strong> Ground & First Floor, Plot No. 644 Main Road Kashmiran Wala Gurudwara,
              Tripuri Town, Pati Patiala Punjab - 147001
            </p>
          </div>
          <div className="key-dates">
            <h2>Important Dates:</h2>
            <ul>
              <li>
                <strong>Last Date of Abstract Submissions:</strong> January 10,
                2024
              </li>
              <li>
                <strong>Notification of Acceptance:</strong> January 12, 2024
              </li>
              {/* <li>
              <strong>Early Bird Registration Start:</strong> October
              01,2023-December 15,2023
            </li> */}
              <li>
                <strong>Full Paper (Selected) Submission:</strong> January 30,
                2024
              </li>
              <li>
                <strong>Conference Date:</strong> February 22-24, 2024
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}