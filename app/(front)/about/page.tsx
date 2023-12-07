import React from 'react'

const Page: React.FC = () => {
  return (
    <div className="py-10 h-full mx-auto max-w-4xl flex flex-col md:flex-row gap-2 items-center justify-between">
      <div className="space-y-2">
        <img
          className="w-60"
          alt="程序员Lerte公众号"
          src="https://open.weixin.qq.com/qr/code?username=actify"
        />
        <p className="text-center text-4xl font-bold">微信公众号</p>
      </div>
      <div className="space-y-2">
        <img className="w-60" alt="程序员Lerte抖音号" src="/dy.png" />
        <p className="text-center text-4xl font-bold">抖音</p>
      </div>
    </div>
  )
}

export default Page
