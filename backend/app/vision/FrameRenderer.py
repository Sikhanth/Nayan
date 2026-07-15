import cv2

from app.cv_engine.types import EyeLandmarks


class Drawing:
    """
    Handles drawing computer vision overlays.
    """

    @staticmethod
    def draw_eye_landmarks(frame, eye_landmarks: EyeLandmarks):
        """
        Draw eye landmark points on the frame.
        """

        for x, y in eye_landmarks.left_eye:
            cv2.circle(frame, (x, y), 2, (0, 255, 0), -1)

        for x, y in eye_landmarks.right_eye:
            cv2.circle(frame, (x, y), 2, (0, 255, 0), -1)