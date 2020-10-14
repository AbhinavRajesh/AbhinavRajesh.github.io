import React from "react";
import styles from "./WorkCard.module.css";

const WorkCard = ({ project }) => {
  return (
    <div className={styles.workCard}>
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