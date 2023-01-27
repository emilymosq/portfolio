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
            <p>
              A curiosity-driven Front-End Developer with design chops. I'm
              passionate about bringing both the technical and visual aspects of
              digital products to life. User experience, beautiful pixels and
              writing clean accessible, human code matters to me. I sweat the
              details. And as a follower of John Maeda’s Laws Of Simplicity, I
              agree that less is more. I have a BA in Multimedia Design from
              Curtin University 🇦🇺, a Certificate of Web Development Immersive
              from Juno College (Formerly HackerYou) 🇨🇦, (and an Advanced Scuba
              Diving License from PADI 🇵🇭!) I'm happiest when I'm creating,
              learning, exploring and thinking about how to make things better.
              Currently solving deceptively simple problems at UsePastel.Com.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
