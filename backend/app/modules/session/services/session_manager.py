from datetime import datetime

from sqlalchemy.orm import Session

from app.modules.session.schemas.session_schema import (
    SessionCreate,
    SessionUpdate,
)

from app.modules.session.services.session_service import (
    create_session,
    update_session,
)


class SessionManager:
    """
    Handles creating and updating a monitoring session
    in the database.
    """

    def __init__(self, db: Session):
        self.db = db
        self.session_id = None

    def start(self):
        """
        Create a new monitoring session.
        """

        session = create_session(
            self.db,
            SessionCreate(),
        )

        self.session_id = session.id

    def finish(self, metrics):
        """
        Update the monitoring session with final metrics.
        """

        if self.session_id is None:
            return

        session_data = SessionUpdate(
            ended_at=datetime.now(),
            duration_seconds=metrics.session_duration,
            total_blinks=metrics.blink_count,
            average_blink_rate=metrics.blink_rate,
            average_ibi=metrics.average_ibi,
            health_score=metrics.health_score,
            health_status=metrics.health_status,
        )

        update_session(
            self.db,
            self.session_id,
            session_data,
        )