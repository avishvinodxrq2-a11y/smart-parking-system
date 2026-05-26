import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-parking-api-dam2.onrender.com/api",
});

// attach token automatically
API.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("access") || localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;