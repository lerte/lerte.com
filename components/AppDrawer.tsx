'use client'
import Aside from '@/components/Aside'
import { Drawer, IconButton, Menu } from 'actify'

export default function AppDrawer() {
  return (
    <Drawer placement="left" className="overflow-hidden">
      <Drawer.Activator className="lg:hidden">
        <IconButton color="primary">
          <Menu />
        </IconButton>
      </Drawer.Activator>
      <Drawer.Content className="w-[240px]">
        <Aside className="w-full" />
      </Drawer.Content>
    </Drawer>
  )
}
