import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/portfolio.css";
import { workNavs } from "../Data";
import { workImages } from "../Data";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Portfolio() {
  const [tab, setTab] = useState({ name: "all" });
  const [works, setWorks] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (tab.name === "all") {
      setWorks(workImages);
    } else {
      const newWork = workImages.filter((workImage) => {
        return workImage.category.toLowerCase() === tab.name;
      });
      setWorks(newWork);
    }
  }, [tab]);

  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="portfolio__container"
        id="portfolio"
      >
        <div className="portfolio__title">
          <h2>Work</h2>
          <h4>Some Things I've Built</h4>
        </div>
        <div className="buttons">
          {workNavs.map((workNav, index) => {
            return (
              <button
                onClick={(e) => activeTab(e, index)}
                key={index}
                className={`${active === index ? "active" : ""}`}
              >
                {workNav}
              </button>
            )
          })}
        </div>
        <div className="work__images">
          {works.map((work) => {
            return (
              <div className="work__image" key={work.id}>
                <img src={work.img} alt="work-image" className="img" />
                <motion.div 
                initial={{ opacity:0 }}
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.3,
                ease: "easeInOut" }}
                className="hover__layer">
                  <motion.a 
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  href={work.link} 
                  className="a">
                    <FontAwesomeIcon
                      icon={faGithub}
                      color="#E6F1FF"
                      fontSize={30}
                      className="icon__gh"
                    />
                  </motion.a>
                </motion.div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </>
  );
}
