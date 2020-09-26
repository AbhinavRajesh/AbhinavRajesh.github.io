import React from "react";
import styles from "./ContactCard.module.css";

const ContactCard = ({ heading, icon, info }) => {
  return (
    <div className={styles.contactCard}>
      <i className={icon}></i>
      <h5>{heading}</h5>
      <p>{info}</p>
    </div>
  );
};

export default ContactCard;
