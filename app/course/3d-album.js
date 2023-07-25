import { useEffect } from 'react'

export default function Album() {
  const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/11.jpg',
    'images/12.jpg'
  ]
  const deg = 360 / images.length
  let rotateX = -15
  let rotateY = 0
  let playing = true
  useEffect(() => {
    const imagesEl = document.getElementsByTagName('img')
    for (let i = 0; i < images.length; i++) {
      imagesEl[i].style.transform =
        'rotateY(' + i * deg + 'deg) translateZ(640px)'
      imagesEl[i].style.transition = '1s ' + (images.length - i) * 0.1 + 's'
    }
    play()
  }, [])

  const play = () => {
    if (playing) {
      rotateY++
      wrap.style.transform =
        'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)'
    }
    requestAnimationFrame(play)
  }

  return (
    <div className="w-screen h-screen overflow-hidden bg-slate-900">
      <div
        id="wrap"
        className="w-60 h-80 my-48 mx-auto relative"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-12deg)' }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            onMouseOut={() => (playing = true)}
            onMouseOver={() => (playing = false)}
            className="w-60 h-80 rounded-lg absolute reflect-below"
          />
        ))}
        <p className="w-[1200px] h-[1200px] rounded-full absolute top-full left-1/2 ml-[-600px] mt-[-600px] rotate-90 radial-gradient"></p>
      </div>
    </div>
  )
}
