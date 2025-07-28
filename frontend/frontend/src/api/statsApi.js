import axios from "axios";
const BASE = import.meta.env.VITE_BACKEND_URL;
export const getStatsApi = (token) =>
  axios.get(`${BASE}url/stats`, {
    headers: { Authorization: `Bearer ${token}` },
  });
