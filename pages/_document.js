import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head />
      <body className="bg-white text-slate-500 antialiased dark:bg-slate-900 dark:text-slate-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
