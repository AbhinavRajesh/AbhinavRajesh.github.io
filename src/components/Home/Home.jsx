import React, { useRef, useEffect } from "react";
import styles from "./Home.module.css";

import image from "../../assets/Landing Image.svg";
import { TimelineLite, Power3 } from "gsap";

const Home = () => {
  let landingImage = useRef(null);
  let landingText = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    const landingHeadlineFirst = landingText.children[1];
    const landingHeadlineSecond = landingText.children[2];
    const landingSocialLinks = landingText.children[3];
    const landingCta = landingText.children[4];

    tl.from(
      landingImage,
      {
        y: 50,
        opacity: 0,
        ease: Power3.easeOut,
        duration: 1.6,
      },
      "start"
    );

    tl.from(
      [
        landingHeadlineFirst,
        landingHeadlineSecond,
        landingSocialLinks,
        landingCta,
      ],
      {
        stagger: 0.2,
        duration: 1,
        y: 36,
        ease: Power3.easeOut,
        delay: 0.2,
        opacity: 0,
      },
      0.1,
      "start"
    );
  }, []);

  const navigateTo = (to) => {
    let scroll = document.getElementById(to).offsetTop;
    window.scrollTo(0, scroll);
  };
  return (
    <section id="home" className={styles.home}>
      <div className={styles.text} ref={(el) => (landingText = el)}>
        <h3 className={styles.watermark}>DEVELOPER</h3>
        <h2 className="fadeIn">
          Hey! I'm <span>Abhinav Rajesh</span>
        </h2>
        <p className="fadeIn">BUDDING DEVELOPER</p>
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
              navigateTo("works");
            }}
          >
            SEE MY WORKS
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("contact");
            }}
          >
            CONTACT ME
          </a>
          {/* <a href="https://abhinavrajesh.me">DOWNLOAD CV</a> */}
        </div>
      </div>
      <div className={styles.image} ref={(el) => (landingImage = el)}>
        <img src={image} alt="landing" />
      </div>
    </section>
  );
};

export default Home;
