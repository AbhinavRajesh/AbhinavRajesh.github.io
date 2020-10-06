import React, { useState, useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkCard from "../WorkCard/WorkCard";

import styles from "./Work.module.css";
import image1 from "../../assets/testImage.jpg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: image1,
    name: "COVID-19 Tracker",
    description:
      "This is a COVID-19 Tracker built using ReactJS Library and Hosted using Firebase",
    Tech: ["ReactJS", "Firebase Hosting", "API", "JavaScript"],
    github: "https://github.com/AbhinavRajesh/covid-19-tracker-reactjs",
    web: "https://covid19trackerbyar.web.app",
  },
  {
    image: image1,
    name: "OctoFetch",
    description: "A nicer look at the GitHub Profile",
    Tech: ["ReactJS", "Firebase Hosting", "GitHub API", "JavaScript"],
    github: "https://github.com/AbhinavRajesh/OctoFetch",
    web: "https://octofetch.web.app",
  },
  {
    image: image1,
    name: "JensonUSA",
    description:
      "This project is a recreation of the website JensonUSA with more focus on Mountain, BMX and Electric Bikes.",
    Tech: ["ReactJS", "Firebase Hosting", "JavaScript"],
    github: "https://github.com/AbhinavRajesh/E-commerce-bike",
    web: "https://jensonusabyar.web.app",
  },
];

const Work = ({ changeHeight }) => {
  let worksRef = useRef(null);
  useEffect(() => {
    gsap.from(
      [worksRef.children[1], worksRef.children[2], worksRef.children[3]],
      {
        duration: 3,
        y: "50px",
        opacity: 0,
        ease: Power3.easeOut,
        stagger: 0.2,
        delay: 0.15,
        scrollTrigger: {
          trigger: worksRef,
          start: "top 40%",
        },
      }
    );
  }, []);
  const [more, setMore] = useState(false);
  const showMore = () => {
    setMore(true);
    setTimeout(() => {
      changeHeight();
    }, 100);
  };
  return (
    <section id="works" className={styles.works} ref={(el) => (worksRef = el)}>
      <h4>Works</h4>
      <WorkCard project={projects[0]} />
      <WorkCard project={projects[1]} />
      <WorkCard project={projects[2]} />
      {more ? (
        <>
          <WorkCard project={projects[0]} />
          <WorkCard project={projects[1]} />
          <WorkCard project={projects[2]} />
          <a
            href="https://github.com/AbhinavRajesh"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.moreGithub}
          >
            More Project at my GitHub
          </a>
        </>
      ) : (
        <button onClick={showMore}>VIEW MORE PROJECT</button>
      )}
    </section>
  );
};

export default Work;
