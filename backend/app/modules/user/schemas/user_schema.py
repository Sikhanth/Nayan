from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr


class UserCreate(BaseModel):
    """
    Data required to register a new user.
    """

    username: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    """
    Data required for login.
    """

    username: str
    password: str


class UserResponse(BaseModel):
    """
    User data returned by the API.
    """

    id: int
    username: str
    email: EmailStr
    created_at: datetime
    is_active: bool

    model_config = ConfigDict(
        from_attributes=True
    )


class Token(BaseModel):
    """
    JWT token returned after login.
    """

    access_token: str
    token_type: str