from PIL import Image
import numpy as np

# Create a 256x256 image with random grayscale pixels
img_data = np.random.randint(0, 256, (256, 256), dtype=np.uint8)
img = Image.fromarray(img_data, mode='L')
img.save('public/noise.png')
