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

    def __init__(
        self,
        db: Session,
        user_id: int,
    ):
        self.db = db
        self.user_id = user_id
        self.session_id = None

    def start(self):
        """
        Create a new monitoring session for the current user.
        """

        session = create_session(
            self.db,
            SessionCreate(),
            self.user_id,
        )

        self.session_id = session.id

        return session

    def finish(self, metrics):
        """
        Finish the current monitoring session
        and save the final metrics.
        """

        if self.session_id is None:
            return None

        session_data = SessionUpdate(
            ended_at=datetime.now(),
            duration_seconds=metrics.session_duration,
            total_blinks=metrics.blink_count,
            average_blink_rate=metrics.blink_rate,
            average_ibi=metrics.average_ibi,
            health_score=metrics.health_score,
            health_status=metrics.eye_status,
        )

        session = update_session(
            self.db,
            self.session_id,
            session_data,
        )

        self.session_id = None

        return session