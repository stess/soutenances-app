// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SoutenancesPage from "./pages/SoutenancesPage";
import PlanningPage from "./pages/PlanningPage";
import StatisticsPage from "./pages/StatisticsPage"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/soutenances" element={<SoutenancesPage />} />
        <Route path="/planning" element={<PlanningPage />} />
        <Route path="/statistiques" element={<StatisticsPage />} />
      </Routes>
    </Router>
  );
}

export default App;