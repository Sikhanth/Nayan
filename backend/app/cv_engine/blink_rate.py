from collections import deque
from time import time


class BlinkRateTracker:
    """
    Tracks blink rate using a sliding time window.
    """

    def __init__(self, window_seconds: int = 60):
        self.window_seconds = window_seconds
        self.blink_timestamps = deque()

    def record_blink(self) -> None:
        """
        Record a new blink.
        """
        current_time = time()

        self.blink_timestamps.append(current_time)

        self._remove_old_blinks(current_time)

    def get_blink_rate(self) -> int:
        """
        Returns the current blink rate (blinks per minute).
        """
        current_time = time()

        self._remove_old_blinks(current_time)

        return len(self.blink_timestamps)

    def reset(self) -> None:
        """
        Reset blink history.
        """
        self.blink_timestamps.clear()

    def _remove_old_blinks(self, current_time: float) -> None:
        """
        Remove blink timestamps outside the sliding window.
        """
        while (
            self.blink_timestamps
            and current_time - self.blink_timestamps[0] > self.window_seconds
        ):
            self.blink_timestamps.popleft()