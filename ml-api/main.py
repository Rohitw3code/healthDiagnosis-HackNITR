from flask import Flask,request,jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import cv2
import tensorflow as tf

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


skinCancerModel = tf.keras.models.load_model('models/skin_cancer_cn')
@app.route('/api/skin-cancer-clf',methods=['GET','POST'])
def skinCancer():
    if request.method == 'POST':
        print("data : ",request.json)
        user_img = cv2.imread("skincancer.jpg")
        user_img = cv2.resize(user_img,(250,250))
        pred = skinCancerModel.predict(np.expand_dims(user_img,axis=0))
        index = np.argmax(pred)
        cancer_type = ['akiec','bcc','bkl','df','mel','nv','vasc'] 
        return {'output':cancer_type[index]}
    return jsonify({"message":["get request performed"]})


boneclasses = ['Avulsion fracture', 'Comminuted fracture', 'Fracture Dislocation', 'Greenstick fracture', 'Hairline Fracture', 'Impacted fracture', 'Longitudinal fracture', 'Oblique fracture', 'Pathological fracture', 'Spiral Fracture']
@app.route('/api/bone-break-clf',methods=['GET','POST'])
def boneBreak():
    if request.method == 'POST':
        user_img = cv2.imread("file")
        idx = np.argmax(np.expand_dims(cv2.resize(user_img,(256,256)),axis=0))
        return {"output":boneclasses[idx]}
    return jsonify({"message":["get request performed"]})




@app.route('/',methods=['GET'])
def start():
    return "welcome!"


if __name__ == "__main__":
    app.run(debug=True,port=5001)