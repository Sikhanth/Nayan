from fastapi import FastAPI
from app.database.base import Base
from app.database.session import engine
from app.modules.session.api.session_api import router as session_router
import app.database.models

Base.metadata.create_all(bind=engine)
app = FastAPI()

app.include_router(session_router)