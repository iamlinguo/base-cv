# coding=utf-8
# 图片人脸检测 - Dlib版本
import cv2
import dlib


def detection(path, detectionFilePath):
    img = cv2.imread(path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # 人脸分类器
    detector = dlib.get_frontal_face_detector()
    # 获取人脸检测器
    predictor = dlib.shape_predictor(
        "C:\\Python36\\Lib\\site-packages\\dlib-data\\shape_predictor_68_face_landmarks.dat"
    )

    dets = detector(gray, 1)
    if(len(dets) <=0):
        return "检测不到人脸"
    for face in dets:
        # 在图片中标注人脸，并显示
        shape = predictor(img, face)  # 寻找人脸的68个标定点
        # 遍历所有点，打印出其坐标，并圈出来
        for pt in shape.parts():
            pt_pos = (pt.x, pt.y)
            cv2.circle(img, pt_pos, 1, (0, 255, 0), 2)
        cv2.imshow("image", img)
    cv2.imwrite(detectionFilePath, img)
