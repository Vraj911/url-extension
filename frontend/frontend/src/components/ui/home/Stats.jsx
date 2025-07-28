import { useState, useEffect } from "react";
import "./css/Stats.css";
import { fetchStats } from "../../../services/statsService";
import { useAppContext } from "../../../context/AppContext";
const Stats = () => {
  const { token } = useAppContext();
  const [stats, setStats] = useState({
    totalUrls: 0,
    totalUsers: 0,
    totalClicks: 0,
  });
  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchStats(token);
        setStats(data);
      } catch (err) {
        console.error("Error loading stats:", err);
      }
    };
    loadStats();
  }, [token]);
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
      </div>
    </div>
  );
};
export default Stats;
