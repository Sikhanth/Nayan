from math import dist

Point = tuple[int, int]


class EARCalculator:
    """
    Calculates the Eye Aspect Ratio (EAR).

    EAR is a geometric measure used to estimate whether an eye is
    open or closed. A lower EAR generally indicates a blink or
    closed eye.
    """

    @staticmethod
    def _distance(point1: Point, point2: Point) -> float:
        """
        Calculate the Euclidean distance between two points.
        """
        return dist(point1, point2)

    @classmethod
    def calculate(cls, eye_points: list[Point]) -> float:
        """
        Calculate the Eye Aspect Ratio (EAR).

        Expected landmark order:

            p1 ---- p4
           /         \
         p2           p6
         |             |
         p3           p5

        Formula:
            EAR = (||p2-p6|| + ||p3-p5||) / (2 * ||p1-p4||)
        """

        if len(eye_points) != 6:
            raise ValueError(
                f"Expected 6 eye landmarks, received {len(eye_points)}."
            )

        p1, p2, p3, p4, p5, p6 = eye_points

        vertical_1 = cls._distance(p2, p6)
        vertical_2 = cls._distance(p3, p5)
        horizontal = cls._distance(p1, p4)

        if horizontal == 0:
            return 0.0

        return (vertical_1 + vertical_2) / (2.0 * horizontal)