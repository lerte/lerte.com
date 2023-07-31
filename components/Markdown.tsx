'use client'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { JetBrains_Mono } from 'next/font/google'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('scss', scss)
SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('markdown', markdown)
SyntaxHighlighter.registerLanguage('json', json)

const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400'] })

interface MarkdownProps extends React.ComponentProps<'div'> {
  markdown: string
}

export default function Markdown({ markdown }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      components={{
        pre: ({ children }) => <>{children}</>, // remove pre tag
        code({ inline, className, children }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              style={oneDark}
              language={match[1]}
              className="text-xs md:text-sm lg:text-base xl:text-lg"
              codeTagProps={{ style: { ...jetbrains.style } }}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className="before:hidden after:hidden bg-black/10 dark:bg-white/10 rounded-md p-1.5">
              {children}
            </code>
          )
        }
      }}
    >
      {markdown}
    </ReactMarkdown>
  )
}
