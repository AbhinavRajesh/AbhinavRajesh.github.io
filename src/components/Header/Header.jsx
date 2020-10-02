import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

import useWindowHeight from "../../hooks/useWindowSize";
import logo from "../../assets/AR Logo.svg";

const Header = () => {
  // const [mode, setMode] = useState(false);
  // const darkMode = () => {
  //   setMode((prevMode) => !prevMode);
  // };
  const size = useWindowHeight();
  const openNav = () => {
    document.getElementById("sideNav").style.width = "20rem";
  };
  const closeNav = () => {
    document.getElementById("sideNav").style.width = "0rem";
  };

  const navigate = (x) => {
    let navigateTo;
    if (x === 0) navigateTo = "home";
    else if (x === 1) navigateTo = "about";
    else if (x === 2) navigateTo = "works";
    else if (x === 3) navigateTo = "contact";
    document.getElementById("sideNav").style.width = "0rem";
    let scroll =
      document.getElementById(navigateTo).offsetTop - (size.height / 100) * 12;
    window.scrollTo(0, scroll);
  };

  const sections = document.querySelectorAll("section");
  const options = { threshold: 0.5 };

  const navCheck = (entries) => {
    entries.forEach((entry) => {
      const classname = entry.target.className;
      const activeAnchor = document.querySelector(`[data-page=${classname}]`);
      const coords = activeAnchor.getBoundingClientRect();
      const directions = {
        height: coords.height,
        width: coords.width,
        top: coords.top,
        left: coords.left,
      };
      if (entry.isIntersecting) {
        const bubble = document.querySelector(".Header_bubble__17SEf");
        bubble.style.setProperty("left", `${directions.left}px`);
        bubble.style.setProperty("top", `${directions.top}px`);
        bubble.style.setProperty("height", `${directions.height}px`);
        bubble.style.setProperty("width", `${directions.width}px`);
      }
      console.log(classname);
    });
  };

  let observer = new IntersectionObserver(navCheck, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  return (
    <header id="header">
      <div className={styles.logo}>
        <h1>
          <img src={logo} alt="Abhinav Rajesh" />
        </h1>
      </div>
      <nav>
        <div className={styles.nav}>
          <ul>
            <a
              href="#home"
              data-page="Home_home__1T33S"
              onClick={(e) => {
                e.preventDefault();
                navigate(0);
              }}
            >
              <li>Home</li>
            </a>
            <a
              href="#about"
              data-page="About_about__3uKij"
              onClick={(e) => {
                e.preventDefault();
                navigate(1);
              }}
            >
              <li>About</li>
            </a>
            <a
              href="#works"
              data-page="Work_works__2HbQS"
              onClick={(e) => {
                e.preventDefault();
                navigate(2);
              }}
            >
              <li>Works</li>
            </a>
            <a
              href="#contact"
              data-page="Contact_contact__AXuao"
              onClick={(e) => {
                e.preventDefault();
                navigate(3);
              }}
            >
              <li>Contact</li>
            </a>
            <div id="bubble" className={styles.bubble}></div>
          </ul>
        </div>
        <p className={styles.hamburger} onClick={openNav}>
          &#9776;
        </p>
        <div className={styles.mobile} id="sideNav">
          <ul>
            <li className={styles.closebtn} onClick={closeNav}>
              &times;
            </li>
            <a
              onClick={(e) => {
                e.preventDefault();
                navigate(0);
              }}
              href="#home"
            >
              <li>Home</li>
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                navigate(1);
              }}
              href="#about"
            >
              <li>About</li>
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                navigate(2);
              }}
              href="#works"
            >
              <li>Works</li>
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                navigate(3);
              }}
              href="#contact"
            >
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>

      {/* <label className={styles.switch}>
        <input type="checkbox" onClick={darkMode} />
        <span className={styles.slider}></span>
      </label>
      <p>{mode ? "Dark" : "Light"} Mode</p> */}
    </header>
  );
};

export default Header;
