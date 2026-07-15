import cv2


class Webcam:
    """
    Handles webcam initialization and frame capture.
    """

    def __init__(self, camera_index: int = 0):
        self.camera_index = camera_index
        self.cap = None

    def start(self):
        """
        Open the webcam.
        """
        self.cap = cv2.VideoCapture(self.camera_index)

        if not self.cap.isOpened():
            raise RuntimeError("Failed to open webcam.")

    def read_frame(self):
        """
        Read a single frame from the webcam.

        Returns:
            tuple(bool, frame)
        """
        if self.cap is None:
            raise RuntimeError("Webcam has not been started.")

        return self.cap.read()

    def stop(self):
        """
        Release the webcam.
        """
        if self.cap is not None:
            self.cap.release()

        cv2.destroyAllWindows()