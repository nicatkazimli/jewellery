import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://img.freepik.com/free-vector/premium-jewelry-gemstone-template-with-diamond-logo-design_1017-44565.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Jewellery Logo"
        />
        <h1>Bashirova Jewellery</h1>
      </div>

      <nav className="nav">
        <Link to="/">Əsas Səhifə</Link>
        <Link to="/product">Məhsullar</Link>
      </nav>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Əsas Səhifə</Link>
        <Link to="/product" onClick={() => setMenuOpen(false)}>Məhsullar</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Bizimlə Əlaqə</Link>
      </div>
    </header>
  )
}

export default Header
