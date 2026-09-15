from dataclasses import dataclass

from app.cv_engine.types import EyeLandmarks


@dataclass
class EyeMetrics:
    """
    Stores all eye monitoring metrics for the current frame.
    """

    # ---------- Detection ----------
    ear: float = 0.0
    blink_detected: bool = False
    blink_count: int = 0
    blink_rate: float = 0.0
    average_ibi: float = 0.0

    # ---------- Session ----------
    session_duration: int = 0

    # ---------- Eye Health ----------
    fatigue_level: str = "Low"
    eye_status: str = "Waiting"
    health_score: int = 100

    # ---------- Alerts ----------
    fatigue_alert: bool = False

    # ---------- Landmarks ----------
    eye_landmarks: EyeLandmarks | None = None