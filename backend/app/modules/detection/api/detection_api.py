from fastapi import APIRouter

from app.modules.detection.schemas.detection_schema import (
    DetectionRequest,
    DetectionResponse,
)
from app.modules.detection.services.detection_service import DetectionService

router = APIRouter()

detection_service = DetectionService()


@router.post(
    "/detect",
    response_model=DetectionResponse,
    summary="Detect eye metrics from an image",
)
def detect(request: DetectionRequest):
    return detection_service.detect(request)
