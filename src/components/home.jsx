import React from "react";
import "../styles/home.css";
import { motion } from 'framer-motion';
import { Link } from "react-scroll";

export default function Home() {
  return (
    <>
      <motion.div 
      initial={{ opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 2, delay: 0.6}}
      className="home__container"
      id="hero">
        <div className="text__zone">
          <h2>Hi, my name is</h2>
          <h1>Emily Mosquera.</h1>
          <p>I like to bring ideas to life with code.</p>
          <h3>Junior FullStack Developer</h3>
          <div className="home__boxBtn">
            <Link to="portfolio" smooth={true} offset={-100} duration={1000} className="btn home__btn">Check out my work!</Link>
          </div>
        </div>
        <div className="scroll__box">
          <Link to="about" smooth={true} offset={-100} duration={1000} id="scroll__btn"></Link>
        </div>
      </motion.div>
    </>
  );
}
