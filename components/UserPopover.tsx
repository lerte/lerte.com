'use client'
import { User } from 'lucide-react'
import signOut from '@/app/lib/signout'
import { Button, IconButton, Popover } from 'actify'

export default function UserPopover() {
  return (
    <Popover>
      <Popover.Activator>
        <IconButton color="primary">
          <User />
        </IconButton>
      </Popover.Activator>
      <Popover.Content>
        <form action={signOut}>
          <Button>Sign Out</Button>
        </form>
      </Popover.Content>
    </Popover>
  )
}
