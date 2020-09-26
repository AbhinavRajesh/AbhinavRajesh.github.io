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
          {project.Tech.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
        <div className={styles.links}>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
          </a>
          <a href={project.web} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
