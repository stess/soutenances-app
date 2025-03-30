// src/pages/StatisticsPage.jsx

import React from "react";
import styles from "./StatisticsPage.module.css";
import Topbar from "../components/Topbar/Topbar";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend
} from "recharts";

// Fake data
const monthlyData = [
  { month: "Jan", soutenances: 4 },
  { month: "Feb", soutenances: 6 },
  { month: "Mar", soutenances: 3 },
  { month: "Apr", soutenances: 7 },
  { month: "May", soutenances: 5 },
];

const weeklyTrend = [
  { week: "S1", count: 1 },
  { week: "S2", count: 2 },
  { week: "S3", count: 1 },
  { week: "S4", count: 3 },
];

const statusData = [
  { name: "Réalisées", value: 8 },
  { name: "À venir", value: 3 },
  { name: "Retard", value: 1 },
];

const COLORS = ["#4caf50", "#ffb74d", "#e57373"];

const StatisticsPage = () => {
  return (
    <div className={styles.page}>
      <Topbar />

      <div className={styles.main}>
        <h1>Statistiques</h1>

        {/* Stat Cards */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <p>Total soutenances</p>
            <h2>12</h2>
          </div>
          <div className={styles.card}>
            <p>Réalisées</p>
            <h2>8</h2>
          </div>
          <div className={styles.card}>
            <p>Moyenne/sem</p>
            <h2>2.1</h2>
          </div>
          <div className={styles.card}>
            <p>Retards CR</p>
            <h2>1</h2>
          </div>
        </div>

        {/* Charts */}
        <div className={styles.charts}>
          <div className={styles.chartBox}>
            <h3>Soutenances / Mois</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={monthlyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="soutenances" fill="#d94a6a" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.chartBox}>
            <h3>Tendance hebdomadaire</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={weeklyTrend}>
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#6a1b9a" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.chartBox}>
            <h3>Répartition des statuts</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={60}
                  label
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
