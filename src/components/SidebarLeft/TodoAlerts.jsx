// src/components/SidebarLeft/TodoAlerts.jsx

import React from "react";
import styles from "./TodoAlerts.module.css";
import { FaBell } from "react-icons/fa";

const TodoAlerts = () => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <FaBell className={styles.icon} />
      </div>
      <h3 className={styles.title}>To-Do Alerts</h3>
      <button className={styles.setButton}>Set</button>
    </div>
  );
};

export default TodoAlerts;
