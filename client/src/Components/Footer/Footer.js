import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="desc">
        <img
          src={require("./TU-logo Footer.png")}
          alt="logo"
          className="logo-footer"
        />
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6885.614726205045!2d76.35568897770997!3d30.3564242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ab86533db5%3A0x93cc1f72eae1c9a8!2sThapar%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1695391337140!5m2!1sen!2sin"
            width="290px"
            height="200px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="useful-links">
        <div className="useful-links-heading">
          <h5>Useful Links</h5>
          <div className="yellow-line"></div>
        </div>
        <ul className="ul-footer">
          <li>
            <a
              href="https://ched.thapar.edu/"
              target="_blank"
              className="ftr-links"
            >
              <span className="bullet-point">&#9658;</span> About Department
            </a>
            <div className="white-line"></div>
          </li>
          <li>
            <a
              href="https://www.thapar.edu/"
              target="_blank"
              className="ftr-links"
            >
              <span className="bullet-point">&#9658;</span> About The Institute
            </a>
            <div className="white-line"></div>
          </li>
          <li>
            <a
              // href="https://cmt3.research.microsoft.com/SDCEE2024"
              className="ftr-links"
            >
              <strike>
                <span className="bullet-point">&#9658;</span> Abstract
                Submission
              </strike>
            </a>
            <div className="white-line"></div>
          </li>
          <li>
            <a href="https://forms.gle/BwTenJaU7qAQLbAw8" className="ftr-links">
              <span className="bullet-point">&#9658;</span> Registration Link
            </a>
            <div className="white-line"></div>
          </li>
        </ul>
      </div>
      <div className="contact-us">
        <div className="contact-us-heading">
          <h5>Contact Us</h5>
          <div className="yellow-line"></div>
        </div>
        <ul className="contact-ul">
          <li>Faculty Advisor:</li>
          <li className="yellow-li">Dr. Avinash Chandra</li>
          <li className="yellow-li">Dr. Vivek Pawar</li>
          <li>Phone:</li>
          <li className="yellow-li">+91-9914255295</li>
          <li className="yellow-li">+91-9030417183</li>
          <li>Email:</li>
          <li className="yellow-li"> sdcee2024@thapar.edu</li>
          {/* <li className="yellow-li"> avinash.chandra@thapar.edu</li> */}
        </ul>
      </div>
    </div>
  );
}
