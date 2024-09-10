import axios from "axios";
import { API_ENDPOINT } from "../constants";

const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    accept: "*/*",
    "Content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
