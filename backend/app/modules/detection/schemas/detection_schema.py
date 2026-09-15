from pydantic import BaseModel


class DetectionRequest(BaseModel):
    image: str


class DetectionResponse(BaseModel):
    blink_detected: bool
    blink_count: int
    blink_rate: float
    ear: float
    average_ibi: float
    session_duration: int
    health_score: int
    eye_status: str
    fatigue_level: str