import { useState } from "react";
import { FaRegEye, FaRegClock, FaRegDotCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import StatsCard from "../components/dashboard/StatsCard";
import CameraCard from "../components/dashboard/CameraCard";
import BlinkChart from "../components/dashboard/BlinkChart";
import SummaryCard from "../components/dashboard/SummaryCard";
import RecentSessions from "../components/dashboard/RecentSessions";
import {
  startSession,
  updateSession,
} from "../services/sessionService";
function Dashboard() {
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState({
    blinkRate: 0,
    blinkCount: 0,
    ear: 0,
    averageIbi: 0,
    healthScore: 100,
    eyeStatus: "Waiting",
    fatigueLevel: "Low",
    sessionDuration: 0,
  });
  const [blinkHistory, setBlinkHistory] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [sessionStartTime, setSessionStartTime] = useState(null);
  // Used to refresh RecentSessions after a session finishes
  const [sessionRefreshKey, setSessionRefreshKey] = useState(0);
  // ---------------------------------------------------------
  // LOGOUT
  // ---------------------------------------------------------
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("token_type");
    navigate("/login");
  };
  // ---------------------------------------------------------
  // START SESSION
  // ---------------------------------------------------------
  const handleStartSession = async () => {
    try {
      const session = await startSession();
      console.log("Session started:", session);
      setSessionId(session.id);
      setSessionStartTime(Date.now());
      setBlinkHistory([]);
      setMetrics({
        blinkRate: 0,
        blinkCount: 0,
        ear: 0,
        averageIbi: 0,
        healthScore: 100,
        eyeStatus: "Waiting",
        fatigueLevel: "Low",
        sessionDuration: 0,
      });
    } catch (error) {
      console.error("Unable to start session:", error);
      throw error;
    }
  };
  // ---------------------------------------------------------
  // DETECTION RESULT
  // ---------------------------------------------------------
  const handleDetectionResult = (result) => {
    console.log("Updating Dashboard metrics:", result);
    let duration = 0;
    if (sessionStartTime) {
      duration = Math.floor((Date.now() - sessionStartTime) / 1000);
    }
    setMetrics({
      blinkRate: result.blink_rate ?? 0,
      blinkCount: result.blink_count ?? 0,
      ear: result.ear ?? 0,
      averageIbi: result.average_ibi ?? 0,
      healthScore: result.health_score ?? 0,
      eyeStatus: result.eye_status ?? "Waiting",
      fatigueLevel: result.fatigue_level ?? "Low",
      sessionDuration: duration,
    });
    if (result.blink_detected) {
      setBlinkHistory((previous) => [
        ...previous,
        {
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          blink: result.blink_count,
        },
      ]);
    }
  };
  // ---------------------------------------------------------
  // STOP SESSION
  // ---------------------------------------------------------
  const handleStopSession = async (latestMetrics = null) => {
    if (!sessionId) {
      console.log("No active session.");
      return;
    }
    try {
      const finalDuration = sessionStartTime
        ? Math.floor((Date.now() - sessionStartTime) / 1000)
        : 0;
      /*
       * Prefer the latest metrics received directly
       * from CameraCard.
       *
       * This avoids saving slightly old React state.
       */
      const finalMetrics = {
        session_duration: finalDuration,
        blink_count: latestMetrics?.blink_count ?? metrics.blinkCount,
        blink_rate: latestMetrics?.blink_rate ?? metrics.blinkRate,
        average_ibi: latestMetrics?.average_ibi ?? metrics.averageIbi,
        health_score: latestMetrics?.health_score ?? metrics.healthScore,
        eye_status: latestMetrics?.eye_status ?? metrics.eyeStatus,
      };
      const completedSession = await updateSession(
        sessionId,
        finalMetrics
      );
      console.log("Session completed:", completedSession);
      // Clear active session
      setSessionId(null);
      setSessionStartTime(null);
      // Refresh RecentSessions
      setSessionRefreshKey((previous) => previous + 1);
    } catch (error) {
      console.error("Unable to finish session:", error);
      throw error;
    }
  };
  return (
    <div className="w-full min-w-0 overflow-x-hidden px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 border-b border-[#5C3527]/12 pb-5 sm:mb-8 sm:flex-row sm:items-center">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={`h-2 w-2 shrink-0 rounded-full ${
              sessionId ? "bg-[#6B7F5B]" : "bg-[#C9B8A8]"
            }`}
          />
          <div className="min-w-0">
            <h1 className="text-xl font-semibold text-[#2A211C]">
              Dashboard
            </h1>
            <p className="text-sm text-[#8A7060]">
              {sessionId
                ? "Tracking session in progress"
                : "No active session"}
            </p>
          </div>
        </div>
        {/* Logout */}
        <button
          onClick={handleLogout}
          className="min-h-11 rounded-md border border-[#5C3527]/20 px-4 py-2 text-sm font-medium text-[#5C3527] transition hover:bg-[#5C3527] hover:text-white"
        >
          Log out
        </button>
      </div>
      {/* Live Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Blink rate"
          value={`${metrics.blinkRate}/min`}
          subtitle="Current blink rate"
          icon={<FaRegEye />}
          color="bg-[#5C3527]"
          isLive={!!sessionId}
        />
        <StatsCard
          title="Blink count"
          value={metrics.blinkCount}
          subtitle="Total detected blinks"
          icon={<FaRegDotCircle />}
          color="bg-[#6B7F5B]"
          isLive={!!sessionId}
        />
        <StatsCard
          title="EAR"
          value={metrics.ear.toFixed(3)}
          subtitle="Eye aspect ratio"
          icon={<FaRegEye />}
          color="bg-[#8A5A3B]"
          isLive={!!sessionId}
        />
        <StatsCard
          title="Eye status"
          value={metrics.eyeStatus}
          subtitle={`Fatigue level: ${metrics.fatigueLevel}`}
          icon={<FaRegClock />}
          color="bg-[#A65D45]"
          isLive={!!sessionId}
        />
      </div>
      {/* Dashboard Sections */}
      <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
        {/* Camera */}
        <CameraCard
          onStartSession={handleStartSession}
          onStopSession={handleStopSession}
          onDetectionResult={handleDetectionResult}
        />
        {/* Live Blink Analytics */}
        <BlinkChart data={blinkHistory} />
        {/* Summary */}
        <SummaryCard
          blinkCount={metrics.blinkCount}
          blinkRate={metrics.blinkRate}
        />
        {/* Recent Sessions */}
        <RecentSessions refreshKey={sessionRefreshKey} />
      </div>
    </div>
  );
}
export default Dashboard;