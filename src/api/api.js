import axios from "axios";

const backendBasedUrl= import.meta.env.VITE_API_URL;

export const api = axios.create({
<<<<<<< HEAD
  baseURL: backendBasedUrl,
=======
  baseURL: "https://smart-attendance-app-backend-g2tv.onrender.com/api",
>>>>>>> 35550346d915c82c2120e0986963378352991f02
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
