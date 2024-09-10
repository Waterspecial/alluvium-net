import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getApiToken = async () => {
  try {
    const res = await axiosInstance.post(`/token`);
    console.log(res);
    localStorage.setItem("access_token", res);
    return res;
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
};

export const submitUserInfo = async (userInfo, token) => {
  try {
    const res = await axiosInstance.post(`/submit_user_info`, userInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    });
    return res;
  } catch (error) {
    console.error("Error submitting user info:", error);
  }
};
export const SubmitDemoURL = async (token, demoUrl) => {
  try {
    const res = await axiosInstance.post(`/submit_demo_url`, demoUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    });
    return res;
  } catch (error) {
    console.error("Error submitting user info:", error);
  }
};
