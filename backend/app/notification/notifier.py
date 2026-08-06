from pathlib import Path
import winsound
from tkinter import Tk, messagebox


class Notifier:
    """
    Plays an alert sound and displays a popup notification.
    """

    def __init__(self):
        self.sound_path = (
            Path(__file__).parent.parent
            / "assets"
            / "beep.wav"
        )

    def alert(
        self,
        title="Nayan Alert",
        message="Please blink your eyes and take a short break.",
    ):
        # Play beep sound
        if self.sound_path.exists():
            winsound.PlaySound(
                str(self.sound_path),
                winsound.SND_FILENAME | winsound.SND_ASYNC,
            )

        # Show popup
        root = Tk()
        root.withdraw()

        messagebox.showwarning(
            title,
            message,
        )

        root.destroy()