// src/components/SidebarLeft/Sessions.jsx

import React from "react";
import styles from "./Sessions.module.css";

// Fake data for now
const sessions = [
  { time: "09:30", title: "Team Sync", tagColor: "#d94a6a" },
  { time: "11:00", title: "Client Review", tagColor: "#d94a6a" },
  { time: "14:00", title: "UX Meeting", tagColor: "#d94a6a" },
  { time: "15:30", title: "Code Review", tagColor: "#d94a6a" },
];

const Sessions = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Sessions du jour</h3>
      <ul className={styles.list}>
        {sessions.map((session, index) => (
          <li key={index} className={styles.item}>
            <span
              className={styles.tag}
              style={{ backgroundColor: session.tagColor }}
            />
            <div className={styles.info}>
              <p className={styles.time}>{session.time}</p>
              <p className={styles.title}>{session.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sessions;
