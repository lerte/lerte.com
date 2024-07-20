import React from 'react'

const Page: React.FC = () => {
  return (
    <div className="py-10 h-full mx-auto max-w-4xl flex flex-col md:flex-row gap-2 items-center justify-between">
      {/* <div className="space-y-2">
        <img
          className="w-60"
          alt="程序员Lerte公众号"
          src="https://open.weixin.qq.com/qr/code?username=actify"
        />
        <p className="text-center text-4xl font-bold">微信公众号</p>
      </div> */}

      <a
        target="_blank"
        className="space-y-2"
        title="点击加入群聊【👨‍💻程序员Lerte】"
        href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=rtGHQpEtcuOIZIUrY1Y6zWo8w9lyceHl&authKey=FYInBX6NE4utvlgNA%2BAP721AAQv1hfZFFv3iwgHcaLgxNRtPAUpQo%2BLtaq%2Bdy4JF&noverify=0&group_code=48601881"
      >
        <img className="w-60" alt="程序员Lerte QQ群" src="/images/qq.jpg" />
        <p className="text-center text-4xl font-bold">
          QQ交流群 <br />
          48601881
        </p>
      </a>

      <a
        target="_blank"
        className="space-y-2"
        href="https://www.douyin.com/user/MS4wLjABAAAApoO1UmVpZ8Z0HnVi90CLugf6XLSY1tDvfCQ7SjL6OOg"
      >
        <img className="w-60" alt="程序员Lerte抖音号" src="/images/dy.png" />
        <p className="text-center text-4xl font-bold">抖音</p>
      </a>
    </div>
  )
}

export default Page
