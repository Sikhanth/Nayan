from app.cv_engine.blink_detector import BlinkDetector


def main():
    detector = BlinkDetector()

    ear_values = [
        0.30,
        0.29,
        0.31,
        0.15,
        0.14,
        0.16,
        0.30,
        0.31,
        0.29,
    ]

    for ear in ear_values:
        if detector.update(ear):
            print("Blink detected!")

    print("Total Blinks:", detector.get_blink_count())


if __name__ == "__main__":
    main()