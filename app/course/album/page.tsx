'use client'
import { useEffect, useRef } from 'react'

export default function Album() {
  // 生成随机颜色
  const PADDING_X = 10
  const ITEM_WIDTH = 250
  const ITEM_HEIGHT = 300
  const el = useRef<HTMLElement>(null)
  const selectedIndex = useRef(-1)

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
    'https://picsum.photos/540/600?12',
  ]

  // Apply select effect on item
  const doSelect = (targetIndex: number) => {
    const children = el.current?.children
    if (selectedIndex.current !== -1) {
      const currentEl = children?.[selectedIndex.current]
      currentEl.style.transform = 'scale(1)'
      currentEl.style.zIndex = '0'
    }

    const targetEl = children[targetIndex]
    if (!targetEl) return
    targetEl.style.transform = 'scale(1.75)'
    targetEl.style.zIndex = '999'
    selectedIndex.current = targetIndex

    // Update container position
    const theWidth = ITEM_WIDTH + PADDING_X
    el.current.style.transform = `translateX(calc(50% - ${
      theWidth * targetIndex + theWidth * 0.5
    }px))`
  }

  useEffect(() => {
    doSelect(5)
  })

  // Render the items
  const renderedList = images.map((it, index) => (
    <div
      key={index}
      onClick={() => doSelect(index)}
      className="absolute sahdotransition-all duration-700 top-48 ease-out origin-center rounded-lg bg-no-repeat bg-contain bg-center my-2 cursor-pointer"
      style={{
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        boxShadow: '2px 10px 77px -6px rgba(0,0,0,0.85)',
        left: (ITEM_WIDTH + PADDING_X) * index,
        backgroundImage: `url(${it})`
      }}
    />
  ))
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div
        ref={el}
        className="relative transition-all duration-700 w-screen h-full my-4"
      >
        {renderedList}
      </div>
    </div>
  )
}
