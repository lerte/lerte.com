export default async (req, res) => {
  const response = await fetch('https://api.openai.com/v1/models', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ''}`
    },
    method: 'GET'
  })
  const models = await response.json()
  res.json(models)
}
