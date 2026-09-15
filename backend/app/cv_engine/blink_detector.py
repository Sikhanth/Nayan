class BlinkDetector:
    """
    Detects eye blinks using the Eye Aspect Ratio (EAR).

    A blink is counted when:
    1. EAR stays below the threshold for a minimum number of frames.
    2. The eye then reopens.
    """

    def __init__(
        self,
        ear_threshold: float = 0.20,
        min_closed_frames: int = 1,
    ):
        self.ear_threshold = ear_threshold
        self.min_closed_frames = min_closed_frames

        self.blink_count = 0
        self.closed_frames = 0
        self.eye_closed = False

    def update(self, ear: float) -> bool:
        """
        Update the detector with the latest EAR value.

        Args:
            ear: Current Eye Aspect Ratio.

        Returns:
            True if a blink is detected, otherwise False.
        """

        # Eye is closed
        if ear < self.ear_threshold:
            self.closed_frames += 1
            self.eye_closed = True
            return False

        # Eye has reopened
        if self.eye_closed:
            blink_detected = self.closed_frames >= self.min_closed_frames

            if blink_detected:
                self.blink_count += 1

            self.closed_frames = 0
            self.eye_closed = False

            return blink_detected

        return False

    def get_blink_count(self) -> int:
        """
        Return the total number of detected blinks.
        """
        return self.blink_count

    def reset(self) -> None:
        """
        Reset the detector state.
        """
        self.blink_count = 0
        self.closed_frames = 0
        self.eye_closed = False