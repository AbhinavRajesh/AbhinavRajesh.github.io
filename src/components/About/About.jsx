import React from "react";

import EducationCard from "../EducationCard/EducationCard";
import styles from "./About.module.css";
import image from "../../assets/About Image.svg";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h4>About Me</h4>
      <div className={styles.aboutContainer}>
        <div className={styles.image}>
          <img src={image} alt="about" />
        </div>
        <div className={styles.text}>
          <p>
            I am a budding developer based in India. Web development has
            transformed from a spark of interest to an all out passion and an
            area that I want to master.
          </p>
          <p>
            I'm currently pursuing my bachelor's degree from School of
            Engineering, CUSAT, India and expected to graduate on 2023. I have
            always wanted to work and grow with a team of like minded and
            passionate creatives.
          </p>
          <p>I'm good at</p>
          <div className={styles.skills}>
            <ul>
              <li>C++</li>
              <li>C</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>HTML5</li>
              <li>Flask</li>
              <li>MongoDB</li>
              <li>GIT</li>
              <li>GITHUB</li>
            </ul>
          </div>
          <div className={styles.learning}>
            <p>I'm currently learning</p>
            <p>React Native</p>
          </div>
        </div>
      </div>
      <div className={styles.educationContainer}>
        <h4>Education</h4>
        <EducationCard
          degree="Higher Secondary Education"
          major="CS"
          institute="Saraswathi Vidyanikethan, Elamakkara"
          from="2017"
          to="2019"
        />
        <EducationCard
          degree="B-Tech"
          major="Computer Science Engineering"
          institute="School Of Engineering, CUSAT"
          from="2019"
          to="2023"
        />
      </div>
    </section>
  );
};

export default About;
