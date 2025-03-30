// src/components/SidebarRight/StatusCard.jsx

import React from "react";
import styles from "./StatusCard.module.css";

const data = [40, 60, 30, 80, 50, 70, 90];

const StatusCard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Status Overview</h3>
      <div className={styles.graph}>
        {data.map((value, i) => (
          <div
            key={i}
            className={styles.bar}
            style={{ height: `${value}%` }}
          ></div>
        ))}
      </div>
      <p className={styles.trend}>+12% this week</p>
    </div>
  );
};

export default StatusCard;
