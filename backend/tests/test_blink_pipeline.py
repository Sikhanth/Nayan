import cv2

from app.cv_engine.eye_monitor import EyeMonitor

from app.vision.webcam import Webcam
from app.vision.FrameRenderer import Drawing


def main():
    webcam = Webcam()
    monitor = EyeMonitor()

    webcam.start()

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

        cv2.imshow("Nayan - Blink Detection", frame)

        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

    monitor.close()
    webcam.stop()


if __name__ == "__main__":
    main()