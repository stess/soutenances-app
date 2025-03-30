// src/components/SidebarLeft/MeetingMorning.jsx

import React from "react";
import styles from "./MeetingMorning.module.css";
import { FaCalendarAlt } from "react-icons/fa";

const MeetingMorning = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <FaCalendarAlt className={styles.icon} />
        <span className={styles.title}>Meeting Morning</span>
      </div>

      <div className={styles.details}>
        <p>Have a call at 11:00</p>
        <p className={styles.secondary}>Update Process Status</p>
      </div>

      <button className={styles.linkBtn}>See details →</button>
    </div>
  );
};

export default MeetingMorning;
