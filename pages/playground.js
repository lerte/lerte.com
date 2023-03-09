import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { WebContainer } from '@webcontainer/api'
import { useEffect, useState } from 'react'

export default function Playground() {
  const [output, setOutput] = useState('')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', async () => {
        setOutput('booting...')
        const wc = await WebContainer.boot()
        setOutput('booting complete')

        const process = await wc.spawn('node', ['-v'])
        process.output.pipeTo(
          new WritableStream({
            write: (chunk) => setOutput(`Current node version: ${chunk}`),
          })
        )
        if (await process.exit) {
          setOutput(`Process failed and exited with code ${process?.exit}`)
        }
      })
    }
  }, [])
  return (
    <>
      <PageSEO
        title={`Playground - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">{output}</div>
    </>
  )
}
