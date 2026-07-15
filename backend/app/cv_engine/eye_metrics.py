from dataclasses import dataclass


@dataclass
class EyeMetrics:
    """
    Stores eye monitoring results for a single frame.
    """

    ear: float = 0.0
    blink_count: int = 0
    blink_rate: int = 0
    eye_landmarks: object | None = None