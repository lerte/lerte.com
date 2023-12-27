'use client'
import { Send } from 'lucide-react'
import { TextField, IconButton } from 'actify'

export default function ChatGPT() {
  return (
    <div className="flex flex-col size-full">
      <div className="grow"></div>
      <form>
        <TextField label="请输入你要提问的问题">
          <TextField.TrailingIcon>
            <IconButton>
              <Send />
            </IconButton>
          </TextField.TrailingIcon>
        </TextField>
      </form>
    </div>
  )
}
