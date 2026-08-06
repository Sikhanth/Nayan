from time import time


class SessionTracker:
    """
    Tracks the duration of the current monitoring session.
    """

    def __init__(self):
        self.start_time = None

    def start(self) -> None:
        """
        Start a new monitoring session.
        """
        self.start_time = time()

    def get_duration(self) -> int:
        """
        Returns the session duration in seconds.
        """
        if self.start_time is None:
            return 0

        return int(time() - self.start_time)

    def reset(self) -> None:
        """
        Reset the session.
        """
        self.start_time = time()