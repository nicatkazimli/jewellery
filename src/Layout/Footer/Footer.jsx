import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* 🌊 Dalğa Effekti */}
      <div className="wave-wrapper">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
      </div>

      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-logo">Jewellery</h2>
          <p className="footer-slogan">Shine Every Moment ✨</p>
          <div className="footer-location">
            <FaMapMarkerAlt className="location-icon" />
            <span>123 Diamond Street, London, UK</span>
            <a href="tel:+994513562838">📞 0513562838</a>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/product">Shop</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Jewellery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
