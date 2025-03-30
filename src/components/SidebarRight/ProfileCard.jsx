// src/components/SidebarRight/ProfileCard.jsx

import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  return (
    <div className={styles.card}>
      <img
        src="https://i.pravatar.cc/100?img=5"
        alt="User"
        className={styles.avatar}
      />
      <h3 className={styles.name}>Meden Izi</h3>
      <p className={styles.role}>Product Designer</p>
      <button className={styles.button}>View Profile</button>
    </div>
  );
};

export default ProfileCard;
