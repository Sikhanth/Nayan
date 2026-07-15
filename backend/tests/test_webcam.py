import cv2

from app.vision.webcam import Webcam


def main():
    webcam = Webcam()
    webcam.start()

    while True:
        success, frame = webcam.read_frame()

        if not success:
            print("Failed to capture frame.")
            break

        cv2.imshow("Webcam Test", frame)

        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

    webcam.stop()


if __name__ == "__main__":
    main()