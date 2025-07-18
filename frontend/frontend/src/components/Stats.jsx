import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Stats.css";

const Stats = () => {
  const [stats, setStats] = useState({
    totalUrls: 0,
    totalUsers: 0,
    totalClicks: 0,
  });

 /* useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}api/stats`)
      .then((res) => setStats(res.data))
      .catch((err) => console.error("Error loading stats:", err));
  }, []);*/

  return (
    <div className="stats">
      <h3>Statistics</h3>
      <div className="stat-cards">
        <div className="stat-card">
          <h4>Total URLs Shortened</h4>
          <p>{stats.totalUrls}</p>
        </div>
        <div className="stat-card">
          <h4>Users Registered</h4>
          <p>{stats.totalUsers}</p>
        </div>
        <div className="stat-card">
          <h4>Total Clicks</h4>
          <p>{stats.totalClicks}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
