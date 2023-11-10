from flask import make_response, jsonify, request, render_template
from app.api import api

from app.api.face.detection import detection


@api.route('/')
def index():
    return render_template("file_upload.html")


@api.route('/v1.0/file_upload/', methods=['POST'])
def file_upload():
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
