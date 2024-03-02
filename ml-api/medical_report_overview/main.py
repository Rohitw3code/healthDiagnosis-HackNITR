# main.py
import tkinter as tk
from tkinter import filedialog
from dotenv import load_dotenv
from google_generativeai import GeminiClient

# Load environment variables
load_dotenv()

def upload_image():
    file_path = filedialog.askopenfilename()

    # Describe content using Google API
    prompt = "What is in the image?"
    response = GeminiClient.generate_content(prompt, image_path=file_path)

    # Print the description
    print(response.text)

# Create a simple GUI
root = tk.Tk()
root.title("Image Uploader")
upload_button = tk.Button(root, text="Upload Image", command=upload_image)
upload_button.pack()

root.mainloop()
