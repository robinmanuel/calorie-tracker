import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000"
});

apiClient.interceptors.request.use(config => {

  const token = localStorage.getItem("token");

  if (token) {
    config.headers.token = token;   // important change
  }

  return config;

});

export default apiClient;