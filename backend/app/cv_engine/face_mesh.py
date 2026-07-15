import cv2
import mediapipe as mp


class FaceMeshEngine:
    """
    Handles MediaPipe Face Mesh initialization and face landmark detection.
    """

    def __init__(self):
        self.mp_face_mesh = mp.solutions.face_mesh

        self.face_mesh = self.mp_face_mesh.FaceMesh(
            max_num_faces=1,
            refine_landmarks=True,
            min_detection_confidence=0.5,
            min_tracking_confidence=0.5,
        )

    def process(self, frame):
        """
        Process an OpenCV frame and return MediaPipe FaceMesh results.
        """
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        return self.face_mesh.process(rgb_frame)

    def close(self):
        """
        Release MediaPipe resources.
        """
        self.face_mesh.close()