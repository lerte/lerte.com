---
date: '2023-07-27'
title: 'Next.js App Router With Page Router'
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
