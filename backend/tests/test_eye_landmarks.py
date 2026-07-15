import cv2

from app.cv_engine.face_mesh import FaceMeshEngine
from app.cv_engine.eye_landmarks import EyeLandmarkExtractor
from app.vision.webcam import Webcam
from backend.app.vision.FrameRenderer import Drawing



def main():
    webcam = Webcam()
    engine = FaceMeshEngine()
    extractor = EyeLandmarkExtractor()

    webcam.start()

    while True:
        success, frame = webcam.read_frame()

        if not success:
            break

        results = engine.process(frame)

        height, width = frame.shape[:2]

        eye_landmarks = extractor.extract(
            results,
            frame_width=width,
            frame_height=height
        )

        if eye_landmarks:
            Drawing.draw_eye_landmarks(frame, eye_landmarks)
            cv2.imshow("Eye Landmark Test", frame)

        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

    engine.close()
    webcam.stop()


if __name__ == "__main__":
    main()