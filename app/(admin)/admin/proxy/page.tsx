function createMarkup(html: string) {
  return { __html: html }
}

export default async function Proxy({
  searchParams
}: {
  searchParams: { [key: string]: string }
}) {
  let { url = 'www.bing.com' } = searchParams
  if (!url?.startsWith('http')) {
    url = 'https://' + url
  }
  const response = await fetch(url)
  const text = await response.text()
  return <div dangerouslySetInnerHTML={createMarkup(text)}></div>
}
