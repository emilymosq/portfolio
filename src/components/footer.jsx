import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import "../styles/footer.css";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ y: [-50, 0], opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="footer__container">
        <div className="footer__main">
          <div className="email__contact">
            <h3>Say hello!</h3>
            <span>emilymosq4@gmail.com</span>
          </div>
          <div className="socialMedia">
            <h3>My social media</h3>
            <div className="footer_icon">
              <a href="https://github.com/emilymosq" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon
                  icon={faGithub}
                  color="#E6F1FF"
                  fontSize={35}
                  className="icon__sm"
                />
              </a>
              <a href="https://linkedin.com/in/emily-mosquera/" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="#E6F1FF"
                  fontSize={35}
                  className="icon__sm"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="copyright">
            <span>© Emily Mosquera 2023</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
