import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://calorie-tracker-dqf8.onrender.com"
    : "http://localhost:5000";

const apiClient = axios.create({ baseURL });

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers["token"] = token;
  }

  return config;
});

export default apiClient;