function createMarkup(html) {
  return { __html: html }
}

export default function Search({ html }) {
  return <main dangerouslySetInnerHTML={createMarkup(html)}></main>
}

// This gets called on every request
export async function getServerSideProps({ req }) {
  const { query } = req
  const params = new URLSearchParams(query)
  // Fetch data from external API
  const res = await fetch(`https://www.google.com/search?${query}`)
  const html = await res.text()

  // Pass data to the page via props
  return { props: { html } }
}
