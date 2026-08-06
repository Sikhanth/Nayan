class FatigueAnalyzer:
    """
    Analyzes eye fatigue based on blink rate and session duration.
    """

    def analyze(
        self,
        blink_rate: int,
        session_duration: int,
    ) -> tuple[str, int]:
        """
        Analyze eye health.

        Returns:
            (health_status, health_score)
        """

        session_minutes = session_duration / 60

        if blink_rate < 5:
            return "Fatigue Risk", 40

        if blink_rate < 10:
            return "Warning", 70

        if session_minutes >= 20:
            return "Take Break", 85

        return "Healthy", 100