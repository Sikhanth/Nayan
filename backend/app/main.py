from app.database.base import Base
from app.database.session import engine

import app.database.models

Base.metadata.create_all(bind=engine)