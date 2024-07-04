import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import TableBooking from "../../Forms/TableBooking";
import LoginRegister from "../../Forms/LoginRegister";
import "../../styles/HomeStyles.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleTableBookingModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleLoginRegisterModal = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <span
            className="logo-text"
            style={{
              fontFamily: "Times New Roman, serif",
              fontStyle: "italic",
              textTransform: "capitalize",
              fontSize: "2rem",
              color: "gold",
            }}
          >
            RESTAURANT APP
          </span>
        </div>
        <ul className="navbar-links">
          <li className="Pages_links">
            <Link to="/">Home</Link>
          </li>
          <li className="Pages_links">
            <Link to="/about">About Us</Link>
          </li>
          <li className="Pages_links">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="Pages_links">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="navbar-login">
          <a
            href="#!"
            className="Pages_links"
            onClick={toggleLoginRegisterModal}
          >
            Log In / Register
          </a>
          <a
            href="#!"
            className="Pages_links"
            onClick={toggleTableBookingModal}
          >
            Book Table
          </a>
        </div>
        <div className="navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setShowMenu(true)}
          />
          {showMenu && (
            <div className="navbar-smallscreen_overlay">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => setShowMenu(false)}
              />
              <ul className="navbar-smallscreen_links">
                <li className="Pages_links">
                  <Link to="/" onClick={() => setShowMenu(false)}>
                    Home
                  </Link>
                </li>
                <li className="Pages_links">
                  <Link to="/about" onClick={() => setShowMenu(false)}>
                    About Us
                  </Link>
                </li>
                <li className="Pages_links">
                  <Link to="/menu" onClick={() => setShowMenu(false)}>
                    Menu
                  </Link>
                </li>
                <li className="Pages_links">
                  <Link to="/contact" onClick={() => setShowMenu(false)}>
                    Contact
                  </Link>
                </li>
                <li className="Pages_links">
                  <a href="#!" onClick={() => { toggleLoginRegisterModal(); setShowMenu(false); }}>
                    Log In / Register
                  </a>
                </li>
                <li className="Pages_links">
                  <a href="#!" onClick={() => { toggleTableBookingModal(); setShowMenu(false); }}>
                    Book Table
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <TableBooking isOpen={isModalOpen} onClose={toggleTableBookingModal} />
      <LoginRegister isOpen={isLoginOpen} onClose={toggleLoginRegisterModal} />
    </>
  );
};

export default Navbar;
