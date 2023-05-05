function createMarkup(html) {
  return { __html: html }
}

export default function Search({ html }) {
  return (
    <>
      <main dangerouslySetInnerHTML={createMarkup(html)}></main>
      <style>
        {`
          input{
            border-width: 2px;
          }
        `}
      </style>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://www.google.com')
  const text = await res.text()
  const html = text
    .replace(
      'src="/images',
      'src="/api/proxy?url=https://www.google.com/images'
    )
    .replace('src="/logos', 'src="/api/proxy?url=https://www.google.com/logos')

  // Pass data to the page via props
  return { props: { html } }
}
