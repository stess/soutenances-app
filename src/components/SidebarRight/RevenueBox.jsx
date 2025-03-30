// src/components/SidebarRight/RevenueBox.jsx

import React from "react";
import styles from "./RevenueBox.module.css";

// Récupère le mois courant dynamiquement
const currentMonth = new Date().toLocaleString("default", {
  month: "long",
  year: "numeric",
});

const RevenueBox = ({ amount = "1 200 €" }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{currentMonth}</h3>
      <p className={styles.label}>Revenus estimés</p>
      <p className={styles.amount}>{amount}</p>
    </div>
  );
};

export default RevenueBox;
