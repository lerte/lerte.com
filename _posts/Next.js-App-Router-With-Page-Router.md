---
date: '2023-07-27'
title: 'Next.js App Router 和 Pages Router对比'
description: ''
---

### 基本对比

| Feature                           | App Router | Pages Router |
| --------------------------------- | :--------: | -----------: |
| 路由类型                          |   服务端   |     浏览器端 |
| 支持服务端组件(Server Components) |     是     |           否 |
| 复杂度                            |    复杂    |         简单 |
| 性能                              |     好     |           差 |
| 自由度                            |   更灵活   |         一般 |

> 需要注意的是，在App Router模式下，[所有的组件默认都是服务端组件(Server Components)](https://nextjs.org/docs/getting-started/react-essentials)，你可以指定为客户端组件，需要使用'use client'指令

`To make the transition to Server Components easier, all components inside the App Router are Server Components by default, including special files and colocated components. This allows you to automatically adopt them with no extra work, and achieve great performance out of the box. You can also optionally opt-in to Client Components using the 'use client' directive.`

### 从pages迁移到app

- 创建一个根布局文件 app/layout.tsx
  > 这个layout替换了之前的 pages/\_app.tsx和 pages/\_document.tsx文件

```tsx
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### 什么时候用服务端/客户端组件?

| 你需要做什么?                                                      | 服务端组件 | 客户端组件 |
| ------------------------------------------------------------------ | :--------: | :--------: |
| 请求数据                                                           |     ✅     |     ❌     |
| 访问后端资源(直接的)                                               |     ✅     |     ❌     |
| 将敏感信息保存在服务器上(access token, api密钥等)                  |     ✅     |     ❌     |
| 比较大的依赖放在服务端/减小客户端打包的大小                        |     ✅     |     ❌     |
| 添加交互和事件监听                                                 |     ❌     |     ✅     |
| 使用hooks 和生命周期 (useState, useReducer, useEffect等)           |     ❌     |     ✅     |
| 使用浏览器仅有的APIs                                               |     ❌     |     ✅     |
| 使用自定义的hooks,而且依赖了state,effects或浏览器仅有的APIs        |     ❌     |     ✅     |
| 使用[React Class组件](https://react.dev/reference/react/Component) |     ❌     |     ✅     |
