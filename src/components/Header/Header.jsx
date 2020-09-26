import React from "react";
import styles from "./Header.module.css";

const Header = ({ resetConfig }) => {
  // const [mode, setMode] = useState(false);
  // const darkMode = () => {
  //   setMode((prevMode) => !prevMode);
  // };
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
    let scroll = document.getElementById(navigateTo).offsetTop;
    window.scrollTo(0, scroll);
  };

  return (
    <header id="header">
      <div className={styles.logo}>
        <h1>Abhinav Rajesh</h1>
      </div>
      <nav>
        <div className={styles.nav}>
          <ul>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#works">
              <li>Works</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
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
