import React from "react";
import images from "../data/images";
import { Link } from "react-router-dom";
import "../styles/About.css";

const AboutUs = () => (
  <div className="aboutus" id="about">
    <div className="aboutus-content">
      <div className="aboutus-content_about">
        <h1 className="slideInLeft" style={{ fontFamily: "sans-serif" }}>About Us</h1>
        <p className="slideInLeft" style={{ fontFamily: "sans-serif" }}>
          Discover our story and the passion for creating flavorful experiences.
        </p>
        <Link to="/about" className="custom__button slideInLeft">
          Know more
        </Link>
      </div>
      <div className="aboutus-content_knife">
        <img src={images.knife} alt="about_knife" className="slideIn" />
      </div>
      <div className="aboutus-content_history">
        <h1 className="slideInRight" style={{ fontFamily: "sans-serif" }}>Our History</h1>
        <p className="slideInRight" style={{ fontFamily: "sans-serif" }}>
          Explore our journey through years of culinary excellence.
        </p>
        <Link to="/about" className="custom__button slideInRight">
          Know more
        </Link>
      </div>
    </div>
  </div>
);

export default AboutUs;
