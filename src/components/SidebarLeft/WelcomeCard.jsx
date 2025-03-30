// src/components/SidebarLeft/WelcomeCard.jsx

import React from "react";
import styles from "./WelcomeCard.module.css";

const WelcomeCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Welcome<br /><span>Meden</span></h2>
      <p className={styles.subtitle}>
        Best ceremony be end<br />base performance
      </p>
    </div>
  );
};

export default WelcomeCard;
