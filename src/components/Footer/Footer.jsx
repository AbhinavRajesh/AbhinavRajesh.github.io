import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
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
      <h6>&copy; Copyright 2020, Abhinav Rajesh</h6>
      <h6>
        Made with <span>&hearts;</span> from Scratch
      </h6>
    </footer>
  );
};

export default Footer;
