from app.cv_engine.face_mesh import FaceMeshEngine
from app.cv_engine.eye_landmarks import EyeLandmarkExtractor
from app.cv_engine.ear import EARCalculator
from app.cv_engine.blink_detector import BlinkDetector
from app.cv_engine.blink_rate import BlinkRateTracker
from app.cv_engine.ibi_tracker import IBITracker
from app.cv_engine.eye_metrics import EyeMetrics
from app.cv_engine.session_tracker import SessionTracker
from app.cv_engine.fatigue_analyzer import FatigueAnalyzer


class EyeMonitor:
    """
    Coordinates the complete eye monitoring pipeline.
    """

    def __init__(self):
        self.face_mesh = FaceMeshEngine()

        self.extractor = EyeLandmarkExtractor()

        self.detector = BlinkDetector(
            ear_threshold=0.20,
            min_closed_frames=1,
        )

        self.tracker = BlinkRateTracker()

        self.ibi_tracker = IBITracker()

        self.session_tracker = SessionTracker()

        self.fatigue_analyzer = FatigueAnalyzer()

    def process(self, frame) -> EyeMetrics:
        """
        Process one webcam frame and return eye metrics.
        """

        # --------------------------------
        # 1. Get session duration
        # --------------------------------

        session_duration = (
            self.session_tracker.get_duration()
        )

        # --------------------------------
        # 2. Process face
        # --------------------------------

        results = self.face_mesh.process(frame)

        height, width = frame.shape[:2]

        eye_landmarks = self.extractor.extract(
            results,
            frame_width=width,
            frame_height=height,
        )

        # --------------------------------
        # 3. Face not detected
        # --------------------------------

        if eye_landmarks is None:
            return EyeMetrics(
                session_duration=session_duration,
                eye_status="Face Not Detected",
            )

        # --------------------------------
        # 4. Calculate EAR
        # --------------------------------

        left_ear = EARCalculator.calculate(
            eye_landmarks.left_eye
        )

        right_ear = EARCalculator.calculate(
            eye_landmarks.right_eye
        )

        ear = (left_ear + right_ear) / 2

        # --------------------------------
        # 5. Detect blink
        # --------------------------------

        blink_detected = self.detector.update(ear)

        # --------------------------------
        # 6. Record actual blink
        # --------------------------------

        if blink_detected:
            self.tracker.record_blink()
            self.ibi_tracker.record_blink()

        # --------------------------------
        # 7. Get blink metrics
        # --------------------------------

        blink_rate = self.tracker.get_blink_rate()

        average_ibi = (
            self.ibi_tracker.get_average_ibi()
        )

        # --------------------------------
        # 8. Check fatigue-risk window
        # --------------------------------

        fatigue_alert = (
            self.fatigue_analyzer.update(
                blink_detected=blink_detected,
                session_duration=session_duration,
            )
        )

        # --------------------------------
        # 9. Analyze eye condition
        # --------------------------------

        (
            fatigue_level,
            eye_status,
            health_score,
        ) = self.fatigue_analyzer.analyze(
            blink_rate=blink_rate,
            average_ear=ear,
            session_duration=session_duration,
            fatigue_alert=fatigue_alert,
        )

        # --------------------------------
        # 10. Return metrics
        # --------------------------------

        return EyeMetrics(
            ear=round(ear, 3),
            blink_detected=blink_detected,
            blink_count=self.detector.get_blink_count(),
            blink_rate=blink_rate,
            average_ibi=average_ibi,
            session_duration=session_duration,
            fatigue_level=fatigue_level,
            eye_status=eye_status,
            health_score=health_score,
            fatigue_alert=fatigue_alert,
            eye_landmarks=eye_landmarks,
        )

    def start_session(self):
        """
        Start a fresh monitoring session.
        """

        self.tracker.reset()

        self.ibi_tracker.reset()

        self.detector.reset()

        self.session_tracker.start()

        self.fatigue_analyzer.reset()

    def stop_session(self):
        """
        Stop the current monitoring session.
        """

        self.session_tracker.stop()

        self.fatigue_analyzer.reset()

    def close(self):
        """
        Release MediaPipe resources.
        """

        self.face_mesh.close()