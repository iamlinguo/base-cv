from flask import make_response, jsonify, request, render_template
from app.api import api
from flask_cors import CORS, cross_origin
from app.api.face.detection import detection
from app.api.face.recognition import recognition


@api.route('/check')
def check():
    return render_template("face_check.html")


@api.route('/v1.0/check/', methods=['POST'])
@cross_origin()
def check_v1():
    file = request.files.get('file')
    orginfilename = file.filename
    detectionfilename = orginfilename.split(".")[0] + "detection" + "." + orginfilename.split(".")[1]
    if file:
        file.save('app/static/face/' + orginfilename)
        result = detection('app/static/face/' + orginfilename,
                           "app/static/face/" + detectionfilename)
        if (result):
            return 'http://localhost:5000/face/' + orginfilename + "," + result
        return 'http://localhost:5000/face/' + orginfilename + "," + 'http://localhost:5000/face/' + detectionfilename
    else:
        return '上传失败，未选择文件'


@api.route('/search')
def search():
    return render_template("face_search.html")


@api.route('/v1.0/search/', methods=['POST'])
@cross_origin()
def search_v1():
    file = request.files.get('file')
    orginfilename = file.filename
    if file:
        file.save('app/static/face/' + orginfilename)
        result = recognition('app/static/face/' + orginfilename)
        if (result == "unknow"):
            return 'http://localhost:5000/face/' + orginfilename + ",人脸库找不到"
        return 'http://localhost:5000/face/' + orginfilename + "," + 'http://localhost:5000/faceLibrary/' + result + ".jpg"
    else:
        return '上传失败，未选择文件'
