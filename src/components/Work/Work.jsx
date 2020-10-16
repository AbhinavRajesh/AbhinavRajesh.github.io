import React, { useState } from "react";
import WorkCard from "../WorkCard/WorkCard";

import styles from "./Work.module.css";
import covidTracker from "../../assets/covid-19-tracker.png";
import octoFetch from "../../assets/octofetch.png";
import jensonUsa from "../../assets/jensonUSA.png";
import weatherPWA from "../../assets/weather-pwa.png";


const projects = [
  {
    image: covidTracker,
    name: "COVID-19 Tracker",
    description:
      "This is a COVID-19 Tracker built using ReactJS Library and Hosted using Firebase",
    Tech: ["ReactJS", "Firebase Hosting", "API", "JavaScript"],
    github: "https://github.com/AbhinavRajesh/covid-19-tracker-reactjs",
    web: "https://covid19trackerbyar.web.app",
  },
  {
    image: octoFetch,
    name: "OctoFetch",
    description: "A nicer look at the GitHub Profile",
    Tech: ["ReactJS", "Firebase Hosting", "GitHub API", "JavaScript"],
    github: "https://github.com/AbhinavRajesh/OctoFetch",
    web: "https://octofetch.web.app",
  },
  {
    image: jensonUsa,
    name: "JensonUSA",
    description:
      "This project is a recreation of the E-commerce website JensonUSA with more focus on Mountain, BMX and Electric Bikes.",
    Tech: ["ReactJS", "Firebase Hosting", "JavaScript"],
    github: "https://github.com/AbhinavRajesh/E-commerce-bike",
    web: "https://jensonusabyar.web.app",
  },
  {
    image: weatherPWA,
    name: "Weather PWA App",
    description: "A Progressive Web App for Weather Information",
    Tech: ["ReactJS", "Firebase Hosting", "Openweathermap API", "JavaScript"],
    github: "https://github.com/AbhinavRajesh/Weather-PWA-App",
    web: "https://weatherpwabyar.web.app/",
  },
];

const Work = ({ changeHeight }) => {
  const [more, setMore] = useState(false);
  const showMore = () => {
    setMore(true);
    setTimeout(() => {
      changeHeight();
    }, 100);
  };
  return (
    <section id="works" className={styles.works} >
      <h4>Works</h4>
      <WorkCard project={projects[0]} />
      <WorkCard project={projects[1]} />
      <WorkCard project={projects[2]} />
      {more ? (
        <>
          <WorkCard project={projects[3]} />
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
