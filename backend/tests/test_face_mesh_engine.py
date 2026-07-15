import cv2

from app.cv_engine.face_mesh import FaceMeshEngine


def main():
    engine = FaceMeshEngine()

    cap = cv2.VideoCapture(0)

    while True:
        success, frame = cap.read()

        if not success:
            print("Failed to read frame.")
            break

        results = engine.process(frame)

        if results.multi_face_landmarks:
            print("Face detected")

        cv2.imshow("FaceMeshEngine Test", frame)

        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

    engine.close()
    cap.release()
    cv2.destroyAllWindows()


if __name__ == "__main__":
    main()