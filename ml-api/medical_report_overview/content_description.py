# content_description.py
import os
from google_generativeai import GeminiClient

def describe_image(image_path):
    """
    Describes the content of an image using the Google Gemini API.

    Args:
        image_path (str): Path to the image file.

    Returns:
        str: Description of the image content.
    """
    try:
        # Describe content using Google API
        prompt = "What is in the image?"
        response = GeminiClient.generate_content(prompt, image_path=image_path)

        # Extract the description
        description = response.text
        return description
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    image_path = "path/to/your/image.jpg"  # Replace with the actual image path
    description = describe_image(image_path)
    print(f"Image description: {description}")
