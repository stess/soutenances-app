// src/components/Topbar/Topbar.jsx

import React from "react";
import styles from "./Topbar.module.css";
import { FaSearch, FaRocket } from "react-icons/fa";
import logo from "../../assets/logo.png"; // ✅ Chemin vers ton logo

const Topbar = () => {
  return (
    <header className={styles.topbar}>
      {/* LOGO + NAV */}
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImg} />
          <span className={styles.text}>Mentorat OC</span>
        </div>

        <nav className={styles.nav}>
          <a href="/">Accueil</a>
          <a href="/soutenances">Soutenances</a>
          <a href="/planning">Planning</a>
          <a href="/statistiques">Statistiques</a>
          {/* <a href="#">Compte-rendus</a>
          <a href="#">Facturation</a>
          <a href="#">Allaccess</a>
          <a href="#">Downloads</a>
          <a href="#">Dashboard</a>*/}
        </nav>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.right}>
        <div className={styles.searchBox}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search..." />
        </div>

        <div className={styles.avatar}>
          <img src="https://i.pravatar.cc/36?img=5" alt="User Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
