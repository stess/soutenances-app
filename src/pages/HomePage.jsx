// src/pages/HomePage.jsx

import React from "react";
import styles from "./HomePage.module.css";

// Left Sidebar
import WelcomeCard from "../components/SidebarLeft/WelcomeCard";
import Sessions from "../components/SidebarLeft/Sessions";
import TodoAlerts from "../components/SidebarLeft/TodoAlerts";
import MeetingMorning from "../components/SidebarLeft/MeetingMorning";

// Center
import CalendarHeader from "../components/CalendarSection/CalendarHeader";
import CalendarGrid from "../components/CalendarSection/CalendarGrid";

// Right Sidebar
import Topbar from "../components/Topbar/Topbar";
import RevenueBox from "../components/SidebarRight/RevenueBox";
import ProfileCard from "../components/SidebarRight/ProfileCard";
import StatusCard from "../components/SidebarRight/StatusCard";
import ObjectivesCard from "../components/SidebarRight/ObjectivesCard";
import StatsOverview from "../components/SidebarRight/StatsOverview";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {/* TOPBAR */}
      <Topbar />

      <div className={styles.mainGrid}>
        {/* LEFT SIDEBAR */}
        <aside className={styles.sidebarLeft}>
          {/* <WelcomeCard /> */}
          <Sessions />
          {/* <TodoAlerts /> */}
          {/* <MeetingMorning /> */}
        </aside>

        {/* CENTER - CALENDAR */}
        <main className={styles.mainContent}>
          <CalendarHeader />
          <CalendarGrid />
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className={styles.sidebarRight}>
          <RevenueBox amount="1 200 €" />
          <ProfileCard />
          <StatusCard />
          <ObjectivesCard />
          <StatsOverview />
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
