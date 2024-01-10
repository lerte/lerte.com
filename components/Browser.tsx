'use client'
import { TextField } from 'actify'
import { useState, useEffect, ChangeEvent } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function Browser() {
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const [term, setTerm] = useState('')

  useEffect(() => {
    setTerm(searchParams.get('url') || '')
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.type == 'change') {
      setTerm(e.target.value)
    }
  }

  const handleKeyDown = (e: any) => {
    const params = new URLSearchParams(searchParams)
    if (e.key == 'Enter') {
      params.set('url', term!)
    }
    replace(`/admin/proxy?${params.toString()}`)
  }
  return (
    <TextField
      label="请输入网址"
      value={term}
      className="w-full"
      prefixText="https://"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}
