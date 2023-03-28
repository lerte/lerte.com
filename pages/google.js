function createMarkup(html) {
  return { __html: html }
}

export default function Search({ html }) {
  return (
    <>
      <main dangerouslySetInnerHTML={createMarkup(html)}></main>
      <style jsx>{`
        input {
          border-width: 2px;
        }
      `}</style>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://www.google.com')
  const html = await res.text()

  // Pass data to the page via props
  return { props: { html } }
}
