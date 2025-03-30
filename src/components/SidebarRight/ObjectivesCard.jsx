// src/components/SidebarRight/ObjectivesCard.jsx

import React from "react";
import styles from "./ObjectivesCard.module.css";

const objectives = [
  { label: "Prepare UX workshop", color: "#f28b82" },
  { label: "Finalize landing page", color: "#fbbc04" },
  { label: "Test mobile nav", color: "#a7ffeb" },
];

const ObjectivesCard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Objectives</h3>
      <ul className={styles.list}>
        {objectives.map((item, index) => (
          <li key={index} className={styles.item}>
            <span
              className={styles.dot}
              style={{ backgroundColor: item.color }}
            />
            <span className={styles.label}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectivesCard;
