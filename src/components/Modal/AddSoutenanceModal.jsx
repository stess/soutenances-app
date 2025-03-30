// src/components/Modal/AddSoutenanceModal.jsx

import React, { useState } from "react";
import styles from "./AddSoutenanceModal.module.css";

const AddSoutenanceModal = ({ onClose, onSave }) => {
  const [etudiant, setEtudiant] = useState("");
  const [sujet, setSujet] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSoutenance = {
      etudiant,
      sujet,
      date,
      heure,
      statut: "Soutenance à préparer",
    };

    onSave(newSoutenance);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Nouvelle soutenance</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Étudiant :
            <input
              type="text"
              value={etudiant}
              onChange={(e) => setEtudiant(e.target.value)}
              required
            />
          </label>
          <label>
            Sujet :
            <input
              type="text"
              value={sujet}
              onChange={(e) => setSujet(e.target.value)}
              required
            />
          </label>
          <label>
            Date :
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <label>
            Heure :
            <input
              type="time"
              value={heure}
              onChange={(e) => setHeure(e.target.value)}
              required
            />
          </label>
          <div className={styles.buttons}>
            <button type="button" onClick={onClose}>
              Annuler
            </button>
            <button type="submit">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSoutenanceModal;
