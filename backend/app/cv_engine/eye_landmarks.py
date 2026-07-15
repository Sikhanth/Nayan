from app.cv_engine.types import EyeLandmarks


class EyeLandmarkExtractor:
    """
    Extracts left and right eye landmarks from MediaPipe FaceMesh results.
    """

    LEFT_EYE_INDICES = [33, 160, 158, 133, 153, 144]
    RIGHT_EYE_INDICES = [362, 385, 387, 263, 373, 380]

    def extract(
        self,
        results,
        frame_width: int,
        frame_height: int,
    ) -> EyeLandmarks | None:
        """
        Extract eye landmark pixel coordinates.

        Args:
            results: MediaPipe FaceMesh results.
            frame_width: Width of the frame.
            frame_height: Height of the frame.

        Returns:
            EyeLandmarks | None
        """
        if not results.multi_face_landmarks:
            return None

        face_landmarks = results.multi_face_landmarks[0]

        left_eye = []
        right_eye = []

        for idx in self.LEFT_EYE_INDICES:
            landmark = face_landmarks.landmark[idx]
            x = int(landmark.x * frame_width)
            y = int(landmark.y * frame_height)
            left_eye.append((x, y))

        for idx in self.RIGHT_EYE_INDICES:
            landmark = face_landmarks.landmark[idx]
            x = int(landmark.x * frame_width)
            y = int(landmark.y * frame_height)
            right_eye.append((x, y))

        return EyeLandmarks(
            left_eye=left_eye,
            right_eye=right_eye,
        )