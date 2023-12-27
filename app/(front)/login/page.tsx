'use client'
import { useState } from 'react'
import { authenticate } from '@/app/lib/actions'
import { useFormState, useFormStatus } from 'react-dom'
import { Mail, Lock, Eye, EyeOff, AlertTriangle } from 'lucide-react'
import { TextField, Button, IconButton, CircularProgress } from 'actify'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [code, action] = useFormState(authenticate, undefined)

  return (
    <div className="max-w-7xl mx-auto grid h-screen place-content-center">
      <form action={action} className="grid md:grid-cols-2">
        <div className="hidden md:block">
          <img
            alt="unsplash"
            className="rounded-l-lg h-full object-cover"
            src="https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="rounded-lg md:rounded-l-none md:rounded-r-lg p-10 bg-surface h-full flex flex-col gap-4 justify-center">
          {/* <img alt="logo" className="mx-auto w-40 h-40" src="" /> */}
          <TextField label="Email" name="email" className="w-full">
            <TextField.LeadingIcon>
              <Mail />
            </TextField.LeadingIcon>
          </TextField>

          <TextField
            label="Password"
            name="password"
            className="w-full"
            autoComplete="off"
            defaultValue="actify"
            type={showPassword ? 'text' : 'password'}
          >
            <TextField.LeadingIcon>
              <Lock />
            </TextField.LeadingIcon>

            <TextField.TrailingIcon>
              <IconButton onClick={() => setShowPassword((_) => !_)}>
                {showPassword ? <EyeOff /> : <Eye />}
              </IconButton>
            </TextField.TrailingIcon>
          </TextField>
          <LoginButton />
          <div className="flex h-8 items-end space-x-1">
            {code === 'CredentialSignin' && (
              <>
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <p aria-live="polite" className="text-sm text-red-500">
                  Invalid credentials
                </p>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <Button variant="filled" disabled={pending}>
      {pending ? (
        <CircularProgress indeterminate color="white" size="xs" />
      ) : (
        'Log in'
      )}
    </Button>
  )
}
