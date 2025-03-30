// src/components/SidebarRight/StatsOverview.jsx

import React from "react";
import styles from "./StatsOverview.module.css";

const stats = [
  { label: "Projects", value: 5 },
  { label: "Done Tasks", value: 17 },
  { label: "In Progress", value: 3 },
];

const StatsOverview = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Quick Stats</h3>
      <div className={styles.stats}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statBox}>
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsOverview;
