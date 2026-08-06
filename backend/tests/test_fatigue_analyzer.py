from app.cv_engine.fatigue_analyzer import FatigueAnalyzer


def main():
    analyzer = FatigueAnalyzer()

    examples = [
        (15, 300),    # 5 minutes
        (12, 1800),   # 30 minutes
        (7, 600),     # Warning
        (3, 600),     # Fatigue Risk
    ]

    for blink_rate, duration in examples:
        status, score = analyzer.analyze(
            blink_rate,
            duration,
        )

        print(
            f"Blink Rate: {blink_rate}/min | "
            f"Session: {duration}s | "
            f"Status: {status} | "
            f"Score: {score}"
        )


if __name__ == "__main__":
    main()