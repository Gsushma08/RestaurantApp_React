import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "../styles/ContactUs.css";
import Navbar from "../components/layouts/NavBar";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-us-container">
        <div className="contact-us-content">
          <h1>Contact Us</h1>
          <p>How to get in touch?</p>
          <p>
            We're here to assist you with any inquiries or feedback you may
            have. Reach out to us through the form below or use our contact
            information to get in touch directly.
          </p>

          <div className="contact-form">
            <form>
              <div className="form-group" >
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="send-message-button">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-details">
            <p>123-68, Road no:3, Karimnagar, Telangana, India</p>
            <p>+91 9876543210</p>
            <p>info@.com</p>
          </div>
          <div className="contacts_links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
