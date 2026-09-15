import base64
import cv2
import numpy as np

from app.cv_engine.eye_monitor import EyeMonitor

from app.modules.detection.schemas.detection_schema import (
    DetectionRequest,
    DetectionResponse,
)


class DetectionService:

    def __init__(self):
        self.eye_monitor = EyeMonitor()

    def detect(
        self,
        request: DetectionRequest,
    ) -> DetectionResponse:
        """
        Decode the image and process one webcam frame.
        """

        image_data = request.image

        if "," in image_data:
            image_data = image_data.split(",")[1]

        image_bytes = base64.b64decode(image_data)

        image_np = np.frombuffer(
            image_bytes,
            np.uint8,
        )

        frame = cv2.imdecode(
            image_np,
            cv2.IMREAD_COLOR,
        )

        if frame is None:
            raise ValueError(
                "Unable to decode image."
            )

        metrics = self.eye_monitor.process(frame)

        return DetectionResponse(
            blink_detected=metrics.blink_detected,
            blink_count=metrics.blink_count,
            blink_rate=metrics.blink_rate,
            ear=metrics.ear,
            average_ibi=metrics.average_ibi,
            session_duration=metrics.session_duration,
            health_score=metrics.health_score,
            eye_status=metrics.eye_status,
            fatigue_level=metrics.fatigue_level,
        )