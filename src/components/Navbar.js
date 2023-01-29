import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={Logo} alt="Logo" className="navbar__logo-image" />
        </Link>
        <FaBars className="navbar__menu-icon" onClick={toggleMenu} />
        <ul className={`navbar__menu ${showMenu ? "show" : ""}`}>
          <li className="navbar__menu-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar__menu-item">
            <a href="/about">About</a>
          </li>
          <li className="navbar__menu-item">
            <a href="/services">Services</a>
          </li>
          <li className="navbar__menu-item">
            <a href="/products">Products</a>
          </li>
          <li className="navbar__menu-item">
            <a href="/blog">Blog</a>
          </li>
          <li className="navbar__menu-item">
            <a href="/contact">Contact</a>
          </li>
          <li className="navbar__menu-item">
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
