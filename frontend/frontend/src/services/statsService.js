import { getStatsApi } from "../api/statsApi";
export const fetchStats = async (token) => {
  const res = await getStatsApi(token);
  return res.data;  
};
