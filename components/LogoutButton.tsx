'use client'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


import { FormEvent } from 'react'

export const LogoutButton = () => {

  const router = useRouter()
  const supabase = createClientComponentClient()
  const handleSignOut = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    await supabase.auth.signOut()
    router.refresh()
    router.push('/login')
  }

  return (

    <form>
      <button onClick={(e) => handleSignOut(e)}>Sign out</button>
    </form>
  )
}
