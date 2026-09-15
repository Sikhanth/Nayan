import { FaPlay, FaStop } from "react-icons/fa";
import Webcam from "react-webcam";
import { useEffect, useRef, useState } from "react";

import { detectImage } from "../../services/detectionService";
import beepSound from "../../assets/beep.wav";


function CameraCard({
  onStartSession,
  onStopSession,
  onDetectionResult,
}) {
  const webcamRef = useRef(null);

  const monitoringRef = useRef(false);
  const timeoutRef = useRef(null);

  // Stores the most recent backend metrics
  const latestMetricsRef = useRef(null);

  // Audio
  const audioRef = useRef(null);

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [error, setError] = useState("");
  const [alertMessage, setAlertMessage] = useState("");


  // --------------------------------
  // INITIALIZE ALERT SOUND
  // --------------------------------

  useEffect(() => {
    audioRef.current = new Audio(beepSound);
    audioRef.current.preload = "auto";

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);


  // --------------------------------
  // PLAY ALERT SOUND
  // --------------------------------

  const playAlertSound = () => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.currentTime = 0;

    audioRef.current
      .play()
      .catch((error) => {
        console.error(
          "Unable to play alert sound:",
          error
        );
      });
  };


  // --------------------------------
  // CAPTURE FRAME
  // --------------------------------

  const captureFrame = async () => {
    if (
      !monitoringRef.current ||
      !webcamRef.current
    ) {
      return;
    }

    const imageSrc =
      webcamRef.current.getScreenshot();

    if (!imageSrc) {
      console.log("No image captured");

      scheduleNextFrame();

      return;
    }

    try {
      const result = await detectImage(imageSrc);

      console.log(
        "Backend Response:",
        result
      );


      // --------------------------------
      // STORE LATEST METRICS
      // --------------------------------

      latestMetricsRef.current = {
        blink_rate: result.blink_rate,
        blink_count: result.blink_count,
        average_ibi: result.average_ibi,
        health_score: result.health_score,
        eye_status: result.eye_status,
        fatigue_level: result.fatigue_level,
        session_duration:
          result.session_duration,
      };


      // --------------------------------
      // SEND RESULT TO DASHBOARD
      // --------------------------------

      if (onDetectionResult) {
        onDetectionResult(result);
      }


      // --------------------------------
      // FATIGUE-RISK ALERT
      // --------------------------------

      if (result.fatigue_alert) {
        console.log(
          "3 consecutive low-blink windows detected"
        );

        playAlertSound();

        setAlertMessage(
          "Low blink rate detected. Take a 20-second break."
        );
      }


      setError("");

    } catch (error) {
      console.error(
        "Detection API Error:",
        error
      );

      setError(
        "Unable to connect to detection service."
      );
    }


    // --------------------------------
    // NEXT FRAME
    // --------------------------------

    scheduleNextFrame();
  };


  // --------------------------------
  // SCHEDULE NEXT FRAME
  // --------------------------------

  const scheduleNextFrame = () => {
    if (!monitoringRef.current) {
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;

      captureFrame();
    }, 100);
  };


  // --------------------------------
  // START MONITORING
  // --------------------------------

  const startMonitoring = async () => {
    console.log(
      "Start Monitoring clicked"
    );

    if (monitoringRef.current) {
      return;
    }

    try {
      setError("");
      setAlertMessage("");

      if (onStartSession) {
        await onStartSession();
      }

      monitoringRef.current = true;

      setIsMonitoring(true);

      latestMetricsRef.current = null;

      captureFrame();

    } catch (error) {
      console.error(
        "Failed to start monitoring:",
        error
      );

      monitoringRef.current = false;

      setIsMonitoring(false);

      setError(
        "Unable to start monitoring session."
      );
    }
  };


  // --------------------------------
  // STOP MONITORING
  // --------------------------------

  const stopMonitoring = async () => {
    console.log(
      "Stop Monitoring clicked"
    );

    monitoringRef.current = false;

    setIsMonitoring(false);

    setAlertMessage("");

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);

      timeoutRef.current = null;
    }


    // Save final session
    if (
      onStopSession &&
      latestMetricsRef.current
    ) {
      try {
        await onStopSession(
          latestMetricsRef.current
        );

        console.log(
          "Session completed successfully"
        );

      } catch (error) {
        console.error(
          "Failed to update session:",
          error
        );

        setError(
          "Session stopped, but failed to save session data."
        );
      }
    }

    latestMetricsRef.current = null;
  };


  // --------------------------------
  // CLEANUP
  // --------------------------------

  useEffect(() => {
    return () => {
      monitoringRef.current = false;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);

        timeoutRef.current = null;
      }

      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);


  // --------------------------------
  // UI
  // --------------------------------

  return (
    <div className="mt-6 rounded-lg border border-[#5C3527]/12 bg-white p-4 sm:p-6">

      {/* HEADER */}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h2 className="text-base font-semibold text-[#2A211C]">
            Live monitoring
          </h2>

          <p className="mt-1 text-sm text-[#8A7060]">
            Real-time blink detection using your webcam.
          </p>
        </div>


        {/* MONITORING STATUS */}

        <span className="flex items-center gap-2 self-start text-sm font-medium text-[#5A6B4C] sm:self-auto">

          <span
            className={`h-2 w-2 rounded-full ${
              isMonitoring
                ? "bg-[#6B7F5B]"
                : "bg-[#A99077]"
            }`}
          />

          {isMonitoring
            ? "Monitoring"
            : "Camera ready"}

        </span>

      </div>


      {/* WEBCAM */}

      <div className="mt-5 aspect-video w-full overflow-hidden rounded-md border border-[#5C3527]/10 bg-[#FCF9F3]">

        <Webcam
          ref={webcamRef}
          audio={false}
          mirrored
          screenshotFormat="image/jpeg"
          className="h-full w-full object-cover"
          videoConstraints={{
            width: 1280,
            height: 720,
            facingMode: "user",
          }}
        />

      </div>


      {/* ERROR */}

      {error && (
        <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}


      {/* EYE CARE ALERT */}

      {alertMessage && (
        <div className="mt-4 rounded-md border border-[#A65D45]/20 bg-[#FFF5EF] px-4 py-3">

          <div className="flex items-start justify-between gap-3">

            <div>

              <p className="text-sm font-semibold text-[#8C4B37]">
                Eye Care Reminder
              </p>

              <p className="mt-1 text-sm text-[#5C3527]">
                {alertMessage}
              </p>

            </div>


            <button
              onClick={() =>
                setAlertMessage("")
              }
              className="text-sm font-medium text-[#8A7060] hover:text-[#5C3527]"
            >
              ✕
            </button>

          </div>

        </div>
      )}


      {/* BUTTONS */}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

        {/* START */}

        <button
          onClick={startMonitoring}
          disabled={isMonitoring}
          className={`flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white transition sm:justify-start ${
            isMonitoring
              ? "cursor-not-allowed bg-[#A99077]"
              : "bg-[#5C3527] hover:bg-[#4A2A1F]"
          }`}
        >

          <FaPlay className="text-xs" />

          {isMonitoring
            ? "Monitoring..."
            : "Start monitoring"}

        </button>


        {/* STOP */}

        <button
          onClick={stopMonitoring}
          disabled={!isMonitoring}
          className={`flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white transition sm:justify-start ${
            !isMonitoring
              ? "cursor-not-allowed bg-[#C7B8AE]"
              : "bg-[#A65D45] hover:bg-[#8C4B37]"
          }`}
        >

          <FaStop className="text-xs" />

          Stop session

        </button>

      </div>

    </div>
  );
}

export default CameraCard;