import os
import glob
from PIL import Image

upload_dir = r"C:\Users\Ahana\.gemini\antigravity\brain\27fcdb2c-af03-4460-a336-245889a152cb\.user_uploaded"
files = glob.glob(os.path.join(upload_dir, "*.*"))
files.sort(key=os.path.getmtime, reverse=True)

img_files = [f for f in files if f.endswith('.jpg') or f.endswith('.png')]

# Get the 4 most recent images
target_files = img_files[:4]
print(f"Target files: {target_files}")

public_dir = r"C:\Users\Ahana\.gemini\antigravity\scratch\bonafide-dental\public"

for i, in_path in enumerate(target_files):
    try:
        img = Image.open(in_path)
        w, h = img.size
        
        # Save uncropped for the hero section (just the first two)
        if i == 0:
            img.save(os.path.join(public_dir, "hero_ba_1.jpg"), "JPEG", quality=95)
        elif i == 1:
            img.save(os.path.join(public_dir, "hero_ba_2.png"), "JPEG", quality=95)
            
        # Top half is BEFORE
        before = img.crop((0, 0, w, int(h * 0.49)))
        # Bottom half is AFTER
        after = img.crop((0, int(h * 0.51), w, h))
        
        if before.mode == "RGBA":
            before = before.convert("RGB")
        if after.mode == "RGBA":
            after = after.convert("RGB")
            
        before.save(os.path.join(public_dir, f"slider_{i+1}_before.jpg"), "JPEG", quality=95)
        after.save(os.path.join(public_dir, f"slider_{i+1}_after.jpg"), "JPEG", quality=95)
        print(f"Processed {in_path} into slider_{i+1}_before and after.")
    except Exception as e:
        print(f"Error on {in_path}: {e}")
