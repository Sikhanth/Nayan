from fastapi import FastAPI

from app.database.base import Base
from app.database.session import engine

import app.database.models

from app.modules.session.api.session_api import (
    router as session_router,
)

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Nayan API",
    version="1.0.0",
)

app.include_router(session_router)