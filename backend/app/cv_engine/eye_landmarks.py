from app.cv_engine.types import EyeLandmarks


class EyeLandmarkExtractor:
    """
    Extracts left and right eye landmarks from MediaPipe FaceMesh results.
    """

    LEFT_EYE_INDICES = [33, 160, 158, 133, 153, 144]
    RIGHT_EYE_INDICES = [362, 385, 387, 263, 373, 380]

    def _extract_points(self, face_landmarks, indices, frame_width, frame_height):
        """
        Convert normalized MediaPipe landmarks into pixel coordinates.
        """
        points = []

        for idx in indices:
            landmark = face_landmarks.landmark[idx]
            points.append(
                (
                    int(landmark.x * frame_width),
                    int(landmark.y * frame_height),
                )
            )

        return points

    def extract(
        self,
        results,
        frame_width: int,
        frame_height: int,
    ) -> EyeLandmarks | None:
        """
        Extract left and right eye landmarks.

        Args:
            results: MediaPipe FaceMesh results.
            frame_width: Width of the video frame.
            frame_height: Height of the video frame.

        Returns:
            EyeLandmarks if a face is detected, otherwise None.
        """

        if frame_width <= 0 or frame_height <= 0:
            return None

        if not results or not results.multi_face_landmarks:
            return None

        face_landmarks = results.multi_face_landmarks[0]

        left_eye = self._extract_points(
            face_landmarks,
            self.LEFT_EYE_INDICES,
            frame_width,
            frame_height,
        )

        right_eye = self._extract_points(
            face_landmarks,
            self.RIGHT_EYE_INDICES,
            frame_width,
            frame_height,
        )

        return EyeLandmarks(
            left_eye=left_eye,
            right_eye=right_eye,
        )