import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { WebContainer } from '@webcontainer/api'

export function getStaticProps() {
  let webcontainerInstance = null
  if (typeof window !== 'undefined') {
    window.addEventListener('load', async () => {
      webcontainerInstance = await WebContainer.boot()
    })
  }
  return {
    props: {
      webcontainerInstance,
    },
  }
}

export default function Playground(props) {
  return (
    <>
      <PageSEO
        title={`Playground - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {props.webcontainerInstance}
      </div>
    </>
  )
}
