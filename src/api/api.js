import axios from "axios";

const backendBasedUrl= import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: backendBasedUrl,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("saatoken");
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});
