import { TextField } from 'actify'

function createMarkup(html: string) {
  return { __html: html }
}

export default async function Proxy({
  searchParams
}: {
  searchParams: { [key: string]: string }
}) {
  let { url } = searchParams
  if (!url?.startsWith('http')) {
    url = 'https://' + url
  }
  const response = await fetch(url)
  const text = await response.text()
  return <div dangerouslySetInnerHTML={createMarkup(text)}></div>
}
