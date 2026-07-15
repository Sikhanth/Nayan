import time

from app.cv_engine.blink_rate import BlinkRateTracker


def main():
    tracker = BlinkRateTracker(window_seconds=10)

    print("Recording blinks...")

    tracker.record_blink()
    time.sleep(1)

    tracker.record_blink()
    time.sleep(1)

    tracker.record_blink()

    print("Blink Rate:", tracker.get_blink_rate())

    print("Waiting...")

    time.sleep(11)

    print("Blink Rate:", tracker.get_blink_rate())


if __name__ == "__main__":
    main()