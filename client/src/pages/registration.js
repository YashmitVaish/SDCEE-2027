import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "../Components/Footer/Footer";
import "./registration.css"; // Import your CSS file
import banner from "../Components/Hero/banner.webp";

export default function Registration() {
  const registrationFees = [
    {
      category: "Foreign Delegates",
      earlyBird: "USD 300",
      regular: "USD 400",
      online: "USD 300",
    },
    {
      category: "Overseas Scholars of Indian Origin (with valid proof)",
      earlyBird: "USD 200",
      regular: "USD 300",
      online: "USD 200",
    },
    {
      category: "Research Scholars/Students",
      earlyBird: "INR 2,000",
      regular: "INR 3,000",
      online: "INR 1,500",
    },
    {
      category: "Faculty/Academicians (Indian)",
      earlyBird: "INR 3,500",
      regular: "INR 5,000",
      online: "INR 3,000",
    },
    {
      category: "Industrial Participants",
      earlyBird: "INR 7,000",
      regular: "INR 10,000",
      online: "INR 6,000",
    },
    {
      category: "Listener/Accompanying Person",
      earlyBird: (
        <>
          INR 2,000
          <br />
          USD 100 (overseas)
        </>
      ),
      regular: (
        <>
          INR 2,000
          <br />
          USD 100 (overseas)
        </>
      ),
      online: (
        <>
          INR 1,500
          <br />
          USD 80 (overseas)
        </>
      ),
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="register" id="">
        <img src={banner} alt="SDCEE 2027 banner" className="reg-banner" />
        <div className="wrapper-reg">
          <div className="register-center">
            <h1>Registration Guidelines</h1>
          </div>
          <div className="reg-steps">
            <span>
              Step 1: Abstract{" "}
              <a href="https://cmt3.research.microsoft.com/SDCEE2027" target="_blank" rel="noopener noreferrer">
                submission.
              </a>
            </span>
            <span>Step 2: Payment of registration fees.</span>
            <span>
              Step 3: Complete your{" "}
              <a href="https://forms.gle/k6itCAWS2avkJFmB8" target="_blank" rel="noopener noreferrer">
                registration.
              </a>
            </span>
          </div>
          <div className="reg-row">
          <div className="fee-details">
            <h2>Registration Fee</h2>
            <div className="table-scroll">
              <table className="table-container">
                <thead>
                  <tr>
                    <th>Participant</th>
                    <th>Early Bird</th>
                    <th>Regular</th>
                    <th>Online</th>
                  </tr>
                </thead>
                <tbody>
                  {registrationFees.map((item, index) => (
                    <tr key={index}>
                      <td>{item.category}</td>
                      <td>{item.earlyBird}</td>
                      <td>{item.regular}</td>
                      <td>{item.online}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="register-guide">
              <ul className="guide-reg">
                <li>
                  The registration fee includes registration kit, lunch, conference/gala dinner, and tea during the conference sessions for offline attendees.
                </li>
                <li>
                  The registration fee is inclusive of GST.
                </li>
                <li>
                  {" "}
                  The registration fee does not include the Article Processing Charge (APC). If selected for publication, authors are responsible for paying the APC directly according to the journal’s guidelines.
                  </li>
              </ul>
            </div>
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
                <p className="qr-vpa">VPA: o5bfrz37gff9@idbi</p>
              </div>
              <p>
                <strong>Name of Beneficiary </strong> Thapar Institute of
                Engineering and Technology
              </p>
              <p>
                <strong>Account Number </strong> 0267104000092579
              </p>
              <p>
                <strong>Type of A/c </strong> Savings
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
            <div className="button-container">
              <a href="https://forms.gle/k6itCAWS2avkJFmB8" target="_blank" rel="noopener noreferrer">
                <button>Link to Register</button>
              </a>
              {/* <Link smooth to="/abstract" className="text-link">
                <a href="">
                  <button>Submission Link</button>
                </a>
              </Link> */}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
