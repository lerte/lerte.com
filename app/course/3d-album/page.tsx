'use client'
import { useEffect } from 'react'

export default function Album() {
  const images = [
    'https://picsum.photos/540/600?1',
    'https://picsum.photos/540/600?2',
    'https://picsum.photos/540/600?3',
    'https://picsum.photos/540/600?4',
    'https://picsum.photos/540/600?5',
    'https://picsum.photos/540/600?6',
    'https://picsum.photos/540/600?7',
    'https://picsum.photos/540/600?8',
    'https://picsum.photos/540/600?9',
    'https://picsum.photos/540/600?10',
    'https://picsum.photos/540/600?11',
    'https://picsum.photos/540/600?12'
  ]
  const deg = 360 / images.length
  const rotateX = -15
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
    const wrap: HTMLElement | null = document.querySelector('#wrap')
    if (playing) {
      rotateY++
      wrap!.style.transform =
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
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt=""
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
