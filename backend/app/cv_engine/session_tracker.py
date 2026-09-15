from time import time


class SessionTracker:
    """
    Tracks the current eye monitoring session.

    The tracker is only responsible for:
    - Starting a session
    - Stopping a session
    - Calculating session duration

    Break reminders are handled separately
    by the FatigueAnalyzer using blink behavior.
    """

    def __init__(self):
        self.start_time: float | None = None
        self.end_time: float | None = None
        self.is_running = False

    def start(self) -> None:
        """
        Start a new monitoring session.
        """

        self.start_time = time()
        self.end_time = None
        self.is_running = True

    def stop(self) -> None:
        """
        Stop the current monitoring session.
        """

        if self.is_running:
            self.end_time = time()
            self.is_running = False

    def get_duration(self) -> int:
        """
        Return session duration in seconds.
        """

        if self.start_time is None:
            return 0

        if self.is_running:
            return int(time() - self.start_time)

        if self.end_time is not None:
            return int(
                self.end_time - self.start_time
            )

        return 0

    def reset(self) -> None:
        """
        Reset the session tracker.
        """

        self.start_time = None
        self.end_time = None
        self.is_running = False