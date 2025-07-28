import axios from "axios";
const BASE = import.meta.env.VITE_BACKEND_URL;
export const postReviewApi = (data, token) => axios.post(`${BASE}url/review`, data, { headers: { Authorization: `Bearer ${token}` } });
export const getReviewsApi = (token) => axios.get(`${BASE}url/getreviews`, { headers: { Authorization: `Bearer ${token}` } });
