import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const Project = (props) => {
  const [currentProject] = useState(projectsData);
  const project = currentProject[props.projectNumber];

  // For the down random circle
  let left = Math.floor(Math.random() * 200 + 700) + "px";
  let top = Math.floor(Math.random() * 200 + 150) + "px";
  let transform = "scale(" + (Math.random() + 0.7) + ")";

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 300,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.35 },
      x: -800,
    },
  };
  let plusMinus = Math.random() > 0.4 ? 1 : -1;
  let imgX = Math.random() * 350 * plusMinus;
  let imgY = Math.random() * 120 * plusMinus;

  const imgAnim = {
    initial: {
      opacity: 0,
      x: imgX,
      y: imgY,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  return (
    <>
      <motion.div
        className="project-main"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={transition}
      >
        <div className="project-content">
          <h1>{project.title}</h1>
          <p>{project.date}</p>
          <ul className="languages">
            {project.languages.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
        <motion.div
          className="img-content"
          initial="initial"
          animate="visible"
          variants={imgAnim}
          transition={{ duration: 1.2 }}
        >
          <div className="img-container hover">
            <span>
              <h3>{project.title}</h3>
              <p>{project.infos}</p>
            </span>
            <img src={project.img} alt={project.title} />
          </div>
          <div className="button-container">
            <a
              href={project.site}
              target="blank"
              rel="noopener noreferr"
              className="hover"
            >
              <span className="button">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>Voir
                le site
              </span>
            </a>
            <a
              href={project.github}
              target="blank"
              rel="noopener noreferr"
              className="hover"
            >
              <span className="button">
                <i className="fab fa-github"></i>Github
              </span>
            </a>
          </div>
        </motion.div>
        <span className="random-circle" style={{ left, top, transform }}></span>
      </motion.div>
    </>
  );
};

export default Project;
