from flask import Flask, json, render_template, request, make_response, session, redirect, url_for, flash, abort, jsonify, send_file, Response
from mysql.connector.utils import read_bytes
from werkzeug.utils import secure_filename
import os, sys
from DateTime import DateTime
import time
import calendar
from datetime import datetime
import mysql.connector
from flask_cors import CORS
import uuid
import io
import base64
from PIL import Image
import json
import subprocess
# sumber mongodb : https://www.w3schools.com/python/python_mongodb_getstarted.asp

# import datetime

app = Flask(__name__)
CORS(app)
app.secret_key = 'randomterserah'

# upload gambar
app.config['UPLOAD_FOLDER'] = 'static'

# mydb = mysql.connector.connect(
#     host="127.0.0.1",
#     user="root",
#     password="",
#     database="nandapro_seismon"
# )

# biar tidak error saat get data yang kedua dst


@app.route('/', methods=['GET', 'POST'])
def index():
    
    return render_template("index.html")
    
@app.route('/command', methods=['GET', 'POST'])
def command():
    if request.method == 'POST':
        req = request.json
        if req['command'] == 'restart':
            result = os.system("systemctl restart seismon.service")
            # subprocess.check_output("systemctl restart seismon.service", shell=True, text=True, encoding="utf8")
            dat={
                "output":result,
                "success":True if result == "" else False
            }
            
            return dat
        elif req['command'] == 'stop':
            r = os.popen('systemctl stop seismon.service')
            output = r.read()
            print(output)
            # subprocess.check_output("systemctl stop seismon.service", shell=True, text=True, encoding="utf8")
            # result =subprocess.call(("coba.sh"), shell=True, text=True, encoding="utf8")
            dat={
                "output":output
                # "success":True if result == "" else False
            }
            
            return dat
        elif req['command'] == 'start':
            result = os.system("systemctl start seismon.service")
            # result = subprocess.check_output("systemctl start seismon.service", shell=True, text=True, encoding="utf8")
            dat={
                "output":result,
                "success":True if result == "" else False
            }
            
            return dat
        elif req['command'] == 'pull':
            result = os.system("cd ../seismon-server;git pull origin master;systemctl restart seismon.service;cd ../monitoring-seismon;")
            # result = subprocess.check_output("cd ../seismon-server;git pull origin master;systemctl restart seismon.service;cd ../monitoring-seismon;", shell=True, text=True, encoding="utf8")
            dat={
                "output":result,
                "success":True if result != "" else False
            }
            
            return dat
        elif req['command'] == 'status':
            result = os.system("systemctl status seismon.service")
            # result = subprocess.check_output("systemctl status seismon.service", text=True, shell=True)
            dat={
                "output":result,
                "success":True if result != "" else False
            }
            
            return dat
        elif req['command'] == 'manual':
            result = subprocess.check_output(req['text'], text=True, shell=True)
            dat={
                "output":result,
            }
            
            return dat
        elif req['command'] == 'coba':
            result = os.system("ls")
            dat={
                "output":result,
            }
            
            return dat

@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Not Found ' + request.url
    }
    resp = jsonify(message)
    resp.status_code = 404
    return resp


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=4000)
