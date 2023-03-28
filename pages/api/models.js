import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export default async function (request) {
  const response = await openai.listModels()
  return new Response(JSON.stringify(response.data))
}
