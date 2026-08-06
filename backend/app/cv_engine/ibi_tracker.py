from time import time


class IBITracker:
    """
    Tracks the Inter-Blink Interval (IBI).
    """

    def __init__(self):
        self.last_blink_time = None
        self.intervals = []

    def record_blink(self):
        """
        Record a blink and calculate the interval
        from the previous blink.
        """
        current_time = time()

        if self.last_blink_time is not None:
            interval = current_time - self.last_blink_time
            self.intervals.append(interval)

        self.last_blink_time = current_time

    def get_average_ibi(self) -> float:
        """
        Returns the average inter-blink interval.
        """
        if not self.intervals:
            return 0.0

        return round(
            sum(self.intervals) / len(self.intervals),
            2,
        )

    def reset(self):
        """
        Reset the tracker.
        """
        self.last_blink_time = None
        self.intervals.clear()