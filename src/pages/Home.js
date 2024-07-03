import React from "react";
import Navbar from "../components/layouts/NavBar";
import Header from "../components/layouts/Header";
import AboutUs from "./About";
import Gallery from "./Gallery";
import Reviews from "./Review";
import Footer from "../components/layouts/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Gallery />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
