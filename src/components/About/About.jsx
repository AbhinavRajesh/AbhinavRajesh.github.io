import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.css";

import EducationCard from "../EducationCard/EducationCard";
import image from "../../assets/About Image.svg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  let aboutRef = useRef(null);
  let aboutContainer = useRef(null);
  let aboutContainerText = useRef(null);
  let educationContainer = useRef(null);
  useEffect(() => {
    gsap.from([aboutContainer.children, aboutContainerText.children], {
      duration: 1,
      y: "50px",
      opacity: 0,
      ease: Power3.easeOut,
      stagger: 0.2,
      delay: 0.15,
      scrollTrigger: {
        trigger: aboutRef,
        start: "top 40%",
      },
    });
    gsap.from(
      [
        educationContainer.children[1].children[0],
        educationContainer.children[1].children[1],
      ],
      {
        duration: 1,
        y: "50px",
        opacity: 0,
        ease: Power3.easeOut,
        stagger: 0.3,
        delay: 0.15,
        scrollTrigger: {
          trigger: educationContainer,
          start: "top 40%",
        },
      }
    );
  }, []);

  return (
    <section id="about" className={styles.about} ref={(el) => (aboutRef = el)}>
      <h4>About Me</h4>
      <div
        className={styles.aboutContainer}
        ref={(el) => (aboutContainer = el)}
      >
        <div className={styles.image}>
          <img src={image} alt="about" />
        </div>
        <div className={styles.text} ref={(el) => (aboutContainerText = el)}>
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
            <p>Flutter</p>
          </div>
        </div>
      </div>
      <div
        className={styles.educationContainer}
        ref={(el) => (educationContainer = el)}
      >
        <h4>Education</h4>
        <div className={styles.education}>
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
      </div>
    </section>
  );
};

export default About;
