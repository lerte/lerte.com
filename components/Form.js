'use client'
import useSWR from 'swr'
import { useRef, useState } from 'react'

const Form = () => {
  const messageInput = useRef()
  const [response, setResponse] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [models, setModels] = useState([])
  const [currentModel, setCurrentModel] = useState('gpt-3.5-turbo')

  const handleEnter = (e) => {
    if (e.key === 'Enter' && isLoading === false) {
      e.preventDefault()
      setIsLoading(true)
      handleSubmit(e)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const message = messageInput.current?.value || ''
    if (message !== undefined) {
      setResponse((prev) => [...prev, message])
    }

    if (!message) {
      return
    }

    const response = await fetch('/api/response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message,
        currentModel
      })
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const data = response.body
    if (!data) {
      return
    }

    const reader = data.getReader()
    const decoder = new TextDecoder()
    let done = false

    setResponse((prev) => [...prev, message])

    let currentResponse = []
    while (!done) {
      const { value, done: doneReading } = await reader.read()
      done = doneReading
      const chunkValue = decoder.decode(value)
      // currentResponse = [...currentResponse, message, chunkValue];
      currentResponse = [...currentResponse, chunkValue]
      setResponse((prev) => [...prev.slice(0, -1), currentResponse.join('')])
    }
    // breaks text indent on refresh due to streaming
    // localStorage.setItem('response', JSON.stringify(currentResponse));
    setIsLoading(false)
  }

  const handleReset = () => {
    localStorage.removeItem('response')
    setResponse([])
  }

  useSWR('fetchingResponse', async () => {
    const storedResponse = localStorage.getItem('response')
    if (storedResponse) {
      setResponse(JSON.parse(storedResponse))
    }
  })

  const fetcher = async () => {
    const models = await fetch('/api/models').then((res) => res.json())
    setModels(models.data)
    const modelIndex = models.data.findIndex(
      (model) => model.id === 'gpt-3.5-turbo'
    )
    setCurrentModel(models.data[modelIndex].id)
    return models
  }

  useSWR('fetchingModels', fetcher)

  const handleModelChange = (e) => {
    setCurrentModel(e.target.value)
  }

  return (
    <div className="flex justify-center">
      <select
        value={currentModel}
        onChange={handleModelChange}
        className="fixed top-14 left-5 w-72 rounded-md border-none bg-white p-4 text-gray-500 outline-none dark:hover:bg-gray-900 dark:hover:text-gray-400"
      >
        {models.map((model) => (
          <option key={model.id} value={model.id}>
            {model.id}
          </option>
        ))}
      </select>

      <button
        onClick={handleReset}
        type="reset"
        className="fixed top-14 right-5 rounded-md bg-white p-4 text-gray-500 disabled:hover:bg-transparent dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:disabled:hover:bg-transparent"
      >
        Clear History
      </button>
      <div className="mx-2 flex w-full flex-col items-start gap-3 pt-6 pb-28 last:mb-6 md:mx-auto md:max-w-3xl">
        {isLoading
          ? response.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-blue-500' : 'bg-gray-500'
                  } rounded-lg p-3`}
                >
                  <p className="text-white">{item}</p>
                </div>
              )
            })
          : response
          ? response.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-blue-500' : 'bg-gray-500'
                  } rounded-lg p-3`}
                >
                  <pre className="whitespace-pre-wrap text-white">{item}</pre>
                </div>
              )
            })
          : null}
      </div>
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 mb-4 w-full rounded-md bg-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.10)] md:max-w-3xl"
      >
        <textarea
          name="Message"
          placeholder="Type your query"
          ref={messageInput}
          onKeyDown={handleEnter}
          className="w-full translate-y-1 resize-none bg-transparent pt-4 pl-4 text-white outline-none"
        />
        <button
          disabled={isLoading}
          type="submit"
          className="absolute top-[1.4rem] right-5 rounded-md p-1 text-white disabled:hover:bg-transparent dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:disabled:hover:bg-transparent"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            className="h-4 w-4 rotate-90"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
          </svg>
        </button>
      </form>
    </div>
  )
}

export default Form
