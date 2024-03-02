import tensorflow as tf
import numpy as np
import cv2
user_img = cv2.imread("skincancer.jpg")
user_img = cv2.resize(user_img,(250,250))



loaded_model = tf.keras.models.load_model('models/skin_cancer_cn')

pred = loaded_model.predict(np.expand_dims(user_img,axis=0))

print(pred)