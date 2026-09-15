from sqlalchemy.orm import Session

from app.modules.session.models.session_model import (
    Session as SessionModel,
)

from app.modules.session.schemas.session_schema import (
    SessionCreate,
    SessionUpdate,
)


def create_session(
    db: Session,
    session: SessionCreate,
    user_id: int,
):
    """
    Create a new monitoring session for a user.
    """

    new_session = SessionModel(
        user_id=user_id,
        started_at=session.started_at,
    )

    db.add(new_session)
    db.commit()
    db.refresh(new_session)

    return new_session


def get_all_sessions(
    db: Session,
):
    """
    Return all monitoring sessions.
    """

    return (
        db.query(SessionModel)
        .order_by(SessionModel.started_at.desc())
        .all()
    )


def get_session_by_id(
    db: Session,
    session_id: int,
):
    """
    Return a session by its ID.
    """

    return (
        db.query(SessionModel)
        .filter(SessionModel.id == session_id)
        .first()
    )


def get_sessions_by_user(
    db: Session,
    user_id: int,
):
    """
    Return all sessions belonging to one user.
    """

    return (
        db.query(SessionModel)
        .filter(SessionModel.user_id == user_id)
        .order_by(SessionModel.started_at.desc())
        .all()
    )


def update_session(
    db: Session,
    session_id: int,
    session_data: SessionUpdate,
):
    """
    Update a monitoring session.
    """

    session = (
        db.query(SessionModel)
        .filter(SessionModel.id == session_id)
        .first()
    )

    if session is None:
        return None

    update_data = session_data.model_dump(
        exclude_unset=True
    )

    for key, value in update_data.items():
        setattr(session, key, value)

    db.commit()
    db.refresh(session)

    return session


def delete_session(
    db: Session,
    session_id: int,
):
    """
    Delete a monitoring session.
    """

    session = (
        db.query(SessionModel)
        .filter(SessionModel.id == session_id)
        .first()
    )

    if session is None:
        return None

    db.delete(session)
    db.commit()

    return session