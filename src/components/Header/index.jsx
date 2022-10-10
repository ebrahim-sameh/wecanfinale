import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../images/we-can-logo2-gold-and-white.png";
import { MdClose, MdOutlineMenu } from 'react-icons/md'

import "./Header.scss";
const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  let home = false;

  if(location.pathname === '/we-can' || location.pathname === '/we-can/' || location.pathname === '/') {
    home = true
  }

  return (
    <header>
      <nav className="nav__container container d-flex align-items-center justify-content-between">
        <div className="logo">
          <NavLink to="/we-can">
            <img src={Logo} alt="LOGO" />
          </NavLink>
        </div>
        <ul className={`nav__links d-flex aling-items-center justify-content-end ${openMenu ? 'open__menu' : ''}`}>
          <li>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/we-can"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/about-us"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About Us
            </NavLink>
          </li>
          {home && (
            <>
              <li onClick={() => setOpenMenu(false)}>
                <a href="#gallary">Gallary</a>
              </li>
              {/* <li onClick={() => setOpenMenu(false)}>
                <a href="#about-us">About Us</a>
              </li> */}
              <li onClick={() => setOpenMenu(false)}>
                <a href="#our-projects">Our Projects</a>
              </li>
            </>
          )}
          <li>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/contact-us"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact Us
            </NavLink>
          </li>
          <button className="close__btn" onClick={() => setOpenMenu(false)}><MdClose /></button>
        </ul>
        <button className="open__btn" onClick={() => setOpenMenu(true)}><MdOutlineMenu /></button>
      </nav>
    </header>
  );
};

export default Header;
