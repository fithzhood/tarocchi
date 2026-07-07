import os
from PIL import Image

ROOT = os.path.dirname(__file__)
SRC_RWS = os.path.join(ROOT, "cards_src")
BUILD = r"C:\Users\lfili\AppData\Local\Temp\claude\C--Users-lfili-OneDrive\485bad7a-7983-40fb-b047-965398bf1570\scratchpad\build"
OUT = os.path.join(ROOT, "cards")

TARGET_W = 520

# array-index -> source trump number (RWS/soimoi swap Strength<->Justice)
rws_num = {i: i for i in range(22)}
rws_num[8] = 11   # Giustizia -> Justice image 11
rws_num[11] = 8   # Forza     -> Strength image 08

def crop_frame(img, thr=90):
    g = img.convert("L")
    mask = g.point(lambda p: 255 if p < thr else 0)
    bbox = mask.getbbox()
    return img.crop(bbox) if bbox else img

def save(img, deck, idx):
    d = os.path.join(OUT, deck)
    os.makedirs(d, exist_ok=True)
    w, h = img.size
    nh = int(h * TARGET_W / w)
    img = img.resize((TARGET_W, nh), Image.LANCZOS)
    img.save(os.path.join(d, f"{idx:02d}.jpg"), "JPEG", quality=82, optimize=True, progressive=True)
    return os.path.getsize(os.path.join(d, f"{idx:02d}.jpg"))

def build(deck, src_for, crop):
    total = 0
    for idx in range(22):
        img = Image.open(src_for(idx)).convert("RGB")
        if crop:
            img = crop_frame(img)
        total += save(img, deck, idx)
    print(f"{deck}: 22 carte, {total//1024} KB")

build("rws",        lambda i: os.path.join(SRC_RWS, f"{rws_num[i]:02d}.jpg"),          crop=True)
build("marseille",  lambda i: os.path.join(BUILD, "marseille", f"{i:02d}.png"),        crop=True)
build("onirico",    lambda i: os.path.join(BUILD, "soimoi", f"{rws_num[i]:02d}.jpg"),  crop=False)

# remove old flat images (cards/NN.jpg) now replaced by cards/rws/NN.jpg
for i in range(22):
    old = os.path.join(OUT, f"{i:02d}.jpg")
    if os.path.exists(old):
        os.remove(old)
print("cleaned old flat images")
