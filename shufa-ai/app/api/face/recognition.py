# coding=utf-8
# 人脸识别类 - 使用face_recognition模块
import cv2
import face_recognition
import os


def recognition(path_unknow):
    path_know = "app/static/faceLibrary"  # 模型数据图片目录
    know = {}
    for path in os.listdir(path_know):  # 建立已知人的面部特征字典库
        img = face_recognition.load_image_file(path_know + '/' + path)
        encoding = face_recognition.face_encodings(img)[0]
        name = path.split('.')[0]
        know[name] = encoding

    match = {}
    img = face_recognition.load_image_file(path_unknow)
    encoding = face_recognition.face_encodings(img)[0]  # 获取未知人的面部特征
    name = path_unknow.split('.')[0].split("/")[3]
    match[name] = 'unknow'
    for key, value in know.items():
        print(face_recognition.compare_faces([value], encoding)[0])
        if face_recognition.compare_faces([value], encoding,tolerance=0.35)[0]:  # 与库里的特征进行比对
            match[name] = key
    print(match)
    return match[name]
