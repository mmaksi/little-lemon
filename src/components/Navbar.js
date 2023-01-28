import React, { useState } from 'react';
import Logo from "../assets/Logo.svg"
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className="navbar__logo-image" />
      <FaBars className="navbar__menu-icon" onClick={toggleMenu} />
      <ul className={`navbar__menu ${showMenu ? 'show' : ''}`}>
        <li className="navbar__menu-item">
          <a to="/">Home</a>
        </li>
        <li className="navbar__menu-item">
          <a to="/about">About</a>
        </li>
        <li className="navbar__menu-item">
          <a to="/services">Services</a>
        </li>
        <li className="navbar__menu-item">
          <a to="/products">Products</a>
        </li>
        <li className="navbar__menu-item">
          <a to="/blog">Blog</a>
        </li>
        <li className="navbar__menu-item">
          <a to="/contact">Contact</a>
        </li>
        <li className="navbar__menu-item">
          <a to="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

