import os
from PIL import Image

SRC = os.path.join(os.path.dirname(__file__), "cards_src")
OUT = os.path.join(os.path.dirname(__file__), "cards")
os.makedirs(OUT, exist_ok=True)

TARGET_W = 520
total = 0
for i in range(22):
    name = f"{i:02d}.jpg"
    src = os.path.join(SRC, name)
    img = Image.open(src).convert("RGB")
    w, h = img.size
    nh = int(h * TARGET_W / w)
    img = img.resize((TARGET_W, nh), Image.LANCZOS)
    dst = os.path.join(OUT, name)
    img.save(dst, "JPEG", quality=82, optimize=True, progressive=True)
    sz = os.path.getsize(dst)
    total += sz
    print(f"{name}: {TARGET_W}x{nh}  {sz//1024} KB")
print(f"TOTAL: {total//1024} KB")
