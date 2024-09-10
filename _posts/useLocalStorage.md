---
date: '2024-09-10 17:20'
title: '在react中使用useSyncExternalStore做localStorage数据同步'
description: ''
---

> 使用useSyncExternalStore做状态持久化和标签页同步

#### `useLocalStorage.ts`

```js
'use client'
import { useSyncExternalStore } from 'react'

export function useLocalStorage(key: string, initialValue?: unknown) {
  const getSnapshot = () => localStorage.getItem(key) as string
  const subscribe = (listener: () => void) => {
    window.addEventListener('storage', listener)
    return () => void window.removeEventListener('storage', listener)
  }

  const store = useSyncExternalStore(subscribe, getSnapshot)

  const setState = (v: unknown) => {
    const prevState = JSON.parse(store)
    const nextState = typeof v == 'function' ? v(prevState) : v

    window.localStorage.setItem(key, JSON.stringify(nextState))
    if (nextState) {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key,
          newValue: JSON.stringify(nextState)
        })
      )
    }
  }

  return [store ? JSON.parse(store) : initialValue, setState] as const
}
```
