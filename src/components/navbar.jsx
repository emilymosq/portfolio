import React, { useState } from "react";
import "../styles/navbar.css";
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 60) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? "header header__bg" : "header"}>
        <div className="nav__container">
          <span className="nav__logo">Logo</span>
          <div className={`nav__items ${isOpen && "open"}`}>
            <a href="#" className="nav__links">
              Home
            </a>
            <a href="#" className="nav__links">
              About
            </a>
            <a href="#" className="nav__links">
              Work
            </a>
            <a href="#" className="nav__links">
              Contact
            </a>
          </div>
          <div
            className={`nav__toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
