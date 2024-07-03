import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import images from "../../data/images";
import "../../styles/Footer.css";

const Footer = () => (
  <div className="footer" id="login">
    <div className="footer-links">
      <div className="footer-links_contact">
        <h1 className="footer-headtext">Contact Us</h1>
        <p className="footer-text">
          123-68, Road no:3, Karimnagar, Telangana, India
        </p>
        <br />
        <p className="footer-text">+91 9876543210</p>
        <p className="footer-text">+91 0123456789</p>
      </div>

      <div className="footer-links_logo">
        <h3 className="footer-title">RESTAURANT APP</h3>
        <p className="footer-quote">
          "The best way to find yourself is to lose yourself in the service of
          others."
        </p>
        <img src={images.spoon} alt="spoon" className="spoon-img" />
        <div className="footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="footer-links_work">
        <h1 className="footer-headtext">Working Hours</h1>
        <p className="footer-text">Monday-Friday: 12:00 pm - 12:00 am</p>
        <p className="footer-text">Saturday-Sunday: 11:00 am - 1:00 am</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p className="footer-text">All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
