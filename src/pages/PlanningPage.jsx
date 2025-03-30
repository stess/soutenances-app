// src/pages/PlanningPage.jsx

import React, { useState } from "react";
import styles from "./PlanningPage.module.css";
import Topbar from "../components/Topbar/Topbar";

// Génère les jours du mois affiché
const generateCalendar = (year, month) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();

  const startWeekDay = firstDay.getDay() || 7; // 1 = Lundi, 7 = Dimanche
  const weeks = [];
  let dayCounter = 1 - (startWeekDay - 1);

  for (let week = 0; week < 6; week++) {
    const weekRow = [];
    for (let day = 0; day < 7; day++) {
      const date = new Date(year, month, dayCounter);
      weekRow.push({
        date,
        inCurrentMonth: date.getMonth() === month,
      });
      dayCounter++;
    }
    weeks.push(weekRow);
  }

  return weeks;
};

const PlanningPage = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const calendar = generateCalendar(year, month);

  const monthLabel = currentDate.toLocaleString("default", { month: "long", year: "numeric" });

  const goToPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className={styles.page}>
      <Topbar />

      <div className={styles.main}>
        <div className={styles.header}>
          <h1>Planning des Soutenances</h1>
          <div className={styles.controls}>
            <button onClick={goToPrevMonth}>←</button>
            <span>{monthLabel}</span>
            <button onClick={goToNextMonth}>→</button>
            <button className={styles.addBtn}>+ Ajouter une soutenance</button>
          </div>
        </div>

        <div className={styles.calendar}>
          <div className={styles.dayNames}>
            {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day, idx) => (
              <div key={idx} className={styles.dayName}>{day}</div>
            ))}
          </div>

          {calendar.map((week, i) => (
            <div key={i} className={styles.weekRow}>
              {week.map((dayObj, j) => (
                <div
                  key={j}
                  className={`${styles.dayCell} ${!dayObj.inCurrentMonth ? styles.inactive : ""}`}
                >
                  <span className={styles.dateLabel}>{dayObj.date.getDate()}</span>
                  {/* Soutenances ici */}
                  <div className={styles.eventDot} title="Soutenance: IA & Santé" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanningPage;
