from app.cv_engine.face_mesh import FaceMeshEngine
from app.cv_engine.eye_landmarks import EyeLandmarkExtractor
from app.cv_engine.ear import EARCalculator
from app.cv_engine.blink_detector import BlinkDetector
from app.cv_engine.blink_rate import BlinkRateTracker
from app.cv_engine.eye_metrics import EyeMetrics


class EyeMonitor:
    """
    Coordinates the complete eye monitoring pipeline.
    """

    def __init__(self):
        self.face_mesh = FaceMeshEngine()
        self.extractor = EyeLandmarkExtractor()

        self.detector = BlinkDetector(
            ear_threshold=0.20,
            min_closed_frames=2,
        )

        self.tracker = BlinkRateTracker()

    def process(self, frame) -> EyeMetrics:
        """
        Process a frame and return eye monitoring metrics.
        """

        results = self.face_mesh.process(frame)

        height, width = frame.shape[:2]

        eye_landmarks = self.extractor.extract(
            results,
            frame_width=width,
            frame_height=height,
        )

        if eye_landmarks is None:
            return EyeMetrics()

        left_ear = EARCalculator.calculate(
            eye_landmarks.left_eye
        )

        right_ear = EARCalculator.calculate(
            eye_landmarks.right_eye
        )

        ear = (left_ear + right_ear) / 2

        if self.detector.update(ear):
            self.tracker.record_blink()

        return EyeMetrics(
            ear=ear,
            blink_count=self.detector.get_blink_count(),
            blink_rate=self.tracker.get_blink_rate(),
            eye_landmarks=eye_landmarks,
        )

    def close(self):
        """
        Release MediaPipe resources.
        """
        self.face_mesh.close()