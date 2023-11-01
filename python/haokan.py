import os
import time
import requests

# 先实例化一个对象
session = requests.session()

url = 'https://haokan.baidu.com/'

headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
}

session.get(url, headers=headers)

lis = ['影视', '音乐', 'VLOG', '游戏']
lis1 = ['yingshi_new', 'yunying_vlog', 'yunying_vlog', 'youxi_new', ]
"""lis里的名字用于创建文件夹，lis1里的内容是放到url里进行网页的循环爬取
对两个文件进行zip打包，再用遍历取出两个值，用于不同的地方
如果lis和lis1的内容一样，创建的文件夹名字就是里面英文的内容"""
for i, m in zip(lis, lis1):
  data_dir = f'./haokan/{i}'
  os.makedirs(data_dir)
  print(f'{i}文件创建成功')
  url = f'https://haokan.baidu.com/web/video/feed?tab={m}&act=pcFeed&pd=pc&num=40&shuaxin_id=1630038532427'
  headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'}
  res = session.get(url, headers=headers)  # 对url发起请求，获取相应栏目的内容
  html = res.json()['data']['response']['videos']  # .json()以字典的形式呈现网页的内容，对获取的网页内容进行字典取值
  print(html)
  name = 1 # 用于对写入的视频进行计数
  for video in html:  # 遍历取出每一个视频的url# 
    print(video['previewUrlHttp'])# 
    print(video['title'])
    time.sleep(3)  # 每次爬取暂停3秒
    response = requests.get(video['previewUrlHttp'])  # 对每个视频的url发起请求
    title = video['title']  # 取出视频的名字用于保存视频# 
    print(response, title)
    video_path = '{}/{}.mp4'.format(data_dir, title)  # 传入保存文件的路径和名字
    with open(video_path, 'wb') as f:  # 以二进制的形式保存视频，音频，照片
      print(f'正在写入第{name}个视频')
      f.write(response.content)
      name += 1