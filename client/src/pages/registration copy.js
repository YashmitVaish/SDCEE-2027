// import React, { useState } from "react";
// import "../Components/Navbar/Navbar";
// import "../Components/Footer/Footer";
// import "./registration.css"; // Import your CSS file
// import { HashLink as Link } from "react-router-hash-link";
// import { BrowserRouter, Route, Switch, Routes, Router } from "react-router-dom";

// export default function Registration() {
//   const feeDetails = [
//     {
//       category: "Faculty/Academicians (Indian)",
//       fee: 5000,
//     },
//     {
//       category: "Research Scholars/Students (Indian)",
//       fee: 3000,
//     },
//     {
//       category: "Industrial Participants (Indian)",
//       fee: 7000,
//     },
//     {
//       category: "Foreign Delegates",
//       fee: 350,
//     },
//     {
//       category: "Listener/Accompanying Person (Indian)",
//       fee: 2000,
//     },
//   ];

//   const calculateGST = (fee) => {
//     const gstRate = 0.18; // 18% GST
//     return (fee * gstRate).toFixed(0);
//   };
//   const [menuVisible, setMenuVisible] = useState(false);

//   const toggleMenu = () => {
//     setMenuVisible(!menuVisible);
//   };

//   return (
//     <div>
//       <div className={`nav ${menuVisible ? "active" : ""}`} id="nav">
//         <button className="menu-icon" onClick={toggleMenu}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </button>
//         <Link smooth to="/" className="text-link">
//           <div className="logo">
//             <img
//               src={require("../Components/Navbar/Full-Logo.png")}
//               alt="logo"
//             />
//           </div>
//         </Link>
//         <div className={`nav-menu ${menuVisible ? "active" : ""}`}>
//           <Link smooth to="/#hero" className="text-link">
//             <a className="nav-link">Home</a>
//           </Link>
//           <Link smooth to="/#venue" className="text-link">
//             <a className="nav-link">Venue</a>
//           </Link>
//           <Link smooth to="/#speakers" className="text-link">
//             <a className="nav-link">Speakers</a>
//           </Link>
//           <Link smooth to="/abstract" className="text-link">
//             <a className="nav-link">Abstract/Paper Submission</a>
//           </Link>
//           <Link smooth to="/#dates" className="text-link">
//             <a className="nav-link">Schedule</a>
//           </Link>
//           {/* <Link smooth to="#sponsors" className="text-link">
//           <a className="nav-link">Sponsors</a>
//         </Link> */}
//           <Link smooth to="/#team" className="text-link">
//             <a className="nav-link">Our Team</a>
//           </Link>
//         </div>
//         <Link smooth to="/register" className="text-link">
//           <div className="nav-regg">
//             <button>Register</button>
//           </div>
//         </Link>
//       </div>
//       <div className="register" id="">
//         <div className="wrapper-reg">
//           <div className="register-top">
//             <h1 className="hero-head reg-hero-head">SDCEE 2024</h1>
//             <h4>
//               {" "}
//               International Conference on <br /> "Sustainable Development in
//               Chemical and <br /> Environmental Engineering"
//             </h4>
//           </div>
//           <div className="register-center">
//             <h1>Registration Guidelines</h1>
//           </div>
//           <div className="fee-details">
//             <h2>Fee Details</h2>
//             <table className="table-container">
//               <thead>
//                 <tr>
//                   <th>Category</th>
//                   <th>Fee</th>
//                   <th>18% GST</th>
//                   <th>Total Payable Amount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {feeDetails.map((item, index) => (
//                   <tr key={index}>
//                     <td>{item.category}</td>
//                     <td>
//                       {item.category === "Foreign Delegates"
//                         ? `$${item.fee.toFixed(0)}`
//                         : `₹${item.fee.toFixed(0)}`}
//                     </td>
//                     <td>
//                       {item.category === "Foreign Delegates"
//                         ? `$${calculateGST(item.fee)}`
//                         : `₹${calculateGST(item.fee)}`}
//                     </td>
//                     <td>
//                       {item.category === "Foreign Delegates"
//                         ? `$${(
//                             item.fee + parseFloat(calculateGST(item.fee))
//                           ).toFixed(0)}`
//                         : `₹${(
//                             item.fee + parseFloat(calculateGST(item.fee))
//                           ).toFixed(0)}`}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div className="register-guide">
//               <ul className="guide-reg">
//                 <li>
//                   All the participants have to submit the registration fee
//                   through Payment Gateway link available on the website, in
//                   order to attend/present paper in the conference. E-receipt can
//                   be downloaded from payment portal after successful payment
//                   process.
//                 </li>
//                 <li>
//                   Once the payment has been done, the authors need to fill the
//                   registration form for their confirmation.
//                 </li>
//                 <li>
//                   {" "}
//                   Registration fee includes registration kit, lunch, conference/
//                   gala dinner, and tea during the conference sessions.
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="button-container">
//             <a href="https://forms.gle/BwTenJaU7qAQLbAw8" target="_blank">
//               <button>Link to Register</button>
//             </a>
//             <br />
//             <Link smooth to="/abstract" className="text-link">
//               <a href="">
//                 <button>Submission Link</button>
//               </a>
//             </Link>
//           </div>
//           <div className="key-dates">
//             <h2>Payment Details</h2>
//             <p>
//               <strong>Name of Beneficiary </strong> Thapar Institute of
//               Engineering and Technology
//             </p>
//             <p>
//               <strong>Account Number </strong> 676010011622
//             </p>
//             <p>
//               <strong>Type of A/c </strong> Saving
//             </p>
//             <p>
//               <strong>Bank Name </strong> Kotak Mahindra Bank Ltd.
//             </p>
//             <p>
//               <strong>IFSC Code </strong> KKBK0000263
//             </p>
//             <p>
//               <strong>Swift Code </strong> KKBKINBB
//             </p>
//             <p>
//               <strong>Bank Address </strong> Kotak Mahindra Bank Ltd. Leela
//               Bhawan, Patiala, Punjab, India
//             </p>
//           </div>
//           <div className="key-dates">
//             <h2>Important Dates:</h2>
//             <ul>
//               <li>
//                 <strong>Last Date of Abstract Submissions:</strong> December
//                 15,2023
//               </li>
//               <li>
//                 <strong>Notification of Acceptance:</strong> December 31,2023
//               </li>
//               <li>
//                 <strong>Early Bird Registration Start:</strong> October
//                 01,2023-December 15,2023
//               </li>
//               <li>
//                 <strong>Full Paper (Selected) Submission:</strong> October
//                 15,2023 - January 15,2024
//               </li>
//               <li>
//                 <strong>Conference Date:</strong> February 22-24,2024
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
