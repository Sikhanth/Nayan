from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict


class SessionCreate(BaseModel):
    started_at: Optional[datetime] = None


class SessionUpdate(BaseModel):
    ended_at: Optional[datetime] = None
    duration_seconds: Optional[int] = None
    total_blinks: Optional[int] = None
    average_blink_rate: Optional[float] = None
    average_ibi: Optional[float] = None
    health_score: Optional[float] = None
    health_status: Optional[str] = None


class SessionResponse(BaseModel):
    id: int
    started_at: datetime
    ended_at: Optional[datetime] = None
    duration_seconds: Optional[int] = None
    total_blinks: Optional[int] = None
    average_blink_rate: Optional[float] = None
    average_ibi: Optional[float] = None
    health_score: Optional[float] = None
    health_status: Optional[str] = None

    model_config = ConfigDict(from_attributes=True)