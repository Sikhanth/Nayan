from fastapi import FastAPI

from app.database.base import Base
from app.database.session import engine

import app.database.models

from app.modules.session.api.session_api import router as session_router
from app.modules.user.api.user_api import router as user_router
from app.modules.detection.api.detection_api import router as detection_router
from app.modules.user.models.user_model import User
from app.modules.session.models.session_model import Session
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://nayan-lime.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(session_router)
app.include_router(user_router)
app.include_router(
    detection_router,
    prefix="/api",
    tags=["Detection"],
)