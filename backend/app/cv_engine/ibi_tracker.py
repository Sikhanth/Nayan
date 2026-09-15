from collections import deque
from time import time


class IBITracker:
    """
    Tracks the Inter-Blink Interval (IBI).

    IBI is the elapsed time between two consecutive blinks.
    """

    def __init__(self, max_intervals: int = 100):
        self.last_blink_time = None
        self.intervals = deque(maxlen=max_intervals)

    def record_blink(self) -> None:
        """
        Record a blink and calculate the interval from
        the previous blink.
        """
        current_time = time()

        if self.last_blink_time is not None:
            interval = current_time - self.last_blink_time
            self.intervals.append(interval)

        self.last_blink_time = current_time

    def get_average_ibi(self) -> float:
        """
        Return the average Inter-Blink Interval in seconds.
        """
        if not self.intervals:
            return 0.0

        return round(
            sum(self.intervals) / len(self.intervals),
            2,
        )

    def reset(self) -> None:
        """
        Reset the tracker.
        """
        self.last_blink_time = None
        self.intervals.clear()