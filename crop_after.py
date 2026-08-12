import os
import glob
from PIL import Image

upload_dir = r"C:\Users\Ahana\.gemini\antigravity\brain\27fcdb2c-af03-4460-a336-245889a152cb\.user_uploaded"
files = glob.glob(os.path.join(upload_dir, "*.*"))
files.sort(key=os.path.getmtime, reverse=True)

# Get the 3 newest image files (excluding the canvas/screenshots which are usually the very newest)
# Wait, let's just get the 3 newest images that match .png or .jpg
img_files = [f for f in files if f.endswith('.jpg') or f.endswith('.png')]

# The very newest might be the screenshot from the user's browser, let's skip it if it's a huge PNG
# Actually, the user attached 4 things in the prompt? No, 3 images of teeth, 1 screenshot of browser.
# So the 4 newest files. Let's find the ones that are square or close to square. The screenshot is 16:9.
target_files = []
for f in img_files[:5]:
    try:
        img = Image.open(f)
        w, h = img.size
        # The teeth images are square-ish
        if 0.8 < w/h < 1.2:
            target_files.append(f)
    except Exception:
        pass

target_files = target_files[:3]
print(f"Found target files: {target_files}")

outputs = [
    r"C:\Users\Ahana\.gemini\antigravity\scratch\bonafide-dental\public\collage_1.jpg",
    r"C:\Users\Ahana\.gemini\antigravity\scratch\bonafide-dental\public\collage_2.jpg",
    r"C:\Users\Ahana\.gemini\antigravity\scratch\bonafide-dental\public\collage_3.jpg"
]

for in_path, out_path in zip(target_files, outputs):
    try:
        img = Image.open(in_path)
        w, h = img.size
        # Crop the bottom half
        cropped = img.crop((0, int(h * 0.52), w, int(h * 0.98))) 
        if cropped.mode == "RGBA":
            cropped = cropped.convert("RGB")
        cropped.save(out_path, "JPEG", quality=95)
        print(f"Saved {out_path}")
    except Exception as e:
        print(f"Error on {in_path}: {e}")
