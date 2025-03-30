// src/components/CalendarSection/CalendarGrid.jsx

import React from "react";
import styles from "./CalendarGrid.module.css";

// Dummy data for a few sessions
const sessions = [
  {
    dayIndex: 1, // Monday
    weekRow: 2,
    time: "10:00",
    title: "Soutenance à préparer",
    color: "#C9B8DD",
  },
  {
    dayIndex: 3, // Wednesday
    weekRow: 3,
    time: "14:00",
    title: "En attente de soutenance",
    color: "#A8B9D1",
  },
  {
    dayIndex: 5, // Friday
    weekRow: 1,
    time: "09:00",
    title: "En attente de correction",
    color: "#DD9A9A",
  },
  {
    dayIndex: 3, // Friday
    weekRow: 1,
    time: "09:00",
    title: "Compte-rendu à faire",
    color: "#B9CBB2",
  },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CalendarGrid = () => {
  return (
    <div className={styles.grid}>
      {/* Day Headers */}
      <div className={styles.headerRow}>
        {days.map((day, idx) => (
          <div key={idx} className={styles.headerCell}>
            {day}
          </div>
        ))}
      </div>

      {/* Grid Rows */}
      <div className={styles.body}>
        {[...Array(5)].map((_, row) => (
          <div key={row} className={styles.weekRow}>
            {[...Array(7)].map((_, col) => {
              const session = sessions.find(
                (s) => s.dayIndex === col && s.weekRow === row
              );
              return (
                <div key={col} className={styles.cell}>
                  {session && (
                    <div
                      className={styles.session}
                      style={{ backgroundColor: session.color }}
                    >
                      <p className={styles.time}>{session.time}</p>
                      <p className={styles.title}>{session.title}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
