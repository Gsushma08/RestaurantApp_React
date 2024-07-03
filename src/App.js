import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Review";
import Footer from "./components/layouts/Footer";
import Menu from "./pages/Menu";
import Navbar from "./components/layouts/NavBar";
import Home from "./pages/Home";
import LoginRegister from "./Forms/LoginRegister";
import AboutUs1 from "./pages/About1";
import ContactUs from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/header" element={<Header />} />
          <Route path="/about" element={<AboutUs1 />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
