import React from "react";
import images from "../data/images";
import "../styles/Gallery.css";

const Gallery = () => (
  <div className="Gallery">
    <h1
      style={{
        fontFamily: "Times New Roman, serif",
        fontStyle: "italic",
        textTransform: "capitalize",
        fontSize: "3.5rem",
        color: "black",
        textAlign: "center",
      }}
    >
      Our Specialities
    </h1>
    <div className="Gallery-images">
      <div className="Gallery-item">
      <img src={images.speciality1} alt="Speciality 1" style={{ width: '100%', height: '65%', maxWidth: '400px' }} />
        <h3>Natu Kodi Pulusu</h3>
      </div>
      <div className="Gallery-item">
        <img src={images.speciality2} alt="Speciality 2" />
        <h3>Nalli Gosh Biryani</h3>
      </div>
      <div className="Gallery-item">
        <img src={images.speciality3} alt="Speciality 3" />
        <h3>Masala Vankaya</h3>
      </div>
    </div>
  </div>
);
export default Gallery;
