class FatigueAnalyzer:
    """
    Detects sustained low blink rate using 60-second windows.

    Rules:
    - Count actual blinks during each 60-second window.
    - Less than 8 blinks in a window = risk.
    - 3 consecutive risk windows = break reminder.
    - After a reminder, wait 10 minutes before another reminder.
    """

    WINDOW_SECONDS = 60
    BLINK_THRESHOLD = 8
    REQUIRED_RISK_WINDOWS = 3
    COOLDOWN_SECONDS = 10 * 60

    def __init__(self):
        self.window_blink_count = 0
        self.last_processed_window = 0
        self.consecutive_risk_windows = 0
        self.cooldown_until = 0

    def update(
        self,
        blink_detected: bool,
        session_duration: int,
    ) -> bool:

        # Count actual blink events
        if blink_detected:
            self.window_blink_count += 1

        # Find current 60-second window
        current_window = (
            session_duration // self.WINDOW_SECONDS
        )

        # First minute is not complete yet
        if current_window == 0:
            return False

        # Don't process the same window twice
        if current_window == self.last_processed_window:
            return False

        # Process completed window
        self.last_processed_window = current_window

        blink_count = self.window_blink_count

        # Reset for next minute
        self.window_blink_count = 0

        # Check risk
        if blink_count < self.BLINK_THRESHOLD:
            self.consecutive_risk_windows += 1

            print(
                f"Risk window: {blink_count} blinks/min"
            )

        else:
            self.consecutive_risk_windows = 0

            print(
                f"Normal window: {blink_count} blinks/min"
            )

        # Check cooldown
        in_cooldown = (
            session_duration < self.cooldown_until
        )

        if in_cooldown:
            print("Fatigue alert is in cooldown.")
            return False

        # Three consecutive risky windows
        if (
            self.consecutive_risk_windows
            >= self.REQUIRED_RISK_WINDOWS
        ):
            print(
                "Fatigue-risk detected: "
                "3 consecutive low-blink windows"
            )

            # Start 10-minute cooldown
            self.cooldown_until = (
                session_duration
                + self.COOLDOWN_SECONDS
            )

            # Reset consecutive risk counter
            self.consecutive_risk_windows = 0

            return True

        return False

    def analyze(
        self,
        blink_rate: float,
        average_ear: float,
        session_duration: int,
        fatigue_alert: bool = False,
    ) -> tuple[str, str, int]:

        fatigue_level = "Low"
        eye_status = "Healthy"
        health_score = 100

        if fatigue_alert:
            fatigue_level = "High"
            eye_status = "Fatigue Risk"
            health_score = 40

        if average_ear < 0.18:
            fatigue_level = "High"
            eye_status = "Eyes Closed"
            health_score = min(
                health_score,
                50,
            )

        return (
            fatigue_level,
            eye_status,
            health_score,
        )

    def reset(self):
        self.window_blink_count = 0
        self.last_processed_window = 0
        self.consecutive_risk_windows = 0
        self.cooldown_until = 0