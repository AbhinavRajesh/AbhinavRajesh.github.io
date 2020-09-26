import React from "react";
import styles from "./EducationCard.module.css";

const EducationCard = ({ major, degree, from, to, institute }) => {
  return (
    <div className={styles.educationCard}>
      <p className={styles.degree}>
        {degree} in <span>{major}</span>
      </p>
      <p className={styles.institute}>{institute}</p>
      <p className={styles.date}>
        {from}-{to}
      </p>
    </div>
  );
};

export default EducationCard;
