from sqlalchemy.orm import Session

from app.modules.session.models.session_model import Session as SessionModel
from app.modules.session.schemas.session_schema import SessionCreate,SessionUpdate


def create_session(db: Session, session: SessionCreate):
    """
    Create a new monitoring session.
    """

    new_session = SessionModel(
        started_at=session.started_at
    )

    db.add(new_session)
    db.commit()
    db.refresh(new_session)

    return new_session

def get_all_sessions(db: Session):
    return db.query(SessionModel).all()

def get_session_by_id(db: Session, session_id: int):
    return db.query(SessionModel).filter(
        SessionModel.id == session_id
    ).first()

def update_session(db: Session, session_id: int, session_data: SessionUpdate):

    session = db.query(SessionModel).filter(
        SessionModel.id == session_id
    ).first()

    if not session:
        return None

    for key, value in session_data.model_dump(exclude_unset=True).items():
        setattr(session, key, value)

    db.commit()
    db.refresh(session)

    return session

def delete_session(db: Session, session_id: int):
    session = db.query(SessionModel).filter(
        SessionModel.id == session_id
    ).first()

    if not session:
        return None

    db.delete(session)
    db.commit()

    return session