import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Contact.module.css";

import ContactCard from "../ContactCard/ContactCard";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  let contactRef = useRef(null);
  let cardsRef = useRef(null);
  useEffect(() => {
    gsap.from([cardsRef.children], {
      duration: 3,
      y: "50px",
      opacity: 0,
      ease: Power3.easeOut,
      stagger: 0.2,
      delay: 0.15,
      scrollTrigger: {
        trigger: contactRef,
        start: "top 60%",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className={styles.contact}
      ref={(el) => (contactRef = el)}
    >
      <h4>Contact</h4>
      <div className={styles.cards} ref={(el) => (cardsRef = el)}>
        <ContactCard
          heading="Phone"
          icon="fas fa-phone-alt"
          info="+91 8921473321"
        />
        <ContactCard
          heading="Address"
          icon="fas fa-map-marker-alt"
          info="Ernakulam, Kerala, India"
        />
        <ContactCard
          heading="Email"
          icon="far fa-envelope"
          info="abhinavrajesh49@gmail.com"
        />
      </div>
    </section>
  );
};

export default Contact;
