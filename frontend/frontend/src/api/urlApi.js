import axios from "axios";
const BASE = import.meta.env.VITE_BACKEND_URL;
export const shortenUrlApi = (data, token) => axios.post(`${BASE}url/`, data, { headers: { Authorization: `Bearer ${token}` } });
export const getShortUrlApi = (data, token) => axios.post(`${BASE}url/getshorturl`, data, { headers: { Authorization: `Bearer ${token}` } });
export const getStatsApi = (token) => axios.get(`${BASE}url/stats`, { headers: { Authorization: `Bearer ${token}` } });
