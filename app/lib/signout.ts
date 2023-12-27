'use server'

import { signOut as logout } from '@/auth'

export default async function signOut() {
  await logout()
}
