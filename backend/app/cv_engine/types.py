from dataclasses import dataclass


@dataclass
class EyeLandmarks:
    """
    Stores the extracted eye landmark coordinates.
    """

    left_eye: list[tuple[int, int]]
    right_eye: list[tuple[int, int]]