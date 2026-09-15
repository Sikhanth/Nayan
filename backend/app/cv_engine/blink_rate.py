from collections import deque
from time import time


class BlinkRateTracker:
    """
    Tracks blink rate using a sliding time window.

    The blink rate is reported in blinks per minute (BPM).
    """

    def __init__(self, window_seconds: int = 60):
        self.window_seconds = window_seconds
        self.blink_timestamps = deque()

    def record_blink(self) -> None:
        """
        Record a newly detected blink.
        """
        current_time = time()

        self.blink_timestamps.append(current_time)
        self._remove_old_blinks(current_time)

    def get_blink_rate(self) -> float:
        """
        Return the current blink rate in blinks per minute.
        """
        current_time = time()

        self._remove_old_blinks(current_time)

        return (
            len(self.blink_timestamps)
            * 60
            / self.window_seconds
        )

    def reset(self) -> None:
        """
        Clear all recorded blink history.
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