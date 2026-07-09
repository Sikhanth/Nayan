from sqlalchemy import Column, Integer, Float, String, DateTime
from sqlalchemy.sql import func

from app.database.base import Base


class Session(Base):
    __tablename__ = "sessions"

    id = Column(Integer, primary_key=True, index=True)

    started_at = Column(DateTime(timezone=True), server_default=func.now())

    ended_at = Column(DateTime(timezone=True), nullable=True)

    duration_seconds = Column(Integer, default=0)

    total_blinks = Column(Integer, default=0)

    average_blink_rate = Column(Float, default=0)

    average_ibi = Column(Float, default=0)

    health_score = Column(Float, default=100)

    health_status = Column(String, default="Healthy")