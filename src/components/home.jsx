import React from "react";
import "../styles/home.css";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <motion.div 
      initial={{ opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 2, delay: 0.6}}
      className="home__container">
        <div className="text__zone">
          <h2>Hi, my name is</h2>
          <h1>Emily Mosquera.</h1>
          <p>I like to bring ideas to life with code.</p>
          <h3>Junior FullStack Developer</h3>
          <div className="home__boxBtn">
            <a className="btn home__btn">Check out my work!</a>
          </div>
        </div>
        <div className="scroll__box">
          <a id="scroll__btn"></a>
        </div>
      </motion.div>
    </>
  );
}
