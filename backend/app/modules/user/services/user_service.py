from sqlalchemy.orm import Session

from app.core.security import (
    hash_password,
    verify_password,
)

from app.modules.user.models.user_model import User
from app.modules.user.schemas.user_schema import (
    UserCreate,
)


def get_user_by_username(
    db: Session,
    username: str,
):
    """
    Returns a user by username.
    """

    return (
        db.query(User)
        .filter(User.username == username)
        .first()
    )


def get_user_by_email(
    db: Session,
    email: str,
):
    """
    Returns a user by email.
    """

    return (
        db.query(User)
        .filter(User.email == email)
        .first()
    )


def create_user(
    db: Session,
    user: UserCreate,
):
    """
    Create a new user.
    """

    db_user = User(
        username=user.username,
        email=user.email,
        password_hash=hash_password(
            user.password
        ),
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user


def authenticate_user(
    db: Session,
    email: str,
    password: str,
):
    """
    Verify user credentials using email.
    """

    user = get_user_by_email(
        db,
        email,
    )

    if not user:
        return None

    if not verify_password(
        password,
        user.password_hash,
    ):
        return None

    return user