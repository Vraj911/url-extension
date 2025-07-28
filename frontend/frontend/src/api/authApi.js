import axios from "axios";
const BASE = import.meta.env.VITE_BACKEND_URL;
export const loginApi = (data) => axios.post(`${BASE}auth/login`, data);
export const signupApi = (data) => axios.post(`${BASE}auth/register`, data);
export const logoutApi=()=>axios.post(`${BASE}auth/logout`,{},{withCredentials:true});