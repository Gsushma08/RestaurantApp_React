import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../../data/images";
import "../../styles/HeaderStyles.css";

const Header = () => {
  const navigate = useNavigate();

  const handleExploreMenu = () => {
    navigate("/menu");
  };

  return (
    <div className="app__header" id="home">
      <div className="app__header_img">
        <img src={images.welcome} alt="header_img" className="header__image" />
        <div className="app__header_overlay">
          <p className="header__subtitle">"Experience the Essence of Taste"</p>
          <h1 className="app__header-h1">Taste the Flavors of India</h1>
          <p className="app__header-p">
            "Enjoy our variety of dishes, each made with care to bring you the
            authentic flavors of our cuisine."
          </p>
          <button
            type="button"
            className="custom__button"
            onClick={handleExploreMenu}
          >
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

