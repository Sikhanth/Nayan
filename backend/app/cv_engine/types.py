from dataclasses import dataclass

Point = tuple[int, int]


@dataclass
class EyeLandmarks:
    """
    Stores the pixel coordinates of the detected eye landmarks.

    Attributes:
        left_eye: Six landmark points for the left eye.
        right_eye: Six landmark points for the right eye.
    """

    left_eye: list[Point]
    right_eye: list[Point]