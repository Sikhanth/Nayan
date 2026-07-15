from app.cv_engine.ear import EARCalculator


def main():

    open_eye = [
        (0, 0),
        (2, -2),
        (4, -2),
        (10, 0),
        (4, 2),
        (2, 2),
    ]

    closed_eye = [
        (0, 0),
        (3, 0),
        (4, 0),
        (10, 0),
        (4, 0),
        (3, 0),
    ]

    open_ear = EARCalculator.calculate(open_eye)
    closed_ear = EARCalculator.calculate(closed_eye)

    print("Open eye EAR:", open_ear)
    print("Closed eye EAR:", closed_ear)


if __name__ == "__main__":
    main()