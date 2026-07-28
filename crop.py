from PIL import Image
import sys

img_path = sys.argv[1]
out_path = sys.argv[2]
try:
    img = Image.open(img_path)
    width, height = img.size
    # Crop the bottom 12% to remove the date and time
    cropped_img = img.crop((0, 0, width, int(height * 0.88)))
    cropped_img.save(out_path)
    print(f"Successfully cropped and saved to {out_path}")
except Exception as e:
    print(f"Error: {e}")
