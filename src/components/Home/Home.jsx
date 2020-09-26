import React from "react";
import styles from "./Home.module.css";

import image from "../../assets/Landing Image.svg";

const Home = () => {
  const navigateToWorks = () => {
    let scroll = document.getElementById("works").offsetTop;
    window.scrollTo(0, scroll);
  };
  return (
    <section id="home" className={styles.home}>
      <div className={styles.text}>
        <h3 className={styles.watermark}>DEVELOPER</h3>
        <h2>
          Hey! I'm <span>Abhinav Rajesh</span>
        </h2>
        <p>BUDDING DEVELOPER</p>
        <div className={styles.socialLinks}>
          <a
            href="https://in.linkedin.com/in/abhinav-rajesh-44b71b172"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/AbhinavRajesh"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:abhinavrajesh49@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            href="https://abhinavrajesh.me"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className={styles.cta}>
          <a
            href="#works"
            onClick={(e) => {
              e.preventDefault();
              navigateToWorks();
            }}
          >
            SEE MY WORKS
          </a>
          <a href="https://abhinavrajesh.me">DOWNLOAD CV</a>
        </div>
      </div>
      <div className={styles.image}>
        <img src={image} alt="landing" />
      </div>
    </section>
  );
};

export default Home;
