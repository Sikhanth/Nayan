from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
)

from sqlalchemy.orm import Session

from app.database.session import get_db
from app.core.dependencies import get_current_user

from app.modules.user.models.user_model import User

from app.modules.session.schemas.session_schema import (
    SessionCreate,
    SessionResponse,
    SessionUpdate,
)

from app.modules.session.services.session_service import (
    create_session,
    get_session_by_id,
    get_sessions_by_user,
    update_session,
    delete_session,
)


router = APIRouter(
    prefix="/sessions",
    tags=["Sessions"],
)


# ---------------------------------------------------------
# GET ALL USER SESSIONS
# ---------------------------------------------------------

@router.get(
    "/",
    response_model=list[SessionResponse],
)
def get_sessions(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Return all sessions belonging to the logged-in user.
    """

    return get_sessions_by_user(
        db,
        current_user.id,
    )


# ---------------------------------------------------------
# START NEW SESSION
# ---------------------------------------------------------

@router.post(
    "/start",
    response_model=SessionResponse,
)
def start_session(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Start a new monitoring session for the logged-in user.
    """

    session = create_session(
        db,
        SessionCreate(),
        current_user.id,
    )

    return session


# ---------------------------------------------------------
# GET SINGLE SESSION
# ---------------------------------------------------------

@router.get(
    "/{session_id}",
    response_model=SessionResponse,
)
def get_session(
    session_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Return a session belonging to the logged-in user.
    """

    session = get_session_by_id(
        db,
        session_id,
    )

    if session is None:
        raise HTTPException(
            status_code=404,
            detail="Session not found",
        )

    if session.user_id != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="Not authorized to access this session",
        )

    return session


# ---------------------------------------------------------
# UPDATE SESSION
# ---------------------------------------------------------

@router.put(
    "/{session_id}",
    response_model=SessionResponse,
)
def update_existing_session(
    session_id: int,
    session_data: SessionUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Update a session belonging to the logged-in user.
    """

    session = get_session_by_id(
        db,
        session_id,
    )

    if session is None:
        raise HTTPException(
            status_code=404,
            detail="Session not found",
        )

    if session.user_id != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="Not authorized to update this session",
        )

    session = update_session(
        db,
        session_id,
        session_data,
    )

    return session


# ---------------------------------------------------------
# DELETE SESSION
# ---------------------------------------------------------

@router.delete(
    "/{session_id}",
)
def delete_existing_session(
    session_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Delete a session belonging to the logged-in user.
    """

    session = get_session_by_id(
        db,
        session_id,
    )

    if session is None:
        raise HTTPException(
            status_code=404,
            detail="Session not found",
        )

    if session.user_id != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="Not authorized to delete this session",
        )

    delete_session(
        db,
        session_id,
    )

    return {
        "message": f"Session {session_id} deleted successfully."
    }