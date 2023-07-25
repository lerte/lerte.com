import json
import requests
from bs4 import BeautifulSoup
from tqdm import tqdm

# 网页地址
url = 'https://www.midjourney.com/showcase/recent/'

# 请求网页
response = requests.get(url)

# 解析网页内容
soup = BeautifulSoup(response.text, 'lxml')

# 获取所有图片链接
next_data = soup.find(id = '__NEXT_DATA__').get_text()
data = json.loads(next_data)
images = data['props']['pageProps']['jobs']

for image in tqdm(images, desc='Downloading Images'):
	image_url = image['image_paths'][0]
	image_name = image['id']
	image_response = requests.get(image_url, stream=True)
	with open('./images/'+image_name+'.png', 'wb') as f:
		for chunk in image_response.iter_content(chunk_size=1024):
			if chunk:
				f.write(chunk)
