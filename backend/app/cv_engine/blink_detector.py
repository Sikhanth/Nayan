class BlinkDetector:
    """
    Detects eye blinks using Eye Aspect Ratio (EAR).
    """

    def __init__(
        self,
        ear_threshold: float = 0.20,
        min_closed_frames: int = 2,
    ):
        self.ear_threshold = ear_threshold
        self.min_closed_frames = min_closed_frames

        self.blink_count = 0
        self.closed_frames = 0

    def update(self, ear: float) -> bool:
        """
        Update detector with the latest EAR value.

        Args:
            ear: Current Eye Aspect Ratio.

        Returns:
            True if a blink is detected, otherwise False.
        """

        # Eye is closed
        if ear < self.ear_threshold:
            self.closed_frames += 1
            return False

        # Eye has reopened after being closed
        if self.closed_frames >= self.min_closed_frames:
            self.blink_count += 1
            self.closed_frames = 0
            return True

        # Reset if it wasn't a valid blink
        self.closed_frames = 0
        return False

    def get_blink_count(self) -> int:
        """
        Returns the total blink count.
        """
        return self.blink_count

    def reset(self) -> None:
        """
        Reset detector state.
        """
        self.blink_count = 0
        self.closed_frames = 0