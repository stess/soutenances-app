// src/pages/SoutenancesPage.jsx

import React, { useState } from "react";
import styles from "./SoutenancesPage.module.css";
import Topbar from "../components/Topbar/Topbar";
import AddSoutenanceModal from "../components/Modal/AddSoutenanceModal";

const SoutenancesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [soutenances, setSoutenances] = useState([
    {
      date: "2025-03-28",
      heure: "10:00",
      etudiant: "Luc Martin",
      sujet: "IA dans la santé",
      statut: "En attente de soutenance",
    },
    {
      date: "2025-04-02",
      heure: "14:00",
      etudiant: "Sara Ali",
      sujet: "Sécurité Web",
      statut: "Compte-rendu à faire",
    },
    {
      date: "2025-03-31",
      heure: "14:00",
      etudiant: "Sara Ali",
      sujet: "Sécurité Web",
      statut: "Soutenance à préparer",
    },
  ]);

  const handleAddSoutenance = (newSoutenance) => {
    setSoutenances((prev) => [...prev, newSoutenance]);
    setShowModal(false);
  };

  return (
    <div className={styles.page}>
      <Topbar />

      <div className={styles.main}>
        <div className={styles.pageHeader}>
          <h1>Gestion des Soutenances</h1>
          <div className={styles.actions}>
            <select className={styles.select}>
              <option>Toutes</option>
              <option>À venir</option>
              <option>Réalisées</option>
            </select>
            <button className={styles.button} onClick={() => setShowModal(true)}>
              + Nouvelle soutenance
            </button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className={styles.statsGrid}>
          <div className={`${styles.statCard} ${styles.preparation}`}>
            <p>Soutenance à préparer</p>
            <h2>{soutenances.filter(s => s.statut === "Soutenance à préparer").length}</h2>
          </div>
          <div className={`${styles.statCard} ${styles.attente}`}>
            <p>En attente de soutenance</p>
            <h2>{soutenances.filter(s => s.statut === "En attente de soutenance").length}</h2>
          </div>
          <div className={`${styles.statCard} ${styles.correction}`}>
            <p>En attente de correction</p>
            <h2>{soutenances.filter(s => s.statut === "En attente de correction").length}</h2>
          </div>
          <div className={`${styles.statCard} ${styles.compterendu}`}>
            <p>Compte-rendu à faire</p>
            <h2>{soutenances.filter(s => s.statut === "Compte-rendu à faire").length}</h2>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Heure</th>
                <th>Étudiant</th>
                <th>Sujet</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {soutenances.map((s, index) => (
                <tr key={index}>
                  <td>{s.date}</td>
                  <td>{s.heure}</td>
                  <td>{s.etudiant}</td>
                  <td>{s.sujet}</td>
                  <td>
                    <span className={`${styles.badge} ${
                      s.statut === "Soutenance à préparer"
                        ? styles.preparation
                        : s.statut === "En attente de soutenance"
                        ? styles.attente
                        : s.statut === "En attente de correction"
                        ? styles.correction
                        : styles.compterendu
                    }`}>
                      {s.statut}
                    </span>
                  </td>
                  <td>
                    <button className={styles.actionBtn}>Voir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <AddSoutenanceModal
          onClose={() => setShowModal(false)}
          onSave={handleAddSoutenance}
        />
      )}
    </div>
  );
};

export default SoutenancesPage;
