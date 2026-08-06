import cv2

from app.cv_engine.eye_monitor import EyeMonitor
from app.vision.webcam import Webcam
from app.vision.FrameRenderer import Drawing

from app.database.session import SessionLocal
from app.modules.session.services.session_manager import SessionManager


def main():

    db = SessionLocal()

    session_manager = SessionManager(db)
    session_manager.start()

    webcam = Webcam()
    monitor = EyeMonitor()

    webcam.start()

    metrics = None

    while True:

        success, frame = webcam.read_frame()

        if not success:
            break

        metrics = monitor.process(frame)

        if metrics.eye_landmarks:

            Drawing.draw_eye_landmarks(
                frame,
                metrics.eye_landmarks,
            )

            cv2.putText(
                frame,
                f"EAR: {metrics.ear:.3f}",
                (20, 40),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.8,
                (0, 255, 0),
                2,
            )

            cv2.putText(
                frame,
                f"Blinks: {metrics.blink_count}",
                (20, 80),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.8,
                (0, 255, 0),
                2,
            )

            cv2.putText(
                frame,
                f"Blink Rate: {metrics.blink_rate}/min",
                (20, 120),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.8,
                (0, 255, 0),
                2,
            )

            cv2.putText(
                frame,
                f"Session: {metrics.session_duration}s",
                (20, 160),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.8,
                (0, 255, 0),
                2,
            )

            cv2.putText(
                frame,
                f"Status: {metrics.health_status}",
                (20, 200),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.8,
                (0, 255, 0),
                2,
            )

            cv2.putText(
                frame,
                f"Score: {metrics.health_score}",
                (20, 240),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.8,
                (0, 255, 0),
                2,
            )

        cv2.imshow(
            "Nayan - Blink Detection",
            frame,
        )

        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

    if metrics is not None:
        session_manager.finish(metrics)

    monitor.close()
    webcam.stop()

    db.close()

    cv2.destroyAllWindows()


if __name__ == "__main__":
    main()