import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "../Components/Footer/Footer";
import "./registration.css"; // Import your CSS file

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
      category: "Foreign delegates",
      earlyBird: "300 $",
      regular: "400 $",
      online: "300 $",
    },
    {
      category: "Overseas scholars of Indian origin (with valid proof)",
      earlyBird: "200 $",
      regular: "300 $",
      online: "200 $",
    },
    {
      category: "Listener/ Accompanying person",
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

  return (
    <div>
      <Navbar />
      <div className="register" id="">
        <div className="wrapper-reg">
          <div className="register-top">
            <h1 className="hero-head reg-hero-head">SDCEE 2027</h1>
            <h4>
              {" "}
              2nd International Conference  <br /> on <br />Sustainable Development in
              Chemical Engineering, Energy and Environment
            </h4>
          </div>
          <div className="register-center">
            <h1>Registration Guidelines</h1>
          </div>
          <div className="fee-details">
            <h2>Registration Fee</h2>
            <div className="table-scroll">
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
                      {item.category === "Listener/ Accompanying person" ? (
                        <td colSpan={2} style={{ textAlign: "center" }}>
                          {item.regular}
                        </td>
                      ) : (
                        <td>{item.earlyBird}</td>
                      )}
                      {item.category !== "Listener/ Accompanying person" && (
                        <td>{item.regular}</td>
                      )}
                      <td>{item.online}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="register-guide">
              <ul className="guide-reg">
                <li>
                  Registration fee includes registration kit, lunch, conference/ gala dinner, and tea during the conference sessions for offline attendees.
                </li>
                <li>
                  Registration fee is inclusive of GST.
                </li>
                <li>
                  {" "}
                  The registration fee does not include the Article Publication Charge (APC). If selected for publication, authors are responsible for paying the APC directly according to the journal’s.
                </li>
              </ul>
            </div>
          </div>
          <div className="button-container">
            <a href="https://forms.gle/k6itCAWS2avkJFmB8" target="_blank" rel="noopener noreferrer">
              <button>Link to Register</button>
            </a>
            <a href="https://forms.gle/r784zXXhd1zkoNeE6" target="_blank" rel="noopener noreferrer">
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
            <div className="payment-details-text">
              <div className="payment-details-qr">
                <img
                  src={require("./scan-and-pay-qr.png")}
                  alt="Scan & Pay QR Code"
                  className="qr-image"
                />
                <p className="qr-vpa">VPA : o5bfrz37gff9@idbi</p>
              </div>
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
                <strong>Bank Name </strong> IDBI Bank
              </p>
              <p>
                <strong>IFSC Code </strong> IBKL0000267
              </p>
              <p>
                <strong>Swift Code </strong> IBKLINBB003
              </p>
              <p>
                <strong>Bank Address </strong> 644, Opposite Gurudwara Kashmirian, Main Road, Tripuri Town, Patiala, Punjab, 147001
              </p>
            </div>
          </div>
          <div className="key-dates">
            <h2>Important Dates:</h2>
            <ul>
              <li>
                <strong>Last Date of Abstract Submissions:</strong> October 31,
                2026
              </li>
              <li>
                <strong>Early Bird Registration (deadline) :</strong> December 20, 2026
              </li>
              {/* <li>
              <strong>Early Bird Registration Start:</strong> October
              01,2023-December 15,2023
            </li> */}
              <li>
                <strong>Full Paper (Selected) Submission:</strong> January 15, 2027 - February 15, 2027
              </li>
              <li>
                <strong>Conference Date:</strong> February 18-20, 2027
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}