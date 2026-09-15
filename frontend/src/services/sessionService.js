import api from "./api";

// ---------------------------------------------------------
// START SESSION
// ---------------------------------------------------------

export const startSession = async () => {
  const response = await api.post("/sessions/start");

  return response.data;
};


// ---------------------------------------------------------
// UPDATE SESSION
// ---------------------------------------------------------

export const updateSession = async (
  sessionId,
  metrics
) => {
  const response = await api.put(
    `/sessions/${sessionId}`,
    {
      ended_at: new Date().toISOString(),
      duration_seconds: metrics.session_duration,
      total_blinks: metrics.blink_count,
      average_blink_rate: metrics.blink_rate,
      average_ibi: metrics.average_ibi,
      health_score: metrics.health_score,
      health_status: metrics.eye_status,
    }
  );

  return response.data;
};


// ---------------------------------------------------------
// GET ALL USER SESSIONS
// ---------------------------------------------------------

export const getSessions = async () => {
  const response = await api.get("/sessions/");

  return response.data;
};