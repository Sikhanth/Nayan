from math import dist


class EARCalculator:
    """
    Calculates the Eye Aspect Ratio (EAR).
    """

    @staticmethod
    def _distance(point1: tuple[int, int], point2: tuple[int, int]) -> float:
        """
        Calculate the Euclidean distance between two points.
        """
        return dist(point1, point2)

    @classmethod
    def calculate(cls, eye_points: list[tuple[int, int]]) -> float:
        """
        Calculate the Eye Aspect Ratio (EAR).

        The eye_points list must contain six points in the following order:

            p1 ---- p4
           /         \
         p2           p6
         |             |
         p3           p5
        """

        if len(eye_points) != 6:
            raise ValueError("EAR calculation requires exactly 6 eye landmarks.")

        p1, p2, p3, p4, p5, p6 = eye_points

        vertical_1 = cls._distance(p2, p6)
        vertical_2 = cls._distance(p3, p5)
        horizontal = cls._distance(p1, p4)

        if horizontal == 0:
            return 0.0

        return (vertical_1 + vertical_2) / (2.0 * horizontal)