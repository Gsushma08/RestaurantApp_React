import React, { useEffect } from "react";
import menuData from "../data/MenuData";
import "../styles/Menu.css";
import Navbar from "../components/layouts/NavBar";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// Custom hook to dynamically load Bootstrap CSS
const useBootstrap = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
};

const MenuItem = ({ name, price, image }) => (
  <Card className="menu-item">
    <Card.Img variant="top" src={image} className="menu-item__image" />
    <Card.Body className="menu-item__content">
      <Card.Title style={{ fontSize: '5rem', fontWeight: 'bold', marginBottom: '2.5rem' }}>{name}</Card.Title>
      <Card.Text className="menu-item__price">₹{price}</Card.Text>
    </Card.Body>
  </Card>
);

const MenuCategory = ({ category, items }) => (
  <div className="menu-category">
    <h2 className="menu-category__title">{category}</h2>
    <CardGroup>
      {items.map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} image={item.image} />
      ))}
    </CardGroup>
  </div>
);

const Menu = () => {
  useBootstrap(); // Use the custom hook

  return (
    <div>
      <Navbar />
      <h1
        style={{
          fontFamily: "Times New Roman, serif",
          fontStyle: "italic",
          textTransform: "capitalize",
          fontSize: "8rem",
          color: "black",
          background: "white",
          textAlign: "center",
        }}
      >
        Our Menu
      </h1>
      <div className="menu">
        {menuData.map((category, index) => (
          <MenuCategory
            key={index}
            category={category.category}
            items={category.items}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
