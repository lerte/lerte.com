'use client'

import { IconButton, NavigationDrawer } from 'actify'

import Aside from '@/components/Aside'
import { Menu } from 'lucide-react'

export default function AppDrawer() {
  return (
    <NavigationDrawer placement="left" className="overflow-hidden">
      <NavigationDrawer.Activator className="lg:hidden">
        <IconButton color="primary">
          <Menu />
        </IconButton>
      </NavigationDrawer.Activator>
      <NavigationDrawer.Content className="w-[240px]">
        <Aside className="w-full" />
      </NavigationDrawer.Content>
    </NavigationDrawer>
  )
}
