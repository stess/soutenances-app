// src/components/CalendarSection/CalendarHeader.jsx

import React, { useState } from "react";
import styles from "./CalendarHeader.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CalendarHeader = () => {
  const [view, setView] = useState("month"); // 'week' or 'month'
  const currentMonth = "March 2025";

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <h2 className={styles.month}>{currentMonth}</h2>
        <div className={styles.navButtons}>
          <button><FaChevronLeft /></button>
          <button><FaChevronRight /></button>
        </div>
      </div>

      <div className={styles.viewSwitch}>
        <button
          className={`${styles.toggleBtn} ${view === "week" ? styles.active : ""}`}
          onClick={() => setView("week")}
        >
          Week
        </button>
        <button
          className={`${styles.toggleBtn} ${view === "month" ? styles.active : ""}`}
          onClick={() => setView("month")}
        >
          Month
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
