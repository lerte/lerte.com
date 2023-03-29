import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head />
      <body className="bg-white text-neutral-500 antialiased dark:bg-neutral-900 dark:text-neutral-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
