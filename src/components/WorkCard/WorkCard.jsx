import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./WorkCard.module.css";

gsap.registerPlugin(ScrollTrigger);

const WorkCard = ({ project }) => {
  let workCardRef = useRef(null);
  useEffect(() => {
    gsap.from(workCardRef, {
      duration: 2,
      y: "50px",
      opacity: 0,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: workCardRef,
        start: "top 55%"
      }
    })
  }, [])
  return (
    <div className={styles.workCard} ref={el => workCardRef = el}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      <div className={styles.text}>
        <h5>{project.name}</h5>
        <p>{project.description}</p>
        <ul>
          {project.Tech.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className={styles.links}>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <p>Source Code</p>
            <i className="fab fa-github"></i>
          </a>
          <a href={project.web} target="_blank" rel="noopener noreferrer">
            <p>Live Preview</p>
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
