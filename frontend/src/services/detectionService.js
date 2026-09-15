import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;


// ---------------------------------------------------------
// DETECTION
// ---------------------------------------------------------

export const detectImage = async (image, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/detect`,
      {
        image,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Detection API Error:", error);
    throw error;
  }
};


// ---------------------------------------------------------
// START SESSION
// ---------------------------------------------------------

export const startSession = async (token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/sessions/start`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Start Session API Error:", error);
    throw error;
  }
};


// ---------------------------------------------------------
// UPDATE / FINISH SESSION
// ---------------------------------------------------------

export const updateSession = async (
  sessionId,
  sessionData,
  token
) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/sessions/${sessionId}`,
      sessionData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Update Session API Error:", error);
    throw error;
  }
};