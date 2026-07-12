from fastapi import APIRouter, Depends ,HTTPException
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.modules.session.schemas.session_schema import (
    SessionCreate,
    SessionResponse,
    SessionUpdate
)


from app.modules.session.services.session_service import (
    create_session,
    get_all_sessions,
    get_session_by_id,
    update_session
)

from app.modules.session.services.session_service import (
    create_session,
    get_all_sessions,
    get_session_by_id,
    update_session,
    delete_session
)

router = APIRouter(
    prefix="/sessions",
    tags=["Sessions"]
)
@router.get("/", response_model=list[SessionResponse])
def get_sessions(db: Session = Depends(get_db)):
    return get_all_sessions(db)

@router.get("/{session_id}", response_model=SessionResponse)
def get_session(session_id: int, db: Session = Depends(get_db)):
    return get_session_by_id(db, session_id)

@router.post("/", response_model=SessionResponse)
def create_new_session(
    session: SessionCreate,
    db: Session = Depends(get_db)
):
    return create_session(db, session)

@router.put("/{session_id}", response_model=SessionResponse)
def update_existing_session(
    session_id: int,
    session_data: SessionUpdate,
    db: Session = Depends(get_db)
):
    session = update_session(db, session_id, session_data)

    if session is None:
        raise HTTPException(status_code=404, detail="Session not found")

    return session

@router.delete("/{session_id}")
def delete_existing_session(
    session_id: int,
    db: Session = Depends(get_db)
):
    session = delete_session(db, session_id)

    if session is None:
        raise HTTPException(
            status_code=404,
            detail="Session not found"
        )

    return {
        "message": f"Session {session_id} deleted successfully."
    }