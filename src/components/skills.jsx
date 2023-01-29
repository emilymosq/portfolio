import { motion } from "framer-motion";
import "../styles/skills.css";
import {
  faSquareJs,
  faPython,
  faHtml5,
  faCss3Alt,
  faReact,
  faFigma,
  faBootstrap,
  faPhp,
  faSymfony,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="skills__container"
      >
        <div className="skills__title">
          <h5>My Skills</h5>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div className="skills">
            <ul className="box__skills">
              <li className="icon__list">
                <FontAwesomeIcon
                  icon={faHtml5}
                  color="#E6F1FF"
                  fontSize={80}
                  className="icon"
                />
              </li>
              <li className="icon__list">
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  color="#E6F1FF"
                  fontSize={80}
                  className="icon"
                />
              </li>
              <li className="icon__list">
                <FontAwesomeIcon
                  icon={faSquareJs}
                  color="#E6F1FF"
                  fontSize={80}
                  className="icon"
                />
              </li>
              <li className="icon__list">
                <FontAwesomeIcon
                  icon={faReact}
                  color="#E6F1FF"
                  fontSize={80}
                  className="icon"
                />
              </li>
              <li className="icon__list">
                <FontAwesomeIcon
                  icon={faFigma}
                  color="#E6F1FF"
                  fontSize={80}
                  className="icon"
                />
              </li>
              <li className="icon__list">
                <FontAwesomeIcon
                  icon={faBootstrap}
                  color="#E6F1FF"
                  fontSize={80}
                  className="icon"
                />
              </li>
              <li className="icon__list">
                <FontAwesomeIcon
                  icon={faPython}
                  color="#E6F1FF"
                  fontSize={80}
                  className="icon"
                />
              </li>
              <li className="icon__list">
                <FontAwesomeIcon
                  icon={faPhp}
                  color="#E6F1FF"
                  fontSize={80}
                  className="icon"
                />
              </li>
              <li className="icon__list">
                <FontAwesomeIcon
                  icon={faSymfony}
                  color="#E6F1FF"
                  fontSize={80}
                  className="icon"
                />
              </li>
              <li className="icon__list">
                <FontAwesomeIcon
                  icon={faGitAlt}
                  color="#E6F1FF"
                  fontSize={80}
                  className="icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}
