import files from './files'
import debounce from 'lodash/debounce'
import { WebContainer } from '@webcontainer/api'

async function writeIndexJS(webcontainerInstance, content) {
  debounce(() => {
    webcontainerInstance.fs.writeFile('/index.js', content)
  }, 800)
}

async function installDependencies(webcontainerInstance, terminal) {
  // Install dependencies
  const installProcess = await webcontainerInstance.spawn('npm', ['install'])
  installProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        terminal.write(data)
      }
    })
  )
  // Wait for install command to exit
  return installProcess.exit
}

async function startDevServer(webcontainerInstance, terminal) {
  // Run `npm run start` to start the Express app
  const serverProcess = await webcontainerInstance.spawn('npm', [
    'run',
    'start'
  ])
  serverProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        terminal.write(data)
      }
    })
  )

  // Wait for `server-ready` event
  webcontainerInstance.on('server-ready', (port, url) => {
    const iframeEl = document.querySelector('iframe')
    if (iframeEl == null) {
      console.error('iframeEl is null')
      return
    }
    console.log('server-ready', port, url)
    iframeEl.src = url
  })
}

async function runWebContainer(terminal) {
  console.log('booting...')
  const textareaEl = document.querySelector('textarea')
  if (textareaEl == null) {
    console.error('textareaEl is null')
    return
  }
  textareaEl.value = files['index.js'].file.contents

  // Call only once
  try {
    const webcontainerInstance = await WebContainer.boot()
    await webcontainerInstance.mount(files)
    console.log('booting complete')
    const exitCode = await installDependencies(webcontainerInstance, terminal)
    if (exitCode !== 0) {
      console.error('Failed to install dependencies')
      return
    }
    startDevServer(webcontainerInstance, terminal)

    textareaEl.addEventListener('input', (e) =>
      writeIndexJS(webcontainerInstance, e.currentTarget.value)
    )
  } catch (error) {
    console.log(error)
  }
}

export default runWebContainer
