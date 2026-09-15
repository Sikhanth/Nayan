import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/users`;

export const loginUser = async (username, password) => {
  const formData = new URLSearchParams();

  formData.append("username", username);
  formData.append("password", password);

  const response = await axios.post(
    `${API_URL}/login`,
    formData,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  localStorage.setItem(
    "access_token",
    response.data.access_token
  );

  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("access_token");
};

export const getAccessToken = () => {
  return localStorage.getItem("access_token");
};