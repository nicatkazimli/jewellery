// HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const sliderImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVpR_ZvYKiuhphqsu2bj5yIBXIkLouuFdLQ&s",
  "https://www.royalwoman.net/public/uploads/products/boyunbagi-mirvari-2779.jpg",
  "https://royalwoman.net/public/uploads/products/mirvari-boyunbagi-ve-bilerzik-desti-5590.jpg",
  "https://imageproxy.wolt.com/menu/menu-images/638f5226ae0800785bf2f078/ecdb7352-7607-11ed-8c88-96fe6760a649_2.jpeg",
  "https://www.diamond.az/_sh/532/53263m.jpg",
];

const HomePage = () => {
  return (
    <section className="hero">
      {/* Hero Section */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>Jewellery <br /> Collection</h1>
          <p>Believe Your Own Hype</p>
        </div>
        <div className="hero-image">
          <img
            src={sliderImages[0]}
            alt="Jewelry Necklace"
            className="main-img"
          />
          <img
            src={sliderImages[0]}
            alt="Jewelry Product"
            className="circle-img"
          />
        </div>
      </div>

      <div className="slider-section">
        <div className="slider-container">
          <div className="slider-track">
            {sliderImages.concat(sliderImages).map((img, index) => (
              <img src={img} key={index} className="slider-img" alt="product" />
            ))}
          </div>
        </div>
        <Link to="/product" className="cta-btn slider-btn">
          View Collection →
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
