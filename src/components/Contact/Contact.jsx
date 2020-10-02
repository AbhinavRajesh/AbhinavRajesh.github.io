import React from "react";
import styles from "./Contact.module.css";

import ContactCard from "../ContactCard/ContactCard";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h4>Contact</h4>
      <div className={styles.cards}>
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
