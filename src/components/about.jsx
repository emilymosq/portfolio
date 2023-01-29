import React from "react";
import "../styles/about.css";
import picture from "../assets/me.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="about__container"
        id="about"
      >
        <div className="about__title">
          <h2>About</h2>
          <h4>Who is Emily?</h4>
        </div>
        <div className="about__box">
          <div className="about__left">
            <img src={picture} />
          </div>
          <div className="about__right">
            <p className="about__text">
              Hello! My name is Emily and I like to resolve code problems,
              create smart user interface and imagine useful interactions,
              developing dynamic web experiences and web applications. I’m the happiest
              when I’m creating, learning, exploring and thinking about how to
              make things better. For me It all boils down to the details. 
            </p>
            <p className="about__text">I studied at a Bootcamp in
              FullStack developing of 850 hours and at the moment I keep
              studying to improve my skills.</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
