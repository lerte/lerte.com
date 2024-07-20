'use client'

import { Button, Menu, MenuItem } from 'actify'

import React from 'react'
import { User } from 'lucide-react'
import signOut from '@/app/lib/signout'

export default function UserPopover() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="relative w-fit">
      <Button
        id="usage-anchor"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <User />
      </Button>
      <Menu open={open} setOpen={setOpen}>
        <MenuItem>
          <form action={signOut}>Sign Out</form>
        </MenuItem>
      </Menu>
    </div>
  )
}
