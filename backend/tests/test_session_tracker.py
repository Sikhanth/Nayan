import time

from app.cv_engine.session_tracker import SessionTracker


def main():
    tracker = SessionTracker()

    tracker.start()

    print("Session started...")

    time.sleep(5)

    print("Duration:", tracker.get_duration(), "seconds")


if __name__ == "__main__":
    main()