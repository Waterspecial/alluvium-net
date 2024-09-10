import axiosInstance from "./axiosInstance";

export const getApiToken = async () => {
  try {
    const res = await axiosInstance.post(`/token`);
    const accessToken = res?.data?.access_token;
    localStorage.setItem("access_token", accessToken);
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
};

export const submitUserInfo = async (userInfo) => {
  try {
    const res = await axiosInstance.post(`/submit_user_info`, userInfo);
    console.log(res);
    return res?.data?.project_stats;
  } catch (error) {
    console.error("Error submitting user info:", error);
  }
};
export const SubmitDemoURL = async (demoUrl) => {
  try {
    const res = await axiosInstance.post(
      `/submit_demo_url?demo_url=${demoUrl}`
    );
    return res;
  } catch (error) {
    console.error("Error submitting user info:", error);
  }
};
